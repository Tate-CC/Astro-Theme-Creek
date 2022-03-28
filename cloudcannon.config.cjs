const getFilename = (filePath) => {
  const fileName = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.indexOf('.'));
  if (fileName.endsWith('index')) {
    return "";
  }
  return `${fileName}/`
}

module.exports = {
  "source": "src",
  "output": "dist",

  "collections_config": {
    "posts": {
      "path": "pages/posts",
      "output": true,
      "parser": "front-matter",
      "glob": ['**/*.md'],
      "url": (filePath) => `/posts/${getFilename(filePath)}`,
    },
    "tags": {
      "path": "pages/tags",
      "output": true,
      "parser": "front-matter",
      "url": (filePath) => `/tags/${getFilename(filePath)}`,
      "glob": ['**/*.md']
    },
    "pages": {
      "path": "pages",
      "output": true,
      "parser": "front-matter",
      "url": (filePath) => `/${getFilename(filePath)}`,
      "glob": ['**/*.md'],
    }
  }
}