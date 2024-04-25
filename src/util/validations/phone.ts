export const validPhone = (telefono:string | undefined) => {

  if (!telefono) {
    return { ok: false, mensaje: "El teléfono no puede estar vacío" };
  }

    let correcto2 = ["6", "7", "9"].includes(telefono.slice(0, 1));
    if (! correcto2) {return { ok:false, mensaje: "Tiene que empezar por 6, 7 o 9."}};
  
    let contieneNumerosMalos = [ "900", "901", "902", "905", "803", "806", "807"].includes(telefono.slice(0, 3));
    if (contieneNumerosMalos) {return {ok: false, mensaje: "El teléfono no es válido."}};

    if (/^34([0-9]{9})$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }
      else if (/^[0-9]{9}$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }
      else if (/^44([0-9]{10})$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Britanico
      else if (/((^|, )([7]\d{9}))+$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Britanico
      else if (/^49([0-9]{11})$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Aleman
      else if (/((^|, )([1]\d{10}))+$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Aleman
      else if (/^49([0-9]{10})$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Aleman 10 digitos
      else if (/((^|, )([1]\d{9}))+$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Aleman 10 digitos
      else if (/^32([0-9]{9})$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Belga 9 digitos
      else if (/((^|, )(\d{9}))+$/.test(telefono)) {
        return { ok: true, mensaje: "Número válido" }
      }// Pattern Belga 9 digitos
      return { ok: false, mensaje: "Número no válido"}

}