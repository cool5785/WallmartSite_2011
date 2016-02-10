// JavaScript Document By -=SP=-
 var t1,t2,t3,t4,t5,t6,gt; //total for individual item and grand total
 //initializing all total to 0 
 
t1=0;
t2=0;
t3=0;
t4=0;
t5=0;
t6=0;
gt=0;
 //for price
 var p1,p2,p3,p4,p5,p6;
//for tax
var x1,x2,x3,x4,x5,x6;
 //enter tax for each product
 x1=4;
 x2=4;
 x3=4;
 x4=12;
 x5=12;
 x6=12;

 //enter price for individual below
 p1=850;
 p2=170;
 p3=220;
 p4=100;
 p5=125;
 p6=500;
 
 
 //temporary variable for quantity
var a;
 //fill data first
 
function loaddata()
{
	
	document.getElementById('prc1').innerHTML = "Price:  Rs."+p1;
	document.getElementById('prc2').innerHTML =  "Price:  Rs."+p2;
	document.getElementById('prc3').innerHTML =  "Price:  Rs."+p3;
	document.getElementById('prc4').innerHTML =  "Price:  Rs."+p4;
	document.getElementById('prc5').innerHTML =  "Price:  Rs."+p5;
	document.getElementById('prc6').innerHTML =  "Price:  Rs."+p6;
	
	
	document.getElementById('tax1').innerHTML = x1;
	document.getElementById('tax2').innerHTML = x2;
	document.getElementById('tax3').innerHTML = x3;
	document.getElementById('tax4').innerHTML = x4;
	document.getElementById('tax5').innerHTML = x5;
	document.getElementById('tax6').innerHTML = x6;
	
}
 
 function tot1()
 {
	 a= f1.p1.options[f1.p1.selectedIndex].value;
	 t1=p1*a;   //price * quantity
	 t1=t1 + (t1 * x1)/100;
	 calc();
 }
 function tot2()
 { 
	 a= f1.p2.options[f1.p2.selectedIndex].value;
	 t2=p2*a;
	 t2=t2 + (t2 * x2)/100;
	 calc();
 }
 function tot3()
 {
	 a= f1.p3.options[f1.p3.selectedIndex].value;
	 t3=p3*a; 
	 t3=t3 + (t3 * x3)/100;
	 calc();
 }
 function tot4()
 {
	 a= f1.p4.options[f1.p4.selectedIndex].value; 
	 t4=p4*a;
	 t4=t4 + (t4 * x4)/100;
	 calc();
 }
 function tot5()
 {
	 a= f1.p5.options[f1.p5.selectedIndex].value;
	 t5=p5*a;
	 t5=t5 + (t5 * x5)/100;
	 calc();
 }
 function tot6()
 {
	 a= f1.p6.options[f1.p6.selectedIndex].value;
	 t6=p6*a;
	 t6=t6 + (t6 * x6)/100;
	 calc();
 }
 
 function calc()
 { 
	 gt=t1+t2+t3+t4+t5+t6;
	 //updating all the product values
	 document.getElementById('t1').innerHTML = t1;
	 document.getElementById('t2').innerHTML = t2;
	 document.getElementById('t3').innerHTML = t3;
	 document.getElementById('t4').innerHTML = t4;
	 document.getElementById('t5').innerHTML = t5;
	 document.getElementById('t6').innerHTML = t6;
	 
	 document.getElementById('total').innerHTML = gt;
	 
	 //updating all the value to be print
	 document.getElementById('totP').innerHTML=p1+"<br>"+p2+"<br>"+p3+"<br>"+p4+"<br>"+p5+"<br>"+p6;
	 document.getElementById('totT').innerHTML=x1+"<br>"+x2+"<br>"+x3+"<br>"+x4+"<br>"+x5+"<br>"+x6;
	 document.getElementById('tot').innerHTML=t1+"<br>"+t2+"<br>"+t3+"<br>"+t4+"<br>"+t5+"<br>"+t6;
	 document.getElementById('totprice').innerHTML=gt;
	 
	 //get random order number using 3 random method for 3 digit fixed code
	 document.getElementById('orderno').innerHTML="Order ID : WAL"+Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + Math.floor(Math.random()*10)

 }

function showMe(id) 
{
	var obj = document.getElementById(id);
	obj.style.display="block";
	//obj= document.getElementById('profile');
	//obj.focus();
}
function hideMe(id) 
{
	//document.getElementById('friendswall').checked=false;
	var obj = document.getElementById(id);
	obj.style.display="none";
}

function printpage() 
{
  window.print();
}