const details = [
  {
    name: "Edwin Raj",
    mobile: 9361046327,
    batch: "Fsd 10",
    Git: "2eddy",
    referred: "Vel",
    location: "chennai",
    status: "not started",
  },
  {
    name: "Edwin Raj",
    mobile: 9361046327,
    batch: "Fsd 10",
    Git: "2eddy",
    referred: "Vel",
    location: "chennai",
    status: "not started",
  },
];
var tables = document.createElement("table");
tables.setAttribute("style", " border:2px solid;");
var body = document.getElementById("bodi");
// var students;
details.forEach(wrapper);
function wrapper(data) {
  students = data;
  var firststudent = creatingwrap(students.name);
  var secondstudent = creatingwrap(students.mobile);
  var thirdstudent = creatingwrap(students.batch);
  var fourthstudent = creatingwrap(students.Git);
  var fifthstudent = creatingwrap(students.referred);
  var sixthstudent = creatingwrap(students.location);
  var seventhstudent = creatingwrap(students.status);

  var finalwraping = document.createElement("tr");
  finalwraping.setAttribute("style", " border: 1px solid black;");

  finalwraping.append(firststudent);
  finalwraping.append(secondstudent);
  finalwraping.append(thirdstudent);
  finalwraping.append(fourthstudent);
  finalwraping.append(fifthstudent);
  finalwraping.append(sixthstudent);
  finalwraping.append(seventhstudent);
  tables.append(finalwraping);
  body.append(tables);

  console.log(tables);
  console.log(firststudent);
  console.log(finalwraping);
}

function creatingwrap(value) {
  var creatingelement = document.createElement("td");
  creatingelement.setAttribute("style", " border: 1px solid black;");
  creatingelement.innerText = value;
  return creatingelement;
}
function creatingForm(text, classname) {
  var form = document.createElement("div");
  form.innerText = text;
  var formElement = document.createElement("input");
  formElement.setAttribute("type", "text");
  formElement.setAttribute("id", classname);
  form.append(formElement);
  console.log(form);
  body.append(form);
}
var formname = creatingForm("name", "names");
var formmobile = creatingForm("mobile", "mobiles");
var formbatch = creatingForm("batch", "batches");
var formgit = creatingForm("git", "gits");
var formreferred = creatingForm("referred", "referred");
var formlocation = creatingForm("location", "locations");
var formstatus = creatingForm("Status", "statuses");
var submitbtn = document.createElement("button", "buttons");
submitbtn.innerText = "Submit";
body.append(submitbtn);
submitbtn.addEventListener("click", newappend);

function newappend() {
  var newstudent = creatingwrap(names.value, "");
  var newstudent1 = creatingwrap(names.value, "");
  var newstudent2 = creatingwrap(names.value, "");
  var newstudent3 = creatingwrap(names.value, "");
  var newstudent4 = creatingwrap(names.value, "");
  var newstudent5 = creatingwrap(names.value, "");
  var newstudent6 = creatingwrap(names.value, "");

  var finalwrapings = document.createElement("tr");
  finalwrapings.setAttribute("style", " border: 1px solid black;");
  finalwrapings.append(newstudent);
  finalwrapings.append(newstudent1);
  finalwrapings.append(newstudent2);
  finalwrapings.append(newstudent3);
  finalwrapings.append(newstudent4);
  finalwrapings.append(newstudent5);
  finalwrapings.append(newstudent6);

  tables.append(finalwrapings);
  body.append(tables);
}
