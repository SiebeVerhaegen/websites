<?php
$studentemail = htmlspecialchars($_POST['studentemail']);
$onderwerp = htmlspecialchars($_POST['onderwerp']);
$inhoud = htmlspecialchars($_POST['inhoud']);
$voornaam = htmlspecialchars($_POST['voornaam']);
$familienaam = htmlspecialchars($_POST['familienaam']);
$email = htmlspecialchars($_POST['email']);
$volledigeInhoud = "";
if (isset($_POST['checkList'])) {
    $checkList = $_POST['checkList'];
    $volledigeInhoud += "{$checkList}\n";
}
$volledigeInhoud += "Naam: {$voornaam} {$familienaam}\nE-mail: {$email}\n\n{$inhoud}";

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=iso-8859-1';
$headers[] = 'From: Siebe <services@tm-statweb.be>';
// using mail function and returns boolean
$send = mail($studentemail, $onderwerp, $volledigeInhoud, implode("\r\n", $headers));
if ($send) {
    $response = "Mail sent successfully";
} else {
    $response = "Mail not sent";
}
echo json_encode($response);
?>