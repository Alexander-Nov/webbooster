const popup = document.querySelector(".popup");
const erconst= document.querySelector(".erconst");
const form = document.querySelector(".popup__form");
const buttonClosePopup = popup.querySelector(".popup__close-button");
const buttonsAddGood = document.querySelectorAll(".item__button-add-to-cart");
const inputName = popup.querySelector(".popup__input-name");
const inputTel = popup.querySelector(".popup__input-tel");



function openPopup(elementToPopup) {
  hideAllInputErrorsOnOpen(form, validationConfig); // обнуление ошибок всех инпутов текущей формы
  elementToPopup.classList.add("popup_opened");
}

function closePopup(elementToClose) {
  elementToClose.classList.remove("popup_opened");
}

buttonClosePopup.addEventListener('click', () => {
  closePopup(popup);
});

buttonsAddGood.forEach((button) => {
    button.addEventListener('click', (evt) => {
      inputName.value = '';
      inputTel.value = '';
      erconst.textContent = "";
      const goodName = evt.target.closest(".item").querySelector(".item__title").textContent;
      document.querySelector(".popup__good-name").textContent = goodName;
      openPopup(popup);
    })
  }
)


//отправка данных

$(document).ready(function () {
  $("#submit").click(function () {
    $("#erconst").fadeIn(500);
    $.ajax({
      type: "POST",
      url: "../scripts/send.php",
      data: $("#order").serialize(),
      error: function () {
        $("#erconst").html("Произошла ошибка!");
      },
      beforeSend: function () {
        $("#erconst").html("Отправляем данные...");
      },
      success: function (result) {
        $("#erconst").html(result);
        checkThis();
      },
    });
    return false;
  });
});
