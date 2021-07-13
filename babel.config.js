module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          'source/api': './source/api',
          'source/assets': './source/assets',
          'source/context': './source/context',
          'source/languages': './source/languages',
          'source/navigation': './source/navigation',
          'source/redux': './source/redux',
          'source/screens': './source/screens',
          'source/screens/animations': './source/screens/animations',
          'source/shared': './source/shared',
          'source/theme': './source/theme',
          'source/utils': './source/utils'
        },
      },
    ],
  ],
};
