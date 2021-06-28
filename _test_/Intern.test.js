const Intern = require('../lib/Intern');

test('Test: create an intern object', () => {
    const intern = new Intern('Lara', 17, 'lara@lara.com', 'UV');

    expect(intern.school).toEqual(expect.any(String));
});

test('Test: get intern school', () => {
    const intern = new Intern('Lara', 17, 'lara@lara.com', 'UV');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Test: get role of intern', () => {
    const intern = new Intern('Lara', 17, 'lara@lara.com', 'UV');

    expect(intern.getRol()).toEqual("Intern");
});