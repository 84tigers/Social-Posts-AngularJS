"use strict";
const socialPosts = {
    templateUrl: "app/social-posts/social-posts.html",
    controller: ["SocialPostsService", function(SocialPostsService) {
        const vm = this;
        vm.posts = SocialPostsService.getPosts();
       
    }]
}



angular
    .module("App")
    .component("socialPosts", socialPosts);