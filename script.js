//Update the interest rate range
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
//Compute the results
function compute()
{
//Define the variables
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
//Error message if amount is 0 or less
  if (principal <= "0") {
    alert("Enter a positive number");
    principal.focus();
  } else if (principal >= "0")
//Show results
  document.getElementById("result").innerHTML = "<br>If you deposit <mark>" +principal+ "</mark>,\<br\>at an interest rate of <mark>" + rate + "%\<br\></mark>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>"
  }