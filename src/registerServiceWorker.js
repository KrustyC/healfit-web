import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const registerMyServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      runtime.register().then(
        registration => {
          // Registration was successful
          console.log(
            'ServiceWorker registration successful without scope: ',
            registration.scope
          );
        },
        err => {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        }
      );
    });
  }
};

export default registerMyServiceWorker;
