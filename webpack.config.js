// entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname, 'public');

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);

  return {
    entry: './src/app.js',
    mode: 'development',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};

// module.exports = {
//   entry: './src/app.js',
//   mode: 'development',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.s?css$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   devtool: 'cheap-module-eval-source-map',
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     historyApiFallback: true
//   }
// };
