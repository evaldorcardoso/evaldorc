<?php

function spamcheck($field)
{
    // Sanitize e-mail address
    $field=filter_var($field, FILTER_SANITIZE_EMAIL);
    // Validate e-mail address
    if(filter_var($field, FILTER_VALIDATE_EMAIL))
        return TRUE;
    else
        return FALSE;
}

if (isset($_POST["email"])){
    // Check if "from" email address is valid
    $mailcheck = spamcheck($_POST["email"]);
    if ($mailcheck==FALSE)
    {
        //EMAIL INVALIDO-erro2
        echo 'erro2';
    }
    else
    {
		require 'php-mailer/PHPMailerAutoload.php';
		//Create a new PHPMailer instance
		$mail = new PHPMailer;
		//Set who the message is to be sent from
		$mail->setFrom($_POST['email'], $_POST['nome']);
		$mail->From = $_POST['email'];
		//Set an alternative reply-to address
		$mail->addReplyTo($_POST['email'], $_POST['nome']);
		//Set who the message is to be sent to
		$mail->addAddress('evaldorcardoso@outlook.com', $_POST['nome']);
		//Set the subject line
		$mail->Subject = 'Mensagem de alguem no site evaldorc.com.br';
		//Read an HTML message body from an external file, convert referenced images to embedded,
		//convert HTML into a basic plain-text alternative body
		$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
		//Replace the plain text body with one created manually
		$nome=$_POST["nome"];
		//$message = $_POST["mensagem"];
		$message = "<p><br>Nome: ".$nome."<p>Email: ".$_POST['email']."<p>Mensagem: ".$_POST['mensagem'];
		$mail->Body = $message;
		//Attach an image file
		//$mail->addAttachment('images/phpmailer_mini.png');

		//send the message, check for errors
		if (!$mail->send()) {
		    echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
		    echo "OK";
		}
	}
}