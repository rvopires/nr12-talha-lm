/* Capa animada — NR 11 Operador de talha elétrica (ver o comentário no capa-animada.css).
   Efeito 1: o palete (PNG transparente) sobe e desce. Efeito 2: balão de fala do instrutor com três frases em ciclo. */
(function () {
  var IW = 1672, IH = 941;
  var home = document.getElementById('home');
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'true');

  var clip = document.createElement('div');
  clip.className = 'qs-fx-clip';
  var pal = document.createElement('img');
  pal.className = 'qs-fx-pal';
  pal.alt = '';
  pal.draggable = false;
  pal.src = 'assets/fotos/capa-palete.png';
  pal.onerror = function () { pal.style.display = 'none'; };
  clip.appendChild(pal);
  layer.appendChild(clip);

  var say = document.createElement('div');
  say.className = 'qs-fx-say';
  layer.appendChild(say);
  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));

  /* a camada fica exatamente sobre a foto, no mesmo enquadramento do CSS dela (cover, alinhada à direita) */
  function place() {
    var w = photo.clientWidth, h = photo.clientHeight;
    if (!w || !h) return;
    var iw = img.naturalWidth || IW, ih = img.naturalHeight || IH;
    var s = Math.max(w / iw, h / ih);
    var rw = iw * s, rh = ih * s;
    layer.style.width = rw + 'px';
    layer.style.height = rh + 'px';
    layer.style.left = (w - rw) + 'px';
    layer.style.top = ((h - rh) / 2) + 'px';
    layer.style.setProperty('--u', (rh / IH) + 'px');
  }
  place();
  img.addEventListener('load', place);
  window.addEventListener('resize', place);
  if (window.ResizeObserver) new ResizeObserver(place).observe(photo);

  /* balão de fala */
  var LINES = [
    'Olá! Bem-vindo(a) ao treinamento!',
    'Aqui você aprende a operar a talha elétrica com segurança.',
    'Vamos começar?'
  ];
  function show(text) {
    say.classList.remove('is-on');
    say.innerHTML = '';
    text.split(' ').forEach(function (w, i) {
      var s = document.createElement('span');
      s.textContent = w;
      s.style.setProperty('--i', i);
      say.appendChild(s);
      say.appendChild(document.createTextNode(' '));
    });
    void say.offsetWidth;
    say.classList.add('is-on');
  }
  if (reduce) { show(LINES[0]); return; }
  var i = 0, timer = null;
  function visible() { return !home || !home.hidden; }
  function next() {
    clearTimeout(timer);
    if (!visible()) { timer = setTimeout(next, 1200); return; }
    show(LINES[i % LINES.length]);
    var hold = 1800 + LINES[i % LINES.length].split(' ').length * 420;
    i++;
    timer = setTimeout(function () {
      say.classList.remove('is-on');
      timer = setTimeout(next, i % LINES.length === 0 ? 2200 : 700);
    }, hold);
  }
  timer = setTimeout(next, 900);
})();
