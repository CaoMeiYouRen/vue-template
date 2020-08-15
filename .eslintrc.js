const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        commonjs: true,
        node: true,
        mocha: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/typescript',
        'eslint:recommended',
        'cmyr',
    ],
    plugins: [
        'vue',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: new Date().getFullYear(),
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    parser: 'vue-eslint-parser',
    rules: {
        'vue/array-bracket-spacing': [2],
        'vue/arrow-spacing': [2],
        'vue/block-spacing': [2],
        'vue/brace-style': [2],
        'vue/camelcase': [2],
        'vue/comma-dangle': [2],
        'vue/component-name-in-template-casing': [2],
        'vue/eqeqeq': [2],
        'vue/key-spacing': [2],
        'vue/match-component-file-name': [2],
        'vue/object-curly-spacing': [2],
        'vue/html-indent': [2, 4], // vue中缩进为4
        'vue/html-quotes': [[2], 'double'], // vue中用双引号
        'vue/require-default-prop': [0],
        'vue/html-self-closing': [IS_PROD ? 2 : 0],
        'no-empty': IS_PROD ? 2 : 0, // 禁止有空代码块
        'prefer-const': IS_PROD ? 2 : 0, // 建议使用const
        'no-useless-return': IS_PROD ? 2 : 0, // 禁止多余的 return 语句
    },
}
