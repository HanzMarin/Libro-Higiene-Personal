export const page4 = {
  id: 4,
  title: "4. El Baile de la Espuma",
  story: "Entre los dedos y sobre las uñas, las burbujas bailaban en un torbellino blanco. ¡Lavar cada rincón era la clave para vencer al ejército de bacterias!",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo4.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <img src="img/baile_espuma.png" alt="Baile de la espuma" class="page1-kids-sand">

        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <div class="interactive-box" onclick="triggerPageAction(4)">
            <div class="interactive-box-icon">
              <span>🫧</span>
            </div>
            <p>¡Toca para frotar los nudillos!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Frotaste entre los dedos! 🧼 Las bacterias perdieron el equilibrio.");
  }
};