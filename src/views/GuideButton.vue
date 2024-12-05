<script>
export default {
  data() {
    return {
      size: {
        large: 'large',
        medium: 'medium',
        small: 'small'
      },
      styles: {
        btnFiled: 'filed',
        btnYellow: 'tonal-yellow',
        btnGray: 'tonal-gray',
        btnLine: 'outlined',
        btnLineS: 'outlined-s'
      },
      text: {
        btnText: '시작하기'
      },
      disabled: true
    };
  },
  methods: {
    handleClick() {
      console.log('버튼 클릭됨');
    }
  }
};
</script>
<template>
  <article class="guide">
    <h2>Button</h2>
    <p>
      버튼의 높이에 따라 Large/Medium/Small로 나뉘며, 동일한 크기의 버튼에서도 중요도에 따라 Filled부터, 눈에 띄는 컬러부터 사용합니다.
      가이드는 너비 375px을 기준으로 하며, Full 또는 Half 사용시 디바이스의 너비에 따라 달라집니다.
      사용자에게 많은 선택과 행동을 요구하는 것은 혼란을 줄 수 있어 한 페이지에서 최소한의 버튼을 사용하도록 합니다.
    </p>

    <h3>Guide wrap</h3>
    <div class="guide-box">
      <div class="guide-wrap">
        <div style="width: 100%; height: 4rem; position: relative;">
          <div class="guide-item"></div>
        </div>
      </div>
      <hr class="line">
      <div class="guide-wrap">
        <div style="width: 100%; height: 4rem; position: relative;">
          <div class="guide-item"></div>
        </div>
        <div style="width: 100%; height: 4rem; position: relative;">
          <div class="guide-item"></div>
        </div>
      </div>
      <hr class="line">
      <div class="guide-wrap">
        <div style="width: 10rem; height: 4rem; position: relative;">
          <div class="guide-item"></div>
        </div>
      </div>
    </div>

    <h3>New</h3>
    <div class="guide-box">
      <div class="guide-btn-box">
        <h4>{{ size.large }}</h4>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large"
          :data-style="styles.btnFiled"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large"
          :data-style="styles.btnFiled" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>  
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large"
          :data-style="styles.btnYellow"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large" 
          :data-style="styles.btnYellow" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
						<button 
            type="button" 
            class="mdl-btn" 
            :data-size="size.large" 
            :data-style="styles.btnGray"
            >
							<span>{{ text.btnText}}</span>
						</button>
						<button 
            type="button" 
            class="mdl-btn" 
            :data-size="size.large" 
            :data-style="styles.btnGray" 
            :disabled="disabled"
            >
							<span>{{ text.btnText}}</span>
						</button>
					</div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large" 
          :data-style="styles.btnLine"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.large" 
          :data-style="styles.btnLine" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        
        <hr class="line">

        <h4>{{ size.medium }}</h4>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnFiled"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnFiled" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnYellow"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnYellow" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button"
           class="mdl-btn" 
           :data-size="size.medium"
           :data-style="styles.btnGray"
           >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnGray" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnLine"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnLine" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnLineS"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.medium"
          :data-style="styles.btnLineS" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>

        <hr class="line">

        <h4>{{ size.small }}</h4>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnFiled"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnFiled" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnYellow"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnYellow" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnGray"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnGray" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnLine"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnLine" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>
        <div class="mdl-btn-wrap">
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnLineS"
          >
            <span>{{ text.btnText }}</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :data-size="size.small"
          :data-style="styles.btnLineS" 
          :disabled="disabled"
          >
            <span>{{ text.btnText }}</span>
          </button>
        </div>

        <hr class="line">

        <h4>Text</h4>
        <div>
          <button 
          type="button" 
          class="mdl-btn"
          >
            <span>7일간 보지 않기</span>
          </button>
          <button 
          type="button" 
          class="mdl-btn" 
          :disabled="disabled"
          >
            <span>7일간 보지 않기</span>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .guide{
    padding: 3rem 2.4rem;
    h2{
      font-size: 2rem;
      font-weight: 700;
      color: #000;
    }
    h3{
      font-size: 1.6rem;
      font-weight: 500;
      color: #000;
      margin-top: 2rem;
    }
    h4{
      margin-bottom: .8rem;
    }
    p{
      font-size: 1.2rem;
      font-weight: 300;
      color: #000;
    }
    &-box{
      padding: 2.4rem;
      margin-top: 2rem;
      border: .1rem solid #ddd;
      border-radius: 1.2rem;
    }
    &-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      position: relative;
    }
    &-item{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px dashed tomato;
      background-color: rgba(255, 99, 71, 0.193);
      opacity: .3;
      &::before{
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        border-left: 1px dashed tomato;
        position: absolute;
        top: 0;
        left: 50%;
      }
      &::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        border-top: 1px dashed tomato;
        position: absolute;
        top: 50%;
        left: 0;
      }
    }

    .mdl-btn-wrap{
      & + .mdl-btn-wrap{margin-top: .8rem}
    }
  }

  .line{
    display: block;
    width: 100%;
    max-width: 37.5rem;
    padding: 0;
    margin: 2.4rem auto;
    border-top: .1rem solid #eee;
  }
</style>