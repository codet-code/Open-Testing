 if (window.location.pathname.endsWith('.html')) {
    // Create a clean URL by removing the .html extension
    const cleanUrl = window.location.pathname.replace(/\.html$/, '') + window.location.search + window.location.hash;
    
    // Update the browser's address bar without reloading the page
    window.history.replaceState(null, null, cleanUrl);
  }