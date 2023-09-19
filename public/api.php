<?php
  $balance = '';
  if( $curl = curl_init() ) {
    curl_setopt($curl, CURLOPT_URL, 'https://smsc.ru/sys/balance.php?login=a.machnov@mail.ru&psw=6depnSs4L!G8FEC');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $balance = curl_exec($curl);
    curl_close($curl);
  }
  if( $curl = curl_init() ) {
    //curl_setopt($curl, CURLOPT_URL, 'https://smsc.ru/sys/send.php?login=a.machnov@mail.ru&psw=6depnSs4L!G8FEC&phones=79950785910&mes='.$_GET['mes']);
    curl_setopt($curl, CURLOPT_URL, 'https://smsc.ru/sys/send.php?login=a.machnov@mail.ru&psw=6depnSs4L!G8FEC&phones=79526226167&mes='.$_GET['mes'].' Баланс-'.$balance);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $out = curl_exec($curl);
    //$info = curl_getinfo($curl);
    //var_dump($info);
    echo $out;
    curl_close($curl);
  }
?>
