let Employees = [];

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    }
};
let employee1 = new Employee ("Jack","Manager","$80,000/year");
let employee2 = new Employee ("Jill", "Receptionist", "$50,000/year");
let employee3 = new Employee ("Bill", "Janitor", "$30,000/year", "Part Time");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();
