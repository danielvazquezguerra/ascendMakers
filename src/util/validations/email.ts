

export const validEmail = ( email:string | undefined, requerido:boolean = true) => {

  // si es requerido
  if (requerido && !email) { return { ok: false, mensaje: 'No puede estar vacío'}};

  // Utiliza el patrón RegExp para encontrar caracteres no permitidos al principio
  // const regexInicioInvalido = new RegExp(/^[^a-zA-Z0-9]/);
  // const empiezaMal = regexInicioInvalido.test(email);

  // if (empiezaMal) {
  //   return { ok: false, mensaje: "La primera letra no es válida" };
  // }

  // Utiliza el patrón RegExp para encontrar caracteres especiales en la parte antes del '@'
  const regexCaracteresEspeciales = new RegExp(/[()<>@,;:"[\]ç%&áéíóúàèìòùäëÏöüâêîôû\s]/g);
  const tieneCaracteres = email && regexCaracteresEspeciales.test(email.split("@")[0]);

  if (tieneCaracteres) {
    return { ok: false, mensaje: "No puede contener caracteres especiales antes del '@'" };
  }

  // Utiliza un patrón más simple para verificar el formato general del correo electrónico
  const regexFormatoCorrecto = new RegExp(/^[\w.-]+@[a-zA-Z0-9.-]+(\.[\w-]{2,16})+$/);
  const esFormatoCorrecto = email && regexFormatoCorrecto.test(email);

  if (!esFormatoCorrecto) {
    return { ok: false, mensaje: "Formato incorrecto: ejemplo@dominio.com" };
  }



  return { ok: true, mensaje: "Correcto!" };

};


