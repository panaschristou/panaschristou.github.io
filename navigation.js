(()=>{
const nav=[...document.querySelectorAll('.section-nav a')];
const sections=nav.map(a=>document.querySelector(a.hash)).filter(Boolean);
const bar=document.querySelector('.reading-progress span');let pending=false;
function update(){const max=document.documentElement.scrollHeight-innerHeight;let current='#bio';for(const section of sections){if(section.getBoundingClientRect().top<150)current='#'+section.id}if(max>0&&scrollY>=max-8)current='#experience';nav.forEach(a=>{if(a.hash===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});if(bar)bar.style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`;pending=false}
addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',update));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('section-arrival');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.research,.education,.about').forEach(s=>observer.observe(s))}
update();
})();
