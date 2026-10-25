const modal = document.getElementById('surprise');
const openBtn = document.getElementById('surpriseBtn');
const closeBtn = document.getElementById('closeModal');
const modalCelebrate = document.getElementById('modalCelebrate');
const confettiBtn = document.getElementById('confettiBtn');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  celebrate(28);
});
function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
modalCelebrate.addEventListener('click', () => { closeModal(); celebrate(90); });
confettiBtn.addEventListener('click', () => celebrate(100));

function celebrate(amount) {
  const bits = ['💗','💕','✨','🎉','🎀','🌸','💖','⭐'];
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('span');
    item.className = 'confetti';
    item.textContent = bits[Math.floor(Math.random() * bits.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (2.2 + Math.random() * 3.2) + 's';
    item.style.animationDelay = (Math.random() * .8) + 's';
    item.style.fontSize = (15 + Math.random() * 20) + 'px';
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 6500);
  }
}
