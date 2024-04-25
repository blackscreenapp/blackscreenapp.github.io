var i,t,e,n,s,a,r,o,h,d=function(i,t,e,n){return new(e||(e=Promise))((function(s,a){function r(i){try{h(n.next(i))}catch(i){a(i)}}function o(i){try{h(n.throw(i))}catch(i){a(i)}}function h(i){var t;i.done?s(i.value):(t=i.value,t instanceof e?t:new e((function(i){i(t)}))).then(r,o)}h((n=n.apply(i,t||[])).next())}))},l=function(i,t,e,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?i!==t||!s:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(i,e):s?s.value=e:t.set(i,e),e},c=function(i,t,e,n){if("a"===e&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===e?n:"a"===e?n.call(i):n?n.value:t.get(i)};class g extends HTMLElement{constructor(){super(),i.add(this),this.productId="",this.cid="",this.size="large",this.windowMode="popup",this.theme="dark",this.language="",this.animation="off",e.set(this,t.englishLanguage),n.set(this,"prod"),s.set(this,"dev"===c(this,n,"f")?"iframe.html":"https://get.microsoft.com/iframe.html"),a.set(this,"dev"===c(this,n,"f")?"/images":"https://get.microsoft.com/images"),r.set(this,{isWindows:!1,windowsVersion:null,isEdgeBrowser:!1}),o.set(this,!1),this.getPlatformDetails().then((i=>l(this,r,i,"f"))),l(this,e,t.getSupportedLanguageFromCode(this.language),"f"),this.language=c(this,e,"f").code;const h=this.attachShadow({mode:"open"}),d=this.createStyle(),g=this.createHtml();h.appendChild(d),h.appendChild(g)}updateImageSrc(){var i;const t=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("img");t&&(t.setAttribute("src",this.getImageSource()),t.className=this.getImageClass())}connectedCallback(){}static get observedAttributes(){return["productid","cid","window-mode","theme","size","language","animation"]}attributeChangedCallback(i,n,s){var a;"size"!==i||"large"!==s&&"small"!==s||n===s?"language"!==i||s===n||"string"!=typeof s&&s?"productid"===i&&s!==n&&"string"==typeof s?this.productId=s:"cid"===i&&s!==n&&"string"==typeof s?this.cid=s:"window-mode"!==i||"popup"!==s&&"full"!==s||n===s?"theme"!==i||"dark"!=s&&"light"!==s&&"auto"!==s||n===s?"animation"!==i||"on"!==s&&"off"!==s||n===s||(this.animation=s,null===(a=this.shadowRoot)||void 0===a||a.appendChild(this.createStyle())):(this.theme=s,this.updateImageSrc()):(this.windowMode=s,this.updateImageSrc()):(l(this,e,t.getSupportedLanguageFromCode(s),"f"),this.language=c(this,e,"f").code,this.updateImageSrc()):(this.size=s,this.updateImageSrc())}createStyle(){var i="";i="on"===this.animation?"\n      :host {\n        display: inline-block;\n        cursor: pointer;\n        height: fit-content;\n      }\n\n      iframe {\n        border: none;\n        width: 0px;\n        height: 0px;\n      }\n\n      img {\n        border-radius: 8px;\n        transition: 0.35s ease;\n      }\n      \n      img:hover {\n        transform: translate(0, -4px);\n        cursor: pointer;\n        box-shadow: 0 12px 40px 20px rgba(0, 0, 0, 0.05);\n      }\n\n      img.small {\n        max-height: 52px;\n      }\n\n      img.large {\n        max-height: 104px;\n        height: 864px;\n      }":"\n      :host {\n        display: inline-block;\n        cursor: pointer;\n        height: fit-content;\n      }\n\n      iframe {\n        border: none;\n        width: 0px;\n        height: 0px;\n      }\n\n      img {\n        width: auto;\n        border-radius: 8px;\n      }\n\n      img.small {\n        max-height: 52px;\n      }\n\n      img.large {\n        max-height: 104px;\n        height: 864px;\n      }";const t=document.createElement("style");return t.textContent=i,t}createHtml(){const i=document.createElement("div");return i.appendChild(this.createImage()),i.appendChild(this.createIFrame()),i}getPlatformDetails(){return d(this,void 0,void 0,(function*(){const i=navigator;if(i.userAgentData&&i.userAgentData.getHighEntropyValues)try{const t=yield i.userAgentData.getHighEntropyValues(["platform","platformVersion"]),e="Windows"===t.platform;return{isWindows:e,windowsVersion:e?parseFloat((null==t?void 0:t.platformVersion)||""):null,isEdgeBrowser:(i.userAgentData.brands||[]).some((i=>"Microsoft Edge"===i.brand))}}catch(i){}const t=new RegExp(/.?Windows NT (\d+\.?\d?\.?\d?\.?\d?)/gi).exec(navigator.userAgent);return t&&t.length>=2?{isWindows:!0,windowsVersion:parseFloat(t[1]),isEdgeBrowser:!!navigator.userAgent.match("Edg/")}:{isWindows:!1,windowsVersion:null,isEdgeBrowser:!!navigator.userAgent.match("Edg/")}}))}static getSupportedLanguageFromCode(i){if(!i)return t.getSupportedLanguageFromUserAgent();const e=t.supportedLanguages.find((t=>t.code===i.toLowerCase()))||t.supportedLanguages.find((t=>t.code.substring(0,3)===i.toLowerCase()))||t.supportedLanguages.find((t=>t.code.substring(0,2)===i.toLowerCase()));return e||t.englishLanguage}static getSupportedLanguageFromUserAgent(){const i=t.supportedLanguages.find((i=>i.name===navigator.language));if(i)return i;if(navigator.languages){var e=navigator.languages.map((i=>t.supportedLanguages.find((t=>t.code===i)))).find((i=>!!i));if(e)return e}const n=navigator.language.indexOf("-");if(n>0){const i=navigator.language.substring(0,n),e=t.supportedLanguages.find((t=>t.name===i));if(e)return e}return t.englishLanguage}createIFrame(){const i=document.createElement("iframe");return i.setAttribute("loading","eager"),i.title="Microsoft Store App Badge",i.src=c(this,s,"f"),i}createImage(){const i=document.createElement("img");return i.setAttribute("part","img"),i.src=this.getImageSource(),i.className=this.getImageClass(),i.alt="Microsoft Store app badge",i.addEventListener("click",(i=>this.launchApp(i))),i}getImageSource(){var i=null;if("dark"===this.theme)i="large"===this.size?c(this,e,"f").imageLarge.fileName:c(this,e,"f").imageSmall.fileName;else if("light"===this.theme)i="large"===this.size?c(this,e,"f").imageLargeLight.fileName:c(this,e,"f").imageSmall.fileName;else if("auto"===this.theme){i=window.matchMedia("(prefers-color-scheme:dark)").matches?"large"===this.size?c(this,e,"f").imageLargeLight.fileName:c(this,e,"f").imageSmall.fileName:"large"===this.size?c(this,e,"f").imageLarge.fileName:c(this,e,"f").imageSmall.fileName}return`${c(this,a,"f")}/${i}`}getImageClass(){return"large"===this.size?"large":"small"}launchApp(i){this.productId&&(c(this,r,"f").isWindows&&c(this,r,"f").isEdgeBrowser?this.launchStoreAppPdpViaWhitelistedDomain():c(this,r,"f").isWindows?this.launchStoreAppPdp():this.launchStoreWebPdp(i))}launchStoreAppPdp(){const i=new URLSearchParams;if(i.append("productid",this.productId),i.append("referrer","appbadge"),i.append("source",window.location.hostname.toLowerCase()),this.cid&&i.append("cid",this.cid),"popup"===this.windowMode){i.append("mode","mini");const t=[Math.floor(window.screenLeft*window.devicePixelRatio),Math.floor(window.screenTop*window.devicePixelRatio),Math.floor(window.outerWidth*window.devicePixelRatio),Math.floor(window.outerHeight*window.devicePixelRatio)];i.append("pos",t.join(","))}location.href="ms-windows-store://pdp/?"+i.toString()}launchStoreAppPdpViaWhitelistedDomain(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("iframe");if(!c(this,o,"f")&&e&&e.contentWindow){c(this,i,"m",h).call(this);const t={message:"launch",productId:this.productId,cid:this.cid,windowMode:this.windowMode,source:window.location.hostname};e.contentWindow.postMessage(t,"*")}else this.launchStoreAppPdp()}launchStoreWebPdp(i){var t="";t=this.cid?`https://apps.microsoft.com/store/detail/${this.productId}?cid=${encodeURIComponent(this.cid)}&referrer=appbadge&source=${encodeURIComponent(window.location.hostname.toLowerCase())}`:`https://apps.microsoft.com/store/detail/${this.productId}?referrer=appbadge&source=${encodeURIComponent(window.location.hostname.toLowerCase())}`,i.ctrlKey?window.open(t,"_blank"):window.location.href=t}static createSupportedLanguages(){let i=new Map;i.set("Afrikaans","af-za"),i.set("Arabic","ar-sa"),i.set("Belarusian","be"),i.set("Bulgarian","bg-bg"),i.set("Bengali","bn"),i.set("Bosnian","bs"),i.set("Catalan","ca-es"),i.set("Czech","cs-cz"),i.set("Welsh","cy-gb"),i.set("Danish","da-dk"),i.set("German","de-de"),i.set("Greek","el-gr"),i.set("English","en-us"),i.set("Spanish","es-es"),i.set("Estonian","et-ee"),i.set("Persian","fa-ir"),i.set("Finnish","fi-fi"),i.set("Filipino","fil"),i.set("French","fr-ca"),i.set("Galician","gl-es"),i.set("Hebrew","he-il"),i.set("Hindi","hi-in"),i.set("Croatian","hr-hr"),i.set("Hungarian","hu-hu"),i.set("Indonesian","id-id"),i.set("Icelandic","is-is"),i.set("Italian","it-it"),i.set("Japanese","ja-jp"),i.set("Georgian","ka-ge"),i.set("Kazakh","kk-kz"),i.set("Korean","ko-kr"),i.set("Lithuanian","lt-lt"),i.set("Latvian","lv-lv"),i.set("Malay","ms-my"),i.set("Norwegian","nb-no"),i.set("Dutch","nl-nl"),i.set("Polish","pl-pl"),i.set("Portuguese_Brazil","pt-br"),i.set("Portuguese_Portugal","pt-pt"),i.set("Romanian","ro-ro"),i.set("Russian","ru-ru"),i.set("Slovak","sk-sk"),i.set("Slovenian","sl-si"),i.set("Serbian","sr-cyrl-rs"),i.set("Swedish","sv-se"),i.set("Swahili","sw"),i.set("Thai","th-th"),i.set("Turkish","tr-tr"),i.set("Ukrainian","uk-ua"),i.set("Vietnamese","vi-vn"),i.set("Chinese_Simplified","zh-cn"),i.set("Chinese_Traditional","zh-tw");let t=[];for(let e of i.keys()){let n={name:e,imageLarge:{fileName:i.get(e).concat(" ").concat("dark.svg")},imageLargeLight:{fileName:i.get(e).concat(" ").concat("light.svg")},imageSmall:{fileName:e.concat("_S.png")},code:i.get(e)||""};t.push(n)}return t}}t=g,e=new WeakMap,n=new WeakMap,s=new WeakMap,a=new WeakMap,r=new WeakMap,o=new WeakMap,i=new WeakSet,h=function(){const i="securitypolicyviolation",t=t=>{"frame-src"===t.violatedDirective&&t.type===i&&(l(this,o,!0,"f"),this.launchStoreAppPdp())};document.addEventListener(i,t,{once:!0}),setTimeout((()=>document.removeEventListener(i,t)),2e3)},g.englishLanguage={name:"English",code:"en-us",imageSmall:{fileName:"English_S.png"},imageLarge:{fileName:"en-us dark.svg"},imageLargeLight:{fileName:"en-us light.svg"}},g.supportedLanguages=t.createSupportedLanguages(),customElements.define("ms-store-badge",g);