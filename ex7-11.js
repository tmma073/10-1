function toshi1() {
var x = document.getElementById('toshi1').value;
var y;
if (x % 4 === 0) {
if (x % 100 === 0) {
if (x % 400 === 0) {
y = x + '年は閏年'; //400で割り切れる場合
} else {
y = x + '年は平年'; //100で割り切れて400で割り切れない場合
}
} else {
y = x + '年は閏年'; //4で割り切れて100で割り切れない場合
}
} else {
y = x + '年は平年'; //4で割り切れない場合
}
alert('y'); }

  
