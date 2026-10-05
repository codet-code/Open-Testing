function openMinecraftWindow() {
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  const gameWindow = window.open("minecraft.html", "PortalWindow", windowFeatures);
  
  if (gameWindow) {
    // Wait for the window to render, then apply deep focus hooks
    setTimeout(() => {
      gameWindow.focus();
      
      // Force focus whenever the user clicks inside the new window
      gameWindow.document.body.addEventListener('click', () => {
        gameWindow.focus();
        
        // Find Eaglecraft's iframe or canvas element if it exists and focus it directly
        const frame = gameWindow.document.querySelector('iframe') || gameWindow.document.querySelector('canvas');
        if (frame) frame.focus();
      }, false);
    }, 500);
  }
}

function openPolyTrackWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("poly-track.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openSnacksWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("snacks.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openSpotifyWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("Spotify.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openYoutubeWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("youtube.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openVSCodeWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("vscode.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openCookieClickerWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("cookie.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openFlappyBirdWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("flappybird.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}

function openTagBirdWindow() {
  // Define the window properties and sizes
  const windowFeatures = "width=1000,height=700,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no";
  
  // Open the window and save it to a variable
  const gameWindow = window.open("tag.html", "PortalWindow", windowFeatures);
  
  // Force the browser to focus on the new window for keyboard inputs
  if (gameWindow) {
    gameWindow.focus();
  }
}