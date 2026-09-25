// ==========================================================================
// Romantic Couple Journal — Interactive Logic & Animations
// ==========================================================================

// Initialize Lucide Icons
lucide.createIcons();

const startDate = new Date('2026-09-20T00:00:00');

function updateCounter() {
  const now = new Date();
  const diffMs = now - startDate;

  if (diffMs > 0) {
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / 1000 / 60) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    const elDays = document.getElementById('counterDays');
    const elHours = document.getElementById('counterHours');
    const elMins = document.getElementById('counterMinutes');
    const elSecs = document.getElementById('counterSeconds');

    if (elDays) elDays.innerText = days;
    if (elHours) elHours.innerText = hours.toString().padStart(2, '0');
    if (elMins) elMins.innerText = minutes.toString().padStart(2, '0');
    if (elSecs) elSecs.innerText = seconds.toString().padStart(2, '0');
  }
}
setInterval(updateCounter, 1000);
updateCounter();

// 2. Spotify embed handles all music playback cleanly without audio collisions.


// 3. Heart Floating Shower Animation
function triggerLoveShower() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFloatingHeart, i * 80);
  }
}

let loveCount = 99;
function clickLoveHeart() {
  loveCount++;
  const countEl = document.getElementById('loveClickCount');
  if (countEl) countEl.innerText = loveCount;
  for (let i = 0; i < 6; i++) {
    createFloatingHeart();
  }
}

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = `<svg class="w-6 h-6 text-terracotta fill-current" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 95 + 'vw';
  heart.style.bottom = '-30px';
  heart.style.zIndex = '9999';
  heart.style.pointerEvents = 'none';
  heart.style.opacity = '1';
  heart.style.transition = 'transform 3.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 3.5s ease-out';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = `translate(${(Math.random() - 0.5) * 150}px, -${window.innerHeight + 100}px) rotate(${Math.random() * 60 - 30}deg)`;
    heart.style.opacity = '0';
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 3800);
}

// 4. Modal Gallery Handlers
function openGalleryModal() {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
  }, 10);
}

function closeGalleryModal() {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 300);
}
