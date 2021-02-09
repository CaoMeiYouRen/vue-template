const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    extends: [
        'cmyr/vue'
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': [1], // 要求导出函数和类的公共类方法的显式返回和参数类型
    },
}
