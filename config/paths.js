var path = require('path');

function resolve(relativePath) {
    return path.resolve(__dirname, relativePath);
}

module.exports = {
    appBuild: resolve('../build'),
    appHtml: resolve('../index.html'),
    appPackageJson: resolve('../../package.json'),
    appSrc: resolve('../src'),
    appNodeModules: resolve('../../package.json'),
    ownNodeModules: resolve('../../package.json'),
    common: resolve('../../common'),
    root: resolve('../../')
};
