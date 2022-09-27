/**
 *
 *  현재 주소창 URL 복사
 *
 *  [script 작성 예]
 *  // 기본 alert 사용시
 *  window.copyLink()
 *
 *  // callback으로 alert 적용시
 *  window.copyLink(() => {
 *    alert("주소복사완료")
 *  })
 *
 */

window.copyLink = function (_alert) {
  navigator.clipboard.writeText(window.document.location.href).then(function () {
    if (_alert) _alert();
    else alert("URL이 복사되었습니다.");
  });
};
