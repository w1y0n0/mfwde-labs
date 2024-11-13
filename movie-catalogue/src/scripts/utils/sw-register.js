const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker is not supported by browser');
    return;
  }

  try {
    navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker is registered');
  } catch (error) {
    console.log('Failed to register service worker:', error);
  }
};

export default swRegister;