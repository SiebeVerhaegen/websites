<?php
$studentemail = htmlspecialchars($_POST['studentemail']);
$onderwerp = htmlspecialchars($_POST['onderwerp']);
$inhoud = htmlspecialchars($_POST['inhoud']);
$headers[] = 'Vraag Portfolio';
$headers[] = "Naam: " + htmlspecialchars($_POST['naam']);
$headers[] = "E-mail: " + htmlspecialchars($_POST['email']);
// using mail function and returns boolean
$send = mail($studentemail, $onderwerp, $inhoud, implode("\r\n", $headers));
if ($send) {
    $response = "Mail sent successfully";
} else {
    $response = "Mail not sent";
}
echo json_encode($response);
?>