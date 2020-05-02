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

 // 
    document.getElementById('prompt').onclick=function(){
        // 接收四个参数(消息，回调函数，标题，按钮名称的数组,默认文本)
        navigator.notification.prompt('我是信息', function(object){
        // 接收的是一个对象 {buttonIndex:数字,input1:'字符串}
        console.log(object)
        // 打印文本内容  这里的问题的属性名是 input1 也不知道为啥要加个1
        alert(object.input1)
        // 根据不同的buttonIndex打印不同的内容
        if(object.buttonIndex===1){
            alert("按下按钮1")
        }else if(object.buttonIndex===2){
            alert("按下按钮2")
        }else if(object.buttonIndex===3){
            alert("按下按钮3")
        }
        }, ['标题1','标题2'], ['按钮1','按钮2','按钮3'],'默认文本')
    }

    // 铃声提示 参数为时间  这个比较简单
    document.getElementById('beep').onclick=function(){
        navigator.notification.beep(3);
    }
})