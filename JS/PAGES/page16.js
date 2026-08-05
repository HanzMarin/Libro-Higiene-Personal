export const page16 = {
  id: 16,
  title: "16. La Gran Prueba",
  story: "Un duendecillo del polvo intentó acercarse al plato de sopa de Mía, pero se encontró con una barrera invisible de jabón y salió huyendo.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo16.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 16 -->
        <img src="img/barrera_jabon.png" alt="Escudo de jabón" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(16)">
            <div class="interactive-box-icon">
              <span>🛡️</span>
            </div>
            <p>¡Activa el escudo burbuja!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Escudo activado! 🛡️ Ningún germen puede romper tu defensa.");
  }
};