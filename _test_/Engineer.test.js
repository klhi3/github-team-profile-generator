const Engineer = require('../lib/Engineer');

test('Test: create an engineer object', () => {
    const engineer = new Engineer('Lara', 17, 'lara@lara.com', 'lara09');

    expect(engineer.github).toEqual(expect.any(String));
});

test('Test: get engineer github', () => {
    const engineer = new Engineer('Lara', 17, 'lara@lara.com', 'lara09');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Test: get role of engineer', () => {
    const engineer = new Engineer('Lara', 17, 'lara@lara.com', 'lara09');

    expect(engineer.getRol()).toEqual("Engineer");
});