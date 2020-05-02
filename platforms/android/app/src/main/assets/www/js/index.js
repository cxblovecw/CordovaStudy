document.addEventListener("deviceReady",function(){
    document.getElementById("createFile").addEventListener("click", createFile);
    document.getElementById("writeFile").addEventListener("click", writeFile);
    document.getElementById("readFile").addEventListener("click", readFile);
    document.getElementById("removeFile").addEventListener("click", removeFile);
})


function createFile() {
    var type = window.PERSISTENT;
    var size = 5*1024*1024;
    // 打开文件系统
    // 四个参数(存储类型,存储大小,成功时回调,失败时回调)
    window.requestFileSystem(type, size, successCallback, errorCallback)
    // 成功的回调函数的参数是一个 FileSystem对象
    function successCallback(fs) {
       console.log(fs);
       // fs.root是一个DirectoryEntry对象
       // fs.root.getFile(文件名,配置参数,成功回调函数,失败回调函数)
       // 参数 create:true true则是创建  exclusive:true时 文件存在则报错 false则不会
       // 成功时的回调函数的参数为fileEntry对象
       fs.root.getFile('log.txt', {create: true, exclusive: false}, function(fileEntry) {
           // fileEntry中的属性
           // fullPath isDirectory isFile name nativeURL
           // 方法 
           // createWriter(successCallback,failCallback) 写入文件使用
           // file(successCallback,failCallback)         读取文件使用
          alert('创建文件成功')
       }, errorCallback);
    }
 }
 function writeFile() {
    var type = window.TEMPORARY;
    var size = 5*1024*1024;
    // 打开文件系统
    window.requestFileSystem(type, size, successCallback, errorCallback)
    // 打开成功时的回调函数
    function successCallback(fs) {
          // fileSystem对象
       console.log(fs.root)
       fs.root.getFile('log.txt', {create: true}, function(fileEntry) {
          fileEntry.createWriter(function(fileWriter) {
             console.log(fileWriter)
             // fileWriter中的属性
             // error fileName length(字节长度) localUrl
             // 事件: onerror(e) onwriteend(e)
             fileWriter.onwriteend = function(e) {
                alert('成功完成');
             };
             fileWriter.onerror = function(e) {
                alert('写入失败: ' + e.toString());
             };
             fileWriter.write('写入的内容');
          }, errorCallback);
       }, errorCallback);
    } 
 }
 function readFile() {
    var type = window.TEMPORARY;
    var size = 5*1024*1024;
    window.requestFileSystem(type, size, successCallback, errorCallback)
    function successCallback(fs) {
       fs.root.getFile('log.txt', {}, function(fileEntry) {
          fileEntry.file(function(file) {
             // file对象
             // 属性:size大小  lastModified 最后修改时间  name文件名
             // start:读取的起始位置 end:读取的结束位置
             console.log(file);
             var reader = new FileReader();
             reader.readAsDataURL(file);
             reader.onloadend = function(e) {
                // 这里的this指的是FileReader对象 
                // 属性 result 表示读出来的内容
                // 方法 onerror onload onloadend onloadstart 见名知意
                var txtArea = document.getElementById('textarea');
                console.log(this)
                txtArea.value = this.result;
             };
          }, errorCallback);
       }, errorCallback);
    }  
 }	
 function removeFile() {
    var type = window.TEMPORARY;
    var size = 5*1024*1024;
    window.requestFileSystem(type, size, successCallback, errorCallback)
    function successCallback(fs) {
       fs.root.getFile('log.txt',{create:false}, function(fileEntry) {
          console.log(fileEntry)
        //   fileEntry.remove(function() {
        //      alert('文件删除成功');
        //   }, errorCallback);
       }, errorCallback);
    }  
 }	

 function errorCallback(error) {
    alert("ERROR: " + error.code)
 }