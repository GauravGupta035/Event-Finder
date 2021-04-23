function switchTab(tab) {
  var x, y, a, b;
  switch(tab) {
    case 0:
      x = document.getElementById("sign-in");
      a = document.getElementById("sign-in-tab");
      y = document.getElementById("sign-up");
      b = document.getElementById("sign-up-tab");
      break;
    case 1:
      x = document.getElementById("sign-up");
      a = document.getElementById("sign-up-tab");
      y = document.getElementById("sign-in");
      b = document.getElementById("sign-in-tab");
  }
  x.style.display = "grid";
  a.style.color = "#ff0157";
  y.style.display = "none";
  b.style.color = "gray";
}
  
function popUp() {
  var x = document.getElementsByClassName("pop-up-container"), y;

  for(var i=0;i<x.length;i++)
  {
    x[i].style.display = "flex";

    y = x[i].getElementsByClassName("pop-up");
    for(var j=0;j<y.length;j++)
      y[j].style.display = "flex";
  }

  switchTab(0);
}

function closePopUp() {
  var x = document.getElementsByClassName("pop-up-container"), y;
  var f1 = document.getElementById("sign-in"), f2 = document.getElementById("sign-up");

  f1.reset();
  f2.reset();

  for(var i=0;i<x.length;i++)
    x[i].style.display = "none";
}

function checkPwd() {
  var x = document.getElementById("sign-up");
  var y = x.elements["sign-up-password"].value;
  var z = x.elements["sign-up-re-password"].value;
  if(y != z)
  {
    document.getElementById("form-notification").innerHTML = "Passwords Don't Match";
    return false;
  }
  return true;
}