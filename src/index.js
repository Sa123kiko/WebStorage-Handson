//画面表示の処理
if (localStorage.getItem("loginParam")) {
  //ストレージ情報の取得
  const loginParam = JSON.parse(localStorage.getItem("loginParam"));
  //入力フォームにストレージの値を設定
  document.getElementById("userId").value = localStorage.getItem("userId");
  document.getElementById("password").value = localStorage.getItem("password");
}

document.getElementById("login").onclick = () => {
  //フォームに入力された値を変数に格納
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  //オブジェクトの定義
  const loginParam = {
    userId: userId,
    password: password
  };

  //ストレージへ保存
  localStorage.setItem("loginParam", JSON.stringify(loginParam));

  //動作確認のため再読込
  window.location.reload();
};
