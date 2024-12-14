function BMI(){
let weight =parseFloat(document.getElementById('input3').value);
let height =parseFloat(document.getElementById('input4').value);

if (isNaN(weight) || isNaN(height) || height <=0){
alert("正しい数値を入力してください");
return;}

let bmi = weight / (height / 100) * (height / 100));

alert("BMIは" + bmi.toFixed(2) + "です");}
