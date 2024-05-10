<script setup>
  import Header from '../components/layout/HeaderBase.vue'

  import Btn from '../components/contents/button/ButtonMain.vue'
  // import ModalStart from './components/contents/modal/ModalStart.vue'
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
                    <h2 class="bakery-txt-tit"><img src="@/assets/img/logo.png" alt="오케어 베이커리"></h2>
                    <p class="bakery-txt-con">세상에 하나뿐인 나를 닮은 빵을 <br>만들어보세요.</p>
                </div>
            </div> 
        </div>
        <div class="ocr-bakery-baking">
            <div class="ocr-bakery-baking-img" data-id="nmmc_3_1v_ani" @call-act="aniAct"></div>
        </div>
        <div class="ocr-bakery-box"> 
            <div class="bakery-txt-paragraph"><p>총 <b>1,824</b>명이 빵을 구웠어요!</p></div>
            <div class="bakery-btn-wrap"><Btn /></div>
        </div>
      </div>
    </div>
  </div>
  <!-- <ModalStart /> -->
</template>

<style scoped lang="scss">
  .ocr-bakery{
    &-wrap{
      position: relative;
      height: 100dvh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-width: 28rem;
    }
    &-body{
      position: relative;
      z-index: 0;
      width: 100%;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 8vh 0 calc(env(safe-area-inset-bottom) + 4rem);
      display: flex;
      flex-direction: column;
    }
    &-box{
      width: 100%;
      max-width: 40rem;
      margin: 0 auto;
      padding: 0 4rem;
      box-sizing: border-box;
      .bakery-txt-paragraph{margin-bottom: 2.4rem;}
    }
    &-baking{
      position: relative;
      padding: 1.6rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 26.4rem;
      margin-bottom: 2rem;
      background: url(@/assets/img/ani/ani_baking_eff.png) no-repeat 50% 50% / cover;
      &-img{
        position: relative;
        width: 22rem;
        height: 18.8rem;
        overflow: hidden;
        background: url(@/assets/img/ani/ani_baking.jpg) no-repeat 0 50% / 176rem;
        z-index: 2;
      }
    }
  }
</style>