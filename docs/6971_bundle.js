(self.webpackChunk=self.webpackChunk||[]).push([[6971],{6971:(e,t,r)=>{"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t=this;Object.entries(e).forEach((function(e){var r=n(e,2),o=(r[0],r[1]),a=o.get("sounds");Object.entries(a.parts).forEach((function(e){var r=n(e,2),a=r[0],i=r[1],s=i.scope,u=i.name;if(!i.isPlayed){var c=t.assets.sounds[s][u]();c.readyState>2&&0===c.currentTime&&(i.node=c.cloneNode(),i.node.addEventListener("ended",(function(){if(i&&i.node&&i.node.remove(),o){var e=o.get("sounds");e&&e.parts&&e.parts[a]&&delete e.parts[a]}})),i.node.volume=.3,i.node.play(),i.isPlayed=!0)}}))}))}r.r(t),r.d(t,{sounds:()=>a})}}]);
//# sourceMappingURL=6971_bundle.js.map