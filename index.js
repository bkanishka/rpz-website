
        window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            var navbar = document.getElementById("navbar");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
        document.addEventListener("scroll", function () {
            var navbar = document.getElementById("navbar");
        
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Change to the solid color you want
            } else {
                navbar.style.backgroundColor = "transparent";
            }
        });