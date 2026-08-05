export const page14 = {
  id: 14,
  title: "14. El Escuadrón de la Escuela",
  story: "Al llegar al colegio, Mía y sus compañeros mostraron sus manos totalmente limpias a la profesora. ¡Todos se convirtieron en el Escuadrón Higiene!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo14.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 14 -->
        <img src="img/escuela_amigos.png" alt="Niños en el colegio" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(14)">
            <div class="interactive-box-icon">
              <span>🏫</span>
            </div>
            <p>¡Choca esos cinco limpios!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Chocaste los cinco! ✋ Tienes el superpoder de proteger a tus amigos.");
  }
};