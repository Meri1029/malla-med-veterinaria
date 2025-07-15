let asignaturas = {
   // 🔸 Semestre 1
  'Bases moleculares': {
    nombre: 'Bases moleculares',
    descripcion: '',
    requisito: null
  },
  'IMI': {
    nombre: 'IMI',
    descripcion: '',
    requisito: null
  },
  'metodos de cuantificación': {
    nombre: 'Metodos de cuantificación',
    descripcion: '',
    requisito: null
  },
  'zoologia': {
    nombre: 'Zoología',
    descripcion: '',
    requisito: null
  },
  'OMV': {
    nombre: 'OMV',
    descripcion: '',
    requisito: null
     },
  'ingles beginner': {
    nombre: 'Ingles beginner',
    descripcion: '',
    requisito: null
      },

  // 🔸 Semestre 2
  'bases moleculares y celulares': {
    nombre: 'bases moleculares y celulares',
    descripcion: '',
    requisito: 'bases moleculares'
       },
  'bases celulares': {
    nombre: 'bases celulares',
    descripcion: '',
    requisito: 'bases moleculares'
       },
  'bioestadistica': {
    nombre: 'bioestadistica',
    descripcion: '',
    requisito: 'IMI', 'metodos de cuantificación'
       },
  'est. macro del organismo animal': {
    nombre: 'est. macro del organismo animal',
    descripcion: '',
    requisito: null
       },
  'des. micro del organismo animal': {
    nombre: 'des. micro del organismo animal',
    descripcion: '',
    requisito: null
       },
  'ecologia': {
    nombre: 'ecologia',
    descripcion: '',
    requisito: 'diversidad animal'
       },
  'seminario espacio A': {
    nombre: 'seminario espacio A',
    descripcion: '',
    requisito: null
       },
  'practica general básica': {
    nombre: 'practica general básica',
    descripcion: '',
    requisito: null
       },
  'ingles preintermedio': {
    nombre: 'ingles preintermedio',
    descripcion: '',
    requisito: null
 },
   
     // 🔸 Semestre 3
  'est. macro. del organismo animal': {
    nombre: 'est. macro. del organismo animal',
    descripcion: '',
    requisito: null
       },
  'fisiologia I': {
    nombre: 'fisiologia I',
    descripcion: '',
    requisito: 'bases moleculares y celulares', 'bases celulares'
       },
  'epidemiologia ': {
    nombre: 'epidemiologia',
    descripcion: '',
    requisito: 'bioestadistica'
       },
  'bases economicas': {
    nombre: 'bases economicas',
    descripcion: '',
    requisito: null
       },
  'des. micro del organismo animal': {
    nombre: 'des. micro del organismo animal',
    descripcion: '',
    requisito: null
       },
  'conducta animal': {
    nombre: 'conducta animal',
    descripcion: '',
    requisito: 'ecología'
       },
  'practica clinica básica': {
    nombre: 'practica clinica básica',
    descripcion: '',
    requisito: null
       },
  'practica de campo básica': {
    nombre: 'practica de campo básica',
    descripcion: '',
    requisito: null
        },

     // 🔸 Semestre 4
  'bases inmunologicas': {
    nombre: 'bases inmunologicas',
    descripcion: '',
    requisito: 'bases moleculares y celulares'
      },
  'fisiologia II': {
    nombre: 'fisiologia II',
    descripcion: '',
    requisito: 'fisiologia I', 'est. macro del organismo animal'
      },
  'famracologia general': {
    nombre: 'farmacologia general',
    descripcion: '',
    requisito: 'fisiologia I'
      },
  'int. producción animal': {
    nombre: 'int. producción animal',
    descripcion: '',
    requisito: null
      },
  'agentes biologicos y patogenos': {
    nombre: 'agentes biologicos y patogenos',
    descripcion: '',
    requisito: 'bases moleculares y celulares', 'bases celulares'
      },
  'bases economicas': {
    nombre: 'bases economicas',
    descripcion: '',
    requisito: null
      },
  'MAEP': {
    nombre: 'MAEP',
    descripcion: '',
    requisito: 'ecología'
      },
  'modulo int. ciclo basico': {
    nombre: 'modulo int. ciclo basico',
    descripcion: '',
    requisito: null
        },

 // 🔸 Semestre 5
  'enf. infecciosas y parasitarias': {
    nombre: 'enf. infecciosas y parasitarias',
    descripcion: '',
    requisito: 'epidemiologia', 'agentes biologicos patogenos'
         },
  'patologia I': {
    nombre: 'patologia I',
    descripcion: '',
    requisito: 'bases inmunologicas', 'fisiologia II'
         },
  'nutrición': {
    nombre: 'nutrición',
    descripcion: '',
    requisito: 'fisiologia II', 'int. producción animal'
         },
  'bases de tecn. diagnosticas': {
    nombre: 'bases de tecn. diagnosticas',
    descripcion: '',
    requisito: 'bases inmunologicas', 'agentes biologicos patogenos'
         },
  'MAIG': {
    nombre: 'MAIG',
    descripcion: '',
    requisito: 'bioestadistica'
         },

      // 🔸 Semestre 6
  'genética básica': {
    nombre: 'genética básica',
    descripcion: '',
    requisito: 'MAIG'
         },
    'patologia II': {
    nombre: 'patologia II',
    descripcion: '',
    requisito: 'patologia I'
         },
    'alimentación': {
    nombre: 'alimentación',
    descripcion: '',
    requisito: 'nutrición'
         },
    'metodos de exploración clinica': {
    nombre: 'metodos de exploración clinica',
    descripcion: '',
    requisito: 'bases de tecn. diagnosticas'
         },
    'MAAT': {
    nombre: 'MAAT',
    descripcion: '',
    requisito: null
         },

    // 🔸 Semestre 7
    'patologia III': {
    nombre: 'patologia III',
    descripcion: '',
    requisito: 'patologia II'
         },
    'patologia diagnostica': {
    nombre: 'patologia diagnostica',
    descripcion: '',
    requisito: 'patologia II'
         },
    'reproducción': {
    nombre: 'reproducción',
    descripcion: '',
    requisito: 'genetica básica'
         },
   'biotecnologia reproductiva': {
    nombre: 'biotecnologia reproductiva',
    descripcion: '',
    requisito: 'genetica básica'
         },
   'medicina nivel I': {
    nombre: 'medicina nivel I',
    descripcion: '',
    requisito: 'metodos de exploración clinica', 'patologia II'
         },
   'salud pública veterinaria': {
    nombre: 'salud pública veterinaria',
    descripcion: '',
    requisito: 'enf. infecciosas y parasitarias'
         },
   'MACA': {
    nombre: 'MACA',
    descripcion: '',
    requisito: 'conducta animal', 'inf. producción animal'
         },

   // 🔸 Semestre 8
   'gestión ambiental': {
    nombre: 'gestión ambiental',
    descripcion: '',
    requisito: 'salud pública veterinaria'
         },
   'inocuidad de los alimentos': {
    nombre: 'inocuidad de los alimentos',
    descripcion: '',
    requisito: 'salud pública veterinaria'
         },
   'manejos productivos': {
    nombre: 'manejos productivos',
    descripcion: '',
    requisito: 'reproducción', 'alimentación'
         },
   'obstetricia y ginecologia': {
    nombre: 'obstetricia y ginecologia',
    descripcion: '',
    requisito: 'reproducción', 'biotecnologia reproductiva'
         },
   'medicina nivel I': {
    nombre: 'medicina nivel I',
    descripcion: '',
    requisito: 'metodos de exploración clinica', 'patologia II'
         },
   'practica preprofesional': {
    nombre: 'practica preprofesional',
    descripcion: '',
    requisito: null
         },
   'MAPLAN': {
    nombre: 'MAPLAN',
    descripcion: '',
    requisito: 'bases economicas'
         },
   'modulo int. ciclo preprof.': {
    nombre: 'modulo int. ciclo preprof.',
    descripcion: '',
    requisito: null
         },

   // 🔸 Semestre 9
   'impacto ambiental': {
    nombre: 'impacto ambiental',
    descripcion: '',
    requisito: 'gestión ambiental'
         },
   'aseg. y calidad de alimentos': {
    nombre: 'aseg. y calidad de alimentos',
    descripcion: '',
    requisito: 'inocuidad de los alimentos'
         },
   'manejos productivos': {
    nombre: 'manejos productivos',
    descripcion: '',
    requisito: 'reproducción', 'alimentación'
         },
   'medicina interna nivel II': {
    nombre: 'medicina interna nivel II',
    descripcion: '',
    requisito: 'medicina nivel I'
         },
   'anestesiologia y cirugia': {
    nombre: 'anestesiologia y cirugia',
    descripcion: '',
    requisito: 'patologia diagnostica', 'medicina nivel I'
         },
   'patologia en explotaciones': {
    nombre: 'patologia en explotaciones',
    descripcion: '',
    requisito: 'enf, infecciosas y parasitarias', 'patologia III'
         },
   'MABL': {
    nombre: 'MABL',
    descripcion: '',
    requisito: 'inocuidad de los alimentos'
         },

   // 🔸 Semestre 10
   'internado medicina indiv.': {
    nombre: 'internado medicina indiv.',
    descripcion: '',
    requisito: null
         },
   'internado prod. animal': {
    nombre: 'internado prod. animal',
    descripcion: '',
    requisito: null
         },
   'internado medicina prev.': {
    nombre: 'internado medicina prev.',
    descripcion: '',
    requisito: null
         },
   'practica profesional': {
    nombre: 'practica profesional',
    descripcion: '',
    requisito: null
         },
   'taller de titulación': {
    nombre: 'taller de titulación',
    descripcion: '',
    requisito: null
         },
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

