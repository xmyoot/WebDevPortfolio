<?php
require 'PHPMailer/PHPMailerAutoload.php';

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

$companyName = $_POST['companyName'];
$occup = $_POST['occupation'];
$email = $_POST['email'];
$domain = $_POST['domain'];
$purpose = $_POST['purpose'];
$demo = $_POST['demo'];
$service = $_POST['service'];
$include = $_POST['include'];
$keywords = $_POST['keywords'];
$assets = $_POST['assets'];
$update = $_POST['update'];
$additional = $_POST['additional'];
$train = $_POST['training'];
$budget = $_POST['budget'];
$deadline = $_POST['deadline'];

$message = ("PROJECT FORM \n" . "Name: " . $companyName . "\nThis company does this: " . $occup . "\nEmail: " . $email . "\nDomain: " . $domain . "\nPurpose of Site: " . $purpose . "\nDemographics: " . $demo . "\nWhy clients go to this site: " . $service . "\nMust Include: " . $include . "\nKeywords: " . $keywords . "\nAssets provided: " . $assets . "\nUpdated by: " . $update . "\nAdditional Services: " . $additional . "\nTraining required: " . $train . "\nBudget: " . $budget . "\nDeadline: " . $deadline);

$mail->Subject = "Project Submitted for: " . $companyName;
$mail->Body    = $message;
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