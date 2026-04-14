
const APP_KEY = 'cgm-mecanografia-pro-final';

function generateTodayCode() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}${dd}${yy}`;
}

const phases = [
  {
    id: 1, title: 'Fase 1 · Base 60 ppm', targetPPM: 60, maxErrorsPerMinute: 1, prompt: 'Fila guía, ritmo estable y precisión básica.',
    texts: [
      'Ana sale sola. Luis lee la lista. Sara usa la mesa y coloca los dedos con calma en la fila guía. La tarea pide ritmo, orden y atención en cada pulsación.',
      'El alumno inicia la práctica con postura correcta, espalda recta, hombros relajados y vista al frente. Cada palabra debe escribirse con suavidad, sin golpear el teclado.'
    ],
    englishTexts: [
      'The student starts the practice with a correct posture. The back is straight and the hands stay on the home row.',
      'Good typing habits improve speed, accuracy and confidence when writing short messages and office notes.'
    ],
    tableTexts: [
      'ALUMNO     GRUPO   PRUEBA   PPM\nMARTA      1A      F1       62\nLUCAS      1A      F1       65\nSARA       1A      F1       60',
      'PRODUCTO   UNID.   PRECIO\nCARPETA    12      3,50\nBOLIGRAFO  25      1,20\nAGENDA     10      4,80'
    ]
  },
  {
    id: 2, title: 'Fase 2 · Meta 100 ppm', targetPPM: 100, maxErrorsPerMinute: 1, prompt: 'Textos sencillos con más continuidad y control visual.',
    texts: [
      'La oficina necesita rapidez, pero también exactitud. Una carta comercial con errores transmite descuido. Por eso conviene practicar a diario textos breves y claros.',
      'Cuando comienza la jornada, la persona usuaria enciende el equipo, organiza los materiales y deja libre la zona de trabajo.'
    ],
    englishTexts: [
      'Administrative work requires order, precision and speed. A clean document with no typing mistakes creates a professional impression.',
      'Before typing, the user should prepare the workspace and keep the screen at a comfortable distance.'
    ],
    tableTexts: [
      'CLIENTE    FECHA       IMPORTE\nALFA SA    12/10/26    245,50\nBETA SL    13/10/26    180,00\nGAMMA CB   13/10/26    315,20',
      'MES        VENTAS   GASTOS\nENERO      1200     800\nFEBRERO    1350     790\nMARZO      1420     860'
    ]
  },
  {
    id: 3, title: 'Fase 3 · Meta 140 ppm', targetPPM: 140, maxErrorsPerMinute: 1, prompt: 'Dificultad progresiva con signos, tildes y frases más largas.',
    texts: [
      'Al finalizar la actividad, conviene cerrar las aplicaciones, comprobar que el archivo ha quedado guardado y dejar el puesto recogido.',
      'Una postura ergonómica reduce molestias en cuello, hombros y muñecas.'
    ],
    englishTexts: [
      'When the session ends, the user should save the file, close the program, tidy the desk and switch off the equipment.',
      'Touch typing helps students write reports, forms and emails with better fluency.'
    ],
    tableTexts: [
      'DEPARTAMENTO   INCIDENCIA        ESTADO\nCOMPRAS        Factura pendiente  Revisar\nALMACEN        Stock bajo         Avisado\nVENTAS         Pedido urgente     En curso',
      'AULA   EQUIPO   TECLADO   RATON\n2.1    PC-01    Correcto  Correcto\n2.1    PC-02    Revisar   Correcto\n2.1    PC-03    Correcto  Revisar'
    ]
  },
  {
    id: 4, title: 'Fase 4 · Meta 180 ppm', targetPPM: 180, maxErrorsPerMinute: 1, prompt: 'Rendimiento alto con textos funcionales de oficina.',
    texts: [
      'La responsable de administración redacta un aviso para el equipo: mañana habrá revisión del inventario.',
      'Para alcanzar una velocidad elevada sin perder calidad, es importante evitar mirar constantemente al teclado.'
    ],
    englishTexts: [
      'Efficient office routines depend on accurate data entry, careful proofreading and a responsible use of digital tools.',
      'Students should be able to type short reports in English and correct common mistakes without losing pace.'
    ],
    tableTexts: [
      'TRIMESTRE   FACTURAS   ABONOS   TOTAL\n1º          154        12       142\n2º          166        14       152\n3º          171        10       161',
      'PROVEEDOR   PEDIDO   ENTREGA   OBSERV.\nNORTE SA    5801     14:30     Completa\nSUR SL      5802     15:10     Parcial\nESTE CB     5803     15:45     Revisar'
    ]
  },
  {
    id: 5, title: 'Fase 5 · Reto final 200 ppm', targetPPM: 200, maxErrorsPerMinute: 1, prompt: 'Objetivo final del criterio: mínimo 200 ppm y máximo una falta por minuto.',
    texts: [
      'Durante la sesión de mecanografía avanzada, el alumnado debe demostrar autonomía completa en el uso del teclado extendido.',
      'Antes de abandonar el puesto de trabajo, se debe cerrar la sesión, guardar la documentación y ordenar los periféricos.'
    ],
    englishTexts: [
      'The final challenge measures whether the student can keep a very high typing speed while preserving control and overall accuracy.',
      'Professional administrative performance includes starting the computer correctly and leaving the workstation tidy.'
    ],
    tableTexts: [
      'REFERENCIA   DESCRIPCION              UNID.   IMPORTE\nA-104        Carpetas archivadoras    18      63,00\nB-220        Fundas transparentes     40      28,00\nC-315        Etiquetas adhesivas      15      22,50',
      'EMPLEADO   TAREA              HORA   ESTADO\nNURIA      Revisar albaranes   09:15  Hecha\nPABLO      Registrar pedidos   09:40  Hecha\nELENA      Actualizar archivo  10:05  Pend.'
    ]
  }
];

const theoryBlocks = [
  {
    title: 'Ergonomía y postura corporal',
    summary: 'Postura corporal ante el terminal: prevención de tensiones, posición de brazos, muñecas y manos.',
    embed: 'https://www.youtube.com/embed/iD6ic-QBRtQ'
  },
  {
    title: 'Organización del tiempo y del espacio de trabajo',
    summary: 'Colocación del terminal y periféricos. Organización del puesto y hábitos de trabajo.',
    embed: 'https://www.youtube.com/embed/yIlTJy7w0oE'
  },
  {
    title: 'Teclado extendido y colocación de dedos',
    summary: 'Identificación de la posición correcta de los dedos en las filas del teclado.',
    embed: 'https://www.youtube.com/embed/XNaTYG4wxdo'
  },
  {
    title: 'Puesta en marcha y cierre correcto del terminal',
    summary: 'Guardar, cerrar, recoger y apagar correctamente.',
    embed: 'https://www.youtube.com/embed/QEO8lBdBriY'
  }
];

const quiz = [
  { q: '¿Qué se debe mantener durante la mecanografía?', options: ['Una postura corporal correcta', 'Los hombros elevados', 'La cabeza muy inclinada', 'Los codos lejos del cuerpo'], answer: 0 },
  { q: '¿Dónde deben colocarse los dedos al comenzar?', options: ['En las filas del teclado alfanumérico según su posición', 'Solo en la barra espaciadora', 'En la fila numérica', 'En cualquier tecla'], answer: 0 },
  { q: '¿Qué debe hacerse antes de empezar?', options: ['Preparar el puesto y poner en marcha correctamente el equipo', 'Apagar el monitor', 'Desconectar el teclado', 'Abrir muchos programas'], answer: 0 },
  { q: '¿Qué tipo de textos deben poder realizarse?', options: ['Textos progresivos, tablas sencillas y textos en inglés', 'Solo listas de palabras', 'Solo textos en inglés', 'Solo textos del libro'], answer: 0 },
  { q: '¿Qué objetivo de rendimiento marca el criterio?', options: ['200 ppm y máximo una falta por minuto', '50 ppm y cinco faltas', '100 ppm sin controlar errores', '200 palabras exactas'], answer: 0 },
  { q: 'La mecanografía al tacto consiste en...', options: ['Escribir sin mirar constantemente el teclado', 'Escribir muy despacio', 'Usar solo dos dedos', 'Copiar sin revisar'], answer: 0 },
  { q: '¿Qué se debe hacer al finalizar la sesión?', options: ['Guardar, cerrar, recoger y apagar correctamente', 'Irse sin cerrar programas', 'Dejar el escritorio desordenado', 'Apagar la regleta'], answer: 0 },
  { q: 'Una buena ergonomía ayuda a...', options: ['Reducir tensiones y prevenir molestias', 'Escribir con más ruido', 'Mover más el teclado', 'Usar peor el ratón'], answer: 0 },
  { q: '¿Para qué sirve una progresión por fases?', options: ['Para aumentar dificultad y velocidad de forma gradual', 'Para evitar medir el progreso', 'Para saltarse la base', 'Para trabajar solo teoría'], answer: 0 },
  { q: 'Además de velocidad, se revisa especialmente...', options: ['La corrección de los errores mecanográficos', 'El color del teclado', 'La marca del ordenador', 'El fondo de pantalla'], answer: 0 }
];

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'practica', label: 'Práctica' },
  { id: 'teoria', label: 'Teoría y vídeos' },
  { id: 'test', label: 'Test' },
  { id: 'criterios', label: 'Criterios' },
  { id: 'docente', label: 'Panel docente' }
];

const state = loadState();
let practice = {
  studentName: state.studentName || '',
  phaseId: state.currentPhaseId || 1,
  mode: state.currentMode || 'normal',
  textIndex: 0,
  startedAt: null,
  timer: null,
  completed: false,
  sourceText: ''
};

function loadState() {
  const raw = localStorage.getItem(APP_KEY);
  if (!raw) {
    return { unlocked:[1], currentPhaseId:1, currentMode:'normal', studentName:'', attempts:{}, allAttempts:[], quizScore:0, quizPassed:false };
  }
  try { return JSON.parse(raw); }
  catch {
    return { unlocked:[1], currentPhaseId:1, currentMode:'normal', studentName:'', attempts:{}, allAttempts:[], quizScore:0, quizPassed:false };
  }
}
function saveState(){ localStorage.setItem(APP_KEY, JSON.stringify(state)); }

function renderNav() {
  const nav = document.getElementById('nav');
  nav.innerHTML = navItems.map(item => `<button class="${item.id===currentView()?'active':''}" data-view="${item.id}">${item.label}</button>`).join('');
  nav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
}
function currentView(){ return document.querySelector('.view.active')?.id || 'inicio'; }
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  renderNav();
}

function getSelectedPhase(){ return phases.find(p => p.id === Number(practice.phaseId)) || phases[0]; }
function getPracticeCollection(phase){
  if (practice.mode === 'english') return phase.englishTexts;
  if (practice.mode === 'tables') return phase.tableTexts;
  return phase.texts;
}
function getPracticeText(){
  const phase = getSelectedPhase();
  const collection = getPracticeCollection(phase);
  return collection[practice.textIndex % collection.length];
}

function renderHome() {
  const host = document.getElementById('inicio');
  host.innerHTML = `
    <div class="hero">
      <div class="card">
        <span class="badge">Aplicación PRO final</span>
        <span class="badge">GitHub Pages</span>
        <h2>Entrenamiento progresivo de mecanografía</h2>
        <p class="small">Versión final con práctica por fases, textos, tablas, inglés, teoría, test, criterios, seguimiento por alumno y exportación CSV.</p>
        <div class="actions">
          <button class="button-main" id="goPractice">Ir a práctica</button>
          <button class="button-soft" id="goTheory">Ver teoría</button>
          <button class="button-soft" id="goTest">Abrir test</button>
        </div>
      </div>
      <div class="card">
        <h2>Ruta de aprendizaje</h2>
        ${phases.map(p => {
          const unlocked = state.unlocked.includes(p.id);
          return `<div class="phase ${unlocked ? '' : 'locked'}">
            <h3>${p.title}</h3>
            <div class="small">Objetivo: <strong>${p.targetPPM} ppm</strong> · Precisión máxima: <strong>${p.maxErrorsPerMinute} falta/min</strong></div>
            <div class="small">${p.prompt}</div>
            <div class="small"><strong>${unlocked ? 'Desbloqueada' : 'Bloqueada'}</strong></div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
  document.getElementById('goPractice').onclick = ()=>showView('practica');
  document.getElementById('goTheory').onclick = ()=>showView('teoria');
  document.getElementById('goTest').onclick = ()=>showView('test');
}

function renderPractice() {
  const host = document.getElementById('practica');
  const phase = getSelectedPhase();
  practice.sourceText = getPracticeText();
  const unlockedOptions = phases.filter(p => state.unlocked.includes(p.id));

  host.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h2>Práctica guiada</h2>
        <div class="row">
          <div>
            <label>Nombre del alumno o alumna</label>
            <input id="studentName" value="${escapeAttribute(practice.studentName || '')}" placeholder="Ejemplo: Lucía Pérez">
          </div>
          <div>
            <label>Fase</label>
            <select id="phaseSelect">
              ${unlockedOptions.map(p => `<option value="${p.id}" ${p.id===phase.id?'selected':''}>${p.title}</option>`).join('')}
            </select>
          </div>
          <div>
            <label>Modalidad</label>
            <select id="modeSelect">
              <option value="normal" ${practice.mode==='normal'?'selected':''}>Texto alfanumérico</option>
              <option value="tables" ${practice.mode==='tables'?'selected':''}>Tablas sencillas</option>
              <option value="english" ${practice.mode==='english'?'selected':''}>Texto en inglés</option>
            </select>
          </div>
          <div>
            <label>Meta de la fase</label>
            <input value="${phase.targetPPM} ppm · ${phase.maxErrorsPerMinute} falta/min" disabled>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><div class="label">Tiempo</div><div class="value" id="timeValue">00:00</div></div>
          <div class="stat"><div class="label">PPM</div><div class="value" id="ppmValue">0</div></div>
          <div class="stat"><div class="label">Precisión</div><div class="value" id="accValue">100%</div></div>
          <div class="stat"><div class="label">Errores/min</div><div class="value" id="errMinValue">0</div></div>
        </div>

        <div id="targetText" class="typing-area"></div>

        <div class="actions">
          <button class="button-main" id="newTextBtn">Cambiar texto</button>
          <button class="button-soft" id="resetBtn">Reiniciar intento</button>
        </div>

        <label style="display:block;margin-top:14px;">Escribe aquí el texto:</label>
        <textarea id="typingInput" placeholder="Empieza a escribir para iniciar el cronómetro..."></textarea>
        <div id="practiceMessage"></div>
      </div>

      <div class="card">
        <h2>Desbloqueo y seguimiento</h2>
        <p class="small">Supera la fase alcanzando la meta de pulsaciones por minuto y manteniendo como máximo una falta por minuto.</p>

        <div class="resource">
          <strong>Fase actual:</strong> ${phase.title}<br>
          <span class="small">Objetivo de rendimiento: ${phase.targetPPM} ppm · máximo ${phase.maxErrorsPerMinute} falta/minuto.</span><br>
          <span class="small">Modalidad seleccionada: <strong>${practice.mode === 'normal' ? 'Texto alfanumérico' : practice.mode === 'tables' ? 'Tablas sencillas' : 'Texto en inglés'}</strong></span>
        </div>

        <div class="resource" style="margin-top:12px;">
          <strong>Introducir código manual</strong>
          <p class="small">Introduce el código proporcionado por el profesorado para desbloquear la siguiente fase.</p>
          <input id="codeInput" type="password" autocomplete="off" placeholder="Introduce el código">
          <div class="actions"><button class="button-soft" id="unlockBtn">Validar código</button></div>
          <div id="unlockMessage"></div>
        </div>

        <div class="resource" style="margin-top:12px;">
          <strong>Últimos resultados</strong>
          <div id="attemptsBox" class="small"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('studentName').addEventListener('input', e => {
    practice.studentName = e.target.value;
    state.studentName = practice.studentName;
    saveState();
  });
  document.getElementById('phaseSelect').addEventListener('change', e => {
    practice.phaseId = Number(e.target.value);
    state.currentPhaseId = practice.phaseId;
    practice.textIndex = 0;
    stopTimer();
    saveState();
    renderPractice();
  });
  document.getElementById('modeSelect').addEventListener('change', e => {
    practice.mode = e.target.value;
    state.currentMode = practice.mode;
    practice.textIndex = 0;
    stopTimer();
    saveState();
    renderPractice();
  });
  document.getElementById('newTextBtn').onclick = () => { practice.textIndex += 1; stopTimer(); renderPractice(); };
  document.getElementById('resetBtn').onclick = () => { stopTimer(); renderPractice(); };
  document.getElementById('unlockBtn').onclick = handleCodeUnlock;
  document.getElementById('typingInput').addEventListener('input', handleTyping);

  renderTargetText('');
  renderAttempts();
}

function renderTargetText(typed) {
  const host = document.getElementById('targetText');
  const source = practice.sourceText || getPracticeText();
  host.innerHTML = source.split('').map((ch, i) => {
    let cls = 'char';
    if (i < typed.length) cls += typed[i] === ch ? ' correct' : ' incorrect';
    else if (i === typed.length) cls += ' current';
    return `<span class="${cls}">${escapeHtml(ch)}</span>`;
  }).join('');
}

function handleTyping(e) {
  const typed = e.target.value;
  if (!practice.startedAt && typed.length > 0) startTimer();
  renderTargetText(typed);
  updateStats(typed);
}
function startTimer() {
  practice.startedAt = Date.now();
  practice.completed = false;
  practice.timer = setInterval(() => {
    const typed = document.getElementById('typingInput')?.value || '';
    updateStats(typed, false);
  }, 250);
}
function stopTimer() {
  clearInterval(practice.timer);
  practice.timer = null;
  practice.startedAt = null;
}
function updateStats(typed, finalize=true) {
  const source = practice.sourceText || getPracticeText();
  const seconds = practice.startedAt ? Math.max(1, Math.floor((Date.now() - practice.startedAt) / 1000)) : 1;
  const minutes = seconds / 60;

  let correct = 0;
  let errors = 0;
  for (let i=0;i<typed.length;i++) {
    if (typed[i] === source[i]) correct += 1;
    else errors += 1;
  }
  if (typed.length > source.length) errors += typed.length - source.length;

  const ppm = Math.round(typed.length / minutes);
  const acc = typed.length ? Math.round((correct / typed.length) * 100) : 100;
  const errMin = Number((errors / minutes).toFixed(1));

  setText('timeValue', formatTime(seconds));
  setText('ppmValue', ppm);
  setText('accValue', `${acc}%`);
  setText('errMinValue', errMin);

  const phase = getSelectedPhase();
  const finished = typed.length >= source.length;
  if (finished && !practice.completed && finalize) {
    practice.completed = true;
    clearInterval(practice.timer);
    const passed = ppm >= phase.targetPPM && errMin <= phase.maxErrorsPerMinute;
    const key = `phase-${practice.phaseId}-${practice.mode}`;
    registerAttempt(key, { ppm, acc, errMin, errors, seconds, passed, mode: practice.mode });
    showPracticeResult({ ppm, acc, errMin, passed });
  }
}
function registerAttempt(key, result) {
  if (!state.attempts[key]) state.attempts[key] = [];
  const enriched = {
    ...result,
    student: (practice.studentName || 'Sin nombre').trim(),
    phaseTitle: getSelectedPhase().title,
    date: new Date().toLocaleString('es-ES')
  };
  state.attempts[key].unshift(enriched);
  state.attempts[key] = state.attempts[key].slice(0, 10);
  if (!state.allAttempts) state.allAttempts = [];
  state.allAttempts.unshift(enriched);
  state.allAttempts = state.allAttempts.slice(0, 500);
  saveState();
  renderAttempts();
}
function renderAttempts() {
  const box = document.getElementById('attemptsBox');
  if (!box) return;
  const attempts = state.attempts[`phase-${practice.phaseId}-${practice.mode}`] || [];
  if (!attempts.length) {
    box.innerHTML = 'Todavía no hay intentos registrados en esta modalidad de la fase.';
    return;
  }
  box.innerHTML = attempts.map(a => `
    <div style="padding:10px 0;border-bottom:1px solid var(--line);">
      <strong>${a.passed ? 'Superada' : 'No superada'}</strong> · ${a.ppm} ppm · ${a.errMin} faltas/min · ${a.acc}% precisión<br>
      <span class="small">${a.student} · ${a.date}</span>
    </div>
  `).join('');
}
function showPracticeResult(result) {
  const box = document.getElementById('practiceMessage');
  const phase = getSelectedPhase();
  if (result.passed) {
    const next = phases.find(p => p.id === phase.id + 1);
    if (next && !state.unlocked.includes(next.id)) {
      state.unlocked.push(next.id);
      saveState();
    }
    box.innerHTML = `<div class="message ok">¡Reto superado! Resultado: ${result.ppm} ppm, ${result.acc}% de precisión y ${result.errMin} faltas por minuto.<br>${next ? 'Consulta al profesor para obtener el código de la siguiente fase.' : 'Has completado todas las fases del itinerario.'}</div>`;
    renderHome();
    renderPractice();
  } else {
    box.innerHTML = `<div class="message bad">Intento no superado. Debes alcanzar al menos ${phase.targetPPM} ppm y mantener como máximo ${phase.maxErrorsPerMinute} falta por minuto.</div>`;
  }
}
function handleCodeUnlock() {
  const code = document.getElementById('codeInput').value.trim();
  const msg = document.getElementById('unlockMessage');
  if (code !== generateTodayCode()) {
    msg.innerHTML = '<div class="message bad">Código no válido.</div>';
    return;
  }
  const current = Number(practice.phaseId);
  const next = phases.find(p => p.id === current + 1);
  if (next && !state.unlocked.includes(next.id)) {
    state.unlocked.push(next.id);
    state.currentPhaseId = next.id;
    practice.phaseId = next.id;
  }
  saveState();
  msg.innerHTML = `<div class="message ok">${next ? `Se ha desbloqueado ${next.title}.` : 'Ya están desbloqueadas todas las fases.'}</div>`;
  setTimeout(renderPractice, 250);
  renderHome();
}

function renderTheory() {
  const host = document.getElementById('teoria');
  host.innerHTML = `
    <div class="card">
      <h2>Área teórica: contenidos, vídeos y recursos</h2>
      <p class="small">Bloques listos para sustituir o ampliar con materiales propios del centro.</p>
    </div>
    <div class="grid grid-2" style="margin-top:18px;">
      ${theoryBlocks.map(block => `
        <div class="card">
          <h3>${block.title}</h3>
          <p class="small">${block.summary}</p>
          <div class="resource">
            <div style="position:relative;padding-top:56.25%;border-radius:16px;overflow:hidden;background:#e5eef8;">
              <iframe src="${block.embed}" title="${block.title}" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTest() {
  const host = document.getElementById('test');
  host.innerHTML = `
    <div class="card">
      <h2>Test de autoevaluación</h2>
      <p class="small">Después de visualizar los vídeos, responde las 10 preguntas.</p>
    </div>
    <form id="quizForm" class="card" style="margin-top:18px;">
      ${quiz.map((item, idx) => `
        <div class="question">
          <h4>${idx+1}. ${item.q}</h4>
          ${item.options.map((opt, i) => `<label><input type="radio" name="q${idx}" value="${i}"> ${opt}</label>`).join('')}
        </div>
      `).join('')}
      <div class="actions"><button type="submit" class="button-main">Corregir test</button></div>
      <div id="quizResult"></div>
    </form>
  `;
  document.getElementById('quizForm').addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    quiz.forEach((item, idx) => {
      const checked = document.querySelector(`input[name="q${idx}"]:checked`);
      if (checked && Number(checked.value) === item.answer) score += 1;
    });
    state.quizScore = score;
    state.quizPassed = score >= 7;
    saveState();
    document.getElementById('quizResult').innerHTML = `<div class="message ${score >= 7 ? 'ok' : 'warn'}">Has obtenido <strong>${score}/10</strong>. ${score >= 7 ? 'Prueba superada.' : 'Conviene revisar los contenidos antes de repetir el test.'}</div>`;
  });
}

function renderCriteria() {
  const host = document.getElementById('criterios');
  host.innerHTML = `
    <div class="card">
      <h2>Resultados de aprendizaje y criterios de evaluación</h2>
      <p class="small">Referencia para alinear la práctica con la evaluación del módulo.</p>
    </div>
    <div class="grid grid-2" style="margin-top:18px;">
      <div class="card">
        <h3>Contenidos básicos del módulo</h3>
        <ul class="clean small">
          <li>Proceso de textos alfanuméricos en teclados extendidos.</li>
          <li>Organización del tiempo y del espacio de trabajo.</li>
          <li>Postura corporal, ergonomía y prevención de tensiones.</li>
          <li>Posición de brazos, muñecas, manos y dedos.</li>
          <li>Conocimiento del teclado extendido.</li>
          <li>Desarrollo de la destreza mecanográfica y corrección de errores.</li>
        </ul>
      </div>
      <div class="card">
        <h3>RA1 · Procesa textos alfanuméricos</h3>
        <ul class="clean small">
          <li>Se han organizado los elementos y espacios de trabajo.</li>
          <li>Se ha mantenido la posición corporal correcta.</li>
          <li>Se ha identificado la posición correcta de los dedos.</li>
          <li>Se ha utilizado el método de escritura al tacto en párrafos progresivos, tablas sencillas y textos en inglés.</li>
          <li>Se ha alcanzado la velocidad de 200 p.p.m. y la precisión de máximo una falta por minuto con ayuda de un programa informático.</li>
          <li>Se han localizado y corregido los errores mecanográficos.</li>
        </ul>
      </div>
    </div>
  `;
}

function getAllAttempts(){ return state.allAttempts || []; }
function getStudentSummary() {
  const grouped = {};
  getAllAttempts().forEach(a => {
    const name = a.student || 'Sin nombre';
    if (!grouped[name]) grouped[name] = { student:name, attempts:0, passed:0, bestPPM:0, bestAccuracy:0 };
    grouped[name].attempts += 1;
    if (a.passed) grouped[name].passed += 1;
    grouped[name].bestPPM = Math.max(grouped[name].bestPPM, a.ppm || 0);
    grouped[name].bestAccuracy = Math.max(grouped[name].bestAccuracy, a.acc || 0);
  });
  return Object.values(grouped).sort((a,b) => b.bestPPM - a.bestPPM || b.bestAccuracy - a.bestAccuracy);
}
function exportCSV(type='all') {
  const rows = type === 'summary'
    ? [['Alumno','Intentos','Pruebas superadas','Mejor PPM','Mejor precisión']].concat(getStudentSummary().map(r => [r.student, r.attempts, r.passed, r.bestPPM, `${r.bestAccuracy}%`]))
    : [['Alumno','Fecha','Fase','Modalidad','PPM','Precisión','Errores/min','Superada']].concat(getAllAttempts().map(r => [r.student, r.date, r.phaseTitle, r.mode, r.ppm, `${r.acc}%`, r.errMin, r.passed ? 'Sí' : 'No']));
  const csv = rows.map(row => row.map(v => `"${String(v).replaceAll('"','""')}"`).join(';')).join('\n');
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = type === 'summary' ? 'resumen_mecanografia.csv' : 'intentos_mecanografia.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function renderTeacher() {
  const host = document.getElementById('docente');
  const summary = getStudentSummary();
  host.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <h2>Panel docente</h2>
        <p class="small">Panel de configuración docente y orientaciones para adaptar la aplicación al módulo.</p>
        ${phases.map(p => `<div class="phase"><h3>${p.title}</h3><div class="small">Meta: ${p.targetPPM} ppm · Código oculto (uso docente)</div></div>`).join('')}
      </div>
      <div class="card">
        <h2>Seguimiento del grupo y exportación</h2>
        <div class="actions">
          <button class="button-main" id="exportAll">Exportar intentos CSV</button>
          <button class="button-soft" id="exportSummary">Exportar resumen CSV</button>
        </div>
        <div class="resource" style="margin-top:12px;">
          <strong>Resumen por alumnado</strong>
          ${summary.length ? `<div style="overflow:auto;margin-top:10px;"><table><thead><tr><th>Alumno</th><th>Intentos</th><th>Superadas</th><th>Mejor PPM</th><th>Mejor precisión</th></tr></thead><tbody>${summary.map(s => `<tr><td>${s.student}</td><td>${s.attempts}</td><td>${s.passed}</td><td>${s.bestPPM}</td><td>${s.bestAccuracy}%</td></tr>`).join('')}</tbody></table></div>` : `<div class="small" style="margin-top:10px;">Todavía no hay datos guardados del grupo.</div>`}
        </div>
      </div>
      <div class="card">
        <h2>Qué puedes personalizar</h2>
        <ul class="clean small">
          <li>Textos graduados por dificultad y bloques temáticos.</li>
          <li>Modalidades: alfanumérico, tablas e inglés.</li>
          <li>Duración de cada fase, metas y margen de errores.</li>
          <li>Vídeos propios, enlaces externos y actividades teóricas.</li>
          <li>Test de 10 preguntas o más.</li>
          <li>Colores, logos y cabecera del ciclo.</li>
        </ul>
        <div class="actions"><button class="button-warn" id="resetProgress">Borrar progreso local</button></div>
      </div>
    </div>
  `;
  document.getElementById('exportAll').onclick = () => exportCSV('all');
  document.getElementById('exportSummary').onclick = () => exportCSV('summary');
  document.getElementById('resetProgress').onclick = () => {
    localStorage.removeItem(APP_KEY);
    location.reload();
  };
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function formatTime(seconds) {
  const m = String(Math.floor(seconds/60)).padStart(2,'0');
  const s = String(seconds%60).padStart(2,'0');
  return `${m}:${s}`;
}
function escapeAttribute(text) {
  return String(text || '').replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}
function escapeHtml(text) {
  return String(text || '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;')
    .replaceAll(' ','&nbsp;')
    .replaceAll('\n','<br>');
}

function init() {
  renderNav();
  renderHome();
  renderPractice();
  renderTheory();
  renderTest();
  renderCriteria();
  renderTeacher();
}
init();
