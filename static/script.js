
const cards=[...document.querySelectorAll('.photo-card')];
const lightbox=document.getElementById('lightbox');
const big=document.getElementById('lightboxImage');
let current=0;
function showPhoto(i){current=(i+cards.length)%cards.length;big.src=cards[current].dataset.full;lightbox.classList.add('show');lightbox.setAttribute('aria-hidden','false')}
cards.forEach((card,i)=>card.addEventListener('click',()=>showPhoto(i)));
document.getElementById('closeLightbox').addEventListener('click',()=>{lightbox.classList.remove('show');lightbox.setAttribute('aria-hidden','true')});
document.getElementById('prevPhoto').addEventListener('click',()=>showPhoto(current-1));
document.getElementById('nextPhoto').addEventListener('click',()=>showPhoto(current+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('show');lightbox.setAttribute('aria-hidden','true')}});
const modal=document.getElementById('letterModal'), envelope=document.getElementById('openLetter');
envelope.addEventListener('click',()=>{envelope.classList.add('open');setTimeout(()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false')},220)});
function closeLetter(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');envelope.classList.remove('open')}
document.getElementById('closeLetter').addEventListener('click',closeLetter);
modal.addEventListener('click',e=>{if(e.target===modal)closeLetter()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){lightbox.classList.remove('show');closeLetter()}if(lightbox.classList.contains('show')&&e.key==='ArrowRight')showPhoto(current+1);if(lightbox.classList.contains('show')&&e.key==='ArrowLeft')showPhoto(current-1)});


// Background soundtrack: place your own MP3 at static/audio/cinderella.mp3
const music=document.getElementById('backgroundMusic');
const musicToggle=document.getElementById('musicToggle');
const musicPlayer=document.querySelector('.music-player');
if(music && musicToggle){
  musicToggle.addEventListener('click',async()=>{
    if(music.paused){
      try{await music.play();musicToggle.textContent='Ⅱ';musicToggle.setAttribute('aria-label','Jeda lagu');musicPlayer.classList.add('playing');}
      catch(err){musicToggle.textContent='!';musicToggle.setAttribute('aria-label','File lagu belum tersedia');alert('Tambahkan file MP3 milikmu dengan nama cinderella.mp3 ke folder static/audio, lalu refresh halaman.');}
    }else{music.pause();musicToggle.textContent='▶';musicToggle.setAttribute('aria-label','Putar lagu');musicPlayer.classList.remove('playing');}
  });
  music.addEventListener('ended',()=>{musicToggle.textContent='▶';musicPlayer.classList.remove('playing');});
}
