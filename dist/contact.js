"use strict";

(function (content) {

        function ContactContent() {

                //  console.log("Contact Content Accessed ..."); 
                // configure content
                console.log("%c Contact Content Accessed ...", "font-weight:bold; font-size: 20px;");

                /*
                console.log(navigator);
                console.log(history);
                console.log(document);
                console.log(screen);
                console.log(location);
                */

                //changed the name of the page
                document.getElementsByClassName("card-title")[0].textContent = "contact You";

                //Create a new HTML element
                var cancelButton = document.createElement("button");

                //configure the HTML Element
                //cancelButton.classList.add("btn"); //OR
                cancelButton.setAttribute("class", "btn btn-warning btn-lg");
                // cancelButton.classList.remove(btn-lg);
                cancelButton.textContent = "Cancel";
                // cancelButton.setAttribute("type", "reset"); //function of cancel removed as used reset.
                cancelButton.addEventListener("click", function (event) {
                        event.preventDefault();

                        // window.open("index.html"); //open a brand new window
                        window.open("index.html", "_parent"); // URL loaded into parent frame
                });
                //add the HTML Element to the page somewhere
                //This case I attacing a button to the first form1 element.
                document.forms[0].appendChild(cancelButton);

                //use the histry object to wipe out the URL 
                document.title = "Contact";
                history.pushState("", "document.title", "/contact"); //Url changed to  Contact

                //use the location object to output my pathname
                console.log(location.pathname);

                //show your hostname - domain name
                console.log(location.host);
                console.log(location.hostname);
        }

        content.ContactContent = ContactContent;

        // let tom = 5;
        // content.tom = tom;
        //content.tom = { tom: 6, sayTom: function(){console.log(tom)}}; //Anster = 5;
        // content.tom = { tom: 6, sayTom: function(){console.log(this.tom)}}; // Answer = 6;
})(content || (content = {}));