<?php
$response = '';
$contactForm = array();

if(isset($_REQUEST['contactForm'])) {
    $contactForm  = (array)json_decode($_REQUEST['contactForm']);

    $message = $contactForm['message'] 
            . PHP_EOL . "Email " . $contactForm['email']
            . PHP_EOL . "Name: " . $contactForm['name'];
    
    if(mail('info@websail.net', 'Contact form mesage', $message)) {
        $response['message'] = "Mail sent!";
        http_response_code(200);
    } else {
        $response['message'] = 'Mail sending failed. Please try again!';
        http_response_code(500);
    }    
} else {
    $response['message'] = "No data sent!";
    http_response_code(404);
}

echo json_encode($response);

