<template>
    <div class="mdl-wrap">
        <div class="mdl-subject">
            <div class="mdl-subject-group">
                <em class="mdl-subject-em mb-x2" data-typo="body">빵으로 알아보는 내 성격은?</em>
                <h2 class="mdl-subject-tit"><img src="../assets/img/logo.png"  alt="오케어 베이커리"></h2>
                <p class="mdl-subject-txt">세상에 하나뿐인 나를 닮은 빵을 <br>만들어보세요.</p>
            </div>
        </div> 
    </div>
    <div class="ocr-bakery-baking">
        <div class="ocr-bakery-baking-img" data-id="nmmc_3_1v_ani"></div>
    </div>
    <div class="mdl-wrap"> 
        <div class="mdl-paragraph" data-align="center"><p>총 <b>1,824</b>명이 빵을 구웠어요!</p></div>
        <div class="mdl-btn-wrap plr-x5">
            <button type="button" class="mdl-btn" data-style="special" data-icon-after="ico_bread"><span>나만의 빵 만들기</span></button>
        </div>
        <div class="mdl-btn-wrap plr-x5 mt-x2">
            <button type="button" class="mdl-btn" data-style="second">
                <span>결과 다시보기</span>
            </button>
        </div>
    </div>
</template>

<style>
    body{background-color: #FFE8BF;}
    .mdl-subject-em{
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
        line-height: 2.2rem;
        color: #564335;
        margin-bottom: 16px;
    }
    .mdl-subject-tit{
        width: 260px;
        margin: 0 auto;
    }
    .mdl-subject-tit img{width: 100%;}
    .mdl-subject-txt{
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        color: #564335;
    }
    .ocr-bakery-baking{
        position: relative;
        padding: 16px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 264px;
        margin-bottom: 20px;
        background: url(../assets/img/ani/ani_baking_eff.png) no-repeat 50% 50% / cover;
    }
    .ocr-bakery-baking-img{
        position: relative;
        width: 220px;
        height: 188px;
        overflow: hidden;
        background: url(../assets/img/ani/ani_baking.jpg) no-repeat 0 50% / 1755px;
    }
</style>