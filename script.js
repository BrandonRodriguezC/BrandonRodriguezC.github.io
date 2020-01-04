
function showMenu(){
  const nav= document.getElementById('navLinks');
  if(nav.className=='nav-links-hidden'){
    nav.classList.remove('nav-links-hidden');
    nav.classList.add('nav-links-active');
  }else{
    nav.classList.remove('nav-links-active');
    nav.classList.add('nav-links-hidden');
  }
}

function hideMenu(){
  const nav= document.getElementById('navLinks');
  nav.classList.remove('nav-links-active');
  nav.classList.add('nav-links-hidden');
}
