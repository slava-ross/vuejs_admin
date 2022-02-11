<?php
$_POST = json_decode(file_get_contents('php://input'), true);
$file = "../../" . $_POST["name"]; // . ".html";

if (!file_exists($file)) {
    header("HTTP/1.0 404 Not Found");
} else {
    unlink($file);
}
