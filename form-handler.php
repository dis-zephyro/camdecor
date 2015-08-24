<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $quest = $_POST['quest'];
    $art = $_POST['art'];
	
    require 'class.phpmailer.php';
    $thm = "Вам отправлено сообщение с " . $_SERVER['SERVER_NAME'];
    $msg = "Имя: $name<br/>";
    if(isset($phone)){$msg .= "Телефон: $phone <br/>";}
	if(isset($email)){$msg .= "Email: $email <br/>";}
    if(isset($quest)){$msg .= "Вопрос: $quest <br/>";}
    if(isset($art)){$msg .= "Артикус: $art <br/>";}


    $mail = new PHPMailer();
    $mail->From = 'noreply@'. $_SERVER['SERVER_NAME']; // от кого
    $mail->FromName = $_SERVER['SERVER_NAME']; // от кого
    $mail->AddAddress('kamdekor@mail.ru', ''); // кому - адрес, Имя

    $mail->IsHTML(true); // выставляем формат письма HTML
    $mail->Subject = $thm; // тема письма
    $mail->Body = $msg;

    if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);

    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}
?>