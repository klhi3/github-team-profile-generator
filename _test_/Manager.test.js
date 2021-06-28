const Manager = require('../lib/Manager');

test('Test: create an manager object', () => {
    const manager = new Manager('Lara', 17, 'lara@lara.com', 1012);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Test: get manager office number', () => {
    const manager = new Manager('Lara', 17, 'lara@lara.com', 1012);

    expect(manager.getOfficeNumber()).toEqual(1012);
});

test('Test: get role of manager', () => {
    const manager = new Manager('Lara', 17, 'lara@lara.com', 1012);

    expect(manager.getRol()).toEqual("Manager");
});