<template>
    <button type="button" class="bakery-btn" data-style="basic" data-icon-after="ico_bread"><span>나만의 빵 만들기</span></button>
    <button type="button" class="bakery-btn" data-style="second"><span>결과 다시보기</span></button>
</template>
<style lang="scss">
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