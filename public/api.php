<?php
  if( $curl = curl_init() ) {
    curl_setopt($curl, CURLOPT_URL, 'https://smsc.ru/sys/send.php?login=a.machnov@mail.ru&psw=6depnSs4L!G8FEC&phones=+79086587883&mes='.$_POST['mes']);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $out = curl_exec($curl);
    echo $out;
    curl_close($curl);
  }
?>
