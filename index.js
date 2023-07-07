// Write your solution in this file!
const employee = {
    name: "Steve",
    street: {
        line1: "Cherry Grove",
        line2: "Apt C10",
    },
    city: "Queens",
    state: "NY",
    zipCode: "11305"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = {...obj }
 newObj[key] = value
 return newObj
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value
return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee}
  delete newEmployee[name]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
delete employee[name]
return employee 
}