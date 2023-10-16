<?php
$studentemail = htmlspecialchars($_POST['to']);
$subject = htmlspecialchars($_POST['subject']);
$message= htmlspecialchars($_POST['message']);
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'From: Name-here <from@yourdomain.be>';
$headers[] = 'Cc: ccmail@yourdomain.be';
// using mail function and returns boolean
$send = mail($studentemail, $subject, $txt, implode("\r\n", $headers));
if ($send) {
    $response = "Mail sent successfully";
} else {
    $response = "Mail not sent";
}
exit($response);
echo json_encode($response);
?>