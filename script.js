document.getElementById("showMapBtn").addEventListener("click", function() {
    var map = document.getElementById("map");
    if (map.style.display === "none") {
        map.style.display = "block";
        map.innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.549429545293!2d112.6098685!3d-7.9666205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629ba0e9351b3%3A0xe3b057604acdb15!2sSMKN%205%20Malang!5e0!3m2!1sen!2sid!4v1602543522245!5m2!1sen!2sid' width='100%' height='300' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>";
    } else {
        map.style.display = "none";
    }
});
