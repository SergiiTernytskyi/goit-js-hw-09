var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var i=n("iQIUW");const r={width:"360px",position:"right-top",clickToClose:!0,fontSize:"16px",timeout:5e3};let l=0,s=0,a=0;function u(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{o?setTimeout((()=>{n({position:e,delay:t})}),t):setTimeout((()=>{i({position:e,delay:t})}),t)}))}function f({position:e,delay:t}){console.log(`✅ Fulfilled promise ${e} in ${t}ms`),i.Notify.success(`Fulfilled promise ${e} in ${t}ms`,r)}function d({position:e,delay:t}){console.log(`❌ Rejected promise ${e} in ${t}ms`),i.Notify.failure(`Rejected promise ${e} in ${t}ms`,r)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:o,amount:n}}=e.currentTarget;if(l=Number.parseInt(t.value),s=Number.parseInt(o.value),a=Number.parseInt(n.value),l<0||s<0||a<0)i.Notify.warning("Enter values, that are not negative",r);else for(let e=0;e<a;e+=1){u(e+1,l+e*s).then(f).catch(d)}}));
//# sourceMappingURL=03-promises.1b65e245.js.map
