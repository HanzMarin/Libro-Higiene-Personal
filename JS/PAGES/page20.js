export const page20 = {
  id: 20,
  title: "20. ¡Misión Cumplida!",
  story: "Y así, con agua, jabón y una gran sonrisa, Leo y Mía demostraron que ser un súper héroe está al alcance de nuestras manos. ¡Fin del viaje!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo20.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <!-- Imagen de la página 20 -->
        <img src="img/fin_superheroes.png" alt="Niños felices celebrando" class="page1-kids-sand">

        <!-- Tarjeta de texto acomodada a la derecha -->
        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <!-- Botón de acción interactivo -->
          <div class="interactive-box" onclick="triggerPageAction(20)">
            <div class="interactive-box-icon">
              <span>🎉</span>
            </div>
            <p>¡Celebra la victoria!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Felicidades! 🎉 Has completado el cuento interactivo. ¡Recuerda lavar siempre tus manos!");
  }
};