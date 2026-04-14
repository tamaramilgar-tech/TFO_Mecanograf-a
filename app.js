function show(id){
document.querySelectorAll('section').forEach(s=>s.classList.add('hidden'));
document.getElementById(id).classList.remove('hidden');
}

// TEORIA
document.getElementById("teoria").innerHTML=`
<h2>Ergonomía</h2>
<iframe width="100%" height="300" src="https://www.youtube.com/embed/iD6ic-QBRtQ"></iframe>
<h2>Sistema Operativo</h2>
<iframe width="100%" height="300" src="https://www.youtube.com/embed/QHUrfwLX5Mw"></iframe>
<h2>Internet</h2>
<iframe width="100%" height="300" src="https://www.youtube.com/embed/Ij2hGhouTMM"></iframe>
`;

// PRACTICA AVANZADA
let start=null;
document.getElementById("practica").innerHTML=`
<h2>Práctica</h2>
<p>Objetivo: 200 ppm</p>
<textarea id="txt"></textarea>
<p id="stats"></p>
`;

document.addEventListener("input",()=>{
let txt=document.getElementById("txt");
if(!txt)return;
if(!start)start=Date.now();
let t=(Date.now()-start)/60000;
let ppm=Math.round(txt.value.length/t);
document.getElementById("stats").innerText="PPM: "+ppm;
});

// TEST COMPLETO
const banco=[
{q:"¿Internet es?",a:["Red global","Programa","Hardware","Teclado"],c:0},
{q:"¿Ergonomía correcta?",a:["Espalda recta","Encorvado","Torcido","Forzado"],c:0},
{q:"¿Windows es?",a:["Sistema operativo","Hardware","Teclado","App"],c:0}
];

function test(){
let preguntas=banco.sort(()=>Math.random()-0.5).slice(0,2);
let html="<h2>Test</h2>";
preguntas.forEach((p,i)=>{
html+=`<div class='card'><p>${p.q}</p>`;
p.a.sort(()=>Math.random()-0.5).forEach(op=>{
html+=`<label><input type='radio' name='q${i}'> ${op}</label><br>`;
});
html+="</div>";
});
document.getElementById("test").innerHTML=html;
}
test();

// DOCENTE
document.getElementById("docente").innerHTML=`
<h2>Docente</h2>
<input id="u"><button onclick="login()">Entrar</button>
<div id="panel"></div>
`;

function login(){
if(document.getElementById("u").value==="tmilgar"){
document.getElementById("panel").innerText="Panel completo activo";
}else alert("Error");
}
