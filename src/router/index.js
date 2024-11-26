import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 임포트
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BakeryView from '../views/bakeryView.vue';
import OsullocView from '../views/OsullocView.vue';
import ProductsView from '../views/ProductsView.vue';

// 라우터 설정
const routes = [
  {
    path: '/',  // 기본 경로 (홈 화면)
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',  // about
    name: 'About',
    component: AboutView
  },
  {
    path: '/bakery',  // bakery 페이지 경로
    name: 'Bakery',
    component: BakeryView
  },
  // osulloc 페이지 경로
  {
    path: '/osulloc',  
    name: 'Osulloc',
    component: OsullocView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  }
];

module.exports = {
  publicPath: '/Vue/',
};

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;