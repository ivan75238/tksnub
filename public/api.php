<?php
  $balance = '';
  if( $curl = curl_init() ) {
    curl_setopt($curl, CURLOPT_URL, 'https://smsc.ru/sys/balance.php?login=a.machnov@mail.ru&psw=6depnSs4L!G8FEC');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $balance = curl_exec($curl);
    curl_close($curl);
  }
  if( $ch = curl_init() ) {
    $array = json_encode(array(
      'login'    => 'a.machnov@mail.ru',
      'psw' => '6depnSs4L!G8FEC',
      'phones' => '79950785910',
      'mes' => $_GET['mes'].' Баланс: '.$balance
    ));
    curl_setopt($ch, CURLOPT_URL,"https://smsc.ru/rest/send/");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $array);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec($ch);
    //var_dump($server_output);
    //echo $server_output;
    curl_close($ch);
  }
?>
