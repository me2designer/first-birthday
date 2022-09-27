/**
 *
 * 스크롤 방향 가져오기
 *
 * [script 작성 예]
 * window.getScrollDirection({
 *    scrollUp() {
 *       // callback
 *    },
 *    scrollDown(_args) {
 *       // callback
 *    },
 *  });
 *
 */

import "./public/getScrollDirection";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 * window resize event
 *
 * [script 작성 예]
 * window.onLoadResize({
 *    callback() {
 *       //callback
 *     },
 *   });
 *
 */

import "./public/onLoadResize";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/**
 *
 *  body scroll lock/unlock
 *
 *  [script 작성 예]
 *  // body 스크롤을 막을 때는
 *  window.lockBody();
 *
 *  // body 스크롤을 풀 때는
 *  window.unlockBody();
 *
 */

import "./public/lockBody";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

import "./public/fitContainer";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

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

import "./public/copyLink";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
