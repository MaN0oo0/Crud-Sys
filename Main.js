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

        if (allLetter(e_Name) === true && allnumeric(e_salary) == true) {

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
            CountryNotFounded()
            setTimeout(Clear_Alert, 2000)
        }
    } else {
        InputsNotFounded();
        setTimeout(Clear_Alert, 5000)



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

//Inputs Not Founded
function Clear_Alert() {

    let m = document.getElementById("not");
    m.classList.remove("d-block")
    let v_name = document.getElementById("v_name")
    v_name.classList.remove("d-block")
    let v_sal = document.getElementById("v_sal")
    v_sal.classList.remove("d-block")

};

function InputsNotFounded() {
    let m = document.getElementById("not");
    m.classList.add("d-block")
    let v_name = document.getElementById("v_name")
    v_name.classList.add("d-block")
    let v_sal = document.getElementById("v_sal")
    v_sal.classList.add("d-block")

}


//validation Functions

//String only
function allLetter(e_Name) {
    var letters = /^[A-Za-z]+$/;
    if (e_Name.value.match(letters)) {
        return true;
    } else {

        return false;
    }
}


//Numbers
function allnumeric(e_salary) {
    var numbers = /^[0-9]+$/;
    if (e_salary.value.match(numbers)) {

        return true;
    } else {

        return false;
    }
}