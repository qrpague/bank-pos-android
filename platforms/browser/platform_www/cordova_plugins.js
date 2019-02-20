cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/gertec-epos-700/www/GertecEPOS700.js",
        "id": "gertec-epos-700.GertecEPOS700",
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
}
// BOTTOM OF METADATA
});