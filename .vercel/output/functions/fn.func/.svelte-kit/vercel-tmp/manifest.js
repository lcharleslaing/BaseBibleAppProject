export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","menu/back.png","menu/books.png","menu/font-size-large.png","menu/forward.png","menu/home.svg","menu/minus.png","menu/plus.png","menu/search.svg","menu/settings.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BInu2sd9.js","app":"_app/immutable/entry/app.Comp76q9.js","imports":["_app/immutable/entry/start.BInu2sd9.js","_app/immutable/chunks/entry.CKmRHDUB.js","_app/immutable/chunks/scheduler.uzwggMLT.js","_app/immutable/entry/app.Comp76q9.js","_app/immutable/chunks/scheduler.uzwggMLT.js","_app/immutable/chunks/index.nbVkiSHc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/bible",
				pattern: /^\/api\/bible\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bible/_server.ts.js'))
			},
			{
				id: "/api/bible/[bookId]/chapters",
				pattern: /^\/api\/bible\/([^/]+?)\/chapters\/?$/,
				params: [{"name":"bookId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bible/_bookId_/chapters/_server.ts.js'))
			},
			{
				id: "/api/bible/[bookId]/[chapterId]/verses",
				pattern: /^\/api\/bible\/([^/]+?)\/([^/]+?)\/verses\/?$/,
				params: [{"name":"bookId","optional":false,"rest":false,"chained":false},{"name":"chapterId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/bible/_bookId_/_chapterId_/verses/_server.js'))
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/posts/_server.ts.js'))
			},
			{
				id: "/books/[bookId]",
				pattern: /^\/books\/([^/]+?)\/?$/,
				params: [{"name":"bookId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/books/[bookId]/chapters/[chapterId]",
				pattern: /^\/books\/([^/]+?)\/chapters\/([^/]+?)\/?$/,
				params: [{"name":"bookId","optional":false,"rest":false,"chained":false},{"name":"chapterId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
