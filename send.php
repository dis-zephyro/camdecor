<?
    $to  = "steellive@yandex.ru";
    $subject = "Сообщение с сайта autoteplo";
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $auto = htmlspecialchars($_POST['auto']);

    $message = "<p>Имя: {$name},</p> <p>Телефон: {$phone},</p> <p>сообщение: {$auto}<p/>";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
?>