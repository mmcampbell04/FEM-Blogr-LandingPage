!function(){var e=document.querySelector(".nav__toggle"),t=document.getElementById("mobile-menu"),n=document.querySelector(".nav__close"),o=document.querySelector("body");e.addEventListener("click",(function(){o.classList.add("noscroll"),t.classList.toggle("open"),e.classList.toggle("close"),n.classList.toggle("open")})),n.addEventListener("click",(function(){o.classList.remove("noscroll"),t.classList.toggle("open"),n.classList.toggle("open"),e.classList.toggle("close")}));var l=document.querySelectorAll(".nav__menu"),c=!0,s=!1,a=void 0;try{for(var r,i=function(e,n){var o=n.value;o.querySelector(".nav__link").addEventListener("click",(function(){!function(e){if(e.classList.contains("active"))e.classList.remove("active"),t.style.boxShadow="none";else{var n=document.querySelectorAll(".nav__left.active"),o=!0,l=!1,c=void 0;try{for(var s,a=n[Symbol.iterator]();!(o=(s=a.next()).done);o=!0)s.value.classList.remove("active")}catch(e){l=!0,c=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw c}}e.classList.add("active"),window.screen.width<=976?t.style.boxShadow="-9px 36px 20px var(--dropdown-background)":t.style.boxShadow="none"}}(o)})),o.addEventListener("blur",(function(e){this.contains(e.relatedTarget)||this.classList.remove("active")}),!0)},d=l[Symbol.iterator]();!(c=(r=d.next()).done);c=!0)i(0,r)}catch(e){s=!0,a=e}finally{try{c||null==d.return||d.return()}finally{if(s)throw a}}}();
//# sourceMappingURL=index.5ef19556.js.map
