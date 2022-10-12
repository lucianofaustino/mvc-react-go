<?php

namespace Src\Database;

require ('../config.php');

use PDO;
use PDOException;
use DatabaseDatabase;

class Database {
    
    private static $conn;


    public static function Connect() {
        if(self::$conn == null) {
            try {
                self::$conn = new PDO(DBDRIVE.':host='.DBHOST.';dbname='.DBNAME.';charset=utf8mb4',DBUSER, DBPASS);

                self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            } catch (PDOException $erro) {
                echo "Falha ao conectar com o banco de dados: ERRO->".$erro->getMessage();
            }
        }

        return self::$conn;
    }

}
