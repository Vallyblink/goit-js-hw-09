const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d;t.addEventListener("click",(function(){d=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d,1e3),t.disabled=!1})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.5ca4417f.js.map
