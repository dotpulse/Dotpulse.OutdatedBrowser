(function() {
    var outdated = document.getElementById("outdated");
    if (outdated) {
        var data = outdated.getAttribute("data-lowerthan");
        var cssProp = data ? data : "transform";
        var validBrowser = false;
        var storage = {
            name: "outdatedbrowser",
            value: "hide"
        };

        function removeElement() {
            outdated.parentElement.removeChild(outdated);
        }

        function hide() {
            removeElement();
            sessionStorage.setItem(storage.name, storage.value);
            return false;
        }

        function checkCssProp() {
            if (sessionStorage.getItem(storage.name) == storage.value) {
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
