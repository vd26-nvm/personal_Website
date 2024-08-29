window.addEventListener('scroll', () => {
    const nav = document.querySelector('#nav');
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight; 
  
    if (scrollPosition > 100) {
        nav.style.backgroundColor = '#bb8588';

      } else {
        nav.style.backgroundColor = 'transparent';

      }
  
    const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${progress}%`;
  
    if (progress >= 100) {
      progressBar.classList.add('full');
    } else {
      progressBar.classList.remove('full');
    }
  });


