export const page9 = {
  id: 9,
  title: "9. El Misterio del Estornudo",
  story: "De pronto, Mía sintió un cosquilleo en la nariz: ¡Aaa--chís! Se cubrió rápido con la parte interior del codo como una superheroína.",

  render: function() {
    return `
      <div class="story-page page1-container" style="background-image: url('img/fondo9.png'); background-size: cover; background-position: center; background-repeat: no-repeat; min-height: 480px;">
        <img src="img/estornudo_codo.png" alt="Estornudando en el codo" class="page1-kids-sand">

        <div class="story-card" style="background-color: rgba(255, 255, 255, 0.88); backdrop-filter: blur(2px); border-radius: 16px; padding: 20px; margin: 20px; max-width: 45%; float: right;">
          <div class="story-card-header">
            <h2>${this.title}</h2>
          </div>
          <p class="story-text">${this.story}</p>

          <div class="interactive-box" onclick="triggerPageAction(9)">
            <div class="interactive-box-icon">
              <span>🤧</span>
            </div>
            <p>¡Usa el escudo del codo!</p>
          </div>
        </div>
      </div>
    `;
  },

  onAction: function() {
    alert("¡Excelente reflejo! 🛡️ Evitaste que los gérmenes volaran por los aires.");
  }
};