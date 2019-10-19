module.exports = async ({ config, mode }) => {
  const rules = [
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.stories\.ts$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre'
    }
  ];
  rules.forEach((rule) => config.module.rules.push(rule));

  return config;
};
