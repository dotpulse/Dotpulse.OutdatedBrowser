/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.3 - 2016
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
(function() {
    var outdated = document.getElementById("outdated");
    var data = outdated.getAttribute("data-lowerthan");
    var cssProp = data ? data : "transform";
    var hasCookie = false;
    if (navigator.cookieEnabled) {
        hasCookie = (function() {
            var v = document.cookie.match(
                "(^|;) ?outdatedbrowser=([^;]*)(;|$)"
            );
            return v ? v[2] == "true" : null;
        })();
    }

    if (!hasCookie) {
        //Define opacity and fadeIn/fadeOut functions
        var done = true;

        var opacity = function(opacityValue) {
            outdated.style.opacity = opacityValue / 100;
            outdated.style.filter = "alpha(opacity=" + opacityValue + ")";
        };

        var fadeIn = function(opacityValue) {
            opacity(opacityValue);
            if (opacityValue == 1) {
                outdated.style.display = "block";
            }
            if (opacityValue == 100) {
                done = true;
            }
        };

        var supports = (function() {
            var div = document.createElement("div");
            var vendors = "Khtml Ms O Moz Webkit".split(" ");
            var len = vendors.length;

            return function(prop) {
                if (prop in div.style) {
                    return true;
                }

                prop = prop.replace(/^[a-z]/, function(val) {
                    return val.toUpperCase();
                });

                while (len--) {
                    if (vendors[len] + prop in div.style) {
                        return true;
                    }
                }
                return false;
            };
        })();

        //if browser does not supports css3 property (transform=default), if does > exit all this
        if (!supports("" + cssProp + "")) {
            // jscs:ignore
            if (done && outdated.style.opacity !== "1") {
                done = false;
                for (var i = 1; i <= 100; i++) {
                    // jshint -W083
                    setTimeout(
                        (function(x) {
                            return function() {
                                fadeIn(x);
                            };
                        })(i),
                        i * 8
                    );
                    // jshint +W083
                }
            }
        } else {
            return;
        }

        document.getElementById(
            "btnCloseUpdateBrowser"
        ).onmousedown = function() {
            outdated.style.display = "none";

            if (navigator.cookieEnabled) {
                document.cookie = "outdatedbrowser=true;path=/;";
            }

            return false;
        };
    }
})();
