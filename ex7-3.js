function BMI() {
let weight =parseFloat(document.getElementById('input3').value);
let height =parseFloat(document.getElementById('input4').value);

//入力値の検証
if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
alert("正しい数値を入力してください");
return;}

//BMIの計算(身長はcmからmに変換)
let bmi = weight / ((height / 100) * (height / 100));

//結果の表示
alert("BMIは" + bmi.toFixed(2) + "です");
}
