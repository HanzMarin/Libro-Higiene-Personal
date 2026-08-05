export const page17 = {
  id: 17,
  title: "17. El Secreto de la Salud",
  story: "El doctor Sonrisas visitó la ciudad y felicitó a Leo y Mía. '¡Lavar sus manos es el remedio más mágico para no enfermarse jamás!', les dijo.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo17.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 17 -->
        <img src="img/doctor_sonrisas.png" alt="Doctor felicitando a los niños" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(17)">
            <div class="interactive-box-icon">
              <span>🩺</span>
            </div>
            <p>¡Recibe la estrella de la salud!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Ganaste una estrella de la salud! ⭐ Eres un ejemplo de limpieza.");
  }
};