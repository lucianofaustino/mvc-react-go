<?php

namespace Src\Controllers;


require_once('../config.php');

use Src\Database\Database;
use PDO;
use Src\Controllers\Crud as ControllersCrud;

//Classe responsável pela operações básicas do CRUD
class Crud {

    protected string $table;
    protected string $id;
    public array $erro;

    public function Insert($table,$query) {

      $sql = "INSERT INTO $table VALUES ($query)";

        $sql = Database::Connect()->prepare($sql);
        $sql->execute();

        if(isset($sql->erro)) {
            $this->erro['erro'] = true;
            $this->erro['response'] = 'Erro ao cadastrar'.$sql->erro;
        } else {
            $this->erro['erro'] = false;
            $this->erro['response'] = 'Cadastrado com sucesso';
        }

        return $this->erro;

    }

    public function SelectAll($table) {
        $query = "SELECT * FROM $table";

        $query = Database::Connect()->prepare($query);
        $query->execute();

        $value = $query->fetchAll(PDO::FETCH_ASSOC);

        return $value;

    }

    public function SelectId($table,$id) {
        $sql = "SELECT * FROM $table WHERE id=$id";

        $sql = Database::Connect()->prepare($sql);
        $sql->execute();

        $response = $sql->fetch(PDO::FETCH_ASSOC);

       if(isset($response['id'])) {
            return $response;

        } else {
            return 'Dados não encontrados'; 
            
        }

    }

    public function Update($table,$query,$id) {

        $check = Crud::SelectId($table,$id);
        if (gettype($check) == 'string') {
            $this->erro['erro'] = true;
            $this->erro['response'] = 'Usuário não encontrado';
            
            die();
        }

        $sql = "UPDATE $table SET $query WHERE id = $id";

        $sql = Database::Connect()->prepare($sql);
        $sql->execute();

        if($sql->execute()) {
            $this->erro['erro'] = false;
            $this->erro['response'] = 'Dados atualizados com sucesso';
        } else {
            $this->erro['erro'] = true;
            $this->erro['response'] = 'Erro ao atualizar dados'.$sql->erro;
        }

        return $this->erro;
    }

    public function Delete($table,$id) {
        
        $sql = "DELETE FROM $table WHERE id=$id";

        $sql = Database::Connect()->prepare($sql);
        $sql->execute();

        if(!isset($sql->erro)) {
            $this->erro['erro'] = false;
            $this->erro['response'] = 'Dados excluidos com sucesso';
        } else {
            $this->erro['erro'] = true;
            $this->erro['response'] = 'Erro ao excluir dados'.$sql->erro;
        }

        return $this->erro;

    }



}