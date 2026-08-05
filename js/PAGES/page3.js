export const page3 = {
  id: 3,
  title: "3. El Poder del Jabón Mágico",
  story: "Mía corrió al lavadero, abrió el caño y frotó el jabón haciendo muchas burbujas gigantes. ¡Los monstruitos salieron volando!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo3.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 3 -->
        <img src="img/jabon_burbujas.png" alt="Jabón y burbujas" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(3)">
            <div class="interactive-box-icon">
              <span>🧼</span>
            </div>
            <p>¡Haz espuma para espantar los gérmenes!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Frotaste durante 20 segundos! 🫧 Las manos de Mía quedaron súper limpias.");
  }
};