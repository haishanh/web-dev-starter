# Snapshot report for `test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://ava.li).

## non-prod config snapshot

> Snapshot 1

    {
      commonsChunkPlugin: CommonsChunkPlugin {
        async: undefined,
        children: undefined,
        chunkNames: [
          'vendor',
        ],
        deepChildren: undefined,
        filenameTemplate: undefined,
        ident: '/Users/haishan/repo/h/web-dev-starter/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0',
        minChunks: Infinity,
        minSize: undefined,
        selectedChunks: undefined,
      },
      cssDevRule: {
        exclude: /\.module\.css$/,
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssModulesDevRule: {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssModulesProdRule: {
        test: /\.module\.css$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 1,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssProdRule: {
        exclude: /\.module\.css$/,
        test: /\.css$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 1,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      definePlugin: DefinePlugin {
        definitions: {
          'process.env': {
            NODE_ENV: '"production"',
          },
        },
      },
      devtool: 'eval',
      entry: {
        app: [
          './src/index.js',
        ],
        vendor: [
          'babel-polyfill',
        ],
      },
      extractCssPlugin: ExtractTextPlugin {
        filename: 'style.css',
        id: 1,
        options: {
          allChunks: true,
        },
      },
      fileRule: {
        test: /\.(ttf|eot|woff|woff2)(\?.+)?$/,
        use: [
          'file-loader',
        ],
      },
      jsRule: {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      moduleConcatPlugin: ModuleConcatenationPlugin {
        options: {},
      },
      namedModulesPlugin: NamedModulesPlugin {
        options: {},
      },
      output: {
        filename: '[name].bundle.js',
        path: '/Users/haishan/repo/h/web-dev-starter/webpack/public',
        publicPath: '',
      },
      plugins: [
        CommonsChunkPlugin {
          async: undefined,
          children: undefined,
          chunkNames: [
            'vendor',
          ],
          deepChildren: undefined,
          filenameTemplate: undefined,
          ident: '/Users/haishan/repo/h/web-dev-starter/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0',
          minChunks: Infinity,
          minSize: undefined,
          selectedChunks: undefined,
        },
        NamedModulesPlugin {
          options: {},
        },
      ],
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)(\?.+)?$/,
          use: [
            'file-loader',
          ],
        },
        {
          exclude: /\.module\.css$/,
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
          ],
        },
        {
          exclude: /\.module\.scss$/,
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.module\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
      sassCssModuleDevRule: {
        test: /\.module\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassCssModuleProdRule: {
        test: /\.module\.scss$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 1,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassDevRule: {
        exclude: /\.module\.scss$/,
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassProdRule: {
        exclude: /\.module\.scss$/,
        test: /\.scss$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 1,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      uglifyJSPlugin: UglifyJsPlugin {
        options: {
          parallel: true,
        },
      },
    }

## prod config snapshot

> Snapshot 1

    {
      commonsChunkPlugin: CommonsChunkPlugin {
        async: undefined,
        children: undefined,
        chunkNames: [
          'vendor',
        ],
        deepChildren: undefined,
        filenameTemplate: undefined,
        ident: '/Users/haishan/repo/h/web-dev-starter/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js1',
        minChunks: Infinity,
        minSize: undefined,
        selectedChunks: undefined,
      },
      cssDevRule: {
        exclude: /\.module\.css$/,
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssModulesDevRule: {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssModulesProdRule: {
        test: /\.module\.css$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 2,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      cssProdRule: {
        exclude: /\.module\.css$/,
        test: /\.css$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 2,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
        ],
      },
      definePlugin: DefinePlugin {
        definitions: {
          'process.env': {
            NODE_ENV: '"production"',
          },
        },
      },
      devtool: 'eval',
      entry: {
        app: [
          './src/index.js',
        ],
        vendor: [
          'babel-polyfill',
        ],
      },
      extractCssPlugin: ExtractTextPlugin {
        filename: 'style.css',
        id: 2,
        options: {
          allChunks: true,
        },
      },
      fileRule: {
        test: /\.(ttf|eot|woff|woff2)(\?.+)?$/,
        use: [
          'file-loader',
        ],
      },
      jsRule: {
        exclude: /node_modules/,
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      moduleConcatPlugin: ModuleConcatenationPlugin {
        options: {},
      },
      namedModulesPlugin: NamedModulesPlugin {
        options: {},
      },
      output: {
        filename: '[name].bundle.js',
        path: '/Users/haishan/repo/h/web-dev-starter/webpack/public',
        publicPath: '',
      },
      plugins: [
        CommonsChunkPlugin {
          async: undefined,
          children: undefined,
          chunkNames: [
            'vendor',
          ],
          deepChildren: undefined,
          filenameTemplate: undefined,
          ident: '/Users/haishan/repo/h/web-dev-starter/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js1',
          minChunks: Infinity,
          minSize: undefined,
          selectedChunks: undefined,
        },
        NamedModulesPlugin {
          options: {},
        },
      ],
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)(\?.+)?$/,
          use: [
            'file-loader',
          ],
        },
        {
          exclude: /\.module\.css$/,
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
          ],
        },
        {
          test: /\.module\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
          ],
        },
        {
          exclude: /\.module\.scss$/,
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.module\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
                minimize: true,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: Function plugins {},
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
      sassCssModuleDevRule: {
        test: /\.module\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassCssModuleProdRule: {
        test: /\.module\.scss$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 2,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassDevRule: {
        exclude: /\.module\.scss$/,
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      sassProdRule: {
        exclude: /\.module\.scss$/,
        test: /\.scss$/,
        use: [
          {
            loader: '/Users/haishan/repo/h/web-dev-starter/node_modules/extract-text-webpack-plugin/dist/loader.js',
            options: {
              id: 2,
              omit: 1,
              remove: true,
            },
          },
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]---[name]---[local]---[hash:base64:5]',
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: Function plugins {},
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      uglifyJSPlugin: UglifyJsPlugin {
        options: {
          parallel: true,
        },
      },
    }
