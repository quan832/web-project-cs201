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


// Note: Pass 5 fields for register in Postman
// For example:
/*
{
    "username" : "trong",
    "email" : "trong@gmail.com",
    "phone" : "0934129932",
    "pwd1" : "123456",
    "pwd2" : "123456"
}
*/


// set value for the properties
$user->username = $data->username;  
$user->user_email = $data->email;
$user->user_phone = $data->phone;
$user->user_password = $data->pwd1; 

$pwd2 = $data->pwd2;

$email_exists = $user->isEmailExists();

// No empty fields, pwd1 == pwd2 and email is not existed => Create a new user
if (!empty($user->username) && !empty($user->user_email) && !empty($user->user_password) && !empty($user->user_phone) && $email_exists == false && $user->user_password == $pwd2) {
    
    // create user if no errors
    $user->create();
    
    // set response code
    http_response_code(200);

    // display message: user was created
    echo json_encode(array("message" => "User was created."));

}
// Check errors: email is already existed and pwd1 != pwd2 
else {
    // set response code
    http_response_code(401);

    // Check if the email existed in database
    if ($email_exists) {
        $message_error = "Email is existed.";
        array_push($user->errors, $message_error);
    } 

    // check whether pwd1 equal pwd2
    if ($user->user_password != $pwd2) {
        $message_error = "Password 1 does not match with password 2.";
        array_push($user->errors, $message_error);
    }

    echo json_encode(array("error_messages:" => $user->errors));
}