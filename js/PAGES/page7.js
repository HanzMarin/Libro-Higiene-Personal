export const page7 = {
  id: 7,
  title: "7. El Banquete Seguro",
  story: "Leo tomó su manzana roja y deliciosa. Ahora podía comerla con total seguridad, sabiendo que ningún germen entraría a su pancita.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo7.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 7 -->
        <img src="img/comiendo_manzana.png" alt="Comiendo la manzana" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(7)">
            <div class="interactive-box-icon">
              <span>🍎</span>
            </div>
            <p>¡Dale un mordisco a la manzana!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Ñam, ñam! 😋 Qué rica manzana y sin riesgo de dolorcito de barriga.");
  }
};