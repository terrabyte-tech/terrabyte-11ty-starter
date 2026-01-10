const ui = require("@terrabyte/web-ui");

module.exports = function(eleventyConfig) {
  // Register shared filters + transforms from the UI package
  ui.registerFilters(eleventyConfig);
  ui.registerTransforms(eleventyConfig);

  // Starter-specific passthroughs
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.png");

  // Starter-specific watch targets
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/js");
  eleventyConfig.addWatchTarget("src/img");

  // Starter-specific shortcodes
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
