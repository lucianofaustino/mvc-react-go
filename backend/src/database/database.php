<?php

namespace Src\Database;

use PDO;
use PDOException;
use DatabaseDatabase;

class Database {
    
    private static $conn;


    public static function Connect() {
        if(self::$conn == null) {
            try {
                self::$conn = new PDO('mysql:host=localhost;dbname=dblugalog;charset=utf8mb4','root', '');

                self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            } catch (PDOException $erro) {
                echo "Falha ao conectar com o banco de dados: ERRO->".$erro->getMessage();
            }
        }

        return self::$conn;
    }

}
