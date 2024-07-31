const { defineConfig } = require('@vue/cli-service')
const { loadESLint } = require('eslint')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/styles/functions";
					@import "@/styles/colors";
					@import "@/styles/variables";
				`,
			},
		},
	},
});

