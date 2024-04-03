import { c as create_ssr_component, o as onDestroy, d as add_attribute, a as each, v as validate_component } from "../../chunks/ssr.js";
import { g as goto } from "../../chunks/client.js";
import { f as fontSize } from "../../chunks/fontSizeStore.js";
const css$1 = {
  code: ".icon-button.svelte-q45kf{background:none;border:none;cursor:pointer}",
  map: null
};
const MenuBars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lastScrollY;
  let showTopMenu = false;
  let showBottomMenu = false;
  let autoHideTimeout;
  function increaseFontSize() {
    console.log("increaseFontSize called");
    fontSize.update((size) => {
      const newSize = size + 2;
      if (typeof window !== "undefined") {
        localStorage.setItem("fontSize", newSize.toString());
      }
      return newSize;
    });
  }
  function decreaseFontSize() {
    console.log("decreaseFontSize called");
    fontSize.update((size) => {
      const newSize = Math.max(12, size - 2);
      if (typeof window !== "undefined") {
        localStorage.setItem("fontSize", newSize.toString());
      }
      return newSize;
    });
  }
  const isBrowser = typeof window !== "undefined";
  const topIcons = [
    {
      src: "/menu/books.png",
      alt: "Books",
      action: () => goto()
    },
    {
      src: "/menu/search.svg",
      alt: "Search",
      action: () => console.log("Search clicked")
    }
  ];
  const bottomIcons = [
    {
      src: "/menu/back.png",
      alt: "Back",
      action: () => {
        if (isBrowser)
          window.history.back();
      }
    },
    {
      src: "/menu/plus.png",
      alt: "Bigger",
      action: () => increaseFontSize()
    },
    {
      src: "/menu/minus.png",
      alt: "Smaller",
      action: () => decreaseFontSize()
    },
    {
      src: "/menu/forward.png",
      alt: "Forward",
      action: () => {
        if (isBrowser)
          window.history.forward();
      }
    }
  ];
  function handleScroll() {
    const currentScrollY = window.scrollY;
    clearTimeout(autoHideTimeout);
    showTopMenu = currentScrollY > lastScrollY;
    showBottomMenu = !showTopMenu;
    lastScrollY = currentScrollY;
    autoHideTimeout = setTimeout(
      () => {
        showTopMenu = false;
        showBottomMenu = false;
      },
      5e3
    );
  }
  onDestroy(() => {
    if (isBrowser) {
      window.removeEventListener("scroll", handleScroll);
    }
    clearTimeout(autoHideTimeout);
  });
  $$result.css.add(css$1);
  return `<div${add_attribute(
    "class",
    showTopMenu ? "fixed left-0 top-0 z-50 w-full bg-white opacity-100 shadow-md transition-opacity duration-300" : "pointer-events-none fixed left-0 top-0 z-50 w-full bg-white opacity-0 shadow-md transition-opacity duration-300",
    0
  )}><div class="flex items-center justify-around p-4">${each(topIcons, ({ src, alt, action }) => {
    return `<button class="icon-button svelte-q45kf"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="h-6 w-6"> </button>`;
  })}</div></div> <div${add_attribute(
    "class",
    showBottomMenu ? "fixed bottom-0 left-0 z-50 w-full bg-white opacity-100 shadow-md transition-opacity duration-300" : "pointer-events-none fixed bottom-0 left-0 z-50 w-full bg-white opacity-0 shadow-md transition-opacity duration-300",
    0
  )}><div class="flex items-center justify-around p-4">${each(bottomIcons, ({ src, alt, action }) => {
    return `<button class="icon-button svelte-q45kf"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="h-6 w-6"> </button>`;
  })}</div> </div>`;
});
const css = {
  code: "body{min-height:calc(100vh + 5rem);display:flex;flex-direction:column}main{flex:1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(MenuBars, "MenuBars").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
