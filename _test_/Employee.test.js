const Employee = require('../lib/Employee');

test('Test: create an employee object', () => {
    const employee = new Employee('Lara', 17, 'lara@lara.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Test: get employee name', () => {
    const employee = new Employee('Lara', 17, 'lara@lara.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Test: get employee ID', () => {
    const employee = new Employee('Lara', 17, 'lara@lara.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Test: get employee email', () => {
    const employee = new Employee('Lara', 17, 'lara@lara.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Test: get role of employee', () => {
    const employee = new Employee('Lara', 17, 'lara@lara.com');

    expect(employee.getRol()).toEqual("Employee");
});