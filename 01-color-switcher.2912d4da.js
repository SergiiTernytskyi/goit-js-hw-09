const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};console.log(t.startBtn),console.log(t.stopBtn);let o=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(()=>{t.body.style.backgroundColor=e(),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,o=setInterval((()=>{t.body.style.backgroundColor=e()}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.2912d4da.js.map