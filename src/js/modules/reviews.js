export default function () {
  //open and hide form
  $(".header__btn").click(function () {
    $(".reviews__background").show()
  });
  $(".feedback__close").click(function () {
    $(".reviews__background").fadeOut()
  })

  //add photo
  var inputFile = $('.input-file');
  var labelFile = $('.reviews-form__file');
  var fileText = $('.reviews-form__file-text');
  var fileImg = $('.reviews-form__file-img img');
  var fileIcon = $('.reviews-form__checkmark-icon');
  var fileFlag = true;

  inputFile.change(function (e) {
    if (inputFile.val() && fileFlag) {
      fileText.html('Загружено!');
      fileImg.hide();
      fileIcon.show();
      labelFile.addClass('rloaded');
      fileFlag = false;
    }
  });
  inputFile.click(function () {
    if (!fileFlag) {
      return false;
    }
  });


  // Calculate rating statistics
  function roundToTwo(num) {
    var snum = String(num),
      spl = null;
    if (snum.indexOf('.') != -1) {
      var spl = snum.split('.');
    } else if (String(num).indexOf(',') != -1) {
      var spl = snum.split(',');
    }
    if (spl != null && spl[1].length > 2) {
      return `${spl[0]}.${spl[1].substr(0, 2)}`;
    }
    return snum;
  }

  function CalculateStats() {
    var ratedFive = document.querySelector("#totalWithRating5"),
      ratedFour = document.querySelector("#totalWithRating4"),
      ratedThree = document.querySelector("#totalWithRating3"),
      ratedTwo = document.querySelector("#totalWithRating2"),
      ratedOne = document.querySelector("#totalWithRating1"),
      avgMark = document.querySelector("#avgMark"),
      avgQuality = document.querySelector("#avgQuality"),
      avgPrice = document.querySelector("#avgPrice");
    var commentItems = $(".js-list-reviews");
    var rates = [0, 0, 0, 0, 0];
    var averages = [0, 0, 0]; // mark, quality, price
    for (var idx = 0; idx < commentItems.length; idx++) {
      rates[Number(commentItems[idx].dataset.rating - 1)] += 1;
      averages[0] += Number(commentItems[idx].dataset.rating);
      averages[1] += Number(commentItems[idx].dataset.quality);
      averages[2] += Number(commentItems[idx].dataset.price);
    }
    ratedFive.innerHTML = rates[4];
    ratedFour.innerHTML = rates[3];
    ratedThree.innerHTML = rates[2];
    ratedTwo.innerHTML = rates[1];
    ratedOne.innerHTML = rates[0];
    avgMark.innerHTML = roundToTwo(averages[0] / commentItems.length);
    avgQuality.innerHTML = roundToTwo(averages[1] / commentItems.length);
    avgPrice.innerHTML = roundToTwo(averages[2] / commentItems.length);

    var qualityBg = roundToTwo((averages[1] / commentItems.length) * 100 / 5);
    var priceBg = roundToTwo((averages[2] / commentItems.length) * 100 / 5);

    $("#orangeQuality").css("width", qualityBg + "%");
    $("#orangePrice").css("width", priceBg + "%");

    if (qualityBg == 100) {
      $("#orangeQuality").css("border-radius", "3px");
    }
    if (priceBg == 100) {
      $("#orangePrice").css("border-radius", "3px");
    }

    if ((priceBg != 20) || (priceBg != 40) || (priceBg != 60) || (priceBg != 80) || (priceBg != 100)) {
      $("#orangePrice").css("border-right", "2px solid white");
    }
    if ((qualityBg != 20) || (qualityBg != 40) || (qualityBg != 60) || (qualityBg != 80) || (qualityBg != 100)) {
      $("#orangeQuality").css("border-right", "2px solid white");
    }

    var fiveBgPercent = (rates[4] / commentItems.length * 100);
    $("#orange5").css("width", fiveBgPercent + "%");

    var fourBgPercent = (rates[3] / commentItems.length * 100);
    $("#orange4").css("width", fourBgPercent + "%");

    var threeBgPercent = (rates[2] / commentItems.length * 100);
    $("#orange3").css("width", threeBgPercent + "%");

    var twoBgPercent = (rates[1] / commentItems.length * 100);
    $("#orange2").css("width", twoBgPercent + "%");

    var oneBgPercent = (rates[0] / commentItems.length * 100);
    $("#orange1").css("width", oneBgPercent + "%");
  };



  // stars (click or hover)
  function fillStars(starItem) {
    var starE = $(starItem),
      stars = document.querySelectorAll(starItem); //  Stars on mouse over

    starE.on('mouseover', function (e) {
      var onStar = parseInt($(e.target).data('value'), 10);

      for (var i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('hover');
      }

      for (var _i = 0; _i < onStar; _i++) {
        $(stars[_i]).addClass('hover');
      }
    }).on('mouseout', function () {
      for (var i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('hover');
      }
    });

    //  Stars on click
    starE.on('click', function (e) {
      var onStar = parseInt($(e.target).data('value'), 10);

      for (var i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }

      for (var _i2 = 0; _i2 < onStar; _i2++) {
        $(stars[_i2]).addClass('selected');
      }
    });
  }

  fillStars('.quality__star');
  fillStars('.cost__star');
  fillStars('.appraisal__star');

  var $reviewInputTextarea = $(".feedback__area"),
    $reviewInputName = $(".input__wrapper--name input"),
    $reviewInputPhone = $(".input__wrapper--phone input");


  $reviewInputPhone.on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  $(".reviews__feedback").on("submit", function (evt) {
    if ($reviewInputTextarea.val().length === 0 && $reviewInputPhone.val() && $reviewInputName.val()) {
      return;
    }
    evt.preventDefault();
    $reviewInputName.val('');
    $reviewInputPhone.val('');
    $reviewInputTextarea.val('');
    $('<p class="success-message">Спасибо, Ваш отзыв отправлен на модерацию!</p>').insertAfter('.feedback__button');
    fileText.html('Добавить фото');
    fileImg.show();
    fileIcon.hide();
    labelFile.removeClass('rloaded');
    fileFlag = true;

    setTimeout(function () {
      $('.success-message').fadeOut();
      $('.reviews__background').fadeOut();
    }, 5000);

    $('.quality__star').removeClass('hover');
    $('.quality__star').removeClass('selected');
    $('.cost__star').removeClass('hover');
    $('.cost__star').removeClass('selected');
    $('.appraisal__star').removeClass('hover');
    $('.appraisal__star').removeClass('selected');
  });

  CalculateStats();
}
