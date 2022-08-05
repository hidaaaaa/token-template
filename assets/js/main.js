// let tween = gsap.to('.mobile-menu', { opacity: 0, duration: 2, delay: 0.2, y: -25, ease: 'expo.out', stagger: 0.2, paused: true })

const showMenu = (toggleId, toggleOpenId, toggleCloseId, navId) => {
  const toggleOpen = document.getElementById(toggleOpenId);
  const toggleClose = document.getElementById(toggleCloseId);
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  
  if (toggle && nav) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('top-14');
          toggleOpen.classList.toggle('hidden');
          toggleClose.classList.toggle('hidden');
          // if(!nav.classList.contains('hidden')) {
          //   tween.reverse();
          // }
          // else{
          //   tween.play();
          // }
      })
  }
}

showMenu('toggle-button', 'menu-open', 'menu-close', "mobile-menu")