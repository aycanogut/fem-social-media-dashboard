"use strict";var createUI=function(){document.querySelector(".container").innerHTML='\n    \x3c!-- header start  --\x3e\n    <header class="header">\n      <section class="header__wrapper">\n        <h1 class="header__title">\n          Social Media Dashboard\n        </h1>\n        <p class="header__text">\n          Total Followers: 23,004\n        </p>\n      </section>\n      <fieldset class="header__toggle toggle" aria-label="theme toggle" role="radiogroup">\n        <label class=\'dark\' for="dark">Dark Mode</label>\n        <label for="light">Dark Mode</label>\n        <span class="toggle__wrapper">\n        <input type="radio" name="theme" id="light" checked=\'true\'/>\n        <input type="radio" name="theme" id="dark"  />\n        <span aria-hidden="true" class="toggle__background"></span>\n          <span aria-hidden="true" class="toggle__button"></span>\n          </span>\n      </fieldset>\n    </header>\n    \x3c!-- header end  --\x3e\n    \x3c!-- main content start --\x3e\n    <main class="cards">\n      \x3c!-- cards container start --\x3e\n      <section class="cards__top">\n        <article class="card card--top card--top__facebook">\n          <div class="card--top__top">\n            <img src="../../src/images/icon-facebook.svg" alt="facebook logo">\n            <p class="card--top__top__username">@nathanf</p>\n          </div>\n          <div class="card--top__middle">\n            <p class="card--top__middle__count">1987</p>\n            <p class="card--top__middle__followers">followers</p>\n          </div>\n          <div class="card--top__bottom">\n            <p class="card__rating card__ascent">12 Today</p>\n          </div>\n        </article>\n        <article class="card card--top card--top__twitter">\n          <div class="card--top__top">\n          <img src="../../src/images/icon-twitter.svg" alt="twitter logo">\n            <p class="card--top__top__username">@nathanf</p>\n          </div>\n          <div class="card--top__middle">\n            <p class="card--top__middle__count">1044</p>\n            <p class="card--top__middle__followers">followers</p>\n          </div>\n          <div class="card--top__bottom">\n            <p class="card__rating card__ascent">99 Today</p>\n          </div>\n        </article>\n        <article class="card card--top card--top__instagram">\n          <div class="card--top__top">\n          <img src="../../src/images/icon-instagram.svg" alt="instagram logo">\n            <p class="card--top__top__username">@realnathanf</p>\n          </div>\n          <div class="card--top__middle">\n            <p class="card--top__middle__count">11k</p>\n            <p class="card--top__middle__followers">followers</p>\n          </div>\n          <div class="card--top__bottom">\n            <p class="card__rating card__ascent">1099 Today</p>\n          </div>\n        </article>\n        <article class="card card--top card--top__youtube">\n          <div class="card--top__top">\n          <img src="../../src/images/icon-youtube.svg" alt="youtube logo">\n            <p class="card--top__top__username">Nathan F.</p>\n          </div>\n          <div class="card--top__middle">\n            <p class="card--top__middle__count">8293</p>\n            <p class="card--top__middle__followers">subscribers</p>\n          </div>\n          <div class="card--top__bottom">\n            <p class="card__rating card__descent">144 Today</p>\n          </div>\n        </article>\n      </section>\n      <section class="cards__overview">\n        <header class="cards__overview__header">\n          <h2>overview - today</h2>\n        </header>\n        <div class="cards__overview__wrapper">\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">page views</p>\n              <img src="../../src/images/icon-facebook.svg" alt="facebook logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">87</p>\n              <p class="card__rating card__ascent">3%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">likes</p>\n              <img src="../../src/images/icon-facebook.svg" alt="facebook logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">52</p>\n              <p class="card__rating card__descent">2%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">likes</p>\n              <img src="../../src/images/icon-instagram.svg" alt="instagram logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">5462</p>\n              <p class="card__rating card__ascent">2257%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">profile views</p>\n              <img src="../../src/images/icon-instagram.svg" alt="instagram logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">52k</p>\n              <p class="card__rating card__ascent">1375%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">retweets</p>\n            <img src="../../src/images/icon-twitter.svg" alt="twitter logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">117</p>\n              <p class="card__rating card__ascent">303%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">likes</p>\n            <img src="../../src/images/icon-twitter.svg" alt="twitter logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">507</p>\n              <p class="card__rating card__ascent">553%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">likes</p>\n            <img src="../../src/images/icon-youtube.svg" alt="youtube logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">107</p>\n              <p class="card__rating card__descent">19%</p>\n            </div>\n          </article>\n          <article class="card card--overview">\n            <div class="card--overview__top">\n              <p class="card--overview__top__views">total views</p>\n            <img src="../../src/images/icon-youtube.svg" alt="youtube logo">\n            </div>\n            <div class="card--overview__bottom">\n              <p class="card--overview__bottom__number">1407</p>\n              <p class="card__rating card__descent">12%</p>\n            </div>\n          </article>\n        </div>\n      </section>\n      \x3c!-- cards container end --\x3e\n    </main>\n    \x3c!-- main content end --\x3e\n  '};createUI();var toggleTheme=function(){var a=document.querySelector(".toggle__wrapper"),e=(a.children[0],a.children[1]),c=document.querySelector(".dark");a.addEventListener("click",(function(){e.checked?(document.body.classList.add("light-theme"),c.innerHTML="Light Mode"):(document.body.classList.remove("light-theme"),c.innerHTML="Dark Mode")}))};toggleTheme();
//# sourceMappingURL=script.js.map