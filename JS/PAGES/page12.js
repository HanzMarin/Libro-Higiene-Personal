export const page12 = {
  id: 12,
  title: "12. El Alcohol en Gel Volador",
  story: "Cuando fueron al parque y no había agua ni jabón cerca, el Capitán Gel salió al rescate para desinfectar las manos en un segundo.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo12.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 12 -->
        <img src="img/alcohol_gel.png" alt="Usando alcohol en gel" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(12)">
            <div class="interactive-box-icon">
              <span>🧴</span>
            </div>
            <p>¡Presiona el dispensador!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Gotita mágica activada! 🧴 Desinfección rápida para seguir jugando.");
  }
};