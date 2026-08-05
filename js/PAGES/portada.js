export const portada = {
  id: 0,
  title: "LAS AVENTURAS DE LAS MANITOS LIMPIAS",
  
  render: function() {
    return `
      <div class="cover-page">
        <img src="img/bubble_cluster.png" alt="Burbujas" class="cover-bubble-cluster">
        <img src="img/hero_boy.png" alt="Niño" class="cover-hero">
        <img src="img/water_drop.png" alt="Gota" class="cover-water-drop">
        <img src="img/soap_bar.png" alt="Jabón" class="cover-soap-bar">
        <img src="img/brush_cleaner.png" alt="Cepillo" class="cover-brush">

        <div class="cover-box" onclick="triggerPageAction(0)">
          <div class="cover-box-icon-bg">
            <span class="icon">📖</span>
          </div>
          <p>¡Toca aquí para abrir el libro!</p>
        </div>
      </div>
    `;
  },

  onAction: function() {
    if (window.bookApp && window.bookApp.pageFlip) {
      window.bookApp.pageFlip.turnToPage(1);
    }
  }
};