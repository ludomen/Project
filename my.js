const text = "Cайт для выпускников ";
const typingSpeed = 100;
const deletingSpeed = 50; 
const delayBetween = 2000; 

let index = 0;
let isDeleting = false;

function type() {
  const typedText = document.getElementById('typed-text');

  if (isDeleting) {
    typedText.textContent = text.substring(0, index--);
    if (index < 0) {
      isDeleting = false;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    typedText.textContent = text.substring(0, index++);
    if (index > text.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}


const newText = "";
const newTypingSpeed = 100; 

let newIndex = 0;

function newType() {
  const newTypedText = document.getElementById('new-typed-text');

  newTypedText.textContent = newText.substring(0, newIndex++);
  if (newIndex <= newText.length) {
    setTimeout(newType, newTypingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(newType, newTypingSpeed);
});



document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, typingSpeed);
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const site = document.getElementById('site');

    burger.addEventListener('change', function() {
        if (burger.checked) {
            site.style.display = 'block';
        } else {
            site.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const links = document.querySelectorAll('nav a');

    burger.addEventListener('change', function() {
        links.forEach(link => {
            if (burger.checked) {
                link.style.display = 'block';
            } else {
                link.style.display = 'none';
            }
        });
    });
});


