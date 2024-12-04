<script setup>
  import {ref} from 'vue'

  let id = 0

  const menus = ref([
  {id: id++, text: '제품', route: '/products'},
  {id: id++, text: '취향의 발견', route: '/taste-discovery'},
  {id: id++, text: '브랜드', route: '/brand'},
  {id: id++, text: '단체 및 기업 구매', route: '/corporate-purchase'}
])

const menuSide = ref([
  { id: id++, text: '로그인', route: '/login' },
  { id: id++, text: '검색', route: '/search' }
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
            <router-link :to="menu.route">{{ menu.text }}</router-link>
          </li>
        </ul>
      </div>
      <ul class="osulloc-menu-side">
        <li v-for="menu in menuSide" :key="menu.id">
          <router-link :to="menu.route">{{ menu.text }}</router-link>
        </li>
      </ul>
      </div>
    </div>
    <div class="osulloc-content">
      <section class="osulloc-content-section" data-section="1">
        <div class="osulloc-content-group">
          <h2 class="content-group-tit">취향의 발견 <span>FIND YOUR TASTE</span></h2>
          <ul class="content-group-txt">
            <li>무화과 쇼콜라 블랙티</li>
            <li>마롱 글라세 블랙티</li>
            <li>스윗 히비스커스</li>
          </ul>
          <button type="button" class="content-group-btn">바로가기</button>
        </div>
      </section>
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

  $gray: #AEAEAE;
  $beige: #ECE6E3;

  $fs-base: 1.6rem;
  $fs-large: 3.2rem;
  $fs-title: 8rem;


  .osulloc {
    *{font-family: 'Gyeonggi_Batang_Regular';}
  }
  .osulloc-menu{
    width: 100%;
    height: 5rem;
    background: #040404;
    box-sizing: border-box;
    &-wrap{
      width: 90%;
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
      color: $gray;
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
          color: $gray;
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
          color: $gray;
        }
      }
    }
  }
  .osulloc-content{
    &-section{
      &[data-section="1"]{
        width: 100%;
        height: calc(100dvh - 13rem);
        background: url(../assets/img/osulloc/img-section1.png) no-repeat 0 0;
        background-size: 409.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .osulloc-content-group{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1.6rem;
          .content-group-tit{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .8rem;
            $fs-title: $fs-large;
            font-weight: 700;
            color: #4A4A4A;
            span{
              font-size:4rem;
              font-weight: 400;
              color: #4A4A4A;
            }
          }
          .content-group-txt{
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
          .content-group-btn{
            margin-top: 4rem;
            width: 20rem;
            height: 5rem;
            padding: 1rem 0;
            border: .1rem solid #4A4A4A;
            border-radius: 5.5rem;
            background-color: transparent;
            font-size: $fs-base;
            font-weight: 700;
            color: #4A4A4A;
            &:hover{
              border: .1rem solid $gray;
              color: $gray;
            }
          }
        }
      }
    }
  }
</style>