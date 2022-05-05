const { getDefaultConfig  } = require('expo/metro-config');
const exclusionList  = require('metro-config/src/defaults/exclusionList');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.blacklistRE = exclusionList([/amplify\/#current-cloud-backend\/.*/]);

module.exports = defaultConfig;