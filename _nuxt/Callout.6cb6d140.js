import{d as _,r as o,b as p,c as f,e as t,g as v,n,J as l,am as g,an as h,a8 as y,k as C}from"./entry.be3f8900.js";import{r as c}from"./slot.16d291ed.js";import"./node.676c5e99.js";const V={class:"summary"},k={class:"content"},w=_({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:r}){const i=s,u=r,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(a,b)=>{const m=y;return p(),f("div",{class:n(["callout",[s.type]])},[t("span",{class:"preview",onClick:d},[t("span",V,[c(a.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),g(t("div",k,[c(a.$slots,"content",{},void 0,!0)],512),[[h,l(e)]])],2)}}});const I=C(w,[["__scopeId","data-v-c550c7db"]]);export{I as default};
