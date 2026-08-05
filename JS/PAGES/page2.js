export const page2 = {
  id: 2,
  title: "2. La Hora del Almuerzo",
  story: "Leo tenía mucha hambre y quería comer una manzana directamente. Pero con su lupa mágica vio a los Monstruitos del Polvo saltando en sus dedos.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo2.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de los gérmenes con lupa -->
        <img src="img/germeneslupa.png" alt="Gérmenes con lupa" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(2)">
            <div class="interactive-box-icon">
              <span>🔍</span>
            </div>
            <p>¡Usa la lupa para descubrir los gérmenes!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Cuidado! 🦠 Los gérmenes no te dejarán comer tranquilo si no te lavamos las manos.");
  }
};