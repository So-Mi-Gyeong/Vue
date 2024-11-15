<script setup>
import { ref } from 'vue';
import Header from '../components/layout/HeaderBase.vue';

// 버튼 데이터 정의
const button1 = ref({
  name: '나만의 빵 만들기',
  class: 'bakery-btn',
  iconAfter: 'ico_bread'
});

const button2 = ref({
  name: '결과 다시보기',
  class: 'bakery-btn second'
});

// 버튼 클릭 핸들러 정의
function handleClick(button) {
  console.log(`${button.name} 버튼 클릭됨`); // 올바른 템플릿 리터럴 사용
}
</script>

<template>
  <div class="ocr-bakery">
    <div class="ocr-bakery-wrap">
      <Header />
      <div class="ocr-bakery-body">
        <div class="ocr-bakery-box">
          <div class="bakery-txt-wrap">
            <div class="bakery-txt-group">
              <em class="bakery-txt-em">빵으로 알아보는 내 성격은?</em>
              <h2 class="bakery-txt-tit">
                <img src="@/assets/img/logo.png" alt="오케어 베이커리" />
              </h2>
              <p class="bakery-txt-con">
                세상에 하나뿐인 나를 닮은 빵을 <br />만들어보세요.
              </p>
            </div>
          </div>
        </div>
        <div class="ocr-bakery-baking">
          <div class="ocr-bakery-baking-img" data-id="nmmc_3_1v_ani" @call-act="aniAct"></div>
        </div>
        <div class="ocr-bakery-box">
          <div class="bakery-txt-paragraph">
            <p>총 <b>1,824</b>명이 빵을 구웠어요!</p>
          </div>
          <div class="bakery-btn-wrap">
            <button :class="button1.class" @click="handleClick(button1)" data-icon-after="ico_bread">
              <span>{{ button1.name }}</span>
              <i v-if="button1.iconAfter" :class="button1.iconAfter"></i>
            </button>
            <button :class="button2.class" @click="handleClick(button2)" data-style="second">
              <span>{{ button2.name }}</span>
            </button>
            <!-- 주석 처리된 버튼 코드 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Modal/> -->
</template>

<style scoped lang="scss">
.ocr-bakery {
  &-wrap {
    position: relative;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 28rem;
  }
  &-body {
    position: relative;
    z-index: 0;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8vh 0 calc(env(safe-area-inset-bottom) + 4rem);
    display: flex;
    flex-direction: column;
    background-color: #FFE8BF;
  }
  &-box {
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    padding: 0 4rem;
    box-sizing: border-box;
    .bakery-txt-paragraph {
      margin-bottom: 2.4rem;
    }
  }
  &-baking {
    position: relative;
    padding: 1.6rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26.4rem;
    margin-bottom: 2rem;
    background: url(@/assets/img/ani/ani_baking_eff.png) no-repeat 50% 50% / cover;
    &-img {
      position: relative;
      width: 22rem;
      height: 18.8rem;
      overflow: hidden;
      background: url(@/assets/img/ani/ani_baking.jpg) no-repeat 0 50% / 176rem;
      z-index: 2;
    }
  }
}
.bakery-btn-wrap{
    margin-top: 2.4rem;
    padding: 0 4rem;
  }
  .bakery-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.6rem;
    color: #433029;
    background-color: #FCE300;
    border: 1px solid #433029;
    border-radius: 3rem;
    box-shadow: .5rem .5rem 0 #433029;
    position: relative;
  }
  .bakery-btn[data-style="second"]{
    font-weight: 500;
    color: #fff;
    background-color: #444;
    border: .1rem solid transparent;
    box-shadow: none;
  }
  [data-icon-after="ico_bread"]::after{
    content: "";
    display: block;
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(@/assets/img/icon/ico_bread.png);
    background-size: cover;
    margin-left: 0.4rem;
  }
  .bakery-btn + .bakery-btn{margin-top: 1.6rem;}
</style>
