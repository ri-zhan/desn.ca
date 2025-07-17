import yaml from "js-yaml";

export default function (eleventyConfig) {
	eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
};