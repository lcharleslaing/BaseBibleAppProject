import { c as create_ssr_component, a as each, e as escape } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let books = [];
  return `<div class="m-6" data-svelte-h="svelte-wgkje5"><h1 class="upp text-center text-4xl font-black">Bible App</h1> <p class="text-center">King James Version Bible</p></div> <div class="m-4 grid grid-cols-3 gap-1">${each(books, (book) => {
    return `<button class="btn btn-primary">${escape(book.name)}</button>`;
  })}</div>`;
});
export {
  Page as default
};
