module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("common/*.css");
    eleventyConfig.addPassthroughCopy("images");
};
