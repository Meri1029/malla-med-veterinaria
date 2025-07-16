let asignaturas = {
  // Semestre 1
  'bases_moleculares': { nombre: 'Bases moleculares', requisito: null },
  'imi': { nombre: 'IMI', requisito: null },
  'cuantificacion': { nombre: 'Métodos de cuantificación', requisito: null },
  'zoologia': { nombre: 'Zoología', requisito: null },

  // Semestre 2
  'bases_celulares': { nombre: 'Bases celulares', requisito: ['bases_moleculares'] },
  'bioestadistica': { nombre: 'Bioestadística', requisito: ['imi', 'cuantificacion'] },
  'practica_basica': { nombre: 'Práctica General Básica', requisito: null },

  // Semestre 3
  'macro_animal': { nombre: 'Estructura macroscópica del organismo animal', requisito: null },
  'fisiologia_I': { nombre: 'Fisiología I', requisito: ['bases_celulares'] },
  'epidemiologia': { nombre: 'Epidemiología', requisito: ['bioestadistica'] },
  'eco_basicas': { nombre: 'Bases económicas', requisito: null },
  'micro_animal': { nombre: 'Estructura microscópica del organismo animal', requisito: null },
  'conducta_animal': { nombre: 'Conducta animal', requisito: ['zoologia'] },
  'practica_clinica': { nombre: 'Práctica clínica básica', requisito: null },
  'practica_campo': { nombre: 'Práctica de campo básica', requisito: null },

  // Semestre 4
  'inmunologia': { nombre: 'Bases inmunológicas', requisito: ['bases_celulares'] },
  'fisiologia_II': { nombre: 'Fisiología II', requisito: ['fisiologia_I', 'macro_animal'] },
  'farmacologia': { nombre: 'Farmacología general', requisito: ['fisiologia_I'] },
  'produccion_animal': { nombre: 'Introducción a la producción animal', requisito: null },
  'agentes_patogenos': { nombre: 'Agentes biológicos y patógenos', requisito: ['bases_celulares'] },
  'maep': { nombre: 'MAEP', requisito: ['zoologia'] },
  'modulo_basico': { nombre: 'Módulo integrador ciclo básico', requisito: null },

  // Semestre 5
  'enf_infecciosas': { nombre: 'Enfermedades infecciosas y parasitarias', requisito: ['epidemiologia', 'agentes_patogenos'] },
  'patologia_I': { nombre: 'Patología I', requisito: ['inmunologia', 'fisiologia_II'] },
  'nutricion': { nombre: 'Nutrición', requisito: ['fisiologia_II', 'produccion_animal'] },
  'tecnicas_diagnosticas': { nombre: 'Bases de técnicas diagnósticas', requisito: ['inmunologia', 'agentes_patogenos'] },
  'maig': { nombre: 'MAIG', requisito: ['bioestadistica'] },

  // Semestre 6
  'genetica': { nombre: 'Genética básica', requisito: ['maig'] },
  'patologia_II': { nombre: 'Patología II', requisito: ['patologia_I'] },
  'alimentacion': { nombre: 'Alimentación', requisito: ['nutricion'] },
  'exploracion_clinica': { nombre: 'Métodos de exploración clínica', requisito: ['tecnicas_diagnosticas'] },
  'maat': { nombre: 'MAAT', requisito: null },

  // Semestre 7
  'patologia_III': { nombre: 'Patología III', requisito: ['patologia_II'] },
  'patologia_diagnostica': { nombre: 'Patología diagnóstica', requisito: ['patologia_II'] },
  'reproduccion': { nombre: 'Reproducción', requisito: ['genetica'] },
  'biotecnologia': { nombre: 'Biotecnología reproductiva', requisito: ['genetica'] },
  'medicina_I': { nombre: 'Medicina nivel I', requisito: ['exploracion_clinica', 'patologia_II'] },
  'salud_publica': { nombre: 'Salud pública veterinaria', requisito: ['enf_infecciosas'] },
  'maca': { nombre: 'MACA', requisito: ['conducta_animal', 'produccion_animal'] },

  // Semestre 8
  'gestion_ambiental': { nombre: 'Gestión ambiental', requisito: ['salud_publica'] },
  'inocuidad': { nombre: 'Inocuidad de los alimentos', requisito: ['salud_publica'] },
  'manejo_productivo': { nombre: 'Manejo productivo', requisito: ['reproduccion', 'alimentacion'] },
  'obstetricia': { nombre: 'Obstetricia y ginecología', requisito: ['reproduccion', 'biotecnologia'] },
  'medicina_I_rep': { nombre: 'Medicina nivel I', requisito: ['exploracion_clinica', 'patologia_II'] },
  'practica_preprof': { nombre: 'Práctica preprofesional', requisito: null },
  'maplan': { nombre: 'MAPLAN', requisito: ['eco_basicas'] },
  'modulo_preprof': { nombre: 'Módulo integrador ciclo preprofesional', requisito: null },

  // Semestre 9
  'impacto_ambiental': { nombre: 'Impacto ambiental', requisito: ['gestion_ambiental'] },
  'calidad_alimentos': { nombre: 'Aseguramiento y calidad de alimentos', requisito: ['inocuidad'] },
  'manejo_productivo_rep': { nombre: 'Manejo productivo', requisito: ['reproduccion', 'alimentacion'] },
  'medicina_II': { nombre: 'Medicina interna nivel II', requisito: ['medicina_I'] },
  'anestesia': { nombre: 'Anestesiología y cirugía', requisito: ['patologia_diagnostica', 'medicina_I'] },
  'patologia_explotaciones': { nombre: 'Patología en explotaciones', requisito: ['enf_infecciosas', 'patologia_III'] },
  'mabl': { nombre: 'MABL', requisito: ['inocuidad'] },

  // Semestre 10
  'internado_individual': { nombre: 'Internado medicina individual', requisito: null },
  'internado_prod': { nombre: 'Internado producción animal', requisito: null },
  'internado_prev': { nombre: 'Internado medicina preventiva', requisito: null },
  'practica_profesional': { nombre: 'Práctica profesional', requisito: null },
  'titulacion': { nombre: 'Taller de titulación', requisito: null }
};

function completar(id) {
  const elem = document.querySelector(`[onclick="completar('${id}')"]`);
  const info = asignaturas[id];
  if (!elem) return;

  if (elem.classList.contains('aprobado')) {
    elem.classList.remove('aprobado');
    document.getElementById('contenido-info').textContent = `${info.nombre} desmarcado.`;
    // Quitar color de desbloqueo en siguientes
    Object.entries(asignaturas).forEach(([clave, val]) => {
      if (val.requisito && val.requisito.includes && val.requisito.includes(id)) {
        const siguienteElem = document.querySelector(`[onclick="completar('${clave}')"]`);
        if (siguienteElem) siguienteElem.classList.remove('desbloqueado');
      }
    });
  } else {
    elem.classList.add('aprobado');
    document.getElementById('contenido-info').textContent = `${info.nombre} aprobado.`;

    const siguientes = Object.entries(asignaturas).filter(([clave, val]) => {
      if (!val.requisito) return false;
      if (Array.isArray(val.requisito)) {
        return val.requisito.includes(id);
      } else {
        return val.requisito === id;
      }
    });

    if (siguientes.length > 0) {
      const nombres = siguientes.map(([_, val]) => val.nombre).join(', ');
      document.getElementById('contenido-info').textContent += ` Puedes cursar: ${nombres}.`;

      siguientes.forEach(([clave]) => {
        const siguienteElem = document.querySelector(`[onclick="completar('${clave}')"]`);
        if (siguienteElem) siguienteElem.classList.add('desbloqueado');
      });
    }
  }
  actualizarProgreso();
}

function actualizarProgreso() {
  const total = Object.keys(asignaturas).length;
  const completados = document.querySelectorAll('.asignatura.aprobado').length;
  document.getElementById('progreso').textContent = `Ramos aprobados: ${completados} / ${total}`;
}
