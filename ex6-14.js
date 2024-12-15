function imgchange5() {
var img = document.getElementById("lOgo");
img.src = './image/0_20140709155407.jpg';
setTimeout(function() {
img.src = './image/11483cbadd346c4eb5c3f49e9e2fc682.webp'; // 3秒後に元の画像のソースに戻す
}, 3000);
}
