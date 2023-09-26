import{j as t}from"./jsx-runtime-0741ab7f.js";import{a as T,B as f,b as x}from"./index-fdd6c673.js";import{r as i}from"./index-902e4630.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const g=r=>{const[d,o]=i.useState(!1),a=i.useRef(0);return i.useEffect(()=>()=>clearTimeout(a.current),[]),t.jsxs(t.Fragment,{children:[t.jsx(f,{onClick:()=>{o(!1),window.clearTimeout(a.current),a.current=window.setTimeout(()=>{o(!0)},10)},children:"Activate toast"}),t.jsx(x,{open:d,onOpenChange:o,...r})]})},E={title:"Feedback/Toast",component:g,decorators:[r=>t.jsx(T,{css:{display:"flex"},children:r()})]},e={args:{toastTitle:"Optional toast title",toastDescription:"Toast description"}},s={args:{toastDescription:"Toast description"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    toastTitle: "Optional toast title",
    toastDescription: "Toast description"
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    toastDescription: "Toast description"
  }
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const y=["Primary","WithoutTitle"];export{e as Primary,s as WithoutTitle,y as __namedExportsOrder,E as default};
//# sourceMappingURL=Toast.stories-becbb052.js.map
