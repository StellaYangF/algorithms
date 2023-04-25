// @ts-check

const esbuild = require('esbuild')
const { resolve } = require('path')

const target = 'src'

esbuild.context({
	entryPoints: [resolve(__dirname, `../src/index.ts`)],
	outfile: resolve(__dirname, `../dist/index.js`),
	bundle: true, // bundle depended files
	sourcemap: true,
	format: "esm",
	platform: 'browser'
}).then(ctx => {
	console.log('~~~watching~~~', ctx)
	ctx.watch()
})