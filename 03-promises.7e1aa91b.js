!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var i=o("h6c0i"),r={width:"360px",position:"right-top",clickToClose:!0,fontSize:"16px",timeout:5e3},a=0,c=0,l=0;function s(e,n){var t=Math.random()>.3;return new Promise((function(o,i){t?setTimeout((function(){o({position:e,delay:n})}),n):setTimeout((function(){i({position:e,delay:n})}),n)}))}function u(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),i.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"),r)}function f(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),i.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"),r)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,d=n.amount;if(a=Number.parseInt(t.value),c=Number.parseInt(o.value),l=Number.parseInt(d.value),a<0||c<0||l<0)i.Notify.warning("Enter values, that are not negative",r);else for(var p=0;p<l;p+=1){s(p+1,a+p*c).then(u).catch(f)}}))}();
//# sourceMappingURL=03-promises.7e1aa91b.js.map
