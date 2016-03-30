// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

//baseUrl:定义根路径，所有文件加载可基于它查找；
//如果对于特别文件想基于自身相对路径查找：有3种情况：1.end with ‘.js’;2.urls with 'http' or 'https:';3.start with '/'
//paths:定义各种模块的简易匹配路径
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app_easy: '../app' //基于lib文件夹，../代表www文件夹，于是../app就代表了www/app这个文件夹
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app_easy/main']);
