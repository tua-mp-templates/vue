module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'standard',
        'plugin:vue/essential',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true
        },
    },
    plugins: ['vue'],
    rules: {
        'indent': [2, 4],
        'promise/param-names': 0,
        'comma-dangle': [2, 'always-multiline'],
    },
    globals: {
        wx: true,
        App: true,
        Page: true,
        getApp: true,
        getPage: true,
        Component: true,
    },
}
