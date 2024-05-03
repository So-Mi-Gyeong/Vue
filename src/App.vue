<script setup>
  import ButtonPage from './components/ButtonPage.vue'
  import ModalPage from './components/ModalPage.vue'
</script>
<template>
  <div class="ocr-bakery">
    <div class="mdl-wrap">
        <div class="mdl-subject">
            <div class="mdl-subject-group">
                <em class="mdl-subject-em">빵으로 알아보는 내 성격은?</em>
                <h2 class="mdl-subject-tit"><img src="./assets/img/logo.png"  alt="오케어 베이커리"></h2>
                <p class="mdl-subject-txt">세상에 하나뿐인 나를 닮은 빵을 <br>만들어보세요.</p>
            </div>
        </div> 
    </div>
    <div class="ocr-bakery-baking">
        <div class="ocr-bakery-baking-img" data-id="nmmc_3_1v_ani"></div>
    </div>
    <div class="mdl-wrap"> 
        <div class="mdl-paragraph"><p>총 <b>1,824</b>명이 빵을 구웠어요!</p></div>
        <div class="mdl-btn-wrap"><ButtonPage /></div>
    </div>
  </div>
  <ModalPage />
</template>

<style scoped lang="scss">
  .ocr-bakery{
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 56px;
  }
  .mdl-subject-group{
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .mdl-subject-em{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #564335;
  }
  .mdl-subject-tit{
    width: 260px;
    margin: 16px auto 0;
  }
  .mdl-subject-tit img{width: 100%;}
  .mdl-subject-txt{
    margin-top: 16px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #564335;
  }
  .ocr-bakery-baking{
    height: 264px;
    margin-top: 20px;
    background: url(./assets/img/ani/ani_baking_eff.png) 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .ocr-bakery-baking-img{
    width: 220px;
    height: 189px;
    margin: 0 auto;
    position: relative;
    top: 35%;
    transform: translateY(-35%);
    overflow: hidden;
  }

  .ocr-bakery-baking-img::before{
    content: '';
    width: 1755px;
    height: 189px;
    background: url(./assets/img/ani/ani_baking.jpg) 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -1535px;
  }

  .mdl-paragraph{
    font-size: 14px;
    font-weight: 300;
    line-height: 23px;
    color: #564335;
    text-align: center;
  }
</style>

