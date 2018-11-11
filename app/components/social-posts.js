"use strict";
const socialPosts = {
    templateUrl: "app/components/social-posts.html",
    controller: [function() {
        const vm = this;
        vm.posted = [{
            title: "Phife Dawg",
            thought: "I never half step cuz I'm not a half stepper. Drink a lot of soda, so they call me Dr. Pepper."
        }, {
            title: "Q-tip",
            thought: "I ordered enchiladas and I ate 'em, Ali had the fruit punch."
        }, {
            title: "Masta Ace",
            thought: "Braniac dumb-dumbs, bust the scientifical. Approach to the course and the force is centrifugal."
        }, {
            title: "Busta Rhymes",
            thought: "Woo-Ha!"
        }, {
            title: "Inspectah Deck",
            thought: "I bomb atomically. Socrates' philosophies and hypotheses can't define how I be droppin' these mockeries. Lyrically perform armed robbery."
        }];

        self.addPost = (newPost) => {
            console.log(newPost);
            self.posted.push(angular.copy(newPost));
        };
    
    }]
}



angular
    .module("App")
    .component("socialPosts", socialPosts);