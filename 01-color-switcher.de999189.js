!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};console.log(t.startBtn),console.log(t.stopBtn);var n=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){t.body.style.backgroundColor=o(),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,n=setInterval((function(){t.body.style.backgroundColor=o()}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.de999189.js.map