"use strict";

const post = {
    template: `
    <section class="thought-container">
    <h1 class="thought-title">{{ $ctrl.post.title }}</h1>
    <p class="thought-thought">{{ $ctrl.post.thought }}</p>
    <button class="thought-close">X</button>
    </section>
    `,
    bindings: {
        post: "<"
    }

};

angular
    .module("App")
    .component("post", post);