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

const list = document.querySelector(".projects__div")
fetch("https://api.github.com/users/BartlomiejKar/repos?sort=created")
  .then(response => response.json())
  .then(data => {
    const repos = data;
    for (const item of repos) {
      list.innerHTML += `
      <section class="section__projects">
      <div class="project__div">
        <img src="../assets/img/github.png" alt="github" class="github">
        <span class="project__div--title">${item.name}</span>
        <p class="project__description">${item.description ? item.description : "brak opisu"}</p>
      </div>
      <footer class="project__footer">
      <img src="../assets/img/Demo Icon.svg" alt ="demo" class="demo">
    <a class="project__footer--link" href="${item.homepage}" target="_blank" rel="nofollow noreferrer">Demo</a>
    <img src = "../assets/img/Code Icon.svg" alt = "code" class="code">
    <a class="project__footer--link" href="${item.html_url}" target="_blank" rel="nofollow noreferrer">Github</a>
      </footer>
</section > `
      console.log(item.name)
      console.log(item)
    }

  })

