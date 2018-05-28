(function() {
    var outdated = document.getElementById("outdated");
    if (outdated) {
        var data = outdated.getAttribute("data-lowerthan");
        var cssProp = data ? data : "transform";
        var validBrowser = false;
        var hasCookie = false;
        if (navigator.cookieEnabled) {
            hasCookie = (function() {
                var v = document.cookie.match(
                    "(^|;) ?outdatedbrowser=([^;]*)(;|$)"
                );
                return v ? v[2] == "true" : null;
            })();
        }

        function removeElement() {
            outdated.parentElement.removeChild(outdated);
        }

        function hide() {
            removeElement();
            if (navigator.cookieEnabled) {
                document.cookie = "outdatedbrowser=true;path=/;";
            }
            return false;
        }

        function checkCssProp() {
            if (hasCookie) {
                removeElement();
            } else {
                var supports = (function() {
                    var style = document.createElement("div").style;
                    var vendors = ["Moz", "O", "ms", "Webkit", "Khtml"];
                    var length = vendors.length;

                    return function(prop) {
                        if (prop in style) {
                            return true;
                        }

                        prop = prop.replace(/(?:^|-)(\w)/g, function(
                            matches,
                            letter
                        ) {
                            return letter.toUpperCase();
                        });

                        while (length--) {
                            if (vendors[length] + prop in style) {
                                return true;
                            }
                        }
                        return false;
                    };
                })();

                // browser check by js props
                if (/^js:+/g.test(cssProp)) {
                    var jsProp = cssProp.split(":")[1];
                    if (jsProp && jsProp == "Promise") {
                        validBrowser =
                            window.Promise !== undefined &&
                            window.Promise !== null &&
                            Object.prototype.toString.call(
                                window.Promise.resolve()
                            ) === "[object Promise]";
                    }
                } else {
                    validBrowser = supports("" + cssProp + "");
                }

                if (validBrowser) {
                    removeElement();
                } else {
                    outdated.style.display = "block";
                    document.getElementById(
                        "btnCloseUpdateBrowser"
                    ).onmousedown = hide;
                }
            }
        }
        checkCssProp();
    }
})();
