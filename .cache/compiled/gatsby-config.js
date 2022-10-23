!function(e,o,r,t,n){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i.parcelRequire563a&&i.parcelRequire563a,l=a.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(o,r){if(!l[o]){if(!e[o]){var t="function"==typeof i.parcelRequire563a&&i.parcelRequire563a;if(!r&&t)return t(o,!0);if(a)return a(o,!0);if(s&&"string"==typeof o)return s(o);var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}p.resolve=function(r){var t=e[o][1][r];return null!=t?t:r},p.cache={};var c=l[o]=new d.Module(o);e[o][0].call(c.exports,p,c,c.exports,this)}return l[o].exports;function p(e){var o=p.resolve(e);return!1===o?{}:d(o)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=l,d.parent=a,d.register=function(o,r){e[o]=[function(e,o){o.exports=r},{}]},Object.defineProperty(d,"root",{get:function(){return i.parcelRequire563a}}),i.parcelRequire563a=d;for(var c=0;c<o.length;c++)d(o[c]);var p=d(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd&&define((function(){return p}))}({iUFh0:[function(e,o,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);const t={graphqlTypegen:{typesOutputPath:"./src/common/types/gatsby-types.d.ts"},siteMetadata:{author:"zhaohuanyu",title:"Auu's blog ~",siteUrl:"https://zhy.gatsbyjs.io",description:"my blog reproduction"},jsxRuntime:"automatic",jsxImportSource:"theme-ui",plugins:["gatsby-plugin-image","gatsby-plugin-sharp","gatsby-transformer-sharp",{resolve:"gatsby-plugin-mdx",options:{extensions:[".mdx",".md"]}},{resolve:"gatsby-plugin-theme-ui",options:{preset:e("./src/styles/theme/index")}},{resolve:"gatsby-source-filesystem",options:{name:"markdown-posts",path:"./src/contents/"},__key:"markdown-posts"}]};o.exports=t},{"./src/styles/theme/index":"jPc91","@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}],jPc91:[function(e,o,r){var t=e("@parcel/transformer-js/src/esmodule-helpers.js"),n=e("./styles"),i=t.interopDefault(n),a=e("./colors"),l=t.interopDefault(a);const s={styles:i.default,colors:l.default,config:{useBorderBox:!0,useRootStyles:!0,initialColorModeName:"light",useColorSchemeMediaQuery:!0},radii:[2,4,5,6,8,10,12,24],space:[5,10,15,20,30,40,50,70],fontSizes:[12,14,16,18,20,24,32,48,64,72,96],breakpoints:["400px","900px","1440px","1600px"],fonts:{body:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",heading:"system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",monospace:"Menlo, monospace"},fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},shadows:{card:"0 0 8px",post:"\n      var(--theme-ui-colors-card) 0 0 0 0,\n      var(--theme-ui-colors-card) 0 0 0 0,\n      var(--theme-ui-colors-card) 0 10px 15px -3px,\n      var(--theme-ui-colors-card) 0 4px 6px -4px\n    "},cards:{primary:{padding:2,borderRadius:4,color:"card",boxShadow:"card"},outlined:{m:"1rem 0",p:"1rem",borderWidth:"1px",borderStyle:"solid",borderRadius:".3em"}}};o.exports=s},{"./styles":"6Y8Gl","./colors":"2O5GI","@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}],"6Y8Gl":[function(e,o,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);const t={root:{WebkitTextSizeAdjust:"100%",WebkitOverflowScrolling:"touch",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",textRendering:"optimizeLegibility",transition:"color, background-color .35s linear"},p:{my:"24px",fontSize:2},h1:{mb:5,color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:7},h2:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h3:{mt:4,mb:3,color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h4:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h5:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1},h6:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:0},img:{maxWidth:"100%"},pre:{fontFamily:"monospace",code:{color:"inherit"}},code:{fontFamily:"monospace",fontSize:"inherit"},blockquote:{m:"30px 0px",p:2,borderLeftWidth:"8px",borderLeftStyle:"solid",borderLeftColor:"primary",borderRadius:2,backgroundColor:"highlight","& > p":{m:"0px"}},table:{width:"100%",borderCollapse:"separate",borderSpacing:0},th:{textAlign:"left",borderBottomStyle:"solid"},td:{textAlign:"left",borderBottomStyle:"solid"},progress:{padding:"0px",height:"6px"}};r.default=t},{"@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}],"5hwXW":[function(e,o,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,o){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||o.hasOwnProperty(r)||Object.defineProperty(o,r,{enumerable:!0,get:function(){return e[r]}})})),o},r.export=function(e,o,r){Object.defineProperty(e,o,{enumerable:!0,get:r})}},{}],"2O5GI":[function(e,o,r){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(r);var n=e("../presets/deep");const i={text:"#07070A",background:"#FFFFFF",primary:"#660099FF",secondary:"#9c27b0",highlight:"#efeffe",muted:"#4A525A",accent:"#ec3471",gray:"#dfe3e8",darken:"#00044c",chip:"#d7d7d95c",card:"#0000001F",border:"#dee2e6",textSecondary:"#334155",backgroundSecondary:"#f9fafa3d",callout:{info:{color:"rgb(0, 58, 117)",borderColor:"rgb(194, 224, 255)",backgroundColor:"rgba(240, 247, 255, 0.8)",strongColor:"rgb(0, 76, 153)"},warning:{color:"rgb(33, 33, 33)",borderColor:"rgb(255, 220, 72)",backgroundColor:"rgba(255, 249, 235, 0.6)",strongColor:"rgb(140, 88, 0)"},error:{color:"rgb(87, 0, 7)",borderColor:"rgb(255, 189, 194)",backgroundColor:"rgb(255, 240, 241)",strongColor:"rgb(148, 0, 13)"}},modes:{dark:{...t.interopDefault(n).default.colors,chip:"hsla(0, 0%, 45%, 0.6)",card:"hsla(0, 0%, 0%, 0.35)",border:"hsla(220, 13%, 91%, 0.1)",textSecondary:"hsla(213, 9.8%, 88.2%, 1)",backgroundSecondary:"hsla(227, 21.9%, 25.1%, 0.3)",callout:{info:{color:"rgb(240, 247, 255)",borderColor:"rgb(0, 76, 153)",backgroundColor:"rgba(0, 58, 117, 0.2)",strongColor:"rgb(194, 224, 255)"},warning:{color:"rgb(255, 249, 235)",borderColor:"rgb(140, 88, 0)",backgroundColor:"rgba(90, 54, 0, 0.35)",strongColor:"rgb(255, 243, 193)"},error:{color:"rgb(255, 240, 241)",borderColor:"rgb(148, 0, 13)",backgroundColor:"rgba(87, 0, 7, 0.35)",strongColor:"rgb(255, 219, 222)"}}}}};r.default=i},{"../presets/deep":"6cUY9","@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}],"6cUY9":[function(e,o,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);r.default={colors:{text:"hsl(210, 50%, 96%)",background:"hsl(230, 25%, 18%)",primary:"hsl(260, 100%, 80%)",secondary:"hsl(290, 100%, 80%)",highlight:"hsl(260, 20%, 40%)",accent:"hsl(289,91%,71%)",muted:"hsla(230, 20%, 0%, 20%)",gray:"hsl(210, 50%, 60%)"},fonts:{body:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',heading:"inherit",monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,72],fontWeights:{body:400,heading:700,display:900},lineHeights:{body:1.5,heading:1.25},text:{heading:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"},display:{variant:"text.heading",fontSize:[5,6],fontWeight:"display",letterSpacing:"-0.03em",mt:3}},styles:{Container:{p:3,maxWidth:1024},root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},h1:{variant:"text.display"},h2:{variant:"text.heading",fontSize:5},h3:{variant:"text.heading",fontSize:4},h4:{variant:"text.heading",fontSize:3},h5:{variant:"text.heading",fontSize:2},h6:{variant:"text.heading",fontSize:1},a:{color:"primary","&:hover":{color:"secondary"}},pre:{variant:"prism",fontFamily:"monospace",fontSize:1,p:3,color:"text",bg:"muted",overflow:"auto",code:{color:"inherit"}},code:{fontFamily:"monospace",color:"secondary",fontSize:1},inlineCode:{fontFamily:"monospace",color:"secondary",bg:"muted"},table:{width:"100%",my:4,borderCollapse:"separate",borderSpacing:0,"th,td":{textAlign:"left",py:"4px",pr:"4px",pl:0,borderColor:"muted",borderBottomStyle:"solid"}},th:{verticalAlign:"bottom",borderBottomWidth:"2px"},td:{verticalAlign:"top",borderBottomWidth:"1px"},hr:{border:0,borderBottom:"1px solid",borderColor:"muted"},img:{maxWidth:"100%"}},prism:{".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url":{color:"gray"},".comment":{fontStyle:"italic"},".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable":{color:"purple"},".atrule,.attr-value,.keyword":{color:"primary"},".selector,.attr-name,.string,.char,.builtin,.inserted":{color:"secondary"}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"5hwXW"}]},["iUFh0"],"iUFh0");
//# sourceMappingURL=gatsby-config.js.map