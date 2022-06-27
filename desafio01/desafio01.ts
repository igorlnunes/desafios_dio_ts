interface Employee {
    name: string;
    code: number
}

let employee = {} as Employee;
employee.code =  23;
employee.name = "John";

console.log(employee)