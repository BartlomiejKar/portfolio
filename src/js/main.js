"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

// const list = document.querySelector(".project__div")
// fetch("https://api.github.com/users/BartlomiejKar/repos?sort=created")
//   .then(response => response.json())
//   .then(data => {
//     const repos = data;
//     for (const item of repos) {
//       list.innerHTML += (`${item.name} ${item.html_url}`)
//       console.log(item.name)
//     }

//   })

