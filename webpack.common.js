const path = require('path');

module.exports = {
  entry: {
    app: './scripts/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './scripts/main.js',
  },
};
