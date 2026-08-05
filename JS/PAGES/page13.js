export const page13 = {
  id: 13,
  title: "13. La Trampa del Teléfono",
  story: "Leo estaba jugando un divertido juego en la tablet. De pronto, recordó que las pantallas táctiles también acumulan muchos monstruitos invisibles.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo13.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 13 -->
        <img src="img/pantalla_tablet.png" alt="Niño con tablet" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(13)">
            <div class="interactive-box-icon">
              <span>📱</span>
            </div>
            <p>¡Limpia la pantalla con cuidado!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Pantalla limpia! 📱 Recuerda evitar tocarte la cara mientras usas tus dispositivos.");
  }
};