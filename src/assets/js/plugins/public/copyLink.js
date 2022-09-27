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
  let url = "";
  let textarea = document.createElement("textarea");

  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  if (_alert) _alert();
  else alert("URL이 복사되었습니다.");
};
