<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新規登録確認画面</title>
</head>
<body>
  
<?php

$name=$_POST['name'];
$pass=$_POST['pass'];
$pass2=$_POST['pass2'];

$name=htmlspecialchars($name,ENT_QUOTES,'UTF-8');
$pass=htmlspecialchars($pass,ENT_QUOTES,'UTF-8');
$pass2=htmlspecialchars($pass2,ENT_QUOTES,'UTF-8');

if($name==''){
  print 'ユーザ名が入力されていません。<br>';
}else{
  print 'ユーザ名：';
  print $name;
  print '<br>';
}

if($pass==''){
  print 'パスワードが入力されていません。<br>';
}

if($pass!=$pass2){
  print 'パスワードが一致しません。';
}

if($name=='' || $pass=='' || $pass!=$pass2){
  print '<form>';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '</form>';
}else{
  $pass=md5($pass);
  // パスワードハッシュの書き方もある。verifyで認証必要。
  // $pass=password_hash($pass, PASSWORD_DEFAULT);
  print '<form method="post" action="user_adddone.php">';
  print '<input type="hidden" name="name" value="'.$name.'">';
  print '<input type="hidden" name="pass" value="'.$pass.'">';
  print '<br>';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '<input type="submit" value="OK">';
  print '</form>';
}



?>

</body>
</html>