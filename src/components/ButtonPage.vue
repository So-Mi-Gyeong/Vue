<template>
    <button type="button" class="mdl-btn" data-style="basic" data-icon-after="ico_bread"><span>나만의 빵 만들기</span></button>
    <button type="button" class="mdl-btn" data-style="second"><span>결과 다시보기</span></button>
</template>
<style>
  .mdl-btn-wrap{
    margin-top: 24px;
    padding: 0 40px;
  }

  .mdl-btn{
    width: 100%;
    height: 60px;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    color: #433029;
    background-color: #FCE300;
    border: 1px solid #433029;
    border-radius: 30px;
    box-shadow: 5px 5px 0 #433029;
  }
  .mdl-btn[data-style="second"]{
    font-weight: 500;
    color: #fff;
    background-color: #444;
    border: 1px solid transparent;
    box-shadow: none;
  }
  .mdl-btn + .mdl-btn{margin-top: 16px;}
</style>