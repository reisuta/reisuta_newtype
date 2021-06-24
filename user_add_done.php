<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新規登録完了</title>
</head>
<body>
<?php

try{

$name=$_POST['name'];
$pass=$_POST['pass'];

$name=htmlspecialchars($name,ENT_QUOTES,'UTF-8');
$pass=htmlspecialchars($pass,ENT_QUOTES,'UTF-8');

$dsn='mysql:dbname=;host=localhost;charset=utf8';
$user='';
$password='';
$dbh=new PDO($dsn, $user, $password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql='INSERT INTO      (name,password) VALUES (?,?)';
$stmt=$dbh->prepare($sql);
$data[]=$name;
$data[]=$pass;
$stmt->execute($data);

$dbh=null;

print $name;
print 'さんを追加しました。<br>';

}catch(Exception $e){

print 'ただいま障害により大変ご迷惑をおかけしております。';
exit();


}

?>



<a href="index.php">ホーム画面へ</a>
</body>
</html>