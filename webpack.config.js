/* eslint-disable global-require */
/**
 * Returns webpack configuration objects
 */

const dotenv = require('dotenv');

if (process.env.DOTENV_INJECT === 'true' || process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

function webpackConfig() {
    if (process.env.NODE_ENV === 'production') {
        return require('./webpack/conf.prod')();
    }

    return require('./webpack/conf.dev')();
}

module.exports = () => webpackConfig();

