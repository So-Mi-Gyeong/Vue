<script setup>
  const goBack = () => {
    window.history.back();
  };
</script>
<template>
  <article class="products">
    <div class="products-contents">
      <button type="button" class="backBtn"  @click="goBack">뒤로</button>
      <h2>BEST MENU</h2>
      <ul class="products-contents-list">
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <img src="../assets/img/osulloc/content-sample.png" alt="">
          <h3>title</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </div>
  </article>
</template>
<style scoped lang="scss">
  .products{
    padding: 5rem;
    background-color: #fff;
    box-sizing: border-box;
    &-contents{
      max-width: 120rem;
      margin: 0 auto;
      h2{
        margin-bottom: 5rem;
        font-size: 5rem;
        font-weight: 400;
        text-align: center;
        color: #000;
      }
      &-list{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        li{
          width: calc(100% / 5 - 1.6rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.2rem;
          &:nth-child(n+6){margin-top: 5rem;}
          img{
            width: 20rem;
            height: 20rem;
            border-radius: 3rem;
            overflow: hidden;
          }
          h3{
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 1.6rem;
            color: #000;
            text-align: center;
          }
          p{
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2rem;
            color: #000;
            text-align: center;
          }
        }
      }
    }
  }
  .backBtn{
    background-color: #000;
    padding: 0.8rem 1.6rem;
    border-radius: 5rem;
    color: #fff;
  }
</style>