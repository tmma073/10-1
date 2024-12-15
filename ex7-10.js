function BMI2() {
var weight = parseFloat(document.getElementById('input5').value);
var height = parseFloat(document.getElementById('input6').value) / 100; // cmをmに変換
var bmi = weight / (height * height);
var resultText;

if (bmi < 18.5) {
resultText = '低体重';
} else {
if (bmi < 25) {
resultText = '普通';
} else {
resultText = '肥満';
}
}

alert('BMIは' + bmi.toFixed(2) + ' - ' + resultText);
}
