<?php
require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailtrap.io';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'f0910726302f12';                 // SMTP username
$mail->Password = '86061e3400435b';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 2525;                                    // TCP port to connect to

$mail->setFrom('noreply@smilingenius.com', 'Mailer');
$mail->addAddress('test@test.com', 'User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

   // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$website = $_POST['website'];
$message = $_POST['message'];

$mail->Subject = $subject . "-" . $email;
$mail->Body    = "In regards to " . $website . ", " . $name . " said: " . $message;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
  http_response_code(500);
  echo "Message failed to send!";
  exit;
} else {
  http_response_code(200);
  echo "Message was sent!";
  exit;
}
?>
