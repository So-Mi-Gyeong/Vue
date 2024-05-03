<script>
</script>
<template>
    <section class="mdl-modal" data-id="NMMC_3_10L" data-type="bottom" aria-hidden="false"> 
        <div class="mdl-modal-wrap">
            <button type="button" class="mdl-modal-close" data-icon="close_large_dark" aria-label="창닫기" onclick="OcareUI.modal.hide('NMMC_3_10L')"></button>
            <div class="mdl-modal-body">
                <div class="mdl-subject">
                    <div class="mdl-subject-group">
                        <h1 class="mdl-subject-tit">오케어 베이커리란?</h1>
                        <p class="mdl-subject-txt">
                            내 성격유형을 쉽고 재미있게 확인할 수 있는 검사예요.<br>
                            간단한 자기보고식 검사 문항으로 내 성격과 닮은 빵을 알 수 있어요.
                        </p>
                    </div>
                </div>
                <div class="mdl-subject">
                    <div class="mdl-subject-group">
                        <h2 class="mdl-subject-tit">검사대상 및 문항</h2>
                        <ul class="mdl-bul-dot">
                            <li><div>어른이라면 누구나 검사할 수 있어요.</div></li>
                            <li><div>사고, 감정, 행동에 관한 질문 40개로 구성돼요.</div></li>
                            <li><div>검사시간은 5분 정도 걸려요.</div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mdl-modal-footer">
                <div class="mdl-btn-wrap">
                    <button type="button" class="mdl-btn" data-style="primary"><span>시작하기</span></button>
                </div>
                <button type="button" class="mdl-btn" data-style="btn-text"><span>다시 보지 않기</span></button>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .mdl-subject + .mdl-subject{margin-top: 4rem;}
    .mdl-bul-dot{margin-top: 1.6rem;}
</style>