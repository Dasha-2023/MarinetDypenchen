const card1 = document.getElementById('card1')
const modal1 = document.getElementById('modal1')
const btnClose = document.getElementById('btnClose')
modal1.style.display = 'none'

card1.addEventListener('click', ()=> {
  modal1.style.display = 'block'
})

btnClose.addEventListener('click', ()=> {
  modal1.style.display = 'none'
})
// window.addEventListener('scroll', function() {
//   let scrollButton = document.getElementById('scollButton');
//   if (window)
// })



$(function () {

	// Открытие / закрытие корзины
	$("#cart-items").slideUp()
	$(".card-bs").on("click", function () {
	  $("#cart-items").slideToggle()
	})

	$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
  
	// Функция для пересчета общей стоимости товаров в корзине
	function calculateTotalPrice() {
	  var totalPrice = 0;
	  $(".eachPrice").each(function () {
		var priceText = $(this).text().replace(/\s/g, "").replace(",", ".");
		var price = parseFloat(priceText);
		totalPrice += price;
	  });
	  $("#total-price").text(totalPrice.toFixed(2) + " ₽");
  
	  // Проверяем наличие товаров в корзине и показываем/скрываем кнопку "Оформить заказ"
	  if ($("#list-item").children().length > 0) {
		$(".btn-basket").show();
	  } else {
		$(".btn-basket").hide();
	  }
	}

	// Добавление товара в корзину
	$(".i-card .basket").on("click", function () {
	  var name = $(this).closest(".i-card ").find("h3").text();
	  var priceText = $(this).closest(".i-card ").find(".price").text();
	  var price = parseFloat(priceText.replace(/\s/g, "").replace(",", "."));
	  var remove = "<button class='remove'> X </button>";
	  var cena = "<span class='eachPrice'>" + price.toFixed(2) + " ₽</span>";
	  $("#list-item").append("<li>" + name + " - " + cena + remove + "</li>");
	  // Получаем номер каждого элемента
	  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
	  // Пересчет общей стоимости
	  calculateTotalPrice();
	  // Добавляем товар в localStorage
	  var orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
	  orderItems.push({ name: name, price: price });
	  localStorage.setItem("orderItems", JSON.stringify(orderItems));
  
	  // Обновляем выбранные товары на странице заказа
	  updateOrderItems();
	});
  
  
	// Удаление товара из корзины
	$("#list-item").on("click", ".remove", function () {
	  $(this).parent().remove();
	  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
	  // Пересчет общей стоимости
	  calculateTotalPrice();
		// Обновляем выбранные товары на странице заказа
		updateOrderItems();
	});
})













const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  grabCursor: true,
  autoplay: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


