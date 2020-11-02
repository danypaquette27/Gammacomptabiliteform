function page1suivant()
{
  var question1 = document.getElementById('question-1');
  var question2 = document.getElementById('question-2');
  var question3 = document.getElementById('question-3');
  var question4 = document.getElementById('question-4');
  var question5 = document.getElementById('question-5');
  var question6 = document.getElementById('question-6');
  var question7 = document.getElementById('question-7');
  var question8 = document.getElementById('question-8');
  var question9 = document.getElementById('question-9');
  var question10 = document.getElementById('question-10');
  var question11 = document.getElementById('question-11');
  var question12 = document.getElementById('question-12');
  var question13 = document.getElementById('question-13');
  var question14 = document.getElementById('question-14');
  var question15 = document.getElementById('question-15');
  var question16 = document.getElementById('question-16');
  var question17 = document.getElementById('question-17');
  var question18 = document.getElementById('question-18');
  var question19 = document.getElementById('question-19');
  var question20 = document.getElementById('question-20');
  var question21 = document.getElementById('question-21');
  var question22 = document.getElementById('question-22');
  var question23 = document.getElementById('question-23');
  var question24 = document.getElementById('question-24');
  var question25 = document.getElementById('question-25');
  var question26 = document.getElementById('question-26');
  var question27 = document.getElementById('question-27');
  var question28 = document.getElementById('question-28');
  var question29 = document.getElementById('question-29');
  var question30 = document.getElementById('question-30');
  var question31 = document.getElementById('question-31');
  var question32 = document.getElementById('question-32');
  var question33 = document.getElementById('question-33');
  var question34 = document.getElementById('question-34');
  var question35 = document.getElementById('question-35');
  var question36 = document.getElementById('question-36');
  var question37 = document.getElementById('question-37');
  var question38 = document.getElementById('question-38');
  var question39 = document.getElementById('question-39');
  var question40 = document.getElementById('question-40');
  var question41 = document.getElementById('question-41');
  var question42 = document.getElementById('question-42');
  var isError = false;
  
  console.log(question1.checked);
	console.log(question2.checked);
  console.log(question3.value);
  console.log(question6.value);
  
  isError = false;
  console.log(isError);
  
  
  question1.style.boxShadow = "0 0 black";
  question2.style.boxShadow = "0 0 black";
  question3.style.boxShadow = "0 0 black";
  question4.style.boxShadow = "0 0 black";
  question5.style.boxShadow = "0 0 black";
  question6.style.boxShadow = "0 0 black";
  question7.style.boxShadow = "0 0 black";
  question8.style.boxShadow = "0 0 black";
  question9.style.boxShadow = "0 0 black";
  question10.style.boxShadow = "0 0 black";
  question11.style.boxShadow = "0 0 black";
  question12.style.boxShadow = "0 0 black";
  question13.style.boxShadow = "0 0 black";
  question14.style.boxShadow = "0 0 black";
  question15.style.boxShadow = "0 0 black";
  question16.style.boxShadow = "0 0 black";
  question17.style.boxShadow = "0 0 black";
  question18.style.boxShadow = "0 0 black";
  question19.style.boxShadow = "0 0 black";
  question20.style.boxShadow = "0 0 black";
  question21.style.boxShadow = "0 0 black";
  question22.style.boxShadow = "0 0 black";
  question23.style.boxShadow = "0 0 black";
  question24.style.boxShadow = "0 0 black";
  question25.style.boxShadow = "0 0 black";
  question26.style.boxShadow = "0 0 black";
  question27.style.boxShadow = "0 0 black";
  question28.style.boxShadow = "0 0 black";
  question29.style.boxShadow = "0 0 black";
  question30.style.boxShadow = "0 0 black";
  question31.style.boxShadow = "0 0 black";
  question32.style.boxShadow = "0 0 black";
  question33.style.boxShadow = "0 0 black";
  question34.style.boxShadow = "0 0 black";
  question35.style.boxShadow = "0 0 black";
  question36.style.boxShadow = "0 0 black";
  question37.style.boxShadow = "0 0 black";
  question38.style.boxShadow = "0 0 black";
  question39.style.boxShadow = "0 0 black";
  question40.style.boxShadow = "0 0 black";
  question41.style.boxShadow = "0 0 black";
  question42.style.boxShadow = "0 0 black";
  
  
  if (question1.checked == false && question2.checked == false){
		question1.style.boxShadow = "0 0 4px red";
  	question2.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question3.value == ""){
  	question3.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question4.value == ""){
  	question4.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question5.value == ""){
  	question5.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question6.value == "Pas choisi"){
  	question6.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question7.value == ""){
  	question7.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question8.value == "Pas choisi"){
  	question8.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question9.checked == false && question10.checked == false){
  	question9.style.boxShadow = "0 0 4px red";
  	question10.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question11.value == ""){
  	question11.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question12.value == ""){
  	question12.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question13.value == "Pas choisi"){
  	question13.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question14.value == ""){
  	question14.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question15.checked == false && question16.checked == false){
  	question15.style.boxShadow = "0 0 4px red";
  	question16.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question17.checked == false && question18.checked == false){
  	question17.style.boxShadow = "0 0 4px red";
  	question18.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question19.checked == false && question20.checked == false){
  	question19.style.boxShadow = "0 0 4px red";
  	question20.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question21.value == ""){
  	question21.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question22.value == ""){
  	question22.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question23.value == ""){
  	question23.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question24.value == ""){
  	question24.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question25.checked == false && question26.checked == false && question27.checked == false){
    question25.style.boxShadow = "0 0 4px red";
  	question26.style.boxShadow = "0 0 4px red";
    question27.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question28.checked == false && question29.checked == false){
  	question28.style.boxShadow = "0 0 4px red";
  	question29.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question30.checked == false && question31.checked == false){
  	question30.style.boxShadow = "0 0 4px red";
  	question31.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question32.value == "Pas choisi"){
  	question32.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question33.checked == false && question34.checked == false){
  	question33.style.boxShadow = "0 0 4px red";
  	question34.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question35.checked == false && question36.checked == false){
  	question35.style.boxShadow = "0 0 4px red";
  	question36.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question37.checked == false && question38.checked == false){
  	question37.style.boxShadow = "0 0 4px red";
  	question38.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question39.checked == false && question40.checked == false){
  	question39.style.boxShadow = "0 0 4px red";
  	question40.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  if (question41.checked == false && question42.checked == false){
  	question41.style.boxShadow = "0 0 4px red";
  	question42.style.boxShadow = "0 0 4px red";
    isError = true;
  }
  
  
  
  if(isError == true){
  	$('.error-trigger').click();
  }else if(isError == false){
  	$('.hide-error').click();
    console.log("la variable est a fausse et on se rend dans le esle if false");
    $('.page-1-suivant').click();
    $('.go-to-top').click();
  }

}

