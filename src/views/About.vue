<template>
  <div id="about">
    <br />
    <br />
    <br />
    <div class="heading_container heading_center">
      <h2 style="padding-bottom: 5px; border-bottom: 2px solid black">About</h2>
    </div>
    <br />
    <!-- <div class="black">
      <h3 class="white">Team Member</h3>
    </div> -->
    <div class="body">
      <div class="box">
        <div class="card">
          <div class="imgBx">
            <img src="https://i.ibb.co/5c7B1Zh/main.png" alt="images" />
          </div>
          <div class="details">
            <h2 style="font-family: 'nanumsquare'">
              Son Moeun<br /><span>Diary Part(FE/BE)</span>
            </h2>
          </div>
        </div>

        <div class="card">
          <div class="imgBx">
            <img
              src="https://avatars.githubusercontent.com/u/23338687?v=4"
              alt="images"
            />
          </div>
          <div class="details">
            <h2 style="font-family: 'nanumsquare'">
              Kyeong kyudong<br /><span>User Part(FE/BE)</span>
            </h2>
          </div>
        </div>

        <div class="card">
          <div class="imgBx">
            <img
              src="https://avatars.githubusercontent.com/u/40809467?v=4"
              alt="images"
            />
          </div>
          <div class="details">
            <h2 style="font-family: 'nanumsquare'">
              Kwon Kiseok<br /><span>Music Part(FE/BE)</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="black">
      <h3 class="white">Feel at Home Process</h3>
    </div>
    <div class="timeline">
      <div class="container left">
        <!-- <div class="date">15 Dec</div> -->
        <!-- <i class="icon fa fa-home"></i> -->
        <i class="icon fas fa-heart"></i>
        <div class="content">
          <h2>감정분석</h2>
          <p>텍스트에서 구글 자연어 분석 API를 사용하여 감정을 분석합니다.</p>
        </div>
      </div>
      <div class="container right">
        <!-- <div class="date">22 Oct</div> -->
        <i class="icon fas fa-heart"></i>
        <!-- <i class="icon fa fa-gift"></i> -->
        <div class="content">
          <h2>감정 캘린더 & 감정 차트</h2>
          <p>
            감정에 따라 캘린더에 다른 색상으로 감정을 표현합니다. <br />
            월별로 감정을 차트화해서 표시합니다.
          </p>
        </div>
      </div>
      <div class="container left">
        <i class="icon fas fa-heart"></i>
        <div class="content">
          <h2>감정에 따른 음악추천</h2>
          <p>
            앞서 분석된 감정에 따른 음악을 추천해줍니다. 추천된 음악은 당신의
            감정을 더 풍부하게 만들어줄 것입니다. <br />
            카테고리를 눌러서 음악을 추천받을 수돈 있습니다.
          </p>
        </div>
      </div>
      <div class="container right">
        <i class="icon fas fa-heart"></i>
        <!-- <i class="icon fa fa-running"></i> -->
        <div class="content">
          <h2>친구와의 공유</h2>
          <p>친구와 팔로우를 맺어보세요. 친구와 감정과 음악을 교류해보세요.</p>
        </div>
      </div>
      <div class="container left">
        <i class="icon fas fa-heart"></i>
        <!-- <i class="icon fa fa-cog"></i> -->
        <div class="content">
          <h2>당신의 HappyHouse를 찾으셨나요?</h2>
          <p>Feel At Home이 당신의 HappyHouse를 찾는데 도움이 되길 바랍니다.</p>
        </div>
      </div>
    </div>
    <div class="black"></div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
#about {
  background-color: white;
  z-index: 7;
  margin: 0;
}
.black {
  background-color: black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-family: "nanumsquare";
}
.white {
  color: white;
  padding-bottom: 5px;
  border-bottom: 2px solid white;
}
.body {
  height: 500px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  font-family: "nanumsquare";
}
.box {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
  grid-gap: 15px;
  margin: 0 auto;
}
.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: #fff;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.card:before,
.card:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #fff;
  transition: 0.5s;
  z-index: -1;
}
.card:hover:before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}
.card:hover:after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}
.card .imgBx {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222;
  transition: 0.5s;
  z-index: 1;
}

.card:hover .imgBx {
  bottom: 80px;
}

.card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
}

.card .details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  color: #777;
  text-transform: uppercase;
}

.card .details h2 span {
  font-weight: 500;
  font-size: 16px;
  color: #f38695;
  display: block;
  margin-top: 5px;
}

/* *,
*::before,
*::after {
  box-sizing: border-box;
} */

/* body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
} */

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background: black;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: -25%;
}

.container.right {
  left: 25%;
}

.container::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid black;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: black;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -75px;
}

.container.right .date {
  left: -75px;
}

.container .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: #ffbe33;
  border: 2px solid black;
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: black;
  z-index: 1;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: #ffbe33;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: normal;
  color: black;
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after,
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent black transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}
</style>
