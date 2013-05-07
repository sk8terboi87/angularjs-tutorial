<?php
// header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: content-type,x-requested-with');
header('Access-Control-Allow-Methods: PUT');
$test = array(
	'id' => '1',
	'name' => 'kitty',
	'value' => 'meow'
);

if($_SERVER['REQUEST_METHOD'] == 'PUT') {
	sleep(5);
}
echo json_encode($test);
exit;