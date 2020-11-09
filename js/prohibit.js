document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
        alert('技术交流,请联系我：https://blog.csdn.net/stray_0212?spm=1010.2135.3001.5113');
        return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
        alert('技术交流,请联系我：https://blog.csdn.net/stray_0212?spm=1010.2135.3001.5113');
        return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
        alert('技术交流,请联系我：https://blog.csdn.net/stray_0212?spm=1010.2135.3001.5113');
        return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
        alert('技术交流,请联系我：https://blog.csdn.net/stray_0212?spm=1010.2135.3001.5113');
        return false;
    }
}
document.oncontextmenu=function(){
    alert('技术交流,请联系我：https://blog.csdn.net/stray_0212?spm=1010.2135.3001.5113');
    return false;
}