/* ============================================
   PORTAFOLIO — Fernando Ossiel Cruz Medina
   ============================================ */

/* --- Image Data --- */
const DATA = {
  aceites: [
    { src: 'Proyecto Lubricantes/Aceites/Aceite PUMA 2T.svg', name: 'Aceite PUMA 2T' },
    { src: 'Proyecto Lubricantes/Aceites/Bajaj 1.2 litros 4T.svg', name: 'Bajaj 1.2L 4T' },
    { src: 'Proyecto Lubricantes/Aceites/Bajaj 4T 1 LITRO.svg', name: 'Bajaj 4T 1L' },
    { src: 'Proyecto Lubricantes/Aceites/Havoline 2T Mezcla.svg', name: 'Havoline 2T' },
    { src: 'Proyecto Lubricantes/Aceites/Havoline 4T Of.svg', name: 'Havoline 4T' },
    { src: 'Proyecto Lubricantes/Aceites/Havoline Azul 4T.svg', name: 'Havoline Azul 4T' },
    { src: 'Proyecto Lubricantes/Aceites/Hyundai 4T Aceite.svg', name: 'Hyundai 4T' },
    { src: 'Proyecto Lubricantes/Aceites/MOTUL 7100.svg', name: 'MOTUL 7100' },
    { src: 'Proyecto Lubricantes/Aceites/Motul 5100.svg', name: 'Motul 5100' },
    { src: 'Proyecto Lubricantes/Aceites/Shell 4T.svg', name: 'Shell 4T' },
    { src: 'Proyecto Lubricantes/Aceites/Yamalube 4T.svg', name: 'Yamalube 4T' }
  ],
  flamingo: [
    { src: 'Proyecto Lubricantes/Flamingo/Desengrasante.svg', name: 'Desengrasante' },
    { src: 'Proyecto Lubricantes/Flamingo/Desinfectante de Casco.svg', name: 'Desinfectante de Casco' },
    { src: 'Proyecto Lubricantes/Flamingo/Diamond Pasta Flamingo.svg', name: 'Diamond Pasta' },
    { src: 'Proyecto Lubricantes/Flamingo/Limpia Neumaticos.svg', name: 'Limpia Neumáticos' },
    { src: 'Proyecto Lubricantes/Flamingo/Limpiador botellita spray.svg', name: 'Limpiador Spray' },
    { src: 'Proyecto Lubricantes/Flamingo/Lubricante para Cadenas.svg', name: 'Lubricante Cadenas' },
    { src: 'Proyecto Lubricantes/Flamingo/Ultra Shine 11.svg', name: 'Ultra Shine' }
  ],
  characters: [
    { src: 'Proyecto Qbit/BRAND BOARD/Personaje Qbit.svg', name: 'Qbit' },
    { src: 'Proyecto Qbit/BRAND BOARD/Personaje Qbit fem.svg', name: 'Qbit Fem' },
    { src: 'Proyecto Qbit/BRAND BOARD/Qbit Pose 2.svg', name: 'Qbit Pose 2' },
    { src: 'Proyecto Qbit/BRAND BOARD/Cara Qbit fem.svg', name: 'Cara Qbit' },
    { src: 'Proyecto Qbit/BRAND BOARD/Logo principal.svg', name: 'Logo Principal' },
    { src: 'Proyecto Qbit/BRAND BOARD/Logo Secundario 1.svg', name: 'Logo Alt 1' },
    { src: 'Proyecto Qbit/BRAND BOARD/Logo secundario 2.svg', name: 'Logo Alt 2' },
    { src: 'Proyecto Qbit/BRAND BOARD/ICONO OPCIONAL.svg', name: 'Icono' }
  ],
  galaxy: [
    'Alien Cabezon','Alienigena','Ardilla cohete','Calculadora','Circulo bloqueado',
    'Circulo en curso','Circulo terminado','Cohete Blanco','Cohete',
    'Diálogo cuadrado','Diálogo redondo','Estrella 1','Estrella 2','Estrella 3',
    'Estrella feliz','Gato galáctico','Llave','Meteorito 1','Meteorito 2',
    'Mini marciano celeste','Mini marciano rosa','Pastel','Perrito espacial',
    'Planeta 1','Planeta 2','Planeta celeste','Planeta feliz','Planeta purpura',
    'Planeta verde','Qbit recto','Saturno morado','Telescopio 1','Telescopio 2',
    'Tierra 1','Tierra 2'
  ].map(n => ({ src: `Proyecto Qbit/GALERIA DE ICONOS/${n}.svg`, name: n })),
  libro: [
    'Abeja','Balón FB','Caramelo','Carretera','Carrito de helados','Carro amarillo',
    'Carro azul','Carro naranja','Carro verde','Carro','Coma','Galleta','Globo',
    'Helado','Libro Math','Libro ciencia','Linea de meta','Lápiz','Manzana',
    'Mariposa','Moneda','Niña morena','Niña rubia','Niño pelirrojo','Osito',
    'Patito','Vaca'
  ].map(n => ({ src: `Proyecto Qbit/LIBRO/${n}.svg`, name: n })),
  nuevos: [
    'Alcancia Pig','Autobus','Balon Basket','Banana','Caja','Canasta','Chocolate',
    'Cono transito','Cono','Cupcake','Dado 1','Dado 2','Estanque','Fresa',
    'Indicador ordinal','Laptop','Naranja','Pizza cuadrada','Pizza redonda','Piña',
    'Rana','Rebanada pizza','Recta numerica 0 a 10','Regalo','Reloj 1','Reloj 2',
    'Sandia','bandeja'
  ].map(n => ({ src: `Proyecto Qbit/Nuevos/${n}.svg`, name: n })),
  numColored: [0,1,2,3,4,5,6,7,8,9].map(n => ({ src: `Proyecto Qbit/NUMEROS/COLOREADOS/C${n}.svg`, name: `${n}` })),
  numWhite: [0,1,2,3,4,5,6,7,8,9].map(n => ({ src: `Proyecto Qbit/NUMEROS/BLANCOS/B${n}.svg`, name: `${n}` })),
  operators: [
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo mas.svg', name: '+' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo menos.svg', name: '−' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo por rojo.svg', name: '×' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo por amarillo.svg', name: '× amarillo' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo por verde.svg', name: '× verde' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo division.svg', name: '÷' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Signo igual.svg', name: '=' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Comparación/Mayor que.svg', name: 'Mayor que' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Comparación/Menor que.svg', name: 'Menor que' },
    { src: 'Proyecto Qbit/OPERADORES MATEMATICOS/Comparación/Igual.svg', name: '≡' }
  ],
  variations: [
    { src: 'Proyecto Qbit/Variaciones de color/Miña pelinegro.svg', name: 'Niña pelinegra' },
    { src: 'Proyecto Qbit/Variaciones de color/Niña pelirrojo.svg', name: 'Niña pelirroja' },
    { src: 'Proyecto Qbit/Variaciones de color/Niño moreno.svg', name: 'Niño moreno' }
  ],
  /* Luly */
  lulyIcons: [
    'Alita','Banderilla','Bonele','Hamburguesa','Huevo','Papas','Pupusa','Queso','Taco'
  ].map(n => ({ src: `Proyecto Luly/Iconos comida/${n}.svg`, name: n })),
  lulyCharacters: [
    { src: 'Proyecto Luly/Personaje y variaciones/Estilo 1.svg', name: 'Estilo 1' },
    { src: 'Proyecto Luly/Personaje y variaciones/Estilo 2.svg', name: 'Estilo 2' },
    { src: 'Proyecto Luly/Personaje y variaciones/Estilo 3.svg', name: 'Estilo 3' },
    { src: 'Proyecto Luly/Personaje y variaciones/Estilo 4.svg', name: 'Estilo 4' },
    { src: 'Proyecto Luly/Personaje y variaciones/Estilo 5.svg', name: 'Estilo 5' }
  ]
};

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Build Galleries --- */
  buildProductGrid('aceites-grid', DATA.aceites);
  buildProductGrid('flamingo-grid', DATA.flamingo);
  buildCharacters('characters-row', DATA.characters);
  buildIconGrid('galaxy-grid', DATA.galaxy);
  buildIconGrid('libro-grid', DATA.libro);
  buildIconGrid('nuevos-grid', DATA.nuevos);
  buildNumbersRow('numbers-colored', DATA.numColored);
  buildNumbersRow('operators-row', DATA.operators);
  buildCharacters('variations-grid', DATA.variations);
  /* Luly */
  buildCharacters('luly-characters', DATA.lulyCharacters);
  buildIconGrid('luly-icons-grid', DATA.lulyIcons);

  /* --- Builder Functions --- */
  function buildProductGrid(id, items) {
    const container = document.getElementById(id);
    if (!container) return;
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      card.style.transitionDelay = `${(i % 6) * 0.08}s`;
      card.innerHTML = `
        <div class="product-card-img">
          <img src="${item.src}" alt="${item.name}" loading="lazy">
        </div>
        <div class="product-card-info"><h3>${item.name}</h3></div>`;
      container.appendChild(card);
    });
  }

  function buildCharacters(id, items) {
    const container = document.getElementById(id);
    if (!container) return;
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'character-card reveal';
      card.style.transitionDelay = `${i * 0.1}s`;
      card.innerHTML = `<img src="${item.src}" alt="${item.name}" loading="lazy"><p>${item.name}</p>`;
      container.appendChild(card);
    });
  }

  function buildIconGrid(id, items) {
    const WHITE_SVGS = ['Diálogo cuadrado', 'Diálogo redondo'];
    const container = document.getElementById(id);
    if (!container) return;
    items.forEach((item, i) => {
      const cell = document.createElement('div');
      cell.className = (id === 'libro-grid' || id === 'nuevos-grid') ? 'illust-cell reveal' : 'icon-cell reveal';
      if (WHITE_SVGS.includes(item.name)) cell.classList.add('has-white-svg');
      cell.style.transitionDelay = `${(i % 10) * 0.05}s`;
      cell.innerHTML = `<img src="${item.src}" alt="${item.name}" loading="lazy" title="${item.name}">`;
      container.appendChild(cell);
    });
  }

  function buildNumbersRow(id, items) {
    const container = document.getElementById(id);
    if (!container) return;
    items.forEach((item, i) => {
      const cell = document.createElement('div');
      cell.className = 'number-item reveal';
      cell.style.transitionDelay = `${i * 0.06}s`;
      cell.innerHTML = `<img src="${item.src}" alt="${item.name}" loading="lazy">`;
      container.appendChild(cell);
    });
  }

  /* --- Custom Cursor --- */
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.innerWidth > 768) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx - 6 + 'px';
      dot.style.top = my - 6 + 'px';
    });
    (function loop() {
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      ring.style.left = rx - 20 + 'px'; ring.style.top = ry - 20 + 'px';
      requestAnimationFrame(loop);
    })();
  }

  /* --- Mobile Nav --- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* --- Scroll Reveal (observe dynamically created elements) --- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* --- Active Nav --- */
  const secs = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  const sectionColors = {
    inicio: '#7CDAF3',
    lubricantes: '#D35400',
    qbit: '#7CDAF3',
    luly: '#812D22',
    contacto: '#CC5A80'
  };
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 200;
    secs.forEach(s => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        navAs.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${s.id}"]`);
        if (a) {
          a.classList.add('active');
          a.style.background = sectionColors[s.id] || '#7CDAF3';
        }
        /* Reset inactive link styles */
        navAs.forEach(link => {
          if (!link.classList.contains('active')) link.style.background = '';
        });
      }
    });
  });

  /* --- Lightbox --- */
  const lb = document.getElementById('lightbox');
  const lbImg = lb?.querySelector('img');
  const lbClose = lb?.querySelector('.lightbox-close');

  function openLB(src) { if (!lb) return; lbImg.src = src; lb.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeLB() { if (!lb) return; lb.classList.remove('active'); document.body.style.overflow = ''; }

  if (lbClose) lbClose.addEventListener('click', closeLB);
  if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });

  /* Delegate click on all gallery images */
  document.body.addEventListener('click', e => {
    const img = e.target.closest('.product-card-img img, .icon-cell img, .illust-cell img, .character-card img, .brandboard-showcase img, .number-item img');
    if (img) { e.stopPropagation(); openLB(img.src); }
    const card = e.target.closest('.product-card');
    if (card && !img) { const ci = card.querySelector('.product-card-img img'); if (ci) openLB(ci.src); }
  });

  /* --- Navbar shrink --- */
  const nav = document.querySelector('.navbar');
  if (nav) window.addEventListener('scroll', () => {
    nav.style.padding = window.scrollY > 100 ? '8px 24px' : '12px 32px';
  });

});
