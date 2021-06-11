(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[5439],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3008:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"introduction",title:"Introduction",slug:"/formal-verification",authors:"Frank Hillard"},c={unversionedId:"formal-verification/introduction",id:"formal-verification/introduction",isDocsHomePage:!1,title:"Introduction",description:"The Tezos blockchain has several advantages over its concurrents. One of them is the formal verification of smart contract. This module shows a brief overview of how Tezos smart contracts can be formally verified.",source:"@site/docs/formal-verification/introduction.md",sourceDirName:"formal-verification",slug:"/formal-verification",permalink:"/formal-verification",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/formal-verification/introduction.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1621417899,formattedLastUpdatedAt:"5/19/2021",frontMatter:{id:"introduction",title:"Introduction",slug:"/formal-verification",authors:"Frank Hillard"},sidebar:"docs",previous:{title:"Exam",permalink:"/defi/exam"},next:{title:"Coq, GADT and Mi-Cho-Coq",permalink:"/formal-verification/gadt-coq"}},l=[],s={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Tezos blockchain has several advantages over its concurrents. One of them is the ",(0,a.kt)("strong",{parentName:"p"},"formal verification of smart contract"),". This module shows a brief overview of how Tezos smart contracts can be formally verified. "),(0,a.kt)("p",null,"//TODO: Add one phase here about what is formal verification, and what is its purpose. The goal to to quickly inform the reader if he should continue reading or is not interested to go further."),(0,a.kt)("p",null,"We will first introduce some basic concepts of the ",(0,a.kt)("em",{parentName:"p"},"Type theory")," such as ",(0,a.kt)("em",{parentName:"p"},"GADT")," which allows inductive types on the ",(0,a.kt)("em",{parentName:"p"},"Calculus of Inductive Construction")," (CiC). The proof assistant ",(0,a.kt)("em",{parentName:"p"},"Coq"),", which is based on the CiC, is then used for proving theorems. "),(0,a.kt)("p",null,"We will also introduce the ",(0,a.kt)("em",{parentName:"p"},"Mi-Cho-Coq")," library (used by ",(0,a.kt)("em",{parentName:"p"},"Coq"),") to formalize a smart contract as a theorem. "),(0,a.kt)("p",null,"Finally, we will see how to use ",(0,a.kt)("em",{parentName:"p"},"Coq")," and ",(0,a.kt)("em",{parentName:"p"},"Mi-Cho-Coq")," to model the smart contract as a logical object (theorem). This theorem is formalized in ",(0,a.kt)("em",{parentName:"p"},"Gallina")," (Term) language, which follows the CiC principles. The script for proving the theorem is written in ",(0,a.kt)("em",{parentName:"p"},"Gallina")," (Vernacular), which provides ",(0,a.kt)("em",{parentName:"p"},"tactics")," and will be executed by the inference engine (Coq)."),(0,a.kt)("p",null,"The modeling of the theorem will be illustrated with a simple example: a ",(0,a.kt)("em",{parentName:"p"},"Vote")," smart contract."),(0,a.kt)("p",null,"//TODO: Small introductive schema/figure that recaps all that text above"))}u.isMDXComponent=!0}}]);