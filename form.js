"use strict";

$(document).ready(function(){
  //var showForm = function(evt){
    /*var name = $("#name").val();
    var description = $("#description").val();
    var quote = $("#quote").val();
    var gems = $("#gems").val();
    var isValid = true;*/
  //results.style.display = "block";
  	var displayTasks = function() {
        $(".grey_rectangle").val(localStorage.E15tasks);
        //var tasks = localStorage.getItem("E15tasks");
        //document.getElementById(".grey_rectangle").innerHTML = tasks;
    };
    
/*  $("#plus").click(function(){
    if(document.getElementById("#to-do_Form").style.display == "none"){
      document.getElementById("#to-do_Form").style.display = "block";
    }
    else{
      document.getElementById("#to-do_Form").style.display = "none"; 
    }
  });*/
  //email javascript to edit for form
  $( "#submission" ).click(function(evt) {
    $("span").text("");
    var name = $("#name").val();
    var description = $("#description").val();
    var quote = $("#quote").val();
    var gems = $("#gems").val();
    var isValid = true;
    // validate the first entry
    if (name === "") { 
      $("#name").next().text("This field is required.");
      isValid = false;
    }
    else{
                  // add task to web storage 
            var tasks = localStorage.E15tasks || "";  // default value of empty string
            localStorage.E15tasks = tasks.concat( name, "\n" );

            // clear task text box and re-display tasks
            //$(".grey_rectangle").val( "" );
           	//name.val( "" );
            displayTasks();
    
    }
    // validate the second entry
    if (description === "") { 
      $("#description").next().text("This field is required.");
      isValid = false;
    }
    
    // validate the third entry  
    if ($("#quote").value === "") {
      $("#quote").next().text("This field is required.");
      isValid = false;
    }

    // submit the form if all entries are valid
    if (isValid) {
      $("#to-do_Item").submit();
      displayTasks();
    }
    else{
      evt.preventDefault();
    }
  });

    displayTasks();
});

function showForm() {
      var x = document.getElementById('to-do_Form');
      if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }
    }
