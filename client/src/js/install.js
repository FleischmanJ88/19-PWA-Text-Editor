const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredInstallPrompt = event;
    butInstall.style.visibility = 'visible';
  });
  
  // TODO (Done): Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredInstallPrompt;
    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
    window.deferredInstallPrompt = null;
    butInstall.style.visibility = 'hidden';
  });
  
  // TODO (Done): Add an handler for the `appinstalled` event
  window.addEventListener('appinstalled', (event) => {
    window.deferredInstallPrompt = null;
  });
  