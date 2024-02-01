/*! For license information please see docs-components-ColorSwatch-ColorSwatch-stories.8c003db5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_metamask_previews_design_tokens=self.webpackChunk_metamask_previews_design_tokens||[]).push([[421],{"./docs/components/ColorSwatch/ColorSwatch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ColorSwatch__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./docs/components/ColorSwatch/ColorSwatch.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation Components/ColorSwatch",component:_ColorSwatch__WEBPACK_IMPORTED_MODULE_0__.b},Default={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ColorSwatch__WEBPACK_IMPORTED_MODULE_0__.b,{color:"#007bff",borderColor:"#ced4da",textBackgroundColor:"#f8f9fa",textColor:"#212529",name:"Primary Default"})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <ColorSwatch color="#007bff" borderColor="#ced4da" textBackgroundColor="#f8f9fa" textColor="#212529" name="Primary Default" />\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./docs/components/ColorSwatch/ColorSwatch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ColorSwatch});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorSwatch=_ref=>{let{color,borderColor=_src__WEBPACK_IMPORTED_MODULE_1__.Wb.colors.border.muted,textBackgroundColor=_src__WEBPACK_IMPORTED_MODULE_1__.Wb.colors.background.default,textColor=_src__WEBPACK_IMPORTED_MODULE_1__.Wb.colors.text.default,name,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{height:120,backgroundColor:color,border:`1px solid ${borderColor}`,display:"flex",flexDirection:"column-reverse",borderRadius:"8px"},...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{backgroundColor:textBackgroundColor,padding:8,borderRadius:"0 0 8px 8px",color:textColor},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{style:{display:"block",marginBottom:"8px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:`${name}`})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:`${color}`})]})})};ColorSwatch.displayName="ColorSwatch";try{ColorSwatch.displayName="ColorSwatch",ColorSwatch.__docgenInfo={description:"",displayName:"ColorSwatch",props:{color:{defaultValue:null,description:"The color of the swatch",name:"color",required:!1,type:{name:"string"}},textBackgroundColor:{defaultValue:{value:"lightTheme.colors.background.default"},description:"The color of text background that contains the name of the color defaults to lightTheme.colors.background.default",name:"textBackgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:{value:"lightTheme.colors.border.muted"},description:"The border color of the swatch defaults to lightTheme.colors.border.muted",name:"borderColor",required:!1,type:{name:"string"}},textColor:{defaultValue:{value:"lightTheme.colors.text.default"},description:"The color of the text defaults to lightTheme.colors.text.default",name:"textColor",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of the color",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/ColorSwatch/ColorSwatch.tsx#ColorSwatch"]={docgenInfo:ColorSwatch.__docgenInfo,name:"ColorSwatch",path:"docs/components/ColorSwatch/ColorSwatch.tsx#ColorSwatch"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>_js__WEBPACK_IMPORTED_MODULE_0__.$_,Wb:()=>_js__WEBPACK_IMPORTED_MODULE_0__.Wb});var _js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/js/index.ts")},"./src/js/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fz:()=>brandColor,$_:()=>darkTheme,Wb:()=>lightTheme});var typography=__webpack_require__("./src/js/typography/index.ts");const colors={background:{default:"#FFFFFF",defaultHover:"#FAFAFA",defaultPressed:"#EBEBEB",alternative:"#F2F4F6",alternativeHover:"#EDEFF1",alternativePressed:"#DFE0E2",hover:"#00000005",pressed:"#00000014"},text:{default:"#24272A",alternative:"#535A61",muted:"#BBC0C5"},icon:{default:"#24272A",alternative:"#6A737D",muted:"#BBC0C5"},border:{default:"#BBC0C5",muted:"#D6D9DC"},overlay:{default:"#00000099",inverse:"#FCFCFC",alternative:"#000000CC"},shadow:{default:"#0000001A"},primary:{default:"#0376C9",defaultHover:"#0379CE",defaultPressed:"#036DB9",alternative:"#0260A4",muted:"#0376C919",inverse:"#FFFFFF",disabled:"#0376C980",shadow:"#0376C933"},secondary:{default:"#F66A0A",alternative:"#BF5208",muted:"#F66A0A19",inverse:"#FCFCFC",disabled:"#F66A0A80"},error:{default:"#D73847",defaultHover:"#CD4250",defaultPressed:"#C63441",alternative:"#B92534",muted:"#D7384719",inverse:"#FFFFFF",disabled:"#D7384780",shadow:"#D7384766"},warning:{default:"#BF5208",defaultHover:"#C2540A",defaultPressed:"#A24507",alternative:"#FFC70A",muted:"#BF520819",inverse:"#FFFFFF",disabled:"#FFD33D80"},success:{default:"#1C8234",defaultHover:"#208838",defaultPressed:"#1B7431",alternative:"#1C8234",muted:"#1C823419",inverse:"#FFFFFF",disabled:"#28A74580"},info:{default:"#0376C9",alternative:"#0260A4",muted:"#0376C919",inverse:"#FFFFFF",disabled:"#0376C980"},networks:{goerli:{default:"#1098FC",inverse:"#FCFCFC"},localhost:{default:"#BBC0C5",inverse:"#FCFCFC"},sepolia:{default:"#CFB5F0",inverse:"#FCFCFC"}},flask:{default:"#8B45B6",inverse:"#FCFCFC"}},shadows={size:{xs:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:4},sm:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:8},md:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:16},lg:{shadowColor:colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40}}},lightTheme={colors,typography:typography.c,shadows},colors_colors={background:{default:"#24272A",defaultHover:"#282B2E",defaultPressed:"#36383B",alternative:"#141618",alternativeHover:"#191B1D",alternativePressed:"#27292A",hover:"#FFFFFF05",pressed:"#FFFFFF14"},text:{default:"#FFFFFF",alternative:"#D6D9DC",muted:"#9FA6AE"},icon:{default:"#FFFFFF",alternative:"#BBC0C5",muted:"#9FA6AE"},border:{default:"#848C96",muted:"#3B4046"},overlay:{default:"#00000099",inverse:"#FCFCFC",alternative:"#000000CC"},shadow:{default:"#00000066"},primary:{default:"#1098FC",defaultHover:"#0092FA",defaultPressed:"#54B6FC",alternative:"#43AEFC",muted:"#1098FC26",inverse:"#141618",disabled:"#1098FC80",shadow:"#1098FC66"},secondary:{default:"#F8883B",alternative:"#FAA66C",muted:"#F8883B26",inverse:"#FCFCFC",disabled:"#F8883B80"},error:{default:"#FF5263",defaultHover:"#FF4D58",defaultPressed:"#F9868E",alternative:"#E88F97",muted:"#FF526326",inverse:"#141618",disabled:"#D7384780",shadow:"#FF526366"},warning:{default:"#FFD33D",defaultHover:"#FFC60A",defaultPressed:"#FFEAA3D1",alternative:"#FFDF70",muted:"#FFD33D26",inverse:"#141618",disabled:"#FFD33D80"},success:{default:"#28A745",defaultHover:"#05B82F",defaultPressed:"#6AEC88",alternative:"#5DD879",muted:"#28A74526",inverse:"#141618",disabled:"#28A74580"},info:{default:"#1098FC",alternative:"#43AEFC",muted:"#1098FC26",inverse:"#141618",disabled:"#0376C980"},networks:{goerli:{default:"#1098FC",inverse:"#FCFCFC"},localhost:{default:"#BBC0C5",inverse:"#FCFCFC"},sepolia:{default:"#CFB5F0",inverse:"#FCFCFC"}},flask:{default:"#8B45B6",inverse:"#FCFCFC"}},shadows_shadows={size:{xs:{shadowColor:colors_colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:4},sm:{shadowColor:colors_colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:8},md:{shadowColor:colors_colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:16},lg:{shadowColor:colors_colors.shadow.default,shadowOffset:{width:0,height:2},shadowOpacity:1,shadowRadius:40}}},darkTheme={colors:colors_colors,typography:typography.c,shadows:shadows_shadows},brandColor={white000:"#ffffff",white010:"#fcfcfc",black000:"#000000",grey030:"#fafbfc",grey040:"#f2f4f6",grey100:"#d6d9dc",grey200:"#bbc0c5",grey300:"#9fa6ae",grey400:"#848c96",grey500:"#6a737d",grey600:"#535a61",grey700:"#3b4046",grey750:"#2e3339",grey800:"#24272a",grey900:"#141618",blue000:"#eaf6ff",blue100:"#a7d9fe",blue200:"#75c4fd",blue300:"#43aefc",blue400:"#1098fc",blue500:"#0376c9",blue600:"#0260a4",blue700:"#024272",blue800:"#01253f",blue900:"#00080d",orange000:"#fef5ef",orange100:"#fde2cf",orange200:"#fbc49d",orange300:"#faa66c",orange400:"#f8883b",orange500:"#f66a0a",orange600:"#bf5208",orange700:"#954005",orange800:"#632b04",orange900:"#321602",green000:"#f3fcf5",green100:"#d6ffdf",green200:"#afecbd",green300:"#86e29b",green400:"#5dd879",green500:"#28a745",green600:"#1c8234",green700:"#145523",green800:"#0a2c12",green900:"#041007",red000:"#fcf2f3",red100:"#f7d5d8",red200:"#f1b9be",red300:"#e88f97",red400:"#e06470",red500:"#d73847",red600:"#b92534",red700:"#8e1d28",red800:"#64141c",red900:"#3a0c10",purple500:"#8b45b6",violet300:"#cfb5f0",yellow000:"#fffdf8",yellow100:"#fefcde",yellow200:"#fff2c5",yellow300:"#ffeaa3",yellow400:"#ffdf70",yellow500:"#ffd33d",yellow600:"#ffc70a"};lightTheme.colors,darkTheme.colors},"./src/js/typography/fontFamilies.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>fontFamilies});const fontFamilies={euclidCircularB:"Euclid Circular B"}},"./src/js/typography/fontSizes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>fontSizes});const fontSizes={fontSize1:10,fontSize2:12,fontSize3:14,fontSize4:16,fontSize5:18,fontSize6:24,fontSize7:32,fontSize8:48}},"./src/js/typography/fontWeights.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>fontWeights});const fontWeights={regular:"400",medium:"500",bold:"700"}},"./src/js/typography/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var fontFamilies=__webpack_require__("./src/js/typography/fontFamilies.ts"),fontSizes=__webpack_require__("./src/js/typography/fontSizes.ts"),fontWeights=__webpack_require__("./src/js/typography/fontWeights.ts"),letterSpacing=__webpack_require__("./src/js/typography/letterSpacing.ts"),lineHeights=__webpack_require__("./src/js/typography/lineHeights.ts");const typography={sDisplayMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize7,lineHeight:lineHeights.t.lineHeight6,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingLG:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize6,lineHeight:lineHeights.t.lineHeight5,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingSM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sHeadingSMRegular:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sBodyLGMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMDMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodyMDBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},sBodySM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodySMMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodySMBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing0},sBodyXS:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize1,lineHeight:lineHeights.t.lineHeight1,letterSpacing:letterSpacing.r.letterSpacing1},sBodyXSMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize1,lineHeight:lineHeights.t.lineHeight1,letterSpacing:letterSpacing.r.letterSpacing1},lDisplayMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize8,lineHeight:lineHeights.t.lineHeight7,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingLG:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize7,lineHeight:lineHeights.t.lineHeight6,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize6,lineHeight:lineHeights.t.lineHeight5,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingSM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lHeadingSMRegular:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyLGMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize5,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMD:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMDMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodyMDBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize4,lineHeight:lineHeights.t.lineHeight4,letterSpacing:letterSpacing.r.letterSpacing0},lBodySM:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodySMMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodySMBold:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.bold,fontSize:fontSizes.C.fontSize3,lineHeight:lineHeights.t.lineHeight3,letterSpacing:letterSpacing.r.letterSpacing0},lBodyXS:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.regular,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing1},lBodyXSMedium:{fontFamily:fontFamilies.V.euclidCircularB,fontWeight:fontWeights.v.medium,fontSize:fontSizes.C.fontSize2,lineHeight:lineHeights.t.lineHeight2,letterSpacing:letterSpacing.r.letterSpacing1}}},"./src/js/typography/letterSpacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>letterSpacing});const letterSpacing={letterSpacing0:0,letterSpacing1:.25}},"./src/js/typography/lineHeights.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>lineHeights});const lineHeights={lineHeight1:16,lineHeight2:20,lineHeight3:22,lineHeight4:24,lineHeight5:32,lineHeight6:40,lineHeight7:56}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);