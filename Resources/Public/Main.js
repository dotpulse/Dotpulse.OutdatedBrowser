!function(){var i=document.getElementById("outdated");if(i){var e=i.getAttribute("data-lowerthan"),l=e||"transform",a=!1,m={name:"outdatedbrowser",value:"hide"};function s(){i.parentElement.removeChild(i)}function u(){return s(),localStorage.setItem(m.name,m.value),!1}!function(){if(localStorage.getItem(m.name)==m.value)s();else{var e=(o=document.createElement("div").style,r=(n=["Moz","O","ms","Webkit","Khtml"]).length,function(e){if(e in o)return!0;for(e=e.replace(/(?:^|-)(\w)/g,function(e,t){return t.toUpperCase()});r--;)if(n[r]+e in o)return!0;return!1});if(/^js:+/g.test(l)){var t=l.split(":")[1];t&&"Promise"==t&&(a=void 0!==window.Promise&&null!==window.Promise&&"[object Promise]"===Object.prototype.toString.call(window.Promise.resolve()))}else a=e(""+l);a?s():(i.style.display="block",document.getElementById("btnCloseUpdateBrowser").onmousedown=u)}var o,n,r}()}}();