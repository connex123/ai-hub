function grantAccess() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("signup-overlay").style.display = "none";
    } else {
        alert("Please enter your name and email to continue.");
    }
}
