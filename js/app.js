window.addEventListener('load', function() {
  var openMenu = document.getElementById("open-menu");
  var closeMenu = document.getElementById("close-menu");

  openMenu.addEventListener("click", openAnimatedMenu);
  function openAnimatedMenu() {
    document.getElementById("animated-menu").style.width = '40%';
    console.log("HOLA");
  };

  closeMenu.addEventListener("click", closeAnimatedMenu);
  function closeAnimatedMenu() {
    document.getElementById("animated-menu").style.width = '0';
  };

  document.getElementById('english-button').addEventListener('click' , function(){
    window.location.href = 'index.html';
  });

  document.getElementById('spanish-button').addEventListener('click', function(){
    window.location.href = 'index-esp.html';
  });

  document.getElementById("swapi-btn").addEventListener('click', openPageTab);
  document.getElementById("swapi2-btn").addEventListener('click', openPageTab);
  document.getElementById("twitter-btn").addEventListener('click', openPageTab);
  document.getElementById("twitter2-btn").addEventListener('click', openPageTab);
  document.getElementById("easy-btn").addEventListener('click', openPageTab);
  document.getElementById("easy2-btn").addEventListener('click', openPageTab);
  document.getElementById("fare-btn").addEventListener('click', openPageTab);
  document.getElementById("fare2-btn").addEventListener('click', openPageTab);
  document.getElementById("code-btn").addEventListener('click', openPageTab);
  document.getElementById("code2-btn").addEventListener('click', openPageTab);

  function openPageTab(event) {
    var winLocation = event.target.name;
    window.open(winLocation);
  }
});