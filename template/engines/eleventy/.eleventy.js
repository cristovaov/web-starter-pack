module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('static/css');
  eleventyConfig.addPassthroughCopy('static/js');
  eleventyConfig.addPassthroughCopy('static/img');

  return {
    templateFormats: [
      'md',
      'html',
      'njk',
      'liquid',
      'ico',
      'png',
      'svg',
      'webmanifest',
      'xml'
    ],
    pathPrefix: '/',
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'static',
      output: 'dist',
      includes: '_includes'
    }
  };
};
