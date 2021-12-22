export default function () {

  const reviewsItemCollection = document.querySelectorAll('.js-list-reviews'),
    reviewsItemCollectionActive = document.querySelectorAll('.js-list-reviews.active'),
    reviewsItemCollectionLength = reviewsItemCollection.length,
    reviewsCount = document.querySelector('.js-reviews-count'),
    reviewsActiveCount = document.querySelector('.js-reviews-active-count'),
    textSelected = document.querySelectorAll('.js-text__selected'),
    floatingCircles = document.querySelector('#floatingCirclesG'),
    reviewsOpen = document.querySelector('.reviews__open'),
    reviewsClose = document.querySelector('.reviews__close');
  var reviewsItemCollectionActiveLength = reviewsItemCollectionActive.length,
    flagFor = false;
  let comments = document.querySelectorAll('.js-list-reviews'),
    commentsSort = document.querySelectorAll('.js-menu-item'),
    commentsContant = document.querySelector('.js-content__list');


  function changeActiveReviewsSum() {
    reviewsActiveCount.innerHTML = reviewsItemCollectionActiveLength;
  }

  function changeReviewsSum() {
    reviewsCount.innerHTML = reviewsItemCollectionLength;
  }

  changeReviewsSum();
  changeActiveReviewsSum();

  for (let i = 0; i < commentsSort.length; i++) {


    commentsSort[i].addEventListener('click', function () {

      let arr = [],
        indexArr = [],
        nodesArr = [],
        newArr = [];

      comments.forEach(function (el, index) {
        arr.push(new Object({
          index: index,
          rating: el.dataset.rating
        }));


        arr.sort(function (prev, next) {
          if (prev.rating < next.rating) return -1;
          if (prev.rating < next.rating) return 1;

        });

        nodesArr.push(el);
      });
      arr.forEach(function (el) {

        return indexArr.push(el.index);
      });
      for (let p = 0; p < nodesArr.length; p++) {
        if (nodesArr[p].classList.contains('active')) {
          nodesArr[p].classList.remove('active');
        }

      }


      indexArr.forEach(function (el) {
        if (commentsSort[i].classList.contains('js-menu-item-1')) {
          newArr.unshift(nodesArr[el].outerHTML);
        } else {
          newArr.push(nodesArr[el].outerHTML);
        }
      });


      floatingCircles.classList.add('active');
      commentsContant.innerHTML = [];

      function changeSortComments() {
        floatingCircles.classList.remove('active');


        let strArr = newArr.join(' ');
        commentsContant.innerHTML = strArr;
        let newCommentsContant = document.querySelectorAll('.js-list-reviews')
        for (let j = 0; j < newCommentsContant.length; j++) {
          if (j < reviewsItemCollectionActiveLength) {
            newCommentsContant[j].classList.add('active');
          }

        }
        customerReaction();
      }

      setTimeout(changeSortComments, 2000)

      for (let h = 0; h < textSelected.length; h++) {

        if ((commentsSort[i].classList.contains('js-menu-item-1')) && (textSelected[h].classList.contains('js-menu-item-1'))) {
          textSelected[h].classList.add('active');
          $(".sort__menu").remove("show");

        } else if ((commentsSort[i].classList.contains('js-menu-item-2')) && (textSelected[h].classList.contains('js-menu-item-2'))) {
          textSelected[h].classList.add('active');
          $(".sort__menu").remove("show");
        } else {
          textSelected[h].classList.remove('active');
        }
      }
      flagFor = true;
    });
  }

  //  Like/Dislike
  function customerReaction() {
    var reactionBlock = document.querySelectorAll('.js-reaction');
      if (flagFor) {
        reactionBlock = document.querySelectorAll('.js-reaction');
        console.log('+')
      }
      for (let i = 0; i < reactionBlock.length; i++) {
        reactionBlock[i].addEventListener('click', function (e) {

          var target = $(e.target),
            dislikeImg = target.parent().next().children().first(),
            likeImg = target.parent().prev().children().first(),
            dislikeCount = target.parent().next().children().last(),
            likeCount = target.parent().prev().children().last();

          if (target.hasClass('like')) {
            target.toggleClass('used');
            target.toggleClass('like-active');
            dislikeImg.removeClass('dislike-active');

            target.parent().toggleClass('like-active');
            target.parent().next().removeClass('dislike-active');

            if (target.hasClass('like-active')) {
              target.next().text(Number(target.next().text()) + 1);
            } else {
              target.next().text(Number(target.next().text()) - 1);
            }

            if (dislikeImg.hasClass('used')) {
              dislikeCount.text(Number(dislikeCount.text()) - 1);
              dislikeImg.removeClass('used');
            }
          } else {
            target.toggleClass('used');
            target.toggleClass('dislike-active');
            likeImg.removeClass('like-active');

            target.parent().toggleClass('dislike-active');
            target.parent().prev().removeClass('like-active');

            if (target.hasClass('dislike-active')) {
              target.next().text(Number(target.next().text()) + 1);
            } else {
              target.next().text(Number(target.next().text()) - 1);
            }

            if (likeImg.hasClass('used')) {
              likeCount.text(Number(likeCount.text()) - 1);
              likeImg.removeClass('used');
            }
          }

          $('.useful__yes').click(function (e) {
            var target = $(e.target);
            var child = target.find('.js-reaction');
            child.trigger('click');
          });

          $('.useful__no').click(function (e) {
            var target = $(e.target);
            var child = target.find('.js-reaction');
            child.trigger('click');
          });
        })
      }
  }
  customerReaction();
  reviewsOpen.addEventListener('click', function () {
    if (flagFor) {
      comments = document.querySelectorAll('.js-list-reviews');
    }
    let divyArray = [];

    for (var i = 0; i < comments.length; i++) {
      divyArray.push(comments[i]);
    }

    let fromReview = reviewsItemCollectionActiveLength,
      toReview = reviewsItemCollectionActiveLength + 5;
    let newReviews = divyArray.slice(fromReview, toReview);
    if (toReview === reviewsItemCollectionLength) {
      reviewsOpen.classList.add('inactive');
    }

    reviewsClose.classList.add('active');
    for (let h = 0; h < newReviews.length; h++) {
      newReviews[h].classList.add('active')
    }
    reviewsItemCollectionActiveLength += 5;
    changeActiveReviewsSum();
  });
  reviewsClose.addEventListener('click', function () {
    if (flagFor) {
      comments = document.querySelectorAll('.js-list-reviews');

    }
    let divyArray = [];

    for (var i = 0; i < comments.length; i++) {
      divyArray.push(comments[i]);
    }
    let fromReviewClose = 5,
      toReviewClose = reviewsItemCollectionActiveLength;
    let newReviewsClose = divyArray.slice(fromReviewClose, toReviewClose);
    console.log(divyArray)
    console.log(newReviewsClose)
    console.log(fromReviewClose)
    if (fromReviewClose == 5) {
      reviewsClose.classList.remove('active');

    }

    if ((fromReviewClose < 25) && (reviewsOpen.classList.contains('inactive'))) {
      reviewsOpen.classList.remove('inactive');
    }
    for (let h = 0; h < newReviewsClose.length; h++) {
      newReviewsClose[h].classList.remove('active');
    }

    reviewsItemCollectionActiveLength = 5;
    changeActiveReviewsSum();
    const contentM = document.querySelector('.content__menu')
    contentM.scrollIntoView()
  });

  $(".js-menu-sort").click(function () {
    $(".sort__menu").toggleClass("show");
  })
}
