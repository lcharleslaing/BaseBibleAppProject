import{w as r}from"./entry.CKmRHDUB.js";function f(){const t=s(),{subscribe:n,set:o,update:i}=r(t);return{subscribe:n,set:e=>{typeof window<"u"&&localStorage.setItem("fontSize",e.toString()),o(e)},update:i}}function s(){if(typeof window<"u"){const t=localStorage.getItem("fontSize");return t?parseInt(t,10):16}return 16}const c=f();export{c as f};
