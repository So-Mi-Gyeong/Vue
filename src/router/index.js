import { createRouter, createWebHistory } from 'vue-router';

// 컴포넌트 임포트
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import OsullocView from '../views/OsullocView.vue';
import ProductsView from '../views/ProductsView.vue';
import GuideButton from '../views/GuideButton.vue';
import GuideTooltip from '../views/GuideTooltip.vue';

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
  },

  // guide 페이지 경로
  {
    path: '/guideButton',  
    name: 'GuideButton',
    component: GuideButton
  },
  {
    path: '/guideTooltip',
    name: 'GuideTooltip',
    component: GuideTooltip
  }

];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;