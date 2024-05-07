<?php 

class Ensina {
    private string $idProfessor;
    private string $nomeTurma;

    /**
     * Get the value of nomeTurma
     */ 
    public function getNomeTurma()
    {
        return $this->nomeTurma;
    }

    /**
     * Set the value of nomeTurma
     *
     * @return  self
     */ 
    public function setNomeTurma($nomeTurma)
    {
        $this->nomeTurma = $nomeTurma;

        return $this;
    }

    /**
     * Get the value of idProfessor
     */ 
    public function getIdProfessor()
    {
        return $this->idProfessor;
    }

    /**
     * Set the value of idProfessor
     *
     * @return  self
     */ 
    public function setIdProfessor($idProfessor)
    {
        $this->idProfessor = $idProfessor;

        return $this;
    }
}