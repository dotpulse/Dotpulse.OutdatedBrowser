/*! dotpulse/outdatedbrowser v0.1.7 | dotpulse AG | dotpulse.ch | MIT */

!function(){var t=document.getElementById("outdated"),e=t.getAttribute("data-lowerthan"),n=e?e:"transform",o=!1;if(navigator.cookieEnabled&&(o=function(){var t=document.cookie.match("(^|;) ?outdatedbrowser=([^;]*)(;|$)");return t?"true"==t[2]:null}()),!o){var r=!0,i=function(e){t.style.opacity=e/100,t.style.filter="alpha(opacity="+e+")"},u=function(e){i(e),1==e&&(t.style.display="block"),100==e&&(r=!0)},a=function(){var t=document.createElement("div"),e="Khtml Ms O Moz Webkit".split(" "),n=e.length;return function(o){if(o in t.style)return!0;for(o=o.replace(/^[a-z]/,function(t){return t.toUpperCase()});n--;)if(e[n]+o in t.style)return!0;return!1}}();if(a(""+n))return;if(r&&"1"!==t.style.opacity){r=!1;for(var c=1;100>=c;c++)setTimeout(function(t){return function(){u(t)}}(c),8*c)}document.getElementById("btnCloseUpdateBrowser").onmousedown=function(){return t.style.display="none",navigator.cookieEnabled&&(document.cookie="outdatedbrowser=true;path=/;"),!1}}}();