export const page15 = {
  id: 15,
  title: "15. Antes de Dormir",
  story: "La luna apareció en el cielo. Antes de ponerse la pijama y acurrucarse en la cama, Leo fue al baño para su último lavado del día.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo15.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 15 -->
        <img src="img/noche_lavado.png" alt="Niño lavándose de noche" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(15)">
            <div class="interactive-box-icon">
              <span>🌙</span>
            </div>
            <p>¡Prepara tus manos para descansar!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Sueños limpios y felices! 🌙 Sin bacterias molestas por la noche.");
  }
};