//* create main page HTML structure

const createUI = () => {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <!-- header start  -->
    <header class="header">
      <section class="header__wrapper">
        <h1 class="header__title">
          Social Media Dashboard
        </h1>
        <p class="header__text">
          Total Followers: 23,004
        </p>
      </section>
      <fieldset class="header__toggle toggle" aria-label="theme toggle" role="radiogroup">
        <label for="dark">Dark Mode</label>
        <div class="toggle__wrapper">
          <input type="radio" name="theme" id="dark" />
          <input type="radio" name="theme" id="light" />
          <span aria-hidden="true" class="toggle__background"></span>
          <span aria-hidden="true" class="toggle__button"></span>
        </div>
      </fieldset>
    </header>
    <!-- header end  -->
    <!-- main content start -->
    <main class="cards">
      <!-- cards container start -->
      <section class="cards__top">
        <article class="card card--top">
          <div class="card--top__top">
            <img src="../../src/images/icon-facebook.svg" alt="facebook logo">
            <p class="card--top__top__username">@nathanf</p>
          </div>
          <div class="card--top__middle">
            <p class="card--top__middle__count">1987</p>
            <p class="card--top__middle__followers">followers</p>
          </div>
          <div class="card--top__bottom">
            <p class="card__rating">12 Today</p>
          </div>
        </article>
        <article class="card card--top">
          <div class="card--top__top">
          <img src="../../src/images/icon-twitter.svg" alt="twitter logo">
            <p class="card--top__top__username">@nathanf</p>
          </div>
          <div class="card--top__middle">
            <p class="card--top__middle__count">1044</p>
            <p class="card--top__middle__followers">followers</p>
          </div>
          <div class="card--top__bottom">
            <p class="card__rating">99 Today</p>
          </div>
        </article>
        <article class="card card--top">
          <div class="card--top__top">
          <img src="../../src/images/icon-instagram.svg" alt="instagram logo">
            <p class="card--top__top__username">@realnathanf</p>
          </div>
          <div class="card--top__middle">
            <p class="card--top__middle__count">11k</p>
            <p class="card--top__middle__followers">followers</p>
          </div>
          <div class="card--top__bottom">
            <p class="card__rating">1099 Today</p>
          </div>
        </article>
        <article class="card card--top">
          <div class="card--top__top">
          <img src="../../src/images/icon-youtube.svg" alt="youtube logo">
            <p class="card--top__top__username">Nathan F.</p>
          </div>
          <div class="card--top__middle">
            <p class="card--top__middle__count">8293</p>
            <p class="card--top__middle__followers">subscribers</p>
          </div>
          <div class="card--top__bottom">
            <p class="card__rating">144 Today</p>
          </div>
        </article>
      </section>
      <section class="cards__overview">
        <header class="cards__overview__header">
          <h2>overview - today</h2>
        </header>
        <div class="cards__overview__wrapper">
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">page views</p>
              <img src="../../src/images/icon-facebook.svg" alt="facebook logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">87</p>
              <p class="card__rating">3%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">likes</p>
              <img src="../../src/images/icon-facebook.svg" alt="facebook logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">52</p>
              <p class="card__rating">2%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">likes</p>
              <img src="../../src/images/icon-instagram.svg" alt="instagram logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">5462</p>
              <p class="card__rating">2257%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">profile views</p>
              <img src="../../src/images/icon-instagram.svg" alt="instagram logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">52k</p>
              <p class="card__rating">1375%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">retweets</p>
            <img src="../../src/images/icon-twitter.svg" alt="twitter logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">117</p>
              <p class="card__rating">303%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">likes</p>
            <img src="../../src/images/icon-twitter.svg" alt="twitter logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">507</p>
              <p class="card__rating">553%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">likes</p>
            <img src="../../src/images/icon-youtube.svg" alt="youtube logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">107</p>
              <p class="card__rating">19%</p>
            </div>
          </article>
          <article class="card card--overview">
            <div class="card--overview__top">
              <p class="card--overview__top__views">total views</p>
            <img src="../../src/images/icon-youtube.svg" alt="youtube logo">
            </div>
            <div class="card--overview__bottom">
              <p class="card--overview__bottom__number">1407</p>
              <p class="card__rating">12%</p>
            </div>
          </article>
        </div>
      </section>
      <!-- cards container end -->
    </main>
    <!-- main content end -->
  `;
};

createUI();