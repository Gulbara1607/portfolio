<template>
  <div class="h__content container">
    <img src="@/assets/images/me2.jpg" alt="" class="profileImg" />
    <div class="h__content__left">
      <h5 class="h__content__left-title1">welcome to My Portfolio web-page!</h5>
      <h2 class="h__content__left-title2">
        Hello, I‘m Gulbara Begmatova - <span>professional </span>Fronted developer
      </h2>
      <p class="h__content__left-text">
        Happy to see you here and introduce to you my web-site!
      </p>
      <div class="buttons">
        <button>Hire me</button>
        <button>Download CV</button>
      </div>
    </div>
  </div>
  <main class="main container">
    <h1 class="title">My services</h1>
    <div class="main__list">
      <div class="main__list-item">
        <h3 class="main__list-item-title">App development</h3>
        <p class="main__list-item-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit.
          Soluta quasi
        </p>
        <a href="#">Learn more</a>
      </div>
      <div class="main__list-item">
        <h3 class="main__list-item-title">Web development</h3>
        <p class="main__list-item-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit.
          Soluta quasi
        </p>
        <a href="#">Learn more</a>
      </div>
      <div class="main__list-item">
        <h3 class="main__list-item-title">UI/UX Design</h3>
        <p class="main__list-item-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam nam sit.
          Soluta quasi
        </p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <h1 class="title">My works</h1>
  </main>
  <div class="section container">
    <div class="section__left">
      <img src="@/assets/images/screen.png" alt="" />
    </div>
    <div class="section__right">
      <h2 class="section__right-title">To-do list</h2>
      <p class="section__right-text">
        My first main project on <span>Vue.js</span> platform. A to-do list is just a list
        of things you have to-do. That means basically anything and everything can be on
        your to-do list—but just because you've written your to-dos down doesn't mean your
        to-do list is actually useful. Effectively tracking when your work is due can help
        you prioritize and get great work done.
      </p>
      <div class="section__right-button">
        <button>
          <a href="https://gulbara1607.github.io/todo-list/">learn more</a>
        </button>
      </div>
    </div>
  </div>
  <div class="weather container">
    <div class="weather__left">
      <h2 class="weather__left-title">Weather</h2>
      <p class="weather__left-text">
        My second main project on <span>Vue.js</span> platform. Weather forecasting is the
        prediction of what the atmosphere will be like in a particular place by using
        technology and scientific knowledge to make weather observations. In other words,
        it's a way of predicting things like cloud cover, rain, snow, wind speed, and
        temperature before they happen.
      </p>
      <div class="weather__left-button">
        <button>
          <a href="https://shuhratovjavohir.github.io/weather/">learn more</a>
        </button>
      </div>
    </div>
    <div class="weather__right">
      <img src="@/assets/images/screen2.png" alt="" />
    </div>
  </div>

  <div class="works container">
    <h1 class="title">More works</h1>
    <div class="works__list">
      <div class="works__list-item">
        <img class="works__list-item-img" src="@/assets/images/screen3.png" alt="" />
        <h3 class="works__list-item-title">
          <a href="https://gulbara1607.github.io/vuecinema/">Vue Cinema</a>
        </h3>
      </div>
      <div class="works__list-item">
        <img class="works__list-item-img" src="@/assets/images/screen4.png" alt="" />
        <h3 class="works__list-item-title">
          <a href="https://gulbara1607.github.io/Grayson/">Grayson</a>
        </h3>
      </div>
      <div class="works__list-item">
        <img class="works__list-item-img" src="@/assets/images/screen5.png" alt="" />
        <h3 class="works__list-item-title">
          <a href="https://gulbara1607.github.io/About-me/">Proweb</a>
        </h3>
      </div>
    </div>
  </div>

  <footer class="footer">
    <div class="footer__info container">
      <h2 class="title">Get in touch</h2>
      <div class="footer__info_list">
        <div class="footer__info_list-item">
          <img src="@/assets/images/phone.svg" alt="" />
          <div class="footer__info_list-item-text">
            <h3>Phone number</h3>
            <span>+998971871607</span>
          </div>
        </div>

        <div class="footer__info_list-item">
          <img src="@/assets/images/adress.svg" alt="" />
          <div class="footer__info_list-item-text">
            <h3>Address</h3>
            <span>Suite 1307, Tropical Center 218</span>
          </div>
        </div>

        <div class="footer__info_list-item">
          <img src="@/assets/images/email.svg" alt="" />
          <div class="footer__info_list-item-text">
            <h3>Email Address</h3>
            <span>@biophotography</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
