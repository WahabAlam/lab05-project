// __tests__/search.test.js
const searchLinks = require('../search');

describe('searchLinks function tests', () => {
  const sampleLinks = [
    'http://example.com',
    'https://URL.com/resource',
    'ftp://myftpserver.com',
    'mailto:someone@example.com'
  ];

  test('search term "uRl" should match https://URL.com/resource', () => {
    const result = searchLinks(sampleLinks, 'uRl');
    // We expect it to return only the link(s) that match "uRl" (case-insensitive)
    expect(result).toContain('https://URL.com/resource');
    // You could also check that the length of result is 1, if you want
  });

  test('empty search term returns an empty array', () => {
    const result = searchLinks(sampleLinks, '');
    expect(result).toEqual([]);
  });

  test('search term "http" returns multiple items', () => {
    const result = searchLinks(sampleLinks, 'http');
    // "http://example.com" and "https://URL.com/resource" both contain "http"
    expect(result).toEqual([
      'http://example.com',
      'https://URL.com/resource'
    ]);
  });

  // Optional: Demonstrate a failing test to show you can produce a screenshot
  // that shows failure. You might remove or fix this in your final submission.
 // test('intentional fail example', () => {
  //  const result = searchLinks(sampleLinks, 'abc');
    // Suppose we incorrectly expect it to return something it shouldn’t
    // This will fail if the array is empty.
   // expect(result).toContain('ftp://myftpserver.com'); // Should fail
 // });
});
