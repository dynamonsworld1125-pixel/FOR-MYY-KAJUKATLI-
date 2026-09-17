const screens=[...document.querySelectorAll('.screen')];
function go(id){
  screens.forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='cinematic') cinematic();
  if(id==='final') finalHearts();
}
function checkPassword(){
  const v=document.getElementById('passInput').value.trim();
  if(v==='26/09'||v==='2609'){go('entry');}
  else{
    const e=document.getElementById('error');
    e.textContent='Hmm… password galat hai 😭🎀 Hint dekho na!';
    document.getElementById('passInput').value='';
  }
}
document.getElementById('passInput').addEventListener('keydown',e=>{if(e.key==='Enter')checkPassword()});

function cinematic(){
  const el=document.getElementById('cinematicText');
  el.innerHTML='';
  const lines=['Ruko… ruko…','itni jaldi bhi kya hai? 😭','Surprise abhi baaki hai…'];
  let i=0;
  function next(){
    if(i>=lines.length){setTimeout(()=>go('surprise'),1100);return}
    el.textContent=lines[i++];
    setTimeout(next,1450);
  }
  next();
}
function makeHeart(){
  const h=document.createElement('div');h.className='heart';h.textContent=['♡','♥','🩷','✦'][Math.floor(Math.random()*4)];
  h.style.left=Math.random()*100+'vw';h.style.fontSize=(10+Math.random()*18)+'px';h.style.animationDuration=(5+Math.random()*6)+'s';
  document.getElementById('hearts').appendChild(h);setTimeout(()=>h.remove(),12000);
}
setInterval(makeHeart,650);
for(let i=0;i<12;i++)setTimeout(makeHeart,i*120);

function celebrate(){
  const fx=document.getElementById('fx');
  for(let i=0;i<5;i++){const f=document.createElement('div');f.className='firework';f.style.left=(20+Math.random()*60)+'%';f.style.top=(20+Math.random()*45)+'%';fx.appendChild(f);setTimeout(()=>f.remove(),1400)}
  for(let i=0;i<55;i++){const p=document.createElement('div');p.className='particle';p.textContent=['🩷','♡','✦','✨'][Math.floor(Math.random()*4)];p.style.setProperty('--x',(Math.random()*520-260)+'px');p.style.setProperty('--y',(Math.random()*-420-80)+'px');fx.appendChild(p);setTimeout(()=>p.remove(),1900)}
}
const letter=`Ananya, pata hai… har kisi ke saath memories nahi banti.
Kuch log bas life mein aa jaate hain aur phir memories khud banne lagti hain.
Tu unhi logon mein se hai. 🩷🤭

Hum dono ko saathme jyda time nhi hua par fir bhi aisa lgta h ki hum dono saalon se dost h aisi friendship hogyi h humari..😭🌷

Humari friendship aisehi bani rahe bss yahi pray krta huu bhagwan se aur bhagwan se yeh bhi pray krta huu ki mujhe har janam me tu as a bestt freinddd mile 🧿🤭

~HARSHIT 🩷🌷`;
let opened=false;
function openLetter(){
  if(opened)return;opened=true;
  document.getElementById('letterBtn').style.display='none';
  const out=document.getElementById('typed');let i=0;
  function type(){if(i<letter.length){out.textContent+=letter[i++];setTimeout(type,28)}else setTimeout(()=>go('final'),1800)}
  type();
}
function finalHearts(){for(let i=0;i<25;i++)setTimeout(makeHeart,i*130)}
