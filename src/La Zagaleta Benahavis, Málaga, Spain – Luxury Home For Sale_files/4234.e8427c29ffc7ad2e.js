(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4234,42288,232],{37798:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var a=i(85893),s=i(67294);i(49647);let o=e=>{let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:t})},n=e=>{let t=e.getBoundingClientRect().width,i=window.getComputedStyle(e).getPropertyValue("font-size");return{width:t,fontSize:parseInt(i,10)}},l=e=>{let{children:t,regex:i,replace:l}=e,r=(0,s.useRef)(null),[c,d]=(0,s.useState)(null),u=(0,s.useMemo)(()=>null==t?void 0:t.replace(i,l),[t,i,l]),m=(0,s.useMemo)(()=>t!==u,[t,u]);return(0,s.useEffect)(()=>{if(m&&r.current){let e=r.current.querySelector(".js-fitty-clone"),t=null==e?void 0:e.querySelector(".js-fitty-reference");if(t){t.classList.add("displayRule");let e=r.current.getBoundingClientRect().width,{width:i,fontSize:a}=n(t),s=1,o=a;for(;s<=o;){let i=Math.floor((s+o)/2);t.style.fontSize="".concat(i,"px"),t.getBoundingClientRect().width>e?o=i-1:s=i+1}d(o)}}},[u,m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsxs)("div",{className:"js-fitty-container ".concat(m?"":"no-match"),ref:r,children:[!c&&m&&(0,a.jsx)("div",{className:"js-fitty-target js-fitty-clone",style:{visibility:"hidden",position:"absolute"},dangerouslySetInnerHTML:{__html:u}}),(0,a.jsx)("div",{className:"js-fitty-target  ".concat(m?"":"no-match"),style:{fontSize:c?"".concat(c,"px"):void 0},dangerouslySetInnerHTML:{__html:u}})]})]})};var r=l},83173:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var a=i(85893),s=i(67294),o=i(50068);let n={OInputCheckbox:["AffinityDefault","SIR","SirHuge"]};var l=i(5152),r=i.n(l);let c=e=>{let{inputBoxCustomClass:t,inputBoxObjectCustomClass:l,inputLabelBoxObjectCustomClass:c,inputLabelIconBoxObjectCustomClass:d,inputLabelTextBoxObjectCustomClass:u,inputName:m,inputType:f,inputId:h,inputLabelTitle:p,inputRef:g,inputOnChangeMethod:b,inputDefaultChecked:x,inputDefaultValue:v,inputDataSelected:y,dataTemplateSEOPart:_,inputValue:j,dataIsDefault:S}=e,w=(0,o.Z)(),k=n.OInputCheckbox.includes(w)?r()(()=>i(13032)("./".concat(w,"/").concat(w))):r()(()=>i.e(99487).then(i.bind(i,99487)),{loadableGenerated:{webpack:()=>[99487]}});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.Suspense,{children:[(0,a.jsx)(k,{}),(0,a.jsxs)("div",{className:"c-input-box  ".concat(t||""),children:[(0,a.jsx)("input",{ref:g,className:"input-box__object ".concat(l||""),type:f,name:m,id:h,onChange:e=>void 0!==b?b(e):void 0,defaultChecked:"radio"!==f?x:void 0,checked:"radio"===f?x:void 0,defaultValue:v,"data-selected":y,"data-is-default":S,"data-templateseopart":_,value:j}),(0,a.jsxs)("label",{className:"".concat(c||"input-box__item"),htmlFor:"radio"===f?h:m,children:[(0,a.jsx)("i",{className:"".concat(d||"input-box__icon")}),(0,a.jsx)("span",{className:"".concat(u||"input-box__name"),children:p})]})]})]})})};var d=s.memo(c)},4234:function(e,t,i){"use strict";i.r(t);var a=i(85893),s=i(67294),o=i(91752),n=i(31044),l=i(7369),r=i(64418),c=i(5152),d=i.n(c),u=i(37798),m=i(42288),f=i(83173),h=i(33940),p=i(13519);let g=d()(()=>Promise.all([i.e(54097),i.e(18479)]).then(i.bind(i,21394)),{loadableGenerated:{webpack:()=>[21394]}}),b=()=>{let[e,t]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1),[d,b]=(0,s.useState)({}),[x,v]=(0,s.useState)(!1),y=(0,o.G)().SiteSettings().IsRegionalWebsite,_=(0,o.G)().SiteSettings().IdWebsite,j=(0,o.G)().MainModuleBaseData(),S=(0,s.useRef)(null),w=(0,h.D)(!0,!1),k=[709];(0,s.useEffect)(()=>{if(y){var e;let t=(0,n.Yd)(null==j?void 0:null===(e=j.legacyData)||void 0===e?void 0:e.listing);if(null==t?void 0:t.BrokerName){let e=t.BrokerName,i=window.location.href;try{let t={name:(0,p.b8)(e),url:i};(0,l.dv)(JSON.stringify(t),"affiliateInfo",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname,expiresDays:90})}catch(e){console.error("Error setting affiliateInfo cookie",e)}}}let i=(0,l.bG)("affiliateInfo"),a=(0,l.bG)("dismissBackModal"),s=(0,l.bG)("hideBackModalTemp"),r=(0,l.bG)("hideFairHousing");if(y||!i||"true"===a||"true"===s||x)k.includes(_)&&"true"!==r&&(c(!0),t(!0));else try{let e=decodeURIComponent(i);b(JSON.parse(e)),t(!0)}catch(e){console.error("Error parsing affiliateInfo cookie",e)}},[]);let N=()=>{var e;(0,l.dv)("true","hideBackModalTemp",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname}),(null==S?void 0:null===(e=S.current)||void 0===e?void 0:e.checked)?((0,l.dv)("true","dismissBackModal",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname}),i&&((0,l.n6)("hideFairHousing"),(0,l.dv)("true","hideFairHousing",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname}))):((0,l.dv)("false","dismissBackModal",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname}),i&&((0,l.n6)("hideFairHousing"),(0,l.dv)("false","hideFairHousing",{path:"/",domain:"."+(0,o.G)().Misc().wwwLessDomainHostname})))};return!y||i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{}),e?(0,a.jsx)(g,{isAnimated:!0,showTitle:!1,modalDispatchEvent:t,modalDispatchState:e,modalItemLarge:!1,modalItemWidthAuto:!0,modalCustomClassContainer:"m-login-dialog forgot-password-modal modal__container--sirhuge small modal-localization__container",modalCloseActionIcon:"icon icon-close-slim",modalDispatchDismissCallback:()=>{N(),v(!0)},modalFocusCloseButton:!!i,modalCloseActionCustomClass:"modal__action  js-modal-close  ".concat(i?"is-focused  is-fair-housing-modal":""),children:(0,a.jsxs)("div",{className:"modal__section",children:[(0,a.jsx)("h2",{className:"modal-localization__title  ".concat(i?"is-fair-housing":""),children:(0,r.X)("global:welcome to sothebys")}),i?(0,a.jsxs)("div",{className:"modal-localization__fair-housing-wrapper",children:[(0,a.jsx)("p",{children:"Sotheby's International Realty's commitment to"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"".concat(w,"/resources/siteresources/my folder/footer-resources/fairhousingnotice.pdf"),target:"_blank",className:"u-color-sir-blue u-text-bold",children:"fair housing laws"}),",",(0,a.jsx)("a",{href:"".concat(w,"/resources/siteresources/my folder/footer-resources/Standardized Operating Procedures for Prospective Homebuyers in Order to Receive Services 040822.pdf"),target:"_blank",className:"u-color-sir-blue u-text-bold",children:" standard operating procedures"}),","]}),(0,a.jsx)("a",{href:"".concat(w,"/resources/siteresources/my folder/footer-resources/Reasonable Accommodations Modifications Real Estate Broker Version.pdf"),target:"_blank",className:"u-color-sir-blue u-text-bold",children:" and reasonable accommodations"}),"."]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"modal-localization__description",children:(0,r.X)("global:previously visited")}),(0,a.jsx)("h2",{className:"modal-localization__affiliate",children:(0,a.jsx)(u.Z,{regex:/sotheby.?s international realty/i,replace:"<span class='sir js-fitty-reference' style='display: block; white-space: nowrap;'>Sotheby's International Realty</span>",children:null==d?void 0:d.name})}),(0,a.jsx)("div",{className:"divider"}),(0,a.jsx)("p",{className:"modal-localization__question",children:(0,r.X)("global:would you like to go back")}),(0,a.jsxs)("div",{className:"modal-localization__buttons",children:[(0,a.jsx)("a",{href:null==d?void 0:d.url,className:"modal-localization__button",onClick:()=>{(null==d?void 0:d.url)&&(N(),window.location.href=d.url),v(!0),t(!1)},children:(0,r.X)("global:yes, go to local experience")}),(0,a.jsx)("button",{className:"modal-localization__button",onClick:()=>{N(),v(!0),t(!1)},children:(0,r.X)("global:no, stay here")})]})]}),(0,a.jsx)(f.Z,{inputId:"backmodal_dismiss",inputBoxObjectCustomClass:"checkbox__input",inputType:"checkbox",inputName:"backmodal_dismiss",inputRef:S,inputDefaultValue:void 0,inputLabelTitle:(0,r.X)("global:do not show this message"),inputDefaultChecked:!1})]})}):null]}):null};t.default=b},42288:function(e,t,i){"use strict";i.r(t);var a=i(85893);i(67294),i(232);let s=e=>{let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:t})};t.default=s},49647:function(){},232:function(){},13032:function(e,t,i){var a={"./AffinityDefault/AffinityDefault":[99487,9,99487],"./AffinityDefault/AffinityDefault.scss":[9770,7,9770],"./AffinityDefault/AffinityDefault.tsx":[99487,9,99487],"./AffinityDefault/inline":[82869,9,18672],"./AffinityDefault/inline.ts":[82869,9,18672],"./SIR/SIR":[45485,9,45485],"./SIR/SIR.scss":[38613,7,38613],"./SIR/SIR.tsx":[45485,9,45485],"./SIR/inline":[19682,9,19682],"./SIR/inline.ts":[19682,9,19682],"./SirHuge/SirHuge":[89154,9,89154],"./SirHuge/SirHuge.scss":[20,7,20],"./SirHuge/SirHuge.tsx":[89154,9,89154],"./SirHuge/inline":[70874,9,70874],"./SirHuge/inline.ts":[70874,9,70874]};function s(e){if(!i.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],s=t[0];return i.e(t[2]).then(function(){return i.t(s,16|t[1])})}s.keys=function(){return Object.keys(a)},s.id=13032,e.exports=s}}]);