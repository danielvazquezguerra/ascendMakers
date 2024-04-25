export async function copiarContenido(texto:any) {
    try {
      await navigator.clipboard.writeText(texto);
      return {
        ok: true,
        msg: 'Texto copiado'
      }
    } catch (err) {
      return {
        ok: false,
        msg: 'No se ha copiado el texto'
      }
    }
  }