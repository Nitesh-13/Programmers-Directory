window.onload = function () {
  if (localStorage.w3Edit != null)
    document.getElementById("w3schools").innerHTML = localStorage.w3Edit;
  if (localStorage.gfgEdit != null)
    document.getElementById("gfg").innerHTML = localStorage.gfgEdit;
  if (localStorage.cdEdit != null)
    document.getElementById("codedope").innerHTML = localStorage.cdEdit;
  if (localStorage.cacademyEdit != null)
    document.getElementById("codecademy").innerHTML = localStorage.cacademyEdit;
  if (localStorage.hrEdit != null)
    document.getElementById("hackerrank").innerHTML = localStorage.hrEdit;
  if (localStorage.ccEdit != null)
    document.getElementById("codechef").innerHTML = localStorage.ccEdit;
  if (localStorage.cwEdit != null)
    document.getElementById("codewars").innerHTML = localStorage.cwEdit;
  if (localStorage.tcEdit != null)
    document.getElementById("topcoder").innerHTML = localStorage.tcEdit;
  if (localStorage.crioEdit != null)
    document.getElementById("crio.do").innerHTML = localStorage.crioEdit;
  if (localStorage.hdEdit != null)
    document.getElementById("hackaday").innerHTML = localStorage.hdEdit;
  if (localStorage.fccEdit != null)
    document.getElementById("freecodecamp").innerHTML = localStorage.fccEdit;
  if (localStorage.scEdit != null)
    document.getElementById("skillcrush").innerHTML = localStorage.scEdit;
}

document.getElementById('savew3').onclick = () => {
  var editw3 = document.getElementById("w3schools");
  var userw3 = editw3.innerHTML;
  localStorage.w3Edit = userw3;
  document.getElementById("updatew3").innerHTML = "Edits saved!";
}

document.getElementById('savegfg').onclick = () => {
  var editgfg = document.getElementById("gfg");
  var usergfg = editgfg.innerHTML;
  localStorage.gfgEdit = usergfg;
  document.getElementById("updategfg").innerHTML = "Edits saved!";
}

document.getElementById('savecd').onclick = () => {
  var editcd = document.getElementById("codedope");
  var usercd = editcd.innerHTML;
  localStorage.cdEdit = usercd;
  document.getElementById("updatecd").innerHTML = "Edits saved!";
}

document.getElementById('savecacademy').onclick = () => {
  var editcacademy = document.getElementById("codecademy");
  var usercacademy = editcacademy.innerHTML;
  localStorage.cacademyEdit = usercacademy;
  document.getElementById("updatecacademy").innerHTML = "Edits saved!";
}

document.getElementById('savehr').onclick = () => {
  var edithr = document.getElementById("hackerrank");
  var userhr = edithr.innerHTML;
  localStorage.hrEdit = userhr;
  document.getElementById("updatehr").innerHTML = "Edits saved!";
}

document.getElementById('savecc').onclick = () => {
  var editcc = document.getElementById("codechef");
  var usercc = editcc.innerHTML;
  localStorage.ccEdit = usercc;
  document.getElementById("updatecc").innerHTML = "Edits saved!";
}

document.getElementById('savecw').onclick = () => {
  var editcw = document.getElementById("codewars");
  var usercw = editcw.innerHTML;
  localStorage.cwEdit = usercw;
  document.getElementById("updatecw").innerHTML = "Edits saved!";
}

document.getElementById('savetc').onclick = () => {
  var edittc = document.getElementById("topcoder");
  var usertc = edittc.innerHTML;
  localStorage.tcEdit = usertc;
  document.getElementById("updatetc").innerHTML = "Edits saved!";
}

document.getElementById('savecrio').onclick = () => {
  var editcrio = document.getElementById("crio.do");
  var usercrio = editcrio.innerHTML;
  localStorage.crioEdit = usercrio;
  document.getElementById("updatecrio").innerHTML = "Edits saved!";
}

document.getElementById('savehd').onclick = () => {
  var edithd = document.getElementById("hackaday");
  var userhd = edithd.innerHTML;
  localStorage.hdEdit = userhd;
  document.getElementById("updatehd").innerHTML = "Edits saved!";
}

document.getElementById('savefcc').onclick = () => {
  var editfcc = document.getElementById("freecodecamp");
  var userfcc = editfcc.innerHTML;
  localStorage.fccEdit = userfcc;
  document.getElementById("updatefcc").innerHTML = "Edits saved!";
}

document.getElementById('savesc').onclick = () => {
  var editsc = document.getElementById("skillcrush");
  var usersc = editsc.innerHTML;
  localStorage.scEdit = usersc;
  document.getElementById("updatesc").innerHTML = "Edits saved!";
}