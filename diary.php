<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>保存確認画面</title>
</head>
<body>

<?php

$date = $_POST['date'];
$textarea = $_POST['textarea'];
 
$date = htmlspecialchars($date, ENT_QUOTES, 'UTF-8');
$textarea = htmlspecialchars($textarea, ENT_QUOTES, 'UTF-8');

if($date==''){
  print '日付を入力してください。<br>';
}else{
  print '日付：';
  print $date;
  print '<br>';
}

if($textarea==''){
  print '本文を入力してください。<br>';
}


if($date=='' || $textarea==''){
  print '<form>';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '</form>';
}else{
  print '日記を保存してよろしいですか？';
  print '<form method="post" action="diary_done.php">';
  print '<input type="hidden" name="date" value="'.$date.'">';
  print '<input type="hidden" name="textarea" value="'.$textarea.'">';
  print '<br>';
  print '<input type="button" onclick="history.back()" value="戻る">';
  print '<input type="submit" value="OK">';
  print '</form>';
}


?>

  
</body>
</html>

