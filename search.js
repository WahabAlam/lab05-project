// search.js
/**
 * searchLinks takes an array of URLs or strings and a search term.
 * It returns items that match (case-insensitive) the search term.
 * If searchTerm is empty, it returns an empty array.
 */

function searchLinks(linksArray, searchTerm) {
    // If there's no search term, return an empty array
    if (!searchTerm) return [];
  
    const lowerSearchTerm = searchTerm.toLowerCase();
  
    // Filter items that include the searchTerm (case-insensitive)
    return linksArray.filter(item =>
      item.toLowerCase().includes(lowerSearchTerm)
    );
  }
  
  module.exports = searchLinks;
  