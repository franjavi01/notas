const calificacion = require('./notas');

test('notas', ()=> {
    expect(calificacion(0)).toBe('Muy deficiente');
});

test('notas', ()=> {
    expect(calificacion(9,5)).toBe('Sobresaliente');
});

test('notas', ()=> {
    expect(calificacion(9.5)).toBe('Sobresaliente');
});