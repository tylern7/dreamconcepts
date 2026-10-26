const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);b.setAttribute('aria-label',o?'Open menu':'Close menu');m.classList.toggle('open',!o)});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open')}));
document.getElementById('yr').textContent=new Date().getFullYear();
const f=document.querySelector('.form'),s=f.querySelector('.status');
f.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(f);
 if(f.action.includes('YOUR_FORM_ID')){const body=[...d].map(([k,v])=>k+': '+v).join('\n');location.href='mailto:'+f.dataset.mailto+'?subject='+encodeURIComponent('Free estimate request')+'&body='+encodeURIComponent(body);return}
 try{const r=await fetch(f.action,{method:'POST',body:d,headers:{Accept:'application/json'}});s.textContent=r.ok?'Thanks! Pete will be in touch soon.':'Something went wrong. Please call 905-961-7383.';if(r.ok)f.reset()}catch{s.textContent='Something went wrong. Please call 905-961-7383.'}});
