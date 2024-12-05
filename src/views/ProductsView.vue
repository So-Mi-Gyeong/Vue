<script setup>
  import { ref } from 'vue';

  const products = ref([
    { title: 'Product 1', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 2', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 3', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 4', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 5', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 6', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 7', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 8', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 9', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' },
    { title: 'Product 10', description: 'Lorem ipsum dolor sit amet.', image: '/img/osulloc/content-sample.png' }
  ]);
  const goBack = () => {
    window.history.back();
  };
</script>
<template>
  <article class="products">
    <div class="products-contents">
      <button type="button" class="backBtn"  @click="goBack">뒤로</button>
      <h2>BEST MENU</h2>
      <div class="list-wrap">
        <ul class="products-contents-list">
          <li v-for="(product, index) in products" :key="index">
            <img :src="product.image" :alt="product.title" />
 
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </li> 
      </ul>
      </div>
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
      .list-wrap{
        display: flex;
        justify-content: center;
        max-width: 70rem;
        margin: 0 auto;
      }
      &-list{
        width: 64.8rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2.4rem;
        flex-wrap: wrap;
        li{
          width: 20rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 3.2rem;
          // &:nth-child(n+4){margin-top: 2.4rem;}
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