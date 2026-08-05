export const page8 = {
  id: 8,
  title: "8. La Misión en la Pintura",
  story: "Por la tarde, Mía y Leo decidieron hacer arte con témperas de colores. Se pintaron las manos de azul, verde y amarillo para hacer un lindo arcoíris.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo8.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 8 -->
        <img src="img/pintando_manos.png" alt="Niños pintando" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(8)">
            <div class="interactive-box-icon">
              <span>🎨</span>
            </div>
            <p>¡Plasma tu huella de pintura!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Un mural hermoso! 🎨 Pero recuerda: después de pintar, ¡a lavar!");
  }
};