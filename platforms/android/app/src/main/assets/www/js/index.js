document.addEventListener('deviceReady',function(){
    window.addEventListener('batterystatus',function(status){
        console.log(status)
        alert("BATTERY STATUS:  Level: " + status.level + " isPlugged: " + status.isPlugged)
    },false)
    window.addEventListener('batterylow',function(status){
        alert("BATTERY STATUS:  Level: " + status.level + " isPlugged: " + status.isPlugged)
    },false)
    
    window.addEventListener('batterycritical',function(status){
        alert("BATTERY STATUS:  Level: " + status.level + " isPlugged: " + status.isPlugged)
    },false)
})
