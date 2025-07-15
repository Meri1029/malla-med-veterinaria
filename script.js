let asignaturas = {
   // 🔸 Semestre 1
  'Bases moleculares': {
    nombre: 'Bases moleculares',
    descripcion: '',
    requisito: 'Bases moleculares y celulares', 'Bases celulares'
  },
  'IMI': {
    nombre: 'IMI',
    descripcion: '',
    requisito: 'bioestadistica'
  },
  'metodos de cuantificación': {
    nombre: 'Metodos de cuantificación',
    descripcion: '',
    requisito: 'bioestadistica'
  },
  'micro': {
    nombre: 'Microbiología',
    descripcion: '',
    requisito: 'bioquimica'
  }
};

function completar(id) {
  const elem = document.querySelector(`[onclick="completar('${id}')"]`);
  const info = asignaturas[id];

  if (elem.classList.contains('aprobado')) {
    elem.classList.remove('aprobado');
    document.getElementById('contenido-info').textContent = `${info.nombre} desmarcado.`;
  } else {
    elem.classList.add('aprobado');
    document.getElementById('contenido-info').textContent = `${info.nombre} aprobado.`;

    // Mostrar sugerencia del próximo ramo
    const siguiente = Object.entries(asignaturas).find(([clave, val]) => val.requisito === id);
    if (siguiente) {
      document.getElementById('contenido-info').textContent += ` Puedes cursar: ${siguiente[1].nombre}.`;
    }
  }
}

