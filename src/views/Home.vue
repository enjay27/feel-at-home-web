<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- slider section -->
  <section class="slider_section">
    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6">
                <div class="detail-box">
                  <h1>Feel at Home</h1>
                  <p>
                    사용자가 자신의 감정을 표현할 때 그 감정을 더 값지고
                    행복하게 만들어줄 수 있는 행복하게 만들어줄 수 있는 노래를
                    추천해드립니다 편안히 그리고 행복하게 집에서 자신의 감정을
                    느껴보세요.
                  </p>
                  <div class="btn-box">
                    <router-link :to="{ name: 'Diary' }" class="btn1">
                      Discover Your Feeling</router-link
                    >
                    <!-- <a href="" class="btn1"> Discover Your Feeling </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6">
                <div class="detail-box">
                  <h1>Step 1</h1>
                  <p>오늘 당신의 기분은 어땠나요? 자신의 감정을 기록해보세요</p>
                  <div class="btn-box">
                    <router-link :to="{ name: 'Diary' }" class="btn1">
                      Discover Your Feeling</router-link
                    >
                    <!-- <a href="" class="btn1"> Discover Your Feeling </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-6">
                <div class="detail-box">
                  <h1>Step 2</h1>
                  <p>
                    감정과 음악의 조우! <br />당신의 감정이 더 행복해지도록,
                    풍부해지도록, 편안해지도록 우리는 돕고 싶어요. 우리의 추천
                    음악을 들어볼래요?
                  </p>
                  <div class="btn-box">
                    <router-link :to="{ name: 'Music' }" class="btn1">
                      Discover Your Feeling</router-link
                    >
                    <!-- <a href="" class="btn1"> Discover Your Feeling </a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ol class="carousel-indicators">
          <li
            data-target="#customCarousel1"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  </section>
  <!-- end slider section -->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>
