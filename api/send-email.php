<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Incluir PHPMailer
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Configuración del correo destino
$to_email = "cesartomedes@gmail.com";  // 👈 PARA PRUEBA

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

// Construir el cuerpo del mensaje
if ($form_type === 'inspection') {
    $subject = "📋 FREE INSPECTION REQUEST - Top Tier Home Services";
    $body = "═══════════════════════════════════════\n";
    $body .= "     NEW INSPECTION REQUEST\n";
    $body .= "═══════════════════════════════════════\n\n";
    $body .= "📌 CUSTOMER INFORMATION:\n";
    $body .= "────────────────────────────────────────\n";
    $body .= "Full Name:    $name\n";
    $body .= "Email:        $email\n";
    $body .= "Phone:        $phone\n";
    $body .= "Address:      $address\n\n";
    $body .= "📅 PREFERRED SCHEDULE:\n";
    $body .= "────────────────────────────────────────\n";
    $body .= "Date:         $preferred_date\n";
    $body .= "Time:         $preferred_time\n\n";
    $body .= "📝 ADDITIONAL INFORMATION:\n";
    $body .= "────────────────────────────────────────\n";
    $body .= "$message\n\n";
    $body .= "═══════════════════════════════════════\n";
    $body .= "Action Required: Contact customer within 24 hours\n";
    $body .= "═══════════════════════════════════════";
    
} elseif ($form_type === 'contact') {
    $subject = "📧 CONTACT FORM - Top Tier Home Services";
    $body = "New contact form submission:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";
    
} elseif ($form_type === 'quote') {
    $subject = "💰 QUOTE REQUEST - Top Tier Home Services";
    $body = "New quote request:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Project Details:\n$message\n";
    
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid form type']);
    exit;
}

// Configurar PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP de GoDaddy (VERSIÓN CORRECTA)
    $mail->isSMTP();
    $mail->Host       = 'localhost';  // 👈 CAMBIADO - GoDaddy usa localhost
    $mail->SMTPAuth   = false;        // 👈 CAMBIADO - No requiere autenticación
    $mail->Port       = 25;           // 👈 Puerto 25 para localhost
    
    // Remitente y destinatario
    $mail->setFrom('noreply@tthservices.com', 'Top Tier Home Services');
    $mail->addAddress($to_email);
    $mail->addReplyTo($email, $name);
    
    // Contenido
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo]);
}
?>