export const validAge = (edad:string | undefined) => {

    const regexCaracteresInvalidos = new RegExp(/^[0-9]*$/);

    let minLength = 1;
    let maxLength = 3;


    const longitud = edad && compruebaLongitud(edad, 1, 3);

    if (longitud && !longitud.ok) {
        return { ok: false, mensaje: `Debe tener entre ${minLength} y ${maxLength} carácteres`}
    }

    const tieneCaracteresInvalidos = edad && regexCaracteresInvalidos.test(edad)
    if(!tieneCaracteresInvalidos) { return {ok: false, mensaje: 'Texto con carácteres no validos'}}
    return {ok: true, mensaje: 'Texto valido'}
}


const compruebaLongitud = (textoParaValidar:string, minLength:number, maxLength:number) => {
    if (!textoParaValidar) {
      return { ok: false, mensaje: "No puede estar vacio" }
    }
  
    if (minLength && textoParaValidar.length < minLength) {
      return { ok: false, mensaje: `Debe tener como mínimo ${minLength} caracteres y tiene ${textoParaValidar.length}.` };
    };
    if (maxLength && textoParaValidar.length > maxLength) {
      return { ok: false, mensaje: `Debe tener como máximo ${maxLength} caracteres y tiene ${textoParaValidar.length}.` };
    };
  
    return { ok: true, mensaje: 'Correcto!' };
  
};