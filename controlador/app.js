// controlador/app.js
import { vehiculos } from "../modelo/vehiculos.js";

const grid = document.getElementById("catalogo-grid");
const filtro = document.getElementById("filtro");

// Función para mostrar vehículos según el modelo
function mostrarVehiculos(categoria) {
  grid.innerHTML = ""; // limpiar antes de mostrar

  vehiculos
    .filter(v => categoria === "todos" || v.id_categoria.toString() === categoria || v.categoria === categoria)
    .forEach(v => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${v.marca} ${v.modelo} (${v.año})</h3>
        <img src="img/${v.modelo.toLowerCase()}.jpg" alt="${v.modelo}">
        <p><strong>Placas:</strong> ${v.placas}</p>
        <p><strong>Color:</strong> ${v.color}</p>
        <p><strong>Kilometraje:</strong> ${v.kilometraje_actual} km</p>
        <p><strong>Precio por día:</strong> $${v.precio_dia}</p>
        <p><strong>VIN:</strong> ${v.vin}</p>
        <p><strong>Disponible:</strong> ${v.activo ? "Sí" : "No"}</p>
        <a href="#" class="btn-primary">Rentar</a>
      `;
      grid.appendChild(card);
    });
}

// Mostrar todos al inicio
mostrarVehiculos("todos");

// Escuchar cambios en el filtro
filtro.addEventListener("change", e => {
  mostrarVehiculos(e.target.value);
});
