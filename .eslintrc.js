module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'standard',
    'prettier'
  ],
  plugins: ['import', 'unused-imports'],

  rules: {
    //importの読み込み順のルール
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        // groupの間に改行を入れる
        'newlines-between': 'always'
      }
    ],

    // useEffectの依存配列のエラーを無効にする
    'react-hooks/exhaustive-deps': 'off',

    // importのcamelecaseを無効にする
    camelcase: [
      'error',
      {
        ignoreImports: true,
        // 特別に許可するもの
        allow: ['content_type']
      }
    ],

    // Next.jsで<img>要素を使用しても警告を出さないようにする
    '@next/next/no-img-element': 'off',

    // 使っていないimportは削除
    'unused-imports/no-unused-imports': 'error',

    //型はimport typeで表示
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ]
  }
}
