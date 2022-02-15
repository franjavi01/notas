function calificacion(nota){
    if ((nota >= 0)&&(nota < 3)) {
        return ('Muy deficiente');
}else if ((nota >= 3)&&(nota < 5)) {
        return ('Insuficiente');    

}else if ((nota >= 3)&&(nota < 5)) {
        return ('Insuficiente');
        
}else if ((nota >= 5)&&(nota < 6)) {
        return ('Suficiente');

}else if ((nota >= 6)&&(nota < 7)) {
        return ('Suficiente');

}else if ((nota >= 7)&&(nota < 9)) {
        return ('Notable');

}else if ((nota >= 9)&&(nota <= 10)) {
        return ('Sobresaliente');
}

}

// function calificacion(nota) {
//    switch (nota) {
//        case ((nota >= 0)&&(nota < 3)):return ('Muy deficiente');
//        case ((nota >= 3)&&(nota < 5)):return ('Insuficiente');
//        case ((nota >= 5)&&(nota < 6)):return ('Suficiente');
//        case ((nota >= 6)&&(nota < 7)):return ('Bien');
//        case ((nota >= 7)&&(nota < 9)):return ('Notable');
//        case ((nota >= 9)&&(nota <= 10)):return ('Sobresaliente');
//    } 
// }


module.exports= calificacion;
