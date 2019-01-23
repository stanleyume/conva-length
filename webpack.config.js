const path = require('path');

module.exports = {
  entry: './src/length.js',
  output: {
    filename: 'length.js',
    path: path.resolve(__dirname, 'dist')
  }
};
