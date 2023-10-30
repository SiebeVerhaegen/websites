// Constants
const CAROUSEL_NAVIGATION_TIMEOUT = 800;

// Classes
class TopTen {
    currentIndex = 0;
    list = [];

    addListItemId(id) {
        this.list.push(id);
    }

    goToPrevious() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.list.length - 1;
        }
    }

    goToNext() {
        this.currentIndex++;
        if (this.currentIndex >= this.list.length) {
            this.currentIndex = 0;
        }
    }

    getCurrentListItemId() {
        return this.list[this.currentIndex];
    }
}

// Initialisation
const topTen = new TopTen();
topTen.addListItemId("li-1");
topTen.addListItemId("li-2");
topTen.addListItemId("li-3");
topTen.addListItemId("li-4");
topTen.addListItemId("li-5");
topTen.addListItemId("li-6");
topTen.addListItemId("li-7");
topTen.addListItemId("li-8");
topTen.addListItemId("li-9");
topTen.addListItemId("li-10");


// Functions
function goPrevious(buttonId) {
    var button = document.getElementById(buttonId);
    button.disabled = true;
    setTimeout(() => { markPreviousListItem(button); }, CAROUSEL_NAVIGATION_TIMEOUT)
}

function goNext(buttonId) {
    var button = document.getElementById(buttonId);
    button.disabled = true;
    setTimeout(() => { markNextListItem(button); }, CAROUSEL_NAVIGATION_TIMEOUT)
}

function markPreviousListItem(button) {
    var element;

    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.remove("li-active");
    topTen.goToPrevious();
    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.add("li-active");
    button.disabled = false;
}

function markNextListItem(button) {
    var element;
    
    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.remove("li-active");
    topTen.goToNext();
    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.add("li-active");
    button.disabled = false;
}

function markUsingIndicator(slideIndex) {
    var element;

    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.remove("li-active");
    topTen.currentIndex = slideIndex;
    element = document.getElementById(topTen.getCurrentListItemId());
    element.classList.add("li-active");
}