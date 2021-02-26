console.log('ENV=', process.env);

process.env['VLC_PLUGIN_PATH'] = "c:\\vlc_home\\plugins;";

console.log('ENV=', process.env);

//module.exports = require('./build/Debug/WebChimera.js.node')
module.exports = require("bindings")("WebChimera.js");
