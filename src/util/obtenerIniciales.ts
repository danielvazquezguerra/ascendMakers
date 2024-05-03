export const obtenerIniciales = (nombre: string) => {

    let arrayNombre = nombre.trim().split(' ');
    if (arrayNombre.length < 2) {
        return `${arrayNombre[0][0]}`
    } else {
        return `${arrayNombre[0][0]}${arrayNombre[1][0]}`
    }
}