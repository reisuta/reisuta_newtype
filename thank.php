<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問い合わせありがとうございます</title>
</head>
<body>
<?php
try{
  $dsn='mysql:dbname=;host=localhost';
  $user='';
  $password='';
  $dbh=new PDO($dsn,$user,$password);
  $dbh->query('SET NAMES utf8');

  $name = $_POST['name'];
  $email = $_POST['email'];
  $textarea = $_POST['textarea'];

  $name = htmlspecialchars($name);
  $email = htmlspecialchars($email);
  $textarea = htmlspecialchars($textarea);

  print $name;
  print '様<br>';
  print 'お問い合わせありがとうございます。<br>';
  print $email;
  print 'にメールを送信しましたのでご確認ください。';

  $mail_sub='お問い合わせいただきありがとうございます。';
  $mail_body=$name."様_¥nお問い合わせいただきありがとうございます。¥nいただいたご意見は、今後のサービス改善の参考にさせていただきます。¥nこのメールは自動送信ですので、お問い合わせへのご対応はのちほど返信させていただきます。¥n何卒よろしくお願いします。";
  $mail_body=html_entity_decode($mail_body,ENT_QUOTES,"UTF-8");
  $mail_head='From:';
  mb_language('Japanese');
  mb_internal_encoding("UTF-8");
  mb_send_mail($email, $mail_sub, $mail_body, $mail_head);

  $sql ='INSERT INTO  (name,email,textarea) VALUES ("'.$name.'","'.$email.'","'.$textarea.'")';
  $stmt = $dbh->prepare($sql);
  $stmt->execute();
  $dbh = null;
}catch(Exception $e){
  print 'ただいま障害により繋がりにくい状態です。時間をおいて、再度お試しください。';
}

?>
<br><br>
<a href="index.html">ホームへ戻る</a>
</body>
</html>