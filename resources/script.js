// 监听文件上传
function monitorFileChange() {
    $('#uploadFileElem').change(function() {
        var formFiles = $('#uploadFileElem')[0],
        files = $('#uploadFileElem')[0].files,
        imgUrl = getObjectURL(files[0]); // 返回一个对象Url，该URL用于指定源file[0]对象
        // 图片加载完获取图片的宽高
        var image = new Image();
        image.src = imgUrl;
        image.onload=function() { // 图片加载完条件判断
            var width = image.width;
            var height = image.height;
            var size = files[0].size;
            var type = files[0].type;
            console.log('本地上传 - 图片宽：'+ width + 'px');
            console.log('本地上传 - 图片高：'+ height + 'px');
            console.log('本地上传 - 图片大小：'+ size + 'byte');
            console.log('本地上传 - 图片大小：'+ size / (Math.pow(1024, 2)) + 'MB'); // 1024B = 1KB; 1024KB = 1MB; Math.pow(底数，底数的幂次方) —— 底数的幂次方
            console.log('本地上传 - 图片类型：'+ type + 'type');
        }
    });
}
// 获取图片线上路径
function getObjectURL(file){  
    var url=null   
    if(window.createObjectURL!=undefined){ // basic  
        url=window.URL.createObjectURL(file)  
    }else if(window.URL!=undefined){ // mozilla(firefox)  
        url=window.URL.createObjectURL(file)  
    } else if(window.webkitURL!=undefined){ // webkit or chrome  
        url=window.webkitURL.createObjectURL(file)  
    }  
    return url  ;
}

// 获取网路图片的属性
function networkFileAttribute() {
    var image = new Image();
    image.src = $('#netImgUrl').attr("src");
    image.onload=function() { // 图片加载完条件判断
        var width = image.width;
        var height = image.height;
        console.log('网络 - 图片宽：'+ width + 'px');
        console.log('网络 - 图片高：'+ height + 'px');
    }
}

$(function() {
    // 文件上传，获取上传图片的属性
    monitorFileChange();

    // 服务器图片，获取图片的属性
    networkFileAttribute();
});