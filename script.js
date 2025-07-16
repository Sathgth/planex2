document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const emojiOverlay = document.getElementById('emojiOverlay');
    const reactBtn = document.getElementById('reactBtn');
    const emojiPopup = document.getElementById('emojiPopup');
    const greeting = document.getElementById('greeting');
    const sections = document.querySelectorAll('section');
  
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  
    reactBtn.addEventListener('click', () => {
      emojiOverlay.classList.add('active');
    });
  
    document.querySelectorAll('.emoji').forEach(emoji => {
      emoji.addEventListener('click', () => {
        emojiOverlay.classList.remove('active');
        emojiPopup.textContent = emoji.textContent;
        emojiPopup.style.display = 'block';
  
        setTimeout(() => {
          emojiPopup.style.display = 'none';
        }, 2000);
      });
    });
  
    // Saudação dinâmica
    const hora = new Date().getHours();
    let saudacao = 'Boa noite';
    if (hora >= 5 && hora < 12) saudacao = 'Bom dia';
    else if (hora >= 12 && hora < 18) saudacao = 'Boa tarde';
    greeting.textContent = `${saudacao}, Othavio! Como você está se sentindo hoje?`;
  
    // Scroll para a section clicada no menu
    document.querySelectorAll('.sidebar ul li').forEach(item => {
      item.addEventListener('click', () => {
        const target = item.dataset.target;
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  