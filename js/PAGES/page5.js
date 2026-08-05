export const page5 = {
  id: 5,
  title: "5. La Cascada Dorada",
  story: "Mía abrió la llave del agua y una brillante cascada enjuagó todas las burbujas. Los monstruitos resbalaron directo hacia el desagüe.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo5.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 5 -->
        <img src="img/agua_enjuague.png" alt="Enjuagando las manos" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(5)">
            <div class="interactive-box-icon">
              <span>💧</span>
            </div>
            <p>¡Abre la llave del agua!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡El agua limpia arrastró a todos los gérmenes por el desagüe! 🌊 Bye bye, monstruitos.");
  }
};