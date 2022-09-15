const { ESBuildMinifyPlugin } = require("esbuild-loader");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (config, options) => {
  // if you console log here, you can see what's inside the config
  console.log("config is -------", config.optimization.minimizer);
  // remove 2 first minimizers, hoping they are the TerserPlugin
  //   config.optimization.minimizer.shift();
  //   config.optimization.minimizer.shift();

  config.optimization.minimizer.unshift(
    new ESBuildMinifyPlugin({
      target: "es2020", // Syntax to compile to (see options below for possible values),
      css: true,
      minify: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
      sourcemap: false,
    })
  );
  config.plugins.push(new BundleAnalyzerPlugin());
  console.log(config.module.rules);
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: "esbuild-loader",
    options: {
      loader: "ts", // Or 'ts' if you don't need tsx
      target: "es2015",
    },
  });
  return config;
};
