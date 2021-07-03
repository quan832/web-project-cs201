<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost:8000/api/manageUser/register.php");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// database connection
include_once '../../config/Database.php';
include_once '../../models/User/User.php';

// get database connection
$database = new Database();
$db = $database->connect();

// instantiate user object
$user = new User($db);

// get data from the input form 
$data = json_decode(file_get_contents("php://input"));

// set value for the properties
$user->username = $data->username;  
$user->user_email = $data->email;
$user->user_phone = $data->phone;
$user->user_password = $data->pwd1; 

// $pwd2 = $data->pwd2;

if (
    !empty($user->username) &&
    !empty($user->user_email) &&
    !empty($user->user_password) &&
    !empty($user->user_phone) &&
    $user->create()
) {
    // set response code
    http_response_code(200);

    // display message: user was created
    echo json_encode(array("message" => "User was created."));
}

// message if unable to create user
else {

    // set response code
    http_response_code(400);

    // display message: unable to create user
    echo json_encode(array("message" => "Unable to create user."));
}
