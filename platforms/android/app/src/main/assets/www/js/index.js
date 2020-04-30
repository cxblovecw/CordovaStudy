document.addEventListener('deviceReady',function(){
   document.getElementById('network').onclick=function(){

       let status={}
       status[Connection.NONE]=["离线状态"];
       status[Connection.WIFI]=["WIFT状态"];
       status[Connection.CELL]=["1G状态？？"];
       status[Connection.CELL_2G]=["2G状态"];
       status[Connection.CELL_3G]=["3G状态"];
       status[Connection.CELL_4G]=["4G状态"];
       status[Connection.ETHERNET]=["连接的是以太网"];
       status[Connection.UNKNOWN]=["未知状态"];
       alert(navigator.connection.type);         // 当前状态
       alert(`您当前的状态为:${status[navigator.connection.type]}`);   
   }
   document.addEventListener('online',function(){
       alert("在线状态");
   })
   document.addEventListener('offline',function(){
       alert('离线状态');
   })
})
