<template>
  <header class="base-header">
    <div class="base-header-wrap">
      <button type="button" class="base-header-btn" data-icon="back" aria-label="이전화면"></button>
      <h1 class="base-header-tit" aria-label="오케어 베이커리"></h1>
    </div>
  </header>
</template>
<style lang="scss">
  .base-header{
    position: relative;
    z-index: 2;
    width: 100%;
    padding: env(safe-area-inset-top) calc(env(safe-area-inset-right) + 2.4rem) 0 calc(env(safe-area-inset-left) + 2.4rem);
    transition: background-color 0.2s ease-in;
    min-height: 5.6rem;
    background: #FFE8BF;
    box-sizing: border-box;
    &-wrap{
      width: 100%;
      min-height: 5.6rem; 
      margin: 0 auto;
      padding: 0 3.2rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    &-btn{
      width: 3rem;
      height: 3rem;
      position: absolute;
      left: 0;
      display: block;
      &::before{
        content: "";
        display: block;
        position: relative;
        width: 3rem;
        height: 3rem;
        background: url(@/assets/img/common/ico_h_back_dark.svg) 0 0 / cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 3rem;
      }
    }
    &-tit{
      display: flex;
      align-items: center;
      line-height: 1;
      position: relative;
      &::before{
        content: attr(aria-label);
        display: block;
        position: relative;
        font-family: "KBF";
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.6rem;
        color: #222;
        top: 0.2rem;
      }
    }
  }
</style>