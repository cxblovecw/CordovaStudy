function success(imageData){
    // 成功的时候触发
    // 将图片路径赋值给img标签
    let img=document.getElementById('myImg');
    img.src=imageData;
}
function fail(error){
    // 发生异常时触发的事件
    alert('获取照片失败！')
}
document.addEventListener('deviceReady',function(){
    document.getElementById('photograph').onclick=function(){
        navigator.camera.getPicture(success,fail,{
            // 图片质量 0~100
            quality:100,   
             
            // 图片URI形式 
            // 常量使用：Camera.DestinationType.DATA_URL 
            // DATA_URL   或 0 返回base64编码字符串
            // FILE_URI   或 1 返回图片文件URI
            // NATIVE_URI 或 2 返回图片本机URI
            destinationType:1,    
           
            // 图片的来源 
            // 常量使用：Camera.PictureSourceType.CAMERA
            // PHOTOLIBRARY    或 0 打开相册
            // CAMERA          或 1 打开相机
            // SAVEDPHOTOALBUM 或 2 打开已保存的相册
            sourceType:1,       
            
            // 图片缩放宽度
            targetWidth:150,
            
            // 图片缩放高度
            targetHeight:150,

            // 是否可以编辑图片
            allowEdit:true,

            // 返回图片的类型 有JPEG和PNG两种
            // 常量使用：Camera.EncodingType.JPEG
            // JPEG 或 0 返回JPEG编码图像
            // PNG  或 1 返回PNG编码图片
            encodingType:0,

            // 是否校正图片方向
            correctOrientation:true,

            // 可以选择的媒体数据类型 
            // 常量使用：Camera.MediaType.VIDEO
            // PICTURE  或 0 仅允许选择图片。
            // VIDEO    或 1 仅允许视频选择。
            // ALLMEDIA 或 2 允许选择所有媒体类型。
            mediaType:Camera.MediaType.VIDEO,

            // 摄像头的方向:前置与后置
            // 常量使用: Camera.Direction.BACK
            // FRONT 或 0 前置摄像头。
            // BACK  或 1 后置摄像头
            cameraDirection:Camera.Direction.BACK,
            
            // 是否保存到相册
            saveToPhotoAlbum:true,
        })
    }
    document.getElementById('getPhotograph').onclick=function(){
        navigator.camera.getPicture(success,fail,{
            quality:100,
            sourceType:0,
        })
    }
})