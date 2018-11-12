"use strict";

const postForm = {
    template: `
    <form ng-submit="$ctrl.onSubmit({newPost: $ctrl.posted})" class="post-form-ctnr">
        <label for="input">Title</label>
        <input type="text" class="post-title" ng-model="$ctrl.posted.title">
        <label for="textarea" >Thought</label>
        <textarea name="textarea" id="" ng-model="$ctrl.posted.thought"></textarea>
        <button ng-click="noBtn = false; seeForm = false" class="add-btn">Add Post</button>
    </form>
    `,
    bindings: {
        onSubmit: "&"
    }

};

angular
    .module("App")
    .component("postForm", postForm);