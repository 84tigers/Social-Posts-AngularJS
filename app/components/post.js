"use strict";

const post = {
    template: `
    <section class="thought-container">
    <h1 class="thought-title">{{ $cntrl.posts.title }}</h1>
    <p class="thought-thought">{{ $cntrl.posts.thought }}</p>
    <button class="thought-close">X</button>
    </section>
    `,
    bindings: {
        title: "<",
        thought: "<"
    }

};

angular
    .module("App")
    .component("post", post);