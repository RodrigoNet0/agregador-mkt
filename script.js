document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.animation = "shake 0.5s ease";
      setTimeout(() => {
        link.style.animation = "";
      }, 500);
    });
  });
  
  /* Animação extra (CSS adicionada pelo JS) */
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);
  