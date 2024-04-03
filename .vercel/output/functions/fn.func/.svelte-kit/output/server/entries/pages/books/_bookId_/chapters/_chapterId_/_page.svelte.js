import { c as create_ssr_component, s as subscribe } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { f as fontSize } from "../../../../../../chunks/fontSizeStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $$unsubscribe_fontSize;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_fontSize = subscribe(fontSize, (value) => value);
  $$unsubscribe_page();
  $$unsubscribe_fontSize();
  return `${`<p data-svelte-h="svelte-5ncrus">Loading verses...</p>`}`;
});
export {
  Page as default
};
