

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/books/_bookId_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BD7STEwr.js","_app/immutable/chunks/scheduler.uzwggMLT.js","_app/immutable/chunks/index.nbVkiSHc.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.DstSY2ix.js","_app/immutable/chunks/entry.CKmRHDUB.js"];
export const stylesheets = [];
export const fonts = [];
