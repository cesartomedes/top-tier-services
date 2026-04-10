<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuración
$to_email = "Contact@TTHservices.com";
$from_email = "noreply@tthservices.com";

// Recibir datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

$form_type = $data['form_type'] ?? '';
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';
$address = $data['address'] ?? '';
$preferred_date = $data['preferredDate'] ?? '';
$preferred_time = $data['preferredTime'] ?? '';

// Construir el asunto según el tipo de formulario
switch ($form_type) {
    case 'contact':
        $subject = "Contact Form - Top Tier Home Services";
        $body = "New contact form submission:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Phone: $phone\n";
        $body .= "Message:\n$message\n";
        break;
        
    case 'inspection':
        $subject = "Free Inspection Request - Top Tier Home Services";
        $body = "New inspection request:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Phone: $phone\n";
        $body .= "Address: $address\n";
        $body .= "Preferred Date: $preferred_date\n";
        $body .= "Preferred Time: $preferred_time\n";
        $body .= "Additional Info:\n$message\n";
        break;
        
    case 'quote':
        $subject = "Quote Request - Top Tier Home Services";
        $body = "New quote request:\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Phone: $phone\n";
        $body .= "Project Details:\n$message\n";
        break;
        
    default:
        echo json_encode(['success' => false, 'message' => 'Invalid form type']);
        exit;
}

$headers = "From: $from_email\r\n";
$headers .= "Reply-To: $email\r\n";

// Enviar email
if (mail($to_email, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>