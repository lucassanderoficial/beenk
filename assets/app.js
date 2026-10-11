(function () {
  var WA = '5551997662253';
  var body = document.body, hdr = document.getElementById('hdr'), burger = document.getElementById('burger');

  // menu
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () { setMenu(!body.classList.contains('menu-open')); });
  document.querySelectorAll('.menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); closeLb(); } });

  // revelar ao rolar (conteúdo já visível no carregamento)
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  if (io) {
    var i = 0;
    document.querySelectorAll('[data-r]').forEach(function (el) {
      if (el.getBoundingClientRect().top > innerHeight) {
        el.classList.add('pre'); el.style.transitionDelay = ((i++ % 3) * 80) + 'ms'; io.observe(el);
      }
    });
  }

  // contadores
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; cio.unobserve(e.target);
        var el = e.target, to = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '', t0 = performance.now();
        (function tick(t) {
          var p = Math.min(1, (t - t0) / 1400), v = to * (1 - Math.pow(1 - p, 3));
          el.textContent = v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: .6 });
    document.querySelectorAll('[data-count]').forEach(function (el) { if (el.getBoundingClientRect().top > innerHeight) cio.observe(el); });
  }

  // rolagem: header, progresso, trilha, dock
  var prog = document.getElementById('progress'), dock = document.getElementById('dock');
  var path = document.getElementById('path'), fill = document.getElementById('pathFill'), paw = document.getElementById('pathPaw');
  var steps = [].slice.call(document.querySelectorAll('.step')), ticking = false;
  function onScroll() {
    var y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    hdr.classList.toggle('scrolled', y > 20);
    if (dock) dock.classList.toggle('show', y > 480);
    if (path) {
      var r = path.getBoundingClientRect(), p = Math.max(0, Math.min(1, (innerHeight * .6 - r.top) / r.height));
      fill.style.transform = 'scaleY(' + p + ')';
      paw.style.transform = 'translateY(' + (p * (r.height - 32)) + 'px)';
      steps.forEach(function (s) { s.classList.toggle('lit', s.getBoundingClientRect().top < innerHeight * .6); });
    }
    ticking = false;
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  // lightbox da galeria
  var lb = document.getElementById('lightbox');
  function closeLb() { if (lb) lb.classList.remove('on'); }
  if (lb) {
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
    document.querySelectorAll('.gallery figure').forEach(function (f) {
      f.setAttribute('tabindex', '0');
      function open() { var im = f.querySelector('img'); lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt; lbCap.textContent = f.querySelector('figcaption').textContent; lb.classList.add('on'); lb.querySelector('button').focus(); }
      f.addEventListener('click', open);
      f.addEventListener('keydown', function (e) { if (e.key === 'Enter') open(); });
    });
    lb.addEventListener('click', function (e) { if (e.target !== lbImg) closeLb(); });
  }

  // formulários que abrem o WhatsApp com a mensagem pronta
  function openWA(text) {
    var url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener') || (location.href = url);
  }
  var booker = document.getElementById('booker');
  if (booker) booker.addEventListener('submit', function (e) {
    e.preventDefault();
    var svc = document.getElementById('b-svc').value, pet = document.getElementById('b-pet').value.trim();
    openWA('Olá, Oh! My Dog! Quero agendar ' + svc.toLowerCase() + (pet ? ' para o ' + pet : ' para o meu pet') + '. Quais horários vocês têm?');
  });
  var form = document.getElementById('agendar');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var g = function (id) { return document.getElementById(id).value.trim(); };
    var msg = document.getElementById('f-msg');
    if (!g('f-nome')) { msg.textContent = 'Escreva seu nome para a gente saber com quem está falando.'; document.getElementById('f-nome').focus(); return; }
    if (!g('f-pet')) { msg.textContent = 'Conte o nome do seu pet.'; document.getElementById('f-pet').focus(); return; }
    msg.textContent = '';
    var t = 'Olá, Oh! My Dog! Meu nome é ' + g('f-nome') + '.\n' +
      'Pet: ' + g('f-pet') + ' (' + g('f-porte') + ')\n' +
      'Serviço: ' + g('f-svc') + '\n' +
      (g('f-data') ? 'Data desejada: ' + g('f-data').split('-').reverse().join('/') + '\n' : '') +
      (g('f-obs') ? 'Observações: ' + g('f-obs') : '');
    openWA(t.trim());
  });
})();
