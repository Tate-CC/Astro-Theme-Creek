const getFilename = (filePath) => {
  const fileName = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.indexOf('.'));
  if (fileName === 'index') {
    return "";
  }
  if (fileName === '404') {
    return '404.html'
  }
  return `${fileName}/`
}

module.exports = {
  source: "src",
  output: "dist",

  collections_config: {
    posts: {
      path: "pages/posts",
      output: true,
      parser: "front-matter",
      glob: ['**/*.md'],
      url: (filePath) => `/posts/${getFilename(filePath)}`,
      _inputs: {
        hero: {
          type: 'image'
        },
        tags: {
          type: "multiselect",
          options: {
            values: "collections.tags"
          }
        }
      },
      _enabled_editors: ['visual', 'content']
    },
    tags: {
      path: "pages/tags",
      output: true,
      parser: "front-matter",
      url: (filePath) => `/tags/${getFilename(filePath)}`,
      glob: ['**/*.md'],
      filter: {
        exclude: ["index.md"]
      },
      _enabled_editors: ['data']
    },
    pages: {
      path: "pages",
      output: true,
      parser: "front-matter",
      url: (filePath) => `/${getFilename(filePath)}`,
      glob: ['**/*.md'],
      filter: {
        base: "strict"
      },
      _enabled_editors: ['visual']
    }
  },
  _inputs: {
    layout: { hidden: true }
  },
}