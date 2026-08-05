export const page19 = {
  id: 19,
  title: "19. El Gran Diploma",
  story: "Por cuidar su salud y la de todos sus amigos, Leo y Mía recibieron el diploma oficial de 'Guardianes de la Higiene'.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo19.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 19 -->
        <img src="img/diploma_superheroes.png" alt="Diploma de la higiene" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(19)">
            <div class="interactive-box-icon">
              <span>📜</span>
            </div>
            <p>¡Firma tu diploma de guardián!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Felicidades, Guardián! 📜 Has completado casi todo el recorrido.");
  }
};