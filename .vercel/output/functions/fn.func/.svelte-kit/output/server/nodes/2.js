import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DFQ0YlU4.js","_app/immutable/chunks/scheduler.uzwggMLT.js","_app/immutable/chunks/index.nbVkiSHc.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.CKmRHDUB.js"];
export const stylesheets = [];
export const fonts = [];
