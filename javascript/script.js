var msg = function (){

var fstr = document.getElementById("num1").value;
var sstr = document.getElementById("num2").value;
var tstr = document.getElementById("num3").value;

if (fstr > 0 && sstr > 0 && tstr > 0){
if (fstr === sstr && sstr === tstr && fstr  === tstr)
	{
	alert('this is an Equilateral triangle');
}
else if (fstr === sstr || sstr === tstr || fstr === tstr)
{
  alert("This is an Isosceles triangle")
}
else {
  alert("this is definitely a Scalene triangle");
}
}
else
{
  alert("Triangle values can only be greater than 0");
}
};
