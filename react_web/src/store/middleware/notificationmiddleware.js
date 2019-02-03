import axios from 'axios';

export default class AdMiddleware{
    static requestNotificationPermission(){
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').then(function(reg) {
              console.log('Service Worker Registered!', reg);
          
              reg.pushManager.getSubscription().then(function(sub) {
                if (sub === null) {
                  // Update UI to ask user to register for Push
                  console.log('Not subscribed to push service!');
                } else {
                  // We have a subscription, update the database
                  console.log('Subscription object: ', sub);
                }
              });
            })
             .catch(function(err) {
              console.log('Service Worker registration failed: ', err);
            });
          }
    }


     subscribeUser() {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(function(reg) {
      
            reg.pushManager.subscribe({
              userVisibleOnly: true
            }).then(function(sub) {
              console.log('Endpoint URL: ', sub.endpoint);
            }).catch(function(e) {
              if (Notification.permission === 'denied') {
                console.warn('Permission for notifications was denied');
              } else {
                console.error('Unable to subscribe to push', e);
              }
            });
          })
        }
      }



      urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
          .replace(/\-/g, '+') //eslint-disable-line
          .replace(/_/g, '/');
    
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
    
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }
}