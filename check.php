<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>確認画面</title>
</head>
<body>
  <?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $textarea = $_POST['textarea'];

  $name = htmlspecialchars($name);
  $email = htmlspecialchars($email);
  $textarea = htmlspecialchars($textarea);

if($name==''){
  print '名前が入力されていません。<br>';
}

if($email==''){
  print 'メールアドレスが入力されていません。<br>';
}

if($textarea==''){
  print 'お問い合わせ内容が入力されていません。<br>';
}

if($name=='' || $email=='' || $textarea==''){

  print '<form>';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '</form>';

}else{

  print 'この内容で送信してよろしいですか？<br><br>';
  print 'お名前:';
  print $name;
  print '<br>メールアドレス:';
  print $email;
  print '<br>お問い合わせ内容:';
  print $textarea;
  print '<br><br>';
  print '<form method="post" action="thank.php">';
  print '<input name="name" type="hidden" value="'.$name.'">';
  print '<input name="email" type="hidden" value="'.$email.'">';
  print '<input name="textarea" type="hidden" value="'.$textarea.'">';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '<input type="submit" value="OK">';
  print '</form>';

}




?>
</body>
</html>