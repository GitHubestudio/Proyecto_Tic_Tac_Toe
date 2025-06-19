# 🎮 Tic Tac Toe React

Este proyecto es una versión del clásico juego Tic Tac Toe (Tres en línea) desarrollado con React, basado en un tutorial de Midudev. El objetivo principal fue practicar conceptos fundamentales de React como el manejo de estado con hooks, eventos y persistencia de datos.

Permite que dos jugadores se turnen para colocar una X o una O en un tablero de 3x3, y detecta automáticamente cuándo hay un ganador o un empate. Además, el juego guarda el progreso en el navegador usando localStorage, para que se pueda continuar incluso después de recargar la página.

El desarrollo incluye componentes reutilizables y modularizados, funciones para validar combinaciones ganadoras y la incorporación de una animación visual con canvas-confetti que celebra cuando un jugador gana.

Este proyecto sirvió para entender mejor la gestión del estado, el renderizado condicional, el manejo de listas y la integración de librerías externas dentro de una aplicación React moderna y funcional.


![image](https://github.com/user-attachments/assets/7966f48c-589a-4cc1-b1a9-ec8627d036e2)


---

## 📋 Descripción

Este proyecto implementa el juego Tic Tac Toe para dos jugadores que se turnan para poner una X o una O en un tablero 3x3. El juego detecta ganador o empate, muestra el resultado y permite reiniciar la partida.

Características principales:
- Interfaz sencilla con React y CSS.
- Componentes reutilizables.
- Control de estado para tablero, turno y ganador.
- Persistencia en localStorage para conservar la partida.
- Animación con confetti al ganar.

---

## 🚀 Tecnologías

- ⚛️ **React 18** (Hooks)  
- 🟨 **JavaScript** (ES6+)  
- 🎨 **CSS**  
- 💾 **LocalStorage** para persistencia  
- 🎉 **canvas-confetti** para animaciones  

---

## 🗂️ Estructura del Proyecto

![image](https://github.com/user-attachments/assets/939f6912-842d-4031-b9f5-f97539032c14)

---

# 🧑‍💻 Detalles Técnicos

- Estado React con Hooks: useState para manejar tablero, turno y ganador.

- Persistencia: useEffect sincroniza el estado con localStorage automáticamente.

- Lógica del juego: Funciones para detectar ganador y empate con combinaciones ganadoras predefinidas.

- Componentes: Square representa cada casilla y Winner muestra el resultado final.

- Animaciones: Se utiliza canvas-confetti para efecto visual al ganar.

---

# 🎯 Objetivo de aprendizaje

Este proyecto fue realizado para aprender y practicar React, incluyendo:

- Manejo de estado con hooks.

- Renderizado condicional y listas.

- Separación de lógica y componentes.

- Persistencia de estado en localStorage.

- Integración de librerías externas para animaciones.

---

# 👨‍💻 Autor Enzo Hernán Segovia

📍 Argentina

💼 Software Developer en formación / Técnico Universitario en Programación

![image](https://github.com/user-attachments/assets/6d8425fe-43eb-40dd-87c6-6c563dddc52a)


