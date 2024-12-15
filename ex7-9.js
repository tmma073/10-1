function nazo5() {
var answer = document.getElementById('answer5').value;
if (answer == '夢') {
alert('あたり!'); // 漢字の「夢」の場合
} else if (answer == 'ゆめ') {
alert('あたり!'); // ひらがなの「ゆめ」の場合
} else {
alert('はずれ!'); // それ以外の場合
}
}
