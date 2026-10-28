// UI 스킨: GPT가 만든 틀 이미지(web/assets/ui/)가 있으면 씌운다. 없으면 기본 CSS 모양 그대로.
// 이미지마다 #stage에 skin-<이름> 클래스와 --ui-<이름> 변수를 붙이고, 실제 모양은 game.css의 "UI 스킨" 부분이 정한다.
// 대사창·이름표·단추·창 틀은 이미지 대신 원고 테마 CSS로 통일한다(이미지 틀은 스크린톤 무늬가 찍혀 나오고, 눌렀을 때 모양이 튀었다).
// 이미지로 쓰는 건 HUD 아이콘과 반박 컷인 배경뿐.
['ui_icons', 'ui_objection'].forEach((id) => {
  const img = new Image();
  img.onload = () => {
    const st = document.getElementById('stage');
    const name = id.slice(3);
    st.style.setProperty(`--ui-${name}`, `url(${img.src})`);
    st.classList.add(`skin-${name}`);
  };
  img.src = `assets/ui/${id}.png`;
});
