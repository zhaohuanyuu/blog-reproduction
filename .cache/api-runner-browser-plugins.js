module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[],"preset":{"styles":{"root":{"WebkitTextSizeAdjust":"100%","WebkitOverflowScrolling":"touch","MozOsxFontSmoothing":"grayscale","WebkitFontSmoothing":"antialiased","textRendering":"optimizeLegibility","transition":"color, background-color .35s linear"},"p":{"my":"24px","fontSize":2},"h1":{"mb":5,"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":7},"h2":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":4},"h3":{"mt":4,"mb":3,"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":3},"h4":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":2},"h5":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":1},"h6":{"color":"text","fontFamily":"heading","lineHeight":"heading","fontWeight":"heading","fontSize":0},"img":{"maxWidth":"100%"},"pre":{"fontFamily":"monospace","code":{"color":"inherit"}},"code":{"fontFamily":"monospace","fontSize":"inherit"},"blockquote":{"m":"30px 0px","p":2,"borderLeftWidth":"8px","borderLeftStyle":"solid","borderLeftColor":"primary","borderRadius":2,"backgroundColor":"highlight","& > p":{"m":"0px"}},"table":{"width":"100%","borderCollapse":"separate","borderSpacing":0},"th":{"textAlign":"left","borderBottomStyle":"solid"},"td":{"textAlign":"left","borderBottomStyle":"solid"},"progress":{"padding":"0px","height":"6px"}},"colors":{"text":"#07070A","background":"#FFFFFF","primary":"#660099FF","secondary":"#9c27b0","highlight":"#efeffe","muted":"#4A525A","accent":"#ec3471","gray":"#dfe3e8","darken":"#00044c","chip":"#d7d7d95c","card":"#0000001F","border":"#dee2e6","textSecondary":"#334155","backgroundSecondary":"#f9fafa3d","callout":{"info":{"color":"rgb(0, 58, 117)","borderColor":"rgb(194, 224, 255)","backgroundColor":"rgba(240, 247, 255, 0.8)","strongColor":"rgb(0, 76, 153)"},"warning":{"color":"rgb(33, 33, 33)","borderColor":"rgb(255, 220, 72)","backgroundColor":"rgba(255, 249, 235, 0.6)","strongColor":"rgb(140, 88, 0)"},"error":{"color":"rgb(87, 0, 7)","borderColor":"rgb(255, 189, 194)","backgroundColor":"rgb(255, 240, 241)","strongColor":"rgb(148, 0, 13)"}},"modes":{"dark":{"text":"hsl(210, 50%, 96%)","background":"hsl(230, 25%, 18%)","primary":"hsl(260, 100%, 80%)","secondary":"hsl(290, 100%, 80%)","highlight":"hsl(260, 20%, 40%)","accent":"hsl(289,91%,71%)","muted":"hsla(230, 20%, 0%, 20%)","gray":"hsl(210, 50%, 60%)","chip":"hsla(0, 0%, 45%, 0.6)","card":"hsla(0, 0%, 0%, 0.35)","border":"hsla(220, 13%, 91%, 0.1)","textSecondary":"hsla(213, 9.8%, 88.2%, 1)","backgroundSecondary":"hsla(227, 21.9%, 25.1%, 0.3)","callout":{"info":{"color":"rgb(240, 247, 255)","borderColor":"rgb(0, 76, 153)","backgroundColor":"rgba(0, 58, 117, 0.2)","strongColor":"rgb(194, 224, 255)"},"warning":{"color":"rgb(255, 249, 235)","borderColor":"rgb(140, 88, 0)","backgroundColor":"rgba(90, 54, 0, 0.35)","strongColor":"rgb(255, 243, 193)"},"error":{"color":"rgb(255, 240, 241)","borderColor":"rgb(148, 0, 13)","backgroundColor":"rgba(87, 0, 7, 0.35)","strongColor":"rgb(255, 219, 222)"}}}}},"config":{"useBorderBox":true,"useRootStyles":true,"initialColorModeName":"light","useColorSchemeMediaQuery":true},"radii":[2,4,5,6,8,10,12,24],"space":[5,10,15,20,30,40,50,70],"fontSizes":[12,14,16,18,20,24,32,48,64,72,96],"breakpoints":["400px","900px","1440px","1600px"],"fonts":{"body":"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif","heading":"system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif","monospace":"Menlo, monospace"},"fontWeights":{"body":400,"heading":700,"bold":700},"lineHeights":{"body":1.5,"heading":1.125},"shadows":{"card":"0 0 8px","post":"\n      var(--theme-ui-colors-card) 0 0 0 0,\n      var(--theme-ui-colors-card) 0 0 0 0,\n      var(--theme-ui-colors-card) 0 10px 15px -3px,\n      var(--theme-ui-colors-card) 0 4px 6px -4px\n    "},"cards":{"primary":{"padding":2,"borderRadius":4,"color":"card","boxShadow":"card"},"outlined":{"m":"1rem 0","p":"1rem","borderWidth":"1px","borderStyle":"solid","borderRadius":".3em"}}}},
    },{
      plugin: require('../gatsby-browser.tsx'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
