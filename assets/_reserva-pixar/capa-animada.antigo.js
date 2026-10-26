/* Capa animada — NR 11 Operador de talha elétrica.
   Só efeitos de luz, sem texto: um feixe verde varre a máquina em loop, brilhos pontuais cintilam no metal
   (talha, corrente, gancho, cinta, botoeira) e poeira dourada flutua na luz do depósito.
   A camada fica exatamente sobre a foto (assets/fotos/capa.png, 1672×941), no mesmo enquadramento do
   CSS da foto (object-fit: cover; object-position: right center). Posições = % da foto.
   Para desfazer: remova o <link> do capa-animada.css e este <script> do sessao-aprender.html. */
(function () {
  var IW = 1672, IH = 941;
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;

  /* brilhos: [x%, y%, tamanho (1 = padrão), atraso em s] */
  var GLINTS = [
    [67.0, 11.7, 1.1, 0.0],
    [65.2, 24.4, 0.7, 1.3],
    [65.2, 36.7, 0.9, 2.4],
    [59.2, 53.0, 0.8, 3.1],
    [72.8, 39.8, 0.9, 0.7],
    [82.0, 22.8, 0.8, 1.9],
    [65.8, 63.8, 0.8, 3.7],
    [93.0, 18.0, 1.5, 2.9],
    [84.3, 48.4, 0.7, 4.0]
  ];

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'true');

  /* a própria imagem ganha vida: recortes da foto (mesma imagem, em cima dela) se mexem de leve —
     a carga balança pendurada na corrente e o instrutor respira. Só aparecem quando a foto existe. */
  function clone(cls, poly) {
    var c = document.createElement('div');
    c.className = 'qs-cut ' + cls;
    c.style.clipPath = 'polygon(' + poly + ')';
    c.style.webkitClipPath = c.style.clipPath;
    layer.appendChild(c);
    return c;
  }
  var cuts = [
    clone('qs-cut-load', '64% 20%, 67% 20%, 67.5% 40%, 74% 48%, 75.8% 52%, 75.5% 67%, 54.8% 67%, 55% 52%, 58% 47%, 63.5% 40%'),
    clone('qs-cut-man', '78% 20%, 87.5% 20%, 88.5% 36%, 91.5% 40%, 92.5% 60%, 93% 97.5%, 77% 97.5%, 78.5% 60%, 78% 40%')
  ];
  function paintCuts() {
    var ok = img.complete && img.naturalWidth && !img.classList.contains('is-ph');
    cuts.forEach(function (c) {
      c.style.display = ok ? '' : 'none';
      if (ok) c.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
    });
  }
  paintCuts();
  img.addEventListener('load', paintCuts);

  /* holofote: a cena escurece um pouco e uma luz quente passeia (sozinha, ou seguindo o mouse/dedo) */
  var dim = document.createElement('div'); dim.className = 'qs-dim';
  var glow = document.createElement('div'); glow.className = 'qs-glow';
  layer.appendChild(dim); layer.appendChild(glow);

  /* halo pulsando atrás do símbolo da TecnoCursos */
  var halo = document.createElement('div'); halo.className = 'qs-halo';
  layer.appendChild(halo);

  var lx = 70, ly = 40, tx = 70, ty = 40, idle = true, lastMove = 0, nextAt = 0, si = 0;
  var STOPS = [[66, 12], [66, 38], [65, 62], [84, 34], [93, 17], [93, 17], [84, 60]];
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function setLamp() {
    layer.style.setProperty('--lx', lx + '%');
    layer.style.setProperty('--ly', ly + '%');
  }
  setLamp();
  function pointer(e) {
    var home = document.getElementById('home');
    if (home && home.hidden) return;
    var r = layer.getBoundingClientRect();
    if (!r.width) return;
    tx = Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100));
    ty = Math.max(0, Math.min(100, (e.clientY - r.top) / r.height * 100));
    idle = false; lastMove = performance.now();
  }
  window.addEventListener('mousemove', pointer);
  window.addEventListener('touchmove', function (e) { if (e.touches[0]) pointer(e.touches[0]); }, { passive: true });
  function lampLoop(t) {
    if (!idle && t - lastMove > 3500) idle = true;
    if (idle && t > nextAt) { var s = STOPS[si++ % STOPS.length]; tx = s[0]; ty = s[1]; nextAt = t + 2600; }
    lx += (tx - lx) * .045; ly += (ty - ly) * .045;
    setLamp();
    requestAnimationFrame(lampLoop);
  }
  if (!calm) requestAnimationFrame(lampLoop);
  else { dim.style.display = glow.style.display = 'none'; }

  var scan = document.createElement('div');
  scan.className = 'qs-scan';
  layer.appendChild(scan);

  GLINTS.forEach(function (g) {
    var s = document.createElement('i');
    s.className = 'qs-glint';
    s.style.left = g[0] + '%';
    s.style.top = g[1] + '%';
    s.style.setProperty('--s', g[2]);
    s.style.animationDelay = g[3] + 's';
    layer.appendChild(s);
  });

  var dust = document.createElement('div');
  dust.className = 'qs-dust';
  for (var k = 0; k < 18; k++) {
    var d = document.createElement('i');
    d.style.left = (28 + Math.random() * 52) + '%';
    d.style.top = (35 + Math.random() * 55) + '%';
    d.style.setProperty('--d', (6 + Math.random() * 6).toFixed(1) + 's');
    d.style.setProperty('--dx', ((Math.random() - .5) * 5).toFixed(1) + 'vw');
    d.style.animationDelay = (-Math.random() * 10).toFixed(1) + 's';
    dust.appendChild(d);
  }
  layer.appendChild(dust);

  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));

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
  }
  place();
  img.addEventListener('load', place);
  window.addEventListener('resize', place);
  if (window.ResizeObserver) new ResizeObserver(place).observe(photo);
})();
