import { portada } from 'PAGES/portada.js';
import { page1 } from 'PAGES/page1.js';
import { page2 } from 'PAGES/page2.js';
import { page3 } from 'PAGES/page3.js';
import { page4 } from 'PAGES/page4.js';
import { page5 } from 'PAGES/page5.js';
import { page6 } from 'PAGES/page6.js';
import { page7 } from 'PAGES/page7.js';
import { page8 } from 'PAGES/page8.js';
import { page9 } from 'PAGES/page9.js';
import { page10 } from 'PAGES/page10.js';
import { page11 } from 'PAGES/page11.js';
import { page12 } from 'PAGES/page12.js';
import { page13 } from 'PAGES/page13.js';
import { page14 } from 'PAGES/page14.js';
import { page15 } from 'PAGES/page15.js';
import { page16 } from 'PAGES/page16.js';
import { page17 } from 'PAGES/page17.js';
import { page18 } from 'PAGES/page18.js';
import { page19 } from 'PAGES/page19.js';
import { page20 } from 'PAGES/page20.js';

class BookApp {
  constructor() {
    this.pages = {
      0: portada,
      1: page1,
      2: page2,
      3: page3,
      4: page4,
      5: page5,
      6: page6,
      7: page7,
      8: page8,
      9: page9,
      10: page10,
      11: page11,
      12: page12,
      13: page13,
      14: page14,
      15: page15,
      16: page16,
      17: page17,
      18: page18,
      19: page19,
      20: page20
    };

    this.totalPages = 21;
    this.pageFlip = null;
    this.currentPage = 0;
    this.synth = window.speechSynthesis;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.spanishVoice = null;

    this.init();
  }

  init() {
    this.renderAllPages();
    this.initPageFlip();
    this.setupEventListeners();
    this.loadSpanishVoice();
    this.setupOrientationHandler();
  }

  setupOrientationHandler() {
    // Función para forzar landscape en móviles
    const forceLandscape = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && screen && screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => {
          console.log('No se pudo bloquear la orientación:', err);
        });
      }
    };

    // Botón de rotar
    const rotateBtn = document.getElementById('btn-rotate');
    if (rotateBtn) {
      rotateBtn.addEventListener('click', forceLandscape);
    }

    // Intentar forzar al cargar
    setTimeout(forceLandscape, 500);

    // Detectar cambios de orientación
    window.addEventListener('orientationchange', () => {
      setTimeout(forceLandscape, 300);
    });

    // También en resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        forceLandscape();
      }
    });

    // Mostrar/ocultar botón de rotar según orientación
    const updateRotateButton = () => {
      if (rotateBtn) {
        const isMobile = window.innerWidth <= 768;
        const isPortrait = window.orientation === 0 || window.orientation === 180;
        rotateBtn.style.display = (isMobile && isPortrait) ? 'block' : 'none';
      }
    };

    window.addEventListener('orientationchange', updateRotateButton);
    window.addEventListener('resize', updateRotateButton);
    updateRotateButton();
  }

  loadSpanishVoice() {
    // Intentar cargar voces inmediatamente
    const voices = this.synth.getVoices();
    this.findSpanishVoice(voices);

    // Si no hay voces, esperar a que se carguen
    if (this.spanishVoice === null) {
      this.synth.onvoiceschanged = () => {
        const newVoices = this.synth.getVoices();
        this.findSpanishVoice(newVoices);
        console.log('Voces cargadas automáticamente');
      };
    }
  }

  findSpanishVoice(voices) {
    // Buscar voz en español - prioridad:
    // 1. Voz en español que sea predeterminada
    // 2. Cualquier voz en español
    // 3. Voz en español de México o España
    // 4. Cualquier voz disponible

    const spanishDefault = voices.find(v => 
      v.lang.startsWith('es') && v.default
    );

    const spanishAny = voices.find(v => 
      v.lang.startsWith('es')
    );

    const spanishMexico = voices.find(v => 
      v.lang === 'es-MX'
    );

    const spanishSpain = voices.find(v => 
      v.lang === 'es-ES'
    );

    this.spanishVoice = spanishDefault || spanishMexico || spanishSpain || spanishAny || voices[0] || null;

    if (this.spanishVoice) {
      console.log('✅ Voz seleccionada automáticamente:', this.spanishVoice.name, '-', this.spanishVoice.lang);
    } else {
      console.warn('⚠️ No se encontró ninguna voz disponible');
    }
  }

  renderAllPages() {
    const stage = document.getElementById('book-stage');
    if (!stage) return;

    let htmlContent = '';
    for (let i = 0; i < this.totalPages; i++) {
      const pageData = this.pages[i];
      const pageContent = (pageData && typeof pageData.render === 'function')
        ? pageData.render()
        : `<div class="page-card"><h2>Página ${i}</h2><p>Contenido en desarrollo...</p></div>`;

      const density = (i === 0) ? 'hard' : 'soft';

      htmlContent += `
        <div class="page-sheet" data-density="${density}" data-page="${i}">
          <div class="page-sheet-content">
            ${pageContent}
            ${i !== 0 ? this.getReadButton(i) : ''}
          </div>
        </div>
      `;
    }
    stage.innerHTML = htmlContent;

    this.assignReadButtonEvents();
  }

  getReadButton(pageId) {
    return `
      <div class="read-button-container">
        <button class="read-button" data-page="${pageId}">
          🔊
        </button>
      </div>
    `;
  }

  assignReadButtonEvents() {
    const buttons = document.querySelectorAll('.read-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pageId = parseInt(btn.getAttribute('data-page'));
        this.readPage(pageId);
      });
    });
  }

  readPage(pageId) {
    const pageData = this.pages[pageId];
    if (!pageData || !pageData.story) {
      console.warn('No hay historia para la página', pageId);
      return;
    }

    // Si ya está hablando, detener
    if (this.isSpeaking) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.updateReadButton(pageId, false);
      return;
    }

    // Obtener el texto a leer
    let textToRead = pageData.story;
    if (pageData.title) {
      textToRead = pageData.title + '. ' + pageData.story;
    }

    console.log('🔊 Leyendo:', textToRead.substring(0, 50) + '...');

    // Crear utterance
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85; // Velocidad lenta para niños
    utterance.pitch = 1.0;
    utterance.volume = 1;

    // Usar la voz en español si está disponible
    if (this.spanishVoice) {
      utterance.voice = this.spanishVoice;
    }

    this.currentUtterance = utterance;
    this.isSpeaking = true;
    this.updateReadButton(pageId, true);

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.updateReadButton(pageId, false);
    };

    utterance.onerror = (e) => {
      console.error('Error al hablar:', e);
      this.isSpeaking = false;
      this.currentUtterance = null;
      this.updateReadButton(pageId, false);
    };

    this.synth.speak(utterance);
  }

  updateReadButton(pageId, isPlaying) {
    const buttons = document.querySelectorAll('.read-button');
    buttons.forEach(btn => {
      if (parseInt(btn.getAttribute('data-page')) === pageId) {
        btn.innerHTML = isPlaying ? '⏹' : '🔊';
        btn.classList.toggle('playing', isPlaying);
      }
    });
  }

  initPageFlip() {
    const stage = document.getElementById('book-stage');
    if (!stage) return;

    const viewport = stage.parentElement;
    const availableWidth = viewport ? viewport.clientWidth - 40 : 650;
    const availableHeight = viewport ? viewport.clientHeight - 40 : 480;

    const bookWidth = Math.min(availableWidth, 780);
    const bookHeight = Math.min(availableHeight, 550);

    this.pageFlip = new St.PageFlip(stage, {
      width: bookWidth,
      height: bookHeight,
      size: "fixed",
      minWidth: 320,
      maxWidth: 850,
      minHeight: 400,
      maxHeight: 600,
      maxShadowOpacity: 0.8,
      showCover: true,
      usePortrait: true,
      startPage: 0,
      autoSize: false,
      clickEventForward: true,
      useMouseEvents: true,
      flippingTime: 900,
      drawShadow: true,
      mobileScrollSupport: false
    });

    this.pageFlip.loadFromHTML(document.querySelectorAll('.page-sheet'));

    this.pageFlip.on('flip', (e) => {
      this.currentPage = e.data;
      this.updateUI(e.data);
      
      // Detener narración al cambiar de página
      if (this.isSpeaking) {
        this.synth.cancel();
        this.isSpeaking = false;
        this.currentUtterance = null;
        document.querySelectorAll('.read-button').forEach(btn => {
          btn.innerHTML = '🔊';
          btn.classList.remove('playing');
        });
      }
    });

    this.updateUI(0);
  }

  setupEventListeners() {
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (this.pageFlip) {
          this.pageFlip.flipPrev();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (this.pageFlip) {
          this.pageFlip.flipNext();
        }
      });
    }

    window.addEventListener('resize', () => {
      this.handleResize();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.pageFlip && this.currentPage < this.totalPages - 1) {
          this.pageFlip.flipNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.pageFlip && this.currentPage > 0) {
          this.pageFlip.flipPrev();
        }
      }
    });
  }

  handleResize() {
    if (!this.pageFlip) return;
    
    const viewport = document.getElementById('book-stage')?.parentElement;
    if (!viewport) return;

    const availableWidth = viewport.clientWidth - 40;
    const availableHeight = viewport.clientHeight - 40;

    const bookWidth = Math.min(availableWidth, 780);
    const bookHeight = Math.min(availableHeight, 550);

    try {
      this.pageFlip.updateSize(bookWidth, bookHeight);
    } catch (e) {
      console.warn('Error al redimensionar:', e);
    }
  }

  updateUI(currentPageIndex) {
    const indicator = document.getElementById('page-indicator');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (indicator) {
      indicator.textContent = `${currentPageIndex + 1} / ${this.totalPages}`;
    }
    if (btnPrev) {
      btnPrev.disabled = (currentPageIndex === 0);
    }
    if (btnNext) {
      btnNext.disabled = (currentPageIndex === this.totalPages - 1);
    }
  }
}

window.triggerPageAction = (pageId) => {
  if (window.bookApp && window.bookApp.pages[pageId] && typeof window.bookApp.pages[pageId].onAction === 'function') {
    window.bookApp.pages[pageId].onAction();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.bookApp = new BookApp();
});
