function launchApp() {
  // Target cloud link
  const gameUrl = "https://easyfun.gg";
  
  // Set dimensions to mimic a standard game window
  const w = 1280;
  const h = 720;
  
  // Centers the window on the Chromebook screen
  const left = (screen.width / 2) - (w / 2);
  const top = (screen.height / 2) - (h / 2);
  
  // "popup=yes" strips the browser toolbars, tabs, and URL string
  const windowFeatures = `popup=yes,width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`;
  
  // Opens the clean standalone game window
  window.open(gameUrl, "RobloxAppWindow", windowFeatures);
}