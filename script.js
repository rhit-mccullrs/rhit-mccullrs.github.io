//window.addEventListener("load", (e) => {
    navBar =   "<section>\
                    <center>\
                        <nav id=\"nav-bar\">\
                            <a class=\"button-links\" href=\"index.html\" aria-label=\"Main page\">Main</a>\
                            <a class=\"button-links\" href=\"resume.html\" aria-label=\"Resume page\">Resume</a>\
                            <a class=\"button-links\" href=\"portfolio.html\" aria-label=\"Portfolio page\">Portfolio</a>\
                        </nav>\
                    </center>\
                </section>";
    
    footer =   "<footer>\
                    <center>\
                        <nav id=\"footer\">\
                            <a class=\"button-links\" href=\"https://app.joinhandshake.com/profiles/bu5wmu\" target=\"_blank\" aria-label=\"Riley's Handshake profile\">Handshake</a>\
                            <a class=\"button-links\" href=\"https://linkedin.com/in/riley-mcculloch-170114387\" target=\"_blank\" aria-label=\"Riley's LinkedIn profile\">LinkedIn</a>\
                        </nav>\
                    </center>\
 	            </footer>";

    main = document.getElementsByTagName("main")[0];
    body = document.getElementsByTagName("body")[0];

    main.innerHTML = navBar + main.innerHTML;
    body.innerHTML = body.innerHTML + footer;
//});