<?php
error_reporting(E_ALL | E_STRICT);
header("Access-Control-Allow-Origin: *");
require('UploadHandler.php');
$upload_handler = new UploadHandler();
exit;