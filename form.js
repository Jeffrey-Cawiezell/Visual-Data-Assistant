"use strict";
var $ = function(id) {return document.getElementById(id); };
var results = document.getElementById("to-do_Form");
window.onload = function(){
};

var showForm = function(){
  //results.style.display = "block";
  if(document.getElementById("to-do_Form").style.display == "none"){
  document.getElementById("to-do_Form").style.display = "block";
  }
  else{
  document.getElementById("to-do_Form").style.display = "none"; 
  }
};
