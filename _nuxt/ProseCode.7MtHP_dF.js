import{d as y,r as l,aj as k,ak as w,y as b,b as a,c as p,e as m,g as h,w as S,X as f,J as _,T as $,n as C,a8 as x,p as I,i as z,l as v,t as N,f as P,Z as T}from"./entry.J2J-HGon.js";const V=e=>(I("data-v-dd8b8674"),e=e(),z(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=k();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=b(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(B,d)=>{const i=x;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[h($,{name:"fade"},{default:S(()=>{var u,r;return[o.value==="copied"?(a(),f(i,{key:0,name:(u=_(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),f(i,{key:1,name:(r=_(c).copyButton)==null?void 0:r.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),j=v(R,[["__scopeId","data-v-dd8b8674"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=j;return a(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",D,N(e.filename),1)):P("",!0),T(s.$slots,"default",{},void 0,!0),h(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),O=v(E,[["__scopeId","data-v-dac9d8e9"]]);export{O as default};
