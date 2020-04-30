document.getElementById('set').onclick=function(){
    localStorage.setItem('name','xxx');
    localStorage.setItem('age',18);
}
document.getElementById('get').onclick=function(){
    alert(localStorage.getItem('name')+localStorage.getItem('age'));
}
document.getElementById('remove').onclick=function(){
    // 指定单个删除
    localStorage.removeItem('name');
}
document.getElementById('getByKey').onclick=function(){
    // key是根据字母顺序的 字母越小排越前
    alert(localStorage.key(0))
}
document.getElementById('length').onclick=function(){
    alert(localStorage.length);
}
document.getElementById('clear').onclick=function(){
    // 全部删除
    localStorage.clear();
}
