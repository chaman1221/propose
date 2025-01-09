/****************************************************************************
 * 1. HEART-FLOWER FLOATING DECOR + EASTER EGG TOAST
 ****************************************************************************/
const floatingDecorContainer = document.getElementById('floating-decor');
const toastContainer = document.getElementById('toast-container');

// Let's store some sweet mini messages for the Easter egg
const sweetNotes = [
  "You're my sunshine on a cloudy day",
  "Tu hai toh I'll be alright",
  "Your voice is my favorite melody",
  "Distance can't keep our hearts apart",
  "So glad I found you, Charvy",
  "Tum se hi... everything"
];

function createHeartFlower() {
  const el = document.createElement('div');
  el.classList.add('heart-flower');

  // Random position & size
  const size = Math.random() * 40 + 20; 
  const leftPos = Math.random() * 100;
  const fallDuration = 5 + Math.random() * 5; 
  const delay = Math.random() * 3;

  // Could be a heart or a flower/petal symbol
  const shapes = ['\u2764', '\u273F', '\u2766', '\u2740'];
  const chosenShape = shapes[Math.floor(Math.random() * shapes.length)];
  el.textContent = chosenShape;

  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.left = leftPos + '%';
  el.style.fontSize = size + 'px';
  el.style.animationDuration = fallDuration + 's';
  el.style.animationDelay = delay + 's';

  // If clicked, show a random sweet note
  el.addEventListener('click', () => {
    showToast();
  });

  floatingDecorContainer.appendChild(el);

  // Remove after animation
  setTimeout(() => {
    el.remove();
  }, (fallDuration + delay) * 1000);
}

setInterval(createHeartFlower, 1000);

// Minimal styling for hearts & flowers
const decorStyle = document.createElement('style');
decorStyle.innerHTML = `
  #floating-decor {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    pointer-events: none;
    overflow: hidden;
  }

  .heart-flower {
    position: absolute;
    top: -60px;
    text-align: center;
    animation-name: floatDown;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    color: rgba(255, 94, 157, 0.9);
    pointer-events: auto;
    cursor: pointer;
  }

  @keyframes floatDown {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(120vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(decorStyle);

// Show a toast with a random sweet note
function showToast() {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = sweetNotes[Math.floor(Math.random() * sweetNotes.length)];
  toastContainer.appendChild(toast);

  // Remove after 2.5s
  setTimeout(() => {
    toast.remove();
  }, 2500);
}

/****************************************************************************
 * 2. TYPED TEXT (Promise / Love Letter)
 ****************************************************************************/
const typedTextEl = document.getElementById('typed-text');

const typedMessage = `
My beloved Charvy,

I promise to be the one who protects you from all worries,
who stands by your side through every storm.
I want to bring a smile to your face every single day,
filling your world with sunlight and warmth.
From celebrating your biggest victories
to holding your hand in the toughest moments,
I'll be there, making sure you always feel safe and loved.

Each day, I want to add a little more happiness and magic to your life.
Together, let's create a future where every step we take
becomes a cherished memory.

With endless devotion,
Ishan
`;

let charIndex = 0;
function typeLetter() {
  if (charIndex < typedMessage.length) {
    typedTextEl.textContent += typedMessage.charAt(charIndex);
    charIndex++;
    setTimeout(typeLetter, 35); // typing speed
  }
}
window.addEventListener('DOMContentLoaded', typeLetter);

/****************************************************************************
 * 3. CONFETTI ON PROPOSAL BUTTON
 ****************************************************************************/
const proposalButton = document.querySelector('.confetti-trigger');
if (proposalButton) {
  // Confetti on hover
  proposalButton.addEventListener('mouseover', () => {
    launchConfetti(20);
  });
  // Extra confetti on click
  proposalButton.addEventListener('click', () => {
    launchConfetti(50);
  });
}

function launchConfetti(amount) {
  for (let i = 0; i < amount; i++) {
    createConfettiPiece();
  }
}

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  document.body.appendChild(confetti);

  // random size, position, color
  const size = Math.random() * 8 + 4;
  const left = Math.random() * 100;
  const hue = Math.floor(Math.random() * 360);
  const duration = Math.random() * 2 + 2;

  confetti.style.width = size + 'px';
  confetti.style.height = size + 'px';
  confetti.style.left = left + '%';
  confetti.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
  confetti.style.animationDuration = duration + 's';

  setTimeout(() => {
    confetti.remove();
  }, duration * 1000);
}

// minimal confetti styling
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
  .confetti {
    position: fixed;
    top: 0;
    border-radius: 50%;
    animation-name: confetti-fall;
    animation-timing-function: linear;
    opacity: 0.9;
  }

  @keyframes confetti-fall {
    0% { transform: translateY(-100%) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
`;
document.head.appendChild(confettiStyle);

/****************************************************************************
 * 4. SINGLE AUDIO TRACK + PLAY/PAUSE BUTTON
 ****************************************************************************/
const audio1 = document.getElementById('audio1');
const playAudioBtn = document.getElementById('playAudioBtn');

if (audio1 && playAudioBtn) {
  playAudioBtn.addEventListener('click', () => {
    if (audio1.paused) {
      audio1.play();
    } else {
      audio1.pause();
    }
  });
}

/****************************************************************************
 * 5. SHOW/HIDE POPUP MODAL FOR CHARVY’S ANSWER
 ****************************************************************************/
const modalOverlay = document.getElementById('modalOverlay');
function openModal() {
  modalOverlay.style.display = 'flex';
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

/****************************************************************************
 * 6. SECRET NOTE ON NAVBAR LOGO CLICK (Mini Easter Egg)
 ****************************************************************************/
function secretNote() {
  showToastCustom("I love you more than words can say.");
}

/* Reuse the toast system but with a custom message param */
function showToastCustom(message) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/****************************************************************************
 * 7. FORM SUBMISSION VIA FORMSPREE
 ****************************************************************************/
const charvyResponseForm = document.getElementById('charvyResponseForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Replace with your actual Formspree endpoint:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrbbrznn';
charvyResponseForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(charvyResponseForm);

  try {
    // Send data to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });
    if (response.ok) {
      // success
      charvyResponseForm.style.display = 'none';
      thankYouMessage.style.display = 'block';

      // Fire a small confetti burst for successful submission
      launchConfetti(40);

    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
  } catch (error) {
    alert('Error sending your response. Please try again later.');
  }
});
