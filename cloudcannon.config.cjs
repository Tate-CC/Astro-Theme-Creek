module.exports = {
  "source": "src",
  "output": "dist",

  "collections_config": {
    "posts": {
      "path": "pages/posts",
      "output": true,
      "parser": "front-matter",
      "glob": ['**/*.md'],
      "url": (filePath) => `/posts/${filePath.slice(filePath.lastIndexOf('/') + 1, filePath.indexOf('.'))}/`,
    },
    "tags": {
      "path": "pages/tags",
      "output": "true",
      "parser": "front-matter",
      "url": (filePath) => `tags/${filePath.slice(filePath.lastIndexOf('/') + 1, filePath.indexOf('.'))}/`,
      "glob": ['**/*.md', '!**/index.md']
    },
    "pages": {
      "path": "pages",
      "output": true,
      "parser": "front-matter",
      "url": (filePath) => `/${filePath.slice(filePath.lastIndexOf('/') + 1, filePath.indexOf('.'))}/`,
      "glob": ['*.md', '!posts/*', '!tags/*'],
    }
  }
}