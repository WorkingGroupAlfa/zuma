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



/*--------------------------------------------------------------------------------------*/

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,

});

/*--------------------------------------------------------------------------------------*/

document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Убираем .active со всех табов
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));

    // Добавляем .active на текущий
    this.classList.add('active');

    // Получаем ID из href (например, #mixuy-lito)
    const targetId = this.getAttribute('href').replace('#', '');
    const targetEl = document.getElementById(targetId);

    // Прокрутка вниз к разделу
    if (targetEl) {
      const yOffset = -20; // отступ сверху (если есть шапка – сделай -70 или -100)
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Горизонтальная прокрутка таба в центр (если табов много)
    this.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  });
});
