module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
    'module-resolver',
    {
      root: ['./'],
      extensions: [
        '.ts',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        // This has to be mirrored in tsconfig.json
        '@common': './src/common',
        '@screens': './src/screens',
        '@router': './src/router/*',
        '@components': './src/common/components*',
        '@theme': './src/common/theme*',
        '@style': './src/common/style*',
      },
    },
  ],'react-native-reanimated/plugin',[
    'module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
    },
  ], '@babel/plugin-transform-flow-strip-types',  // added this line
  ['@babel/plugin-transform-private-methods', {loose: true}] ] // added this line]
  
};