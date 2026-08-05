export const page10 = {
  id: 10,
  title: "10. El Rescate de las Mascotas",
  story: "Leo estuvo jugando con Toby, su perrito peludo. Le lanzó la pelota y le acarició las orejas. ¡Toby estaba feliz, pero dejó sus patitas marcadas!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo10.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <img src="img/jugando_perro.png" alt="Jugando con el perro" class="page1-kids-sand">

        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <div class="interactive-box" onclick="triggerPageAction(10)">
            <div class="interactive-box-icon">
              <span>🐶</span>
            </div>
            <p>¡Dale una caricia a Toby!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Toby movió la cola! 🐾 Recuerda lavar tus manos después de jugar con tus mascotas.");
  }
};