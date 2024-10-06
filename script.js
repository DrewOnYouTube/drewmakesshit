// Toggle Sidebar
var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var content = document.querySelector(".content");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("large-content");
};

// Change logo text to DrewKoe
document.querySelector(".logo").textContent = "DrewKoe";

// Search functionality
document.querySelector("#search_input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        alert("Looking for a video? Let's make one together.");
    }
});

// Responsive sidebar
if (window.innerWidth < 900) {
    sidebar.classList.add("small-sidebar");
    content.classList.add("large-content");
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 900) {
        sidebar.classList.add("small-sidebar");
        content.classList.add("large-content");
    } else {
        sidebar.classList.remove("small-sidebar");
        content.classList.remove("large-content");
    }
});
