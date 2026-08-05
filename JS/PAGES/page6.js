export const page6 = {
  id: 6,
  title: "6. La Toalla Suave",
  story: "Con una toalla limpia y seca, Leo se secó las manos dando pequeños toquecitos. Sus manos quedaron relucientes y oliendo a lavanda.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo6.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 6 -->
        <img src="img/secando_manos.png" alt="Secando las manos" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(6)">
            <div class="interactive-box-icon">
              <span>🧺</span>
            </div>
            <p>¡Usa la toalla mágica!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Manos 100% secas y limpias! ✨ Listas para la siguiente aventura.");
  }
};