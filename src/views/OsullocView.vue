<script setup>
  import {ref} from 'vue'

  let id = 0

  const menus = ref([
    {id: id++, text: '제품'},
    {id: id++, text: '취향의 발견'},
    {id: id++, text: '브랜드'},
    {id: id++, text: '단체 및 기업 구매'}
  ])

  const menuSide = ref([
    { id: id++, text: '로그인'},
    { id: id++, text: '검색'}
  ])
</script>

<template>
  <article class="osulloc">
    <div class="osulloc-menu">
      <div class="osulloc-menu-wrap">
        <div class="osulloc-menu-left">
        <h1 class="osulloc-menu-logo">오설록</h1>
        <ul class="osulloc-menu-right">
          <li v-for="menu in menus" :key="menu.id">
            <router-link :to="menu.text">{{ menu.text }}</router-link>
          </li>
        </ul>
      </div>
      <ul class="osulloc-menu-side">
        <li v-for="menu in menuSide" :key="menu.id">
          <router-link :to="menu.text">{{ menu.text }}</router-link>
        </li>
      </ul>
      </div>
    </div>
    <div class="osulloc-content">
      <section class="osulloc-conten-section" data-section="1">
        <div class="osulloc-conten-group">
          <h2 class="conten-group-tit">취향의 발견 <span>FIND YOUR TASTE</span></h2>
          <ul class="conten-group-txt">
            <li>무화과 쇼콜라 블랙티</li>
            <li>마롱 글라세 블랙티</li>
            <li>스윗 히비스커스</li>
          </ul>
          <button type="button" class="conten-group-btn">바로가기</button>
        </div>
      </section>
      <section class="osulloc-conten-section" data-section="2"></section>
      <section class="osulloc-conten-section" data-section="3"></section>
      <section class="osulloc-conten-section" data-section="4"></section>
      <section class="osulloc-conten-section" data-section="5"></section>
    </div>
  </article>
</template>

<style lang="scss">
  @font-face {
      font-family: 'Gyeonggi_Batang_Regular';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Batang_Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  $main-color: #5F6A44;
  $background-color: #F5F3E5;
  $button-bg-color: #A5A992;
  $point-color: #D7A62A;

  $fs-base: 1.6rem;
  $fs-large: 3.2rem;
  $fs-title: 8rem;


  .osulloc {
    *{font-family: 'Gyeonggi_Batang_Regular';}
  }
  .osulloc-menu{
    width: 100%;
    height: 8rem;
    background-color: $background-color;
    box-sizing: border-box;
    &-wrap{
      max-width: 120rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-left{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3.2rem;
    }
    &-logo{
      font-size: $fs-large;
      font-weight: 700;
      color: $main-color;
    }
    &-right{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.6rem;
      li{
        a{
          font-size: $fs-base;
          font-weight: 400;
          color: $main-color;
        }
      }
    }
    &-side{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.6rem;
      li{
        a{
          font-size: $fs-base;
          font-weight: 400;
          color: $main-color;
        }
      }
    }
  }
  .osulloc-conten{
    &-section{
      &[data-section="1"]{
        width: 100%;
        height: calc(100dvh - 13rem);
        background-color: $background-color;
        display: flex;
        justify-content: center;
        align-items: center;
        .osulloc-conten-group{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1.6rem;
          .conten-group-tit{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .8rem;
            $fs-title: $fs-large;
            font-weight: 700;
            color: #4A4A4A;
            &::before{
              content: '';
              display: block;
              width: 19rem;
              height: 6.91rem;
              background: url(../assets/img/osulloc/ico-tea.png) no-repeat 0 0;
              background-size: 19rem;
            }
            span{
              font-size:4rem;
              font-weight: 400;
              color: #4A4A4A;
            }
          }
          .conten-group-txt{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            li{
              font-size: $fs-base;
              font-weight: 400;
              display: flex;
              justify-content: flex-start;
              gap: .5rem;
              &::after{
                content: '|';
                display: block;
              }
              &:last-child::after{display: none;}
            }
          }
          .conten-group-btn{
            margin-top: 4rem;
            width: 20rem;
            height: 5rem;
            padding: 1rem 0;
            border-radius: 5.5rem;
            background-color: $button-bg-color;
            font-size: $fs-base;
            font-weight: 700;
            color: #fff;
            &:hover{background-color: $main-color;}
          }
        }
      }
      &[data-section="2"]{
        width: 100%;
        height: 50rem;
        background-color: $main-color;
      }
      &[data-section="3"]{
        width: 100%;
        height: 100dvh;
        background-color: $point-color;
      }
      &[data-section="4"]{
        width: 100%;
        height: 100dvh;
        background-color: $main-color;
      }
      &[data-section="5"]{
        width: 100%;
        height: 100dvh;
        background-color: $background-color;
      }
    }
  }
</style>