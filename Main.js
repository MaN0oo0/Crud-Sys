//Table ==>>>>>>
let e_Name = document.getElementById("name");
let e_salary = document.getElementById("salary");
let Contry = document.getElementById("country");

//insitliz array to save employee object
let EmployeeArr;
//GET LOCAL STORAGE
if (localStorage.getItem("employee") == null) {
  EmployeeArr = [];
} else {
  EmployeeArr = JSON.parse(localStorage.getItem("employee"));
  showEmployee();
}
//Add Employeee
function addEmpolyeeInf() {
  if (e_Name.value != "" && e_salary.value != "" && Contry.value != "") {
    var Employee = {
      empName: e_Name.value,
      empSalary: e_salary.value,
      emp_contry: Contry.value,
    };

    EmployeeArr.push(Employee);
    localStorage.setItem("employee", JSON.stringify(EmployeeArr)); //SET LOCAL STORAGE
    showEmployee();
    clear();
  } else {
    alert("ضيف بيانات ياصحبي ");
  }
}
//show Employee
function showEmployee() {
  let container = ``; //to save <tr>
  for (let i = 0; i < EmployeeArr.length; i++) {
    container += `
    <tr >
    <td >${i + 1}</td>
    <td >${EmployeeArr[i].empName}</td>
    <td >${EmployeeArr[i].empSalary}$</td>
    <td>${EmployeeArr[i].emp_contry}</td>
    <td ><button class='btn btn-warning' onclick="getData(${i})">Update</button></td>
    <td ><button class='btn btn-danger' onclick="Delete(${i})">Delete</button></td>
    <td><button type="button"  onclick="getDetails(${i})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Details</button></td>

    </tr>
    
    `;
  }

  document.getElementById("data").innerHTML = container;
}
//GetData
function getData(index) {
  e_Name.value = EmployeeArr[index].empName;
  e_salary.value = EmployeeArr[index].empSalary;
  Contry.value = EmployeeArr[index].emp_contry;
  document.getElementById(
    "update"
  ).innerHTML = `<button class='btn btn-warning'  onclick="Update(${index})">Update</button>`;
  document.getElementById("add").style.display = "none";
  document.getElementById("dtal").style.display = "none";
  document.getElementById("name").focus();
}

//Get Updata
function Update(index) {
  EmployeeArr[index].empName = e_Name.value;
  EmployeeArr[index].empSalary = e_salary.value;
  EmployeeArr[index].emp_contry = Contry.value;
  document.getElementById("update").style.display = "none";
  document.getElementById("add").style.display = "inline-block";
  document.getElementById("dtal").style.display = "inline-block";

  localStorage.setItem("employee", JSON.stringify(EmployeeArr));
  showEmployee();
  clear();
}
//delete
function Delete(index) {
  EmployeeArr.splice(index, 1);
  localStorage.setItem("employee", JSON.stringify(EmployeeArr));
  showEmployee();
}
//Get  Details
function getDetails(index) {
  let m = index + 1;
  let container = ``; //to save <tr>
  for (let i = 0; i < m; i++) {
    for (var k = i; k < m; k++) {
      container = `
      <tr >
      <td >${i + 1}</td>
      <td >${EmployeeArr[i].empName}</td>
      <td >${EmployeeArr[i].empSalary}$</td>
      <td>${EmployeeArr[i].emp_contry}</td>
      
  
      </tr>
      
      `;
    }
  }

  document.getElementById("detal").innerHTML = container;
}
//Get all Details
function getTotalDetails() {
  let container = ``; //to save <tr>
  for (let i = 0; i < EmployeeArr.length; i++) {
    container += `
        <tr >
        <td >${i + 1}</td>
        <td >${EmployeeArr[i].empName}</td>
        <td >${EmployeeArr[i].empSalary}$</td>
        <td>${EmployeeArr[i].emp_contry}</td>
        </tr>
        
        `;
  }

  document.getElementById("detal").innerHTML = container;
}
//Clear Data From Inputs
function clear() {
  e_Name.value = "";
  e_salary.value = "";
  Contry.value = "";
  document.getElementById("name").focus();
}
