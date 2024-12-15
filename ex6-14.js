function imgchange5() { 
let img = document.getElementById("lOgo")
img.scr = "./image/0_20140709155407.jpg";

//3秒後に元の画像に戻す
setTimeout(function() { 
img.src = "./image/11483cbadd346c4eb5c3f49e9e2fc682.webp";
}, 3000);
}
