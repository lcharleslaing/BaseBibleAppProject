import { c as create_ssr_component, s as subscribe, a as each, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let chapters = [];
  $$unsubscribe_page();
  return `<div class="m-6 grid grid-cols-6 gap-1">${each(chapters, (chapter) => {
    return ` <button class="btn btn-primary">${escape(chapter.chapterNumber)}</button>`;
  })}</div>`;
});
export {
  Page as default
};
