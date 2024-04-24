

export const validNombre = (texto:string | undefined, requerido:boolean) => {
    // Creamos regex para no permitir caracteres invalidos
    const regexCaracteresInvalidos = new RegExp(/^[a-zA-Z _]*$/);

    let minLength = 2;
    let maxLength = 150;

    const longitud = texto && compruebaLongitud(texto, 2, 150);

    if (longitud && !longitud.ok) {
        return { ok: false, mensaje: `Debe tener entre ${minLength} y ${maxLength} carácteres`}
    }

    const tieneCaracteresInvalidos = texto && regexCaracteresInvalidos.test(texto)
    if(!tieneCaracteresInvalidos) { return {ok: false, mensaje: 'Texto con carácteres no validos'}}
    return {ok: true, mensaje: 'Texto valido'}

}



const compruebaLongitud = (textoParaValidar:string, minLength:number, maxLength:number) => {
    if (!textoParaValidar) {
      return { ok: false, mensaje: "No puede estar vacio" }
    }
  
    let length = textoParaValidar.length;
  
    if (minLength && length < minLength) {
      return { ok: false, mensaje: `Debe tener como mínimo ${minLength} caracteres y tiene ${length}.` };
    };
    if (maxLength && length > maxLength) {
      return { ok: false, mensaje: `Debe tener como máximo ${maxLength} caracteres y tiene ${length}.` };
    };
  
    return { ok: true, mensaje: 'Correcto!' };
  
};