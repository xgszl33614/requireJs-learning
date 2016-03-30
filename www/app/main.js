define(function (require) {
    //'./'代表当前目录，因为此文件是由ap.js通过requirejs(['app_easy/main'])载入的，路径前会自动添加app_easy;
    var messages = require('./messages');
    //直接引入，基于页面(这里的页面是指加载requirejs的html页面，并不是main.js,也不是ap.js,)查找路径
    var messages2 = require('app/messages.js');

    var print = require('print');

    print(messages.getHello());
    print(messages2.getHello());
});
