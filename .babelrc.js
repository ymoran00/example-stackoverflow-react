const plugins = [
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-transform-arrow-functions",
    [
        'babel-plugin-import',
        {
            'libraryName': '@material-ui/core',
            // Use "'libraryDirectory': ''," if your bundler does not support ES modules
            'libraryDirectory': 'esm',
            'camel2DashComponentName': false
        },
        'core'
    ],
    [
        'babel-plugin-import',
        {
            'libraryName': '@material-ui/icons',
            // Use "'libraryDirectory': ''," if your bundler does not support ES modules
            'libraryDirectory': 'esm',
            'camel2DashComponentName': false
        },
        'icons'
    ],
    [
        'babel-plugin-import',
        {
            'libraryName': '@material-ui/styles',
            // Use "'libraryDirectory': ''," if your bundler does not support ES modules
            'libraryDirectory': 'esm',
            'camel2DashComponentName': false
        },
        'styles'
    ]
];

module.exports = {plugins,
    presets: [
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
};