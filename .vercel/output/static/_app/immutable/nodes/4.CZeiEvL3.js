import{s as R,n as N,c as I,o as V}from"../chunks/scheduler.uzwggMLT.js";import{S as q,i as G,o as P,g as k,d as u,e as m,t as v,s as C,c as d,a as b,b as g,f as x,l as z,h as _,j as E,m as H,k as O,p as j}from"../chunks/index.nbVkiSHc.js";import{e as w}from"../chunks/each.D6YF6ztN.js";import{p as K}from"../chunks/stores.DstSY2ix.js";import{f as L}from"../chunks/fontSizeStore.xMKfno00.js";function D(c,e,s){const o=c.slice();return o[6]=e[s],o}function M(c){let e,s,o,l,n,p,h=w(c[0]),a=[];for(let r=0;r<h.length;r+=1)a[r]=F(D(c,h,r));return{c(){e=m("div"),s=m("h1"),o=v(c[1]),l=C(),n=v(c[2]),p=C();for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=d(r,"DIV",{class:!0});var f=b(e);s=d(f,"H1",{class:!0});var t=b(s);o=g(t,c[1]),l=x(t),n=g(t,c[2]),t.forEach(u),p=x(f);for(let i=0;i<a.length;i+=1)a[i].l(f);f.forEach(u),this.h()},h(){z(s,"class","text-center text-2xl font-black"),z(e,"class","m-6")},m(r,f){k(r,e,f),_(e,s),_(s,o),_(s,l),_(s,n),_(e,p);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,null)},p(r,f){if(f&2&&E(o,r[1]),f&4&&E(n,r[2]),f&17){h=w(r[0]);let t;for(t=0;t<h.length;t+=1){const i=D(r,h,t);a[t]?a[t].p(i,f):(a[t]=F(i),a[t].c(),a[t].m(e,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=h.length}},d(r){r&&u(e),H(a,r)}}}function T(c){let e,s="No verses found.";return{c(){e=m("p"),e.textContent=s},l(o){e=d(o,"P",{"data-svelte-h":!0}),O(e)!=="svelte-y3cf7d"&&(e.textContent=s)},m(o,l){k(o,e,l)},p:N,d(o){o&&u(e)}}}function A(c){let e,s="Loading verses...";return{c(){e=m("p"),e.textContent=s},l(o){e=d(o,"P",{"data-svelte-h":!0}),O(e)!=="svelte-5ncrus"&&(e.textContent=s)},m(o,l){k(o,e,l)},p:N,d(o){o&&u(e)}}}function F(c){let e,s,o,l=c[6].verseNumber+"",n,p,h,a=c[6].text+"",r,f;return{c(){e=m("div"),s=m("p"),o=m("strong"),n=v(l),p=v("."),h=C(),r=v(a),f=C(),this.h()},l(t){e=d(t,"DIV",{class:!0,style:!0});var i=b(e);s=d(i,"P",{});var y=b(s);o=d(y,"STRONG",{});var S=b(o);n=g(S,l),p=g(S,"."),S.forEach(u),h=x(y),r=g(y,a),y.forEach(u),f=x(i),i.forEach(u),this.h()},h(){z(e,"class","my-4"),j(e,"font-size",c[4]+"px")},m(t,i){k(t,e,i),_(e,s),_(s,o),_(o,n),_(o,p),_(s,h),_(s,r),_(e,f)},p(t,i){i&1&&l!==(l=t[6].verseNumber+"")&&E(n,l),i&1&&a!==(a=t[6].text+"")&&E(r,a),i&16&&j(e,"font-size",t[4]+"px")},d(t){t&&u(e)}}}function B(c){let e;function s(n,p){return n[3]?A:n[0].length===0?T:M}let o=s(c),l=o(c);return{c(){l.c(),e=P()},l(n){l.l(n),e=P()},m(n,p){l.m(n,p),k(n,e,p)},p(n,[p]){o===(o=s(n))&&l?l.p(n,p):(l.d(1),l=o(n),l&&(l.c(),l.m(e.parentNode,e)))},i:N,o:N,d(n){n&&u(e),l.d(n)}}}function J(c,e,s){let o,l;I(c,K,r=>s(5,o=r)),I(c,L,r=>s(4,l=r));let n=[],p="",h="",a=!0;return V(async()=>{const{bookId:r,chapterId:f}=o.params;try{const t=await fetch(`/api/bible/${r}/${f}/verses`);if(t.ok){const i=await t.json();s(1,p=i.bookName),s(2,h=i.chapterNumber),s(0,n=i.verses),s(3,a=!1)}else console.error("Failed to fetch chapter and verses: Response not OK")}catch(t){console.error("Failed to fetch chapter and verses:",t)}}),[n,p,h,a,l]}class Z extends q{constructor(e){super(),G(this,e,J,B,R,{})}}export{Z as component};
