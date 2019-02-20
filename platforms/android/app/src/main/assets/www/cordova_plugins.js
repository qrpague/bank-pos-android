cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "gertec-epos-700.GertecEPOS700",
    "file": "plugins/gertec-epos-700/www/GertecEPOS700.js",
    "pluginId": "gertec-epos-700",
    "clobbers": [
      "gertecEPOS700"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "gertec-epos-700": "0.0.1"
};
// BOTTOM OF METADATA
});