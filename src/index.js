// 画面表示時の処理
if (localStorage.getItem("loginParam")) {
  // ストレージ情報の取得
  const loginParam = JSON.parse(localStorage.getItem("loginParam"));

  // 入力フォームにストレージの値を設定
  document.getElementById("userId").value = loginParam.userId;
  document.getElementById("password").value = loginParam.password;

  // 削除するなら
  sessionStorage.clear();
  // or
  sessionStorage.removeItem("loginParam");
}

// ログインボタン押下処理
document.getElementById("login").onclick = () => {
  // フォームに入力された値を変数に格納
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  // オブジェクトの定義
  const loginParam = {
    userId: userId,
    password: password
  };

  // ストレージへ保存
  localStorage.setItem("loginParam", JSON.stringify(loginParam));

  // 動作確認のため再読み込み
  window.location.reload();
};
