function generateTodayCode(){
  const d=new Date();
  return String(d.getMonth()+1).padStart(2,'0')+
         String(d.getDate()).padStart(2,'0')+
         String(d.getFullYear()).slice(-2);
}

function show(id){
  document.querySelectorAll('section').forEach(s=>s.style.display='none');
  document.getElementById(id).style.display='block';
}

document.getElementById('practica').innerHTML=`
<div class="box">
<h2>Introducir código</h2>
<input id="code" placeholder="Introduce el código">
<button onclick="validar()">Validar</button>
<div id="msg"></div>
</div>
`;

document.getElementById('docente').innerHTML=`
<div class="box">
<h2>Panel docente</h2>
<p>Código oculto (uso docente)</p>
</div>
`;

function validar(){
  const code=document.getElementById('code').value.trim();
  const valid=generateTodayCode();
  const msg=document.getElementById('msg');

  if(code!==valid){
    msg.innerHTML='<b style="color:red">Código no válido</b>';
  }else{
    msg.innerHTML='<b style="color:green">Acceso permitido</b>';
  }
}

show('practica');
