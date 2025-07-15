
function mostrarInfo(asignatura) {
  let info = {
    'anatomia': 'Anatomía I: Estudio de los sistemas locomotor y visceral en animales domésticos.',
    'fisio': 'Fisiología: Funcionamiento de los órganos y sistemas.',
    'micro': 'Microbiología: Bacterias, virus y hongos en medicina veterinaria.'
  };

  document.getElementById('contenido-info').textContent = info[asignatura];
}
