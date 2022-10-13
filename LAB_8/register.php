<?php

function getPostParameter(string $paremeterName): ?string
{
    return isset($_POST[$paremeterName]) ? $_POST[$paremeterName] : null;
}

$email = getPostParameter("email");
$name = getPostParameter("name");
$profession = getPostParameter("profession");
$checkbox = getPostParameter("checkbox");

if ($checkbox)
{
    $answer = "Да";
}
else
{
    $answer = "Нет";
}
$email = strtolower($email);
$filename = ("C:/Users/Roman/Desktop/WEB-Development/Frontend_Lab/LAB_8/user/$email.txt");

$text = "Имя: $name \r\nEmail: $email \r\nДеятельность: $profession \r\nСогласие: $answer";

file_put_contents($filename, $text);

?>