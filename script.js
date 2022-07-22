const details = [
  {
    name: "Raj",
    mobile: "93610*****",
    batch: "Fsd 10",
    Git: "2eddy",
    referred: "SomeOne",
    location: "Chennai",
    status: "Not Started",
  },
  {
    name: "Raj",
    mobile: "93610*****",
    batch: "Fsd 10",
    Git: "2eddy",
    referred: "SomeOne",
    location: "Chennai",
    status: "Not Started",
  },
];
var body = document.getElementById("bodi");
var forms = document.createElement("forms");

forms.setAttribute("style", "line-height:40px");
function creatingForm(text, classname) {
  var form = document.createElement("div");
  form.innerText = text;
  var formElement = document.createElement("input");
  formElement.setAttribute("type", "text");
  formElement.setAttribute("style", "margin-left:15px");
  formElement.setAttribute("id", classname);
  forms.append(form);
  form.append(formElement);
  console.log(form);
  body.append(forms);
}

var formname = creatingForm("Name", "names");
var formmobile = creatingForm("Mobile", "mobiles");
var formbatch = creatingForm("Batch", "batches");
var formgit = creatingForm("Git", "gits");
var formreferred = creatingForm("Referred", "referred");
var formlocation = creatingForm("Location", "locations");
var formstatus = creatingForm("Status", "statuses");
var submitbtn = document.createElement("button", "buttons");
submitbtn.innerText = "Submit";
body.append(submitbtn);
submitbtn.addEventListener("click", newappend);
function newappend() {
  var newstudent = creatingwrap(names.value, "");
  var newstudent1 = creatingwrap(mobiles.value, "");
  var newstudent2 = creatingwrap(batches.value, "");
  var newstudent3 = creatingwrap(gits.value, "");
  var newstudent4 = creatingwrap(referred.value, "");
  var newstudent5 = creatingwrap(locations.value, "");
  var newstudent6 = creatingwrap(statuses.value, "");

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

var tables = document.createElement("table");
tables.setAttribute("style", " border:2px solid;");
var headingRow = document.createElement("tr");
var heading1 = document.createElement("th");
heading1.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading1.innerText = "NAME";

var heading2 = document.createElement("th");
heading2.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading2.innerText = "MOBILE";

var heading3 = document.createElement("th");
heading3.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading3.innerText = "BATCH";

var heading4 = document.createElement("th");
heading4.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading4.innerText = "GIT";

var heading5 = document.createElement("th");
heading5.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading5.innerText = "REFFERED BY";

var heading6 = document.createElement("th");
heading6.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading6.innerText = "LOCATION";

var heading7 = document.createElement("th");
heading7.setAttribute("style", " border: 1px solid black;padding: 30px;");
heading7.innerText = "PLACEMENT STATUS";

headingRow.append(heading1);
headingRow.append(heading2);
headingRow.append(heading3);
headingRow.append(heading4);
headingRow.append(heading5);
headingRow.append(heading6);
headingRow.append(heading7);
tables.append(headingRow);

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
  creatingelement.setAttribute(
    "style",
    " border: 1px solid black;padding: 30px;"
  );
  creatingelement.innerText = value;
  return creatingelement;
}
