function determinarResultadoEquipo() {
    
    let equipo = prompt("Ingresa el nombre del equipo (boca, san lorenzo, river, huracan, racing o independiente) o escribe 'salir' para terminar:");
  
    if (equipo.toLowerCase() === 'salir') {
      return true;
    }
  
    switch (equipo.toLowerCase()) {
      case 'boca':
      case 'san lorenzo':
      case 'river':
      case 'huracan':
      case 'racing':
      case 'independiente':
        break;
      default:
        alert("El equipo ingresado no es válido. Por favor, elige uno de los equipos mencionados.");
        return false;
    }
  
    let puntos = parseInt(prompt("Ingresa la cantidad de puntos del equipo:"));
  
    if (puntos >= 15 && puntos <= 18) {
      alert("El equipo " + equipo + " ha salido campeon!!");
    } 
    else if (puntos >= 9 && puntos <= 14) {
      alert("El equipo " + equipo + " ha clasificado a las copas");
    } 
    else if (puntos >= 6 && puntos <= 8) {
        alert("El equipo " + equipo + " se ha salvado de descender");
      } 
    else if (puntos >= 0 && puntos <= 5) {
      alert("El equipo " + equipo + " desciende a segunda categoria");
    } 
    else {
      alert("Los puntos ingresados no son válidos. Deben estar entre 0 y 18.");
    }
  
    return false;
  }
  
  while (true) {
    if (determinarResultadoEquipo()) {
      break;
    }
  }