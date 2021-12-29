// Preloader //
function loading() {
  document.querySelector(".preloader").classList.add("opacity");
}
setTimeout(loading, 2000);

// End preloader //

// Navbar //
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

function myFunction() {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    document.querySelector(".navbar-row").classList.remove("navbar-trans");
    document.querySelector(".navbar-row").classList.add("navbar-dark");
  } else {
    document.querySelector(".navbar-row").classList.remove("navbar-dark");
    document.querySelector(".navbar-row").classList.add("navbar-trans");
  }
}

window.onscroll = () => {
  myFunction();
};

// End Navbar //

/*------------------------------------
    Isotope Portfolio Filter
-------------------------------------- */

filterObject("all");

function filterObject(c) {
  let box = document.getElementsByClassName("box");
  if (c == "all") {
    c = "";
  }
  for (let i = 0; i < box.length; i++) {
    removeClass(box[i], "show");
    if (box[i].className.indexOf(c) > -1) {
      addClass(box[i], "show");
    }
  }
}

function removeClass(item, name) {
  let arr1 = item.className.split(" ");
  while (arr1.indexOf(name) > -1) {
    arr1.splice(arr1.indexOf(name), 1);
  }
  item.className = arr1.join(" ");
}

function addClass(item, name) {
  let arr1 = item.className.split(" ");
  if (arr1.indexOf(name) == -1) {
    item.className += ` ${name}`;
  }
}

// $(window).on("load", function () {
//   $(".portfolio-filter").each(function () {
//     var e = $(this);
//     e.imagesLoaded(function () {
//       if ($("html").attr("dir") == "rtl") {
//         var rtlVal = false;
//       } else {
//         var rtlVal = true;
//       }
//       var $grid = e.isotope({
//         layoutMode: "masonry",
//         originLeft: rtlVal,
//       });
//       $(".portfolio-menu")
//         .find("a")
//         .on("click", function () {
//           var filterValue = $(this).attr("data-filter");
//           return (
//             $(".portfolio-menu").find("a").removeClass("active"),
//             $(this).addClass("active"),
//             $grid.isotope({
//               filter: filterValue,
//             }),
//             !1
//           );
//         });
//     });
//   });
// });
