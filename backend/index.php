<?php

require __DIR__.'/vendor/autoload.php';


use Src\Controllers\Crud;

$response['Method'] = 'POST';
$response['Header'] = 'produto';


if(isset($_POST['produto'])) {
    $table = $_POST['produto'];
    $query = "null,";
    $query .= "'".$_POST['nome']."',";
    $query .= $_POST['quantidade'];
    $request = new Crud;
    $request->Insert($table,$query);

    $response = $request->erro;

}

echo json_encode($response);

