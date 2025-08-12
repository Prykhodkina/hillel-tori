'use strict';

class HistoryTracker {
    constructor() {
        this.visited = [];
        window.addEventListener("popstate", (event) => {
            console.log("popstate:", event.state);
            console.log("Current story:", this.visited);
        });
    }

    push(url) {
        history.pushState({url}, "", url);
        this.visited.push(url);
        console.log(url);
    }
    back() {
        history.back();
    }
}


const tracker = new HistoryTracker();

document.getElementById("page1").addEventListener("click", () => {
    tracker.push("page1");
});
document.getElementById("page2").addEventListener("click", () => {
    tracker.push("page2");
});
document.getElementById("back").addEventListener("click", () => {
    tracker.back();
});