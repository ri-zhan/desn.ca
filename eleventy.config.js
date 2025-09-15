import yaml from "js-yaml";
import { HtmlBasePlugin } from "@11ty/eleventy";


export default function (eleventyConfig) {
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/js");

	return {
		dir: {
			input: 'src',
			output: '_site',
			data: '_data',
		},
		// templateFormats: ['html', 'md', 'liquid'],
		// htmlTemplateEngine: 'liquid',
	};
};

// module.exports = '/{{ page.filePathStem }}.html'