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
  source: ".",
  output: "dist",

  collections_config: {
    posts: {
      path: "src/pages/posts",
      output: true,
      parser: "front-matter",
      glob: ['**/*.md'],
      url: "/posts/[slug]"
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
      _enabled_editors: ['content', 'visual']
    },
    tags: {
      path: "src/pages/tags",
      output: true,
      parser: "front-matter",
      url: "/tags/[slug]",
      glob: ['**/*.md'],
      filter: {
        exclude: ["index.md"]
      },
      _enabled_editors: ['data']
    },
    pages: {
      path: "src/pages",
      output: true,
      parser: "front-matter",
      url: "/[slug]",
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
  paths: { uploads: 'public', static: 'public' },
}