window.addEventListener("load", (e) => {
    navBar =   "<section>\
                    <center>\
                        <nav id=\"nav-bar\">\
                            <button href=\"index.html\" aria-label=\"Main page\">About Me</button>\
                            <button href=\"resume.html\" aria-label=\"Resume page\">Resume</button>\
                            <button href=\"portfolio.html\" aria-label=\"Portfolio page\">Portfolio</button>\
                        </nav>\
                    </center>\
                </section>";
    
    footer =   "<footer>\
                    <center>\
                        <nav id=\"footer\">\
                            <button href=\"https://app.joinhandshake.com/profiles/bu5wmu\">Handshake</button>\
                            <button href=\"www.linkedin.com/in/riley-mcculloch-170114387\">LinkedIn</button>\
                        </nav>\
                    </center>\
 	            </footer>";

    main = document.getElementsByTagName("main")[0];
    body = document.getElementsByTagName("body")[0];

    main.innerHTML = navBar + main.innerHTML;
    body.innerHTML = body.innerHTML + footer;
});