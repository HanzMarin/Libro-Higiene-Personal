export const page1 = {
  id: 1,
  title: "1. El Reino del Juego",
  story: "En un lugar muy alegre vivían Leo y Mía. Les encantaba jugar en el parque construyendo castillos de arena y corriendo todo el día.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('IMG/fondo1.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        <!-- Personajes PNG más grandes y animados -->
        <img src="img/niños_arena.png" alt="Niños jugando en la arena" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(1)">
            <div class="interactive-box-icon">
              <span>🏰</span>
            </div>
            <p>¡Toca aquí para excavar!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Construiste un gran castillo de arena con Leo y Mía! 🏰✨ Pero tus manos quedaron llenas de tierra.");
  }
};
