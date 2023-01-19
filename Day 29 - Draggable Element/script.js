const wrapper = document.querySelector('.wrapper');

function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    wrapper.style.left = `${left + movementX}px`
    wrapper.style.top = `${top + movementY}px`
}

wrapper.addEventListener('mousedown', () => {
    wrapper.classList.add('active');
    wrapper.addEventListener('mousemove', onDrag);
});

wrapper.addEventListener('mouseup', () => {
    wrapper.classList.remove('active');
    wrapper.removeEventListener('mousemove', onDrag);
});

// This project is built by Harshit Raj.
// This projects belongs to MedusaVerse.
// © Medusaverse