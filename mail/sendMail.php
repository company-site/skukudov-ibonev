<?php
require '../vendor/PHPMailer/PHPMailerAutoload.php';

$response = '';
$contactForm = array();

if (isset($_REQUEST['contactForm'])) {
    $contactForm = (array)json_decode($_REQUEST['contactForm']);

    $message = $contactForm['message']
        . PHP_EOL . "Email " . $contactForm['email']
        . PHP_EOL . "Name: " . $contactForm['name']
        . PHP_EOL . "Company: " . $contactForm['company']
        . PHP_EOL . "Website: " . $contactForm['website'];

    $mail = new PHPMailer();

    $mail->From = $contactForm['email'];
    $mail->FromName = $contactForm['name'];
    $mail->addAddress('info@websail.net');
    $mail->Subject = 'Contact form message';
    $mail->Body = $contactForm['message'];

    if ($mail->send()) {
        $response['message'] = "Mail sent!";
        http_response_code(200);
    } else {
        error_log($mail->ErrorInfo);
        $response['message'] = 'Mail sending failed. Please try again!';
        http_response_code(500);
    }
} else {
    $response['message'] = "No data sent!";
    http_response_code(404);
}

echo json_encode($response);

