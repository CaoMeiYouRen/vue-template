import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash-es'
const requireComponent = require.context('@/components', true, /\.vue$/)
// 批量注册组件
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst( // 调整风格为首字母大写驼峰
        camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})
