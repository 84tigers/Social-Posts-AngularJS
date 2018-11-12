"use strict";

const postForm = {
    template: `
    <form action="" ng-submit="$ctrl.onSubmit({newPost: $ctrl.posted})" class="post-form-ctnr">
        <p>{{ $ctrl.posted }}</p>
        <label for="input">Title</label>
        <input type="text" class="post-title" ng-model="$ctrl.posted.title">
        <label for="textarea" >Thought</label>
        <textarea name="textarea" id="" cols="30" rows="10" ng-model="$ctrl.posted.thought"></textarea>
        <button class="add-btn">Add Post</button>
    </form>
    `,
    bindings: {
        onSubmit: "&"
    }

};

angular
    .module("App")
    .component("postForm", postForm);