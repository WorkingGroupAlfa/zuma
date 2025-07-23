function toggleDropdown() {
  var dropdown = document.getElementsByClassName("dropdown")[0];
  dropdown.classList.toggle("active");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggle = document.getElementById('navbar-toggle');
  var overlay = document.querySelector('.overlay');
  var navbarMenu = document.querySelector('.navbar-menu');
  var closeButton = document.querySelector('.close-button');

  navbarToggle.addEventListener('change', function() {
    if (navbarToggle.checked) {
      overlay.style.display = 'block';
      navbarMenu.style.right = '0';
      localStorage.setItem('navbarOpen', 'true');
    } else {
      overlay.style.display = 'none';
      navbarMenu.style.right = '-350px';
      localStorage.setItem('navbarOpen', 'false');
    }
  });

  closeButton.addEventListener('click', function() {
    closeNavbar();
  });

  // Закрывать меню при загрузке страницы, если оно было закрыто
  var isNavbarOpen = localStorage.getItem('navbarOpen');
  if (isNavbarOpen === 'false') {
    closeNavbar();
  }
});

function closeNavbar() {
  var navbarToggle = document.getElementById('navbar-toggle');
  navbarToggle.checked = false;
  var overlay = document.querySelector('.overlay');
  var navbarMenu = document.querySelector('.navbar-menu');
  overlay.style.display = 'none';
  navbarMenu.style.right = '-350px';
  localStorage.setItem('navbarOpen', 'false');
}
/*--------------------------------------------------------------------------------------*/

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,

});

/*--------------------------------------------------------------------------------------*/

document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Убираем активность со всех
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    // Добавляем активность текущей
    this.classList.add('active');

    // Плавный автоскролл к нажатой кнопке
    this.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  });
});
