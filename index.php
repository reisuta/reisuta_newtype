<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AT-typing!</title>
  <link rel="stylesheet" href="css/home.css">
</head>
<body>
  <h1 id="title">AT-typing！</h1>
  <a href="index.php" class="a_tag">ホーム</a> 
  <a href="pr.html" class="a_tag">練習メニュー</a>
  <a href="login.html" class="a_tag">ログイン</a>
  <br><br>
  <h2 id="typ">
    <a href="win.html" class="window">腕試しタイピングを始める</a>
    <a href="diary.html" class="window">日記でタイピングに慣れる</a>
    <br>
    <br>

    <p id="ques">お問い合わせはこちらからよろしくお願いします。</p>
    <form method="POST" action="check.php">
      <p id="name" class="font">お名前：</p><input name="name" type="text" style="width:300px"><br>
      <p class="font">メールアドレス：</p><input name="email" type="email" style="width:300px"><br>
      <!-- <p class="font">お問い合わせ項目：</p><input name="" type="text" style="width:300px"><br> -->
      <p class="font">お問い合わせ内容：</p><textarea name="textarea" style="width: 300px; height: 200px;"></textarea><br>
    <input id="submit" type="submit" value="送信">
    </form>


 
  </h2>
</body>
</html>
