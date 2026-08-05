export const page18 = {
  id: 18,
  title: "18. Enseñando a los Pequeños",
  story: "Mía le enseñó a su hermanito menor cómo hacer espuma en forma de corazón. ¡Aprender a lavarse las manos también es muy divertido!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo18.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 18 -->
        <img src="img/ensenando_hermano.png" alt="Enseñando a lavarse las manos" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(18)">
            <div class="interactive-box-icon">
              <span>💖</span>
            </div>
            <p>¡Haz una burbuja de corazón!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Enseñar con amor es genial! 💖 Ahora tu hermanito también sabe protegerse.");
  }
};