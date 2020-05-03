cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-baidu-ocr.BaiduOcr",
      "file": "plugins/cordova-baidu-ocr/www/BaiduOcr.js",
      "pluginId": "cordova-baidu-ocr",
      "clobbers": [
        "BaiduOcr"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-baidu-ocr": "1.1.1"
  };
});