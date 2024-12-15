function BMI() {
let weight =parseFloat(document.getElementById('input3').value);
let height =parseFloat(document.getElementById('input4').value);

//入力値のバリエーション
if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
alert("正しい数値を入力してください");
return;}

//BMIの計算
let bmi = weight / ((height / 100) * (height / 100));

//結果の表示
document.getElementById('bmi-result').innerText = 
"BMIは" + bmi.toFixed(2) + "です";}
