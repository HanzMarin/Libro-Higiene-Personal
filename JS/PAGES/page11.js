export const page11 = {
  id: 11,
  title: "11. El Canto de los 20 Segundos",
  story: "Para saber cuánto tiempo lavarse, Mía inventó una canción divertida. Cantar 'Cumpleaños Feliz' dos veces seguidas le aseguraba el tiempo perfecto de lavado.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo11.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 11 -->
        <img src="img/cantando_lavado.png" alt="Niños cantando mientras se lavan" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(11)">
            <div class="interactive-box-icon">
              <span>🎵</span>
            </div>
            <p>¡Canta la canción del lavado!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("🎵 ¡Lava, lava, limpia, limpia sin parar! 🎵 ¡Pasaron los 20 segundos perfectos!");
  }
};