(function() {
    // List of mobile keywords to test against the user agent string
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    
    // Check if the user agent matches a mobile device
    if (mobileRegex.test(navigator.userAgent)) {
      // Redirect the browser to your mobile page
      window.location.href = "mobile-check.html";
    }
  })();