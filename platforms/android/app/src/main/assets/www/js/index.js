document.addEventListener('deviceReady',function(){
    document.getElementById('alert').onclick=function(){
        // 接收四个参数(消息，回调函数，标题，按钮名称)
        navigator.notification.alert('我是消息',function(){
            alert("我是回调函数")
        },'我是标题','我是按钮')
    }
    
    document.getElementById('confirm').onclick=function(){
        navigator.notification.confirm('我是消息',function(index){
            alert(index)
            if(index===1){
                alert("按下按钮1")
            }else if(index===2){
                alert("按下按钮2")
            }else if(index===3){
                alert("按下按钮3")
            }
        },'我是标题',['按钮1','按钮2','按钮3'])
    }

    document.getElementById('prompt').onclick=function(){
        // 接收四个参数(消息，回调函数，标题，按钮名称)
        navigator.notification.prompt('我是信息', function(object){
            // 接收的是一个对象 {buttonIndex:数字,input:'字符串}
            console.log(object)
            alert(object.input1)
            if(object.buttonIndex===1){
                alert("按下按钮1")
            }else if(object.buttonIndex===2){
                alert("按下按钮2")
            }else if(object.buttonIndex===3){
                alert("按下按钮3")
            }
        }, ['标题1','标题2'], ['按钮1','按钮2','按钮3'],'默认文本')
    }
  document.getElementById('beep').onclick=function(){
      navigator.notification.beep(3);
  }
})