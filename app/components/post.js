"use strict";

const post = {
    template: `
    <section class="thought-container">
    <h1 class="thought-title">{{ $ctrl.thoughts.title }}</h1>
    <p class="thought-thought">{{ $ctrl.thoughts.thought }}</p>
    <button class="thought-close">X</button>
    </section>
    `,
    bindings: {
        thoughts: "<"
    }

};

angular
    .module("App")
    .component("post", post);