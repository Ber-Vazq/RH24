document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0; // Variable to store the last scroll position

    window.addEventListener("scroll", function () {
        var timelineItems = document.querySelectorAll(".timeline-item");
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            timelineItems.forEach(function (item) {
                if (isElementInViewport(item) && !item.classList.contains("slide-in")) {
                    var itemHeight = item.offsetHeight;
                    var itemTop = item.getBoundingClientRect().top;
                    if (itemTop + itemHeight <= window.innerHeight) { // Modified condition to check if the item is completely out of view
                        item.classList.add("slide-in");
                    }
                }
                if (!isElementInViewport(item) && item.classList.contains("slide-out")) {
                    item.classList.remove("slide-out");
                }
            });
        } else {
            // Scrolling up
            timelineItems.forEach(function (item) {
                if (!isElementInViewport(item) && !item.classList.contains("slide-out")) {
                    item.classList.add("slide-out");
                }
                if (isElementInViewport(item) && item.classList.contains("slide-in")) {
                    item.classList.remove("slide-in");
                }
            });
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Store the current scroll position
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
