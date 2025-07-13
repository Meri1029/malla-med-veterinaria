{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function mostrarInfo(curso) \{\
  const info = document.getElementById("infoCurso");\
\
  const detalles = \{\
    matematicas: \{\
      nombre: "Matem\'e1ticas I",\
      descripcion: "\'c1lgebra, funciones y l\'edmites.",\
      creditos: 5,\
    \},\
    introProgramacion: \{\
      nombre: "Introducci\'f3n a la Programaci\'f3n",\
      descripcion: "L\'f3gica de programaci\'f3n y estructuras b\'e1sicas.",\
      creditos: 4,\
    \},\
    fisica: \{\
      nombre: "F\'edsica I",\
      descripcion: "Cinem\'e1tica, din\'e1mica y leyes de Newton.",\
      creditos: 5,\
    \},\
    estructuraDatos: \{\
      nombre: "Estructura de Datos",\
      descripcion: "Listas, pilas, colas, \'e1rboles y algoritmos.",\
      creditos: 4,\
    \}\
  \};\
\
  const c = detalles[curso];\
  info.innerHTML = `\
    <h3>$\{c.nombre\}</h3>\
    <p><strong>Descripci\'f3n:</strong> $\{c.descripcion\}</p>\
    <p><strong>Cr\'e9ditos:</strong> $\{c.creditos\}</p>\
  `;\
\}\
}