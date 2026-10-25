// UI 스킨: GPT가 만든 틀 이미지(web/assets/ui/)가 있으면 씌운다. 없으면 기본 CSS 모양 그대로.
// 이미지마다 #stage에 skin-<이름> 클래스와 --ui-<이름> 변수를 붙이고, 실제 모양은 game.css의 "UI 스킨" 부분이 정한다.
['ui_textbox', 'ui_textbox_dark', 'ui_name', 'ui_button', 'ui_button_hot', 'ui_button_red', 'ui_panel', 'ui_icons', 'ui_objection'].forEach((id) => {
  const img = new Image();
  img.onload = () => {
    const st = document.getElementById('stage');
    const name = id.slice(3);
    st.style.setProperty(`--ui-${name}`, `url(${img.src})`);
    st.classList.add(`skin-${name}`);
  };
  img.src = `assets/ui/${id}.png`;
});
