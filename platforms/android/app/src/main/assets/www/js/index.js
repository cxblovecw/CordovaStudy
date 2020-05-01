document.addEventListener('deviceReady',function(){
  document.getElementById('vibration').onclick=function(){
    // 振动时间
    // ios忽略指定的时间 使用系统预设的时间
    // window最长5秒 最短1ms
    navigator.vibrate(2000);
  }
  document.getElementById('sustained-vibration').onclick=function(){
    // 模式振动
    // 振动一秒 停一秒 振动两秒 停两秒 振动三秒 停三秒
    // 
    navigator.vibrate([1000,1000,2000,2000,3000])
  }
  document.getElementById('stopVibration').onclick=function(){
    // 将时间设置为 0 即可消除振动
    navigator.vibrate(0);
  }
})