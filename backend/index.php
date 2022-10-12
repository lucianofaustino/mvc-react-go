<?php

require __DIR__.'/vendor/autoload.php';


use Src\Controllers\Crud;


$teste = new Crud;

$query = "null,'Shampoo Header and Shoulders'";

$teste->Insert(null,'Shampoo Header and Shoulders');

echo $teste->erro['response'];