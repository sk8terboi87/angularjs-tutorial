<?php
error_reporting(E_ALL | E_STRICT);
header("Access-Control-Allow-Origin: *");
require('UploadHandler.php');
$upload_handler = new UploadHandler();
/*
HERE IS YOUR CUSTOM DATA
$customData = json_decode($_POST['params'], true);
print_r($customData);
*/
exit;