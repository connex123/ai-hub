document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("signup-modal");
    modal.style.display = "flex";

    window.grantAccess = function() {
        modal.style.display = "none";
    };

    const toggleTheme = document.getElementById("toggle-theme");
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
