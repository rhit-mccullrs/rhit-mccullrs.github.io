window.addEventListener("load", (e) => {
    navBar =   "<section>\
                    <center>\
                        <nav>\
                            <ul id=\"nav-bar\" class=\"fixed\">\
                                <li><a class=\"button\" href=\"index.html\" aria-label=\"Main page\">Main</a></li>\
                                <li><a class=\"button\" href=\"resume.html\" aria-label=\"Resume page\">Resume</a></li>\
                                <li><a class=\"button\" href=\"portfolio.html\" aria-label=\"Portfolio page\">Portfolio</a></li>\
                            </ul>\
                        </nav>\
                    </center>\
                </section>";
    
    footer =   "<footer>\
                    <center>\
                        <nav>\
                            <ul id=\"footer\" class=\"fixed\">\
                                <li><a class=\"button\" href=\"https://app.joinhandshake.com/profiles/bu5wmu\" target=\"_blank\" aria-label=\"Riley's Handshake profile\">Handshake</a></li>\
                                <li><a class=\"button\" href=\"https://linkedin.com/in/riley-mcculloch-170114387\" target=\"_blank\" aria-label=\"Riley's LinkedIn profile\">LinkedIn</a></li>\
                            </ul>\
                        </nav>\
                    </center>\
 	            </footer>";

    main = document.getElementsByTagName("main")[0];
    body = document.getElementsByTagName("body")[0];

    main.innerHTML = navBar + main.innerHTML;
    body.innerHTML = body.innerHTML + footer;
});

let button = document.getElementById("toggle-tree");
button.addEventListener("click", (e) => {
    if (button.classList.contains("hidden")) {
        button.classList.remove("hidden");
    }
    else {
        button.classList.add("hidden");
    }
});
