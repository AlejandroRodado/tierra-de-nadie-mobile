/* Tierra de Nadie · Intro cinematográfica v0.11.8
   No modifica la portada, las puertas ni las animaciones existentes. */
(() => {
  'use strict';
  if (document.getElementById('tdn-intro')) return;
  const style = document.createElement('style');
  style.textContent = `
    #tdn-intro{position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;overflow:hidden;background:#150e15;isolation:isolate;pointer-events:all;opacity:1;transition:opacity .55s ease}
    #tdn-intro.tdn-out{opacity:0;pointer-events:none}
    #tdn-intro svg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
    #tdn-intro .tdn-sun{transform-origin:50% 55%;animation:tdn-sun 2.9s ease-out both}
    #tdn-intro .tdn-figures{animation:tdn-figures 2.9s ease-in-out both}
    #tdn-intro .tdn-hospital{animation:tdn-hospital 2.9s ease-in-out both}
    #tdn-intro .tdn-flare{animation:tdn-flare 2.9s ease-in-out both}
    @keyframes tdn-sun{from{transform:translateY(70px) scale(1.15)}to{transform:translateY(-15px) scale(1)}}
    @keyframes tdn-figures{0%,18%{opacity:0;transform:translateY(22px)}38%,85%{opacity:1;transform:translateY(0)}100%{opacity:.45}}
    @keyframes tdn-hospital{0%,10%{opacity:0;transform:translateX(35px)}40%,100%{opacity:1;transform:translateX(0)}}
    @keyframes tdn-flare{0%,55%{opacity:0}75%{opacity:.4}100%{opacity:1}}
  `;
  document.head.appendChild(style);
  const overlay = document.createElement('div');
  overlay.id = 'tdn-intro';
  overlay.setAttribute('role','presentation');
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML = `
    <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tdn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#180f25"/><stop offset=".42" stop-color="#6a2635"/>
          <stop offset=".73" stop-color="#c65d4c"/><stop offset="1" stop-color="#1e111a"/>
        </linearGradient>
        <radialGradient id="tdn-glow"><stop stop-color="#ffd5a0" stop-opacity=".7"/><stop offset="1" stop-color="#f39b69" stop-opacity="0"/></radialGradient>
      </defs>
      <path fill="url(#tdn-sky)" d="M0 0h1440v800H0z"/>
      <g class="tdn-sun"><circle cx="720" cy="465" r="225" fill="url(#tdn-glow)"/><circle cx="720" cy="472" r="97" fill="#f9ad76" opacity=".86"/></g>
      <path d="M0 560 Q180 520 330 565 T690 556 T1100 552 T1440 565 V800 H0Z" fill="#2b1923" opacity=".58"/>
      <g class="tdn-hospital" fill="#180f1a">
        <path d="M1000 130h350v670h-350zM1060 80h230v50h-230zM1150 26h50v54h-50z"/>
        <path d="M940 325h90v475h-90zM1350 280h90v520h-90z"/>
        <path d="M1165 41h20v23h-20zM1158 48h34v10h-34z" fill="#bd675b"/>
        <g fill="#8d4b4b" opacity=".5">
          <path d="M1040 170h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35z"/>
          <path d="M1040 268h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35z"/>
          <path d="M1040 366h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35zm72 0h35v53h-35z"/>
        </g>
      </g>
      <g class="tdn-figures" fill="#130d17">
        <!-- El niño, a la izquierda -->
        <circle cx="560" cy="495" r="30"/>
        <path d="M535 524 Q560 513 585 525 L603 663 L591 800H563L558 678L548 800H516L521 662z"/>
        <path d="M536 542L500 635L515 643L549 583zM583 541L612 626L601 638L566 572z"/>
        <!-- El chico, a la derecha -->
        <circle cx="655" cy="475" r="34"/>
        <path d="M623 508Q650 495 686 512L710 672L698 800H664L653 672L645 800H609L608 670z"/>
        <path d="M627 526L595 636L610 642L653 555zM679 527L707 624L693 632L653 549z"/>
      </g>
      <path d="M0 735Q400 708 770 735T1440 735V800H0Z" fill="#100c14"/>
      <rect class="tdn-flare" width="1440" height="800" fill="#fff1d5" opacity=".12"/>
    </svg>
    `;
  const mount = () => {
    if (!document.body || document.getElementById('tdn-intro')) return;
    document.body.appendChild(overlay);
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 450 : 2900;
    window.setTimeout(() => {
      overlay.classList.add('tdn-out');
      window.setTimeout(() => {overlay.remove(); style.remove();}, 650);
    }, duration);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();