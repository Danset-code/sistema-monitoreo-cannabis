package com.proyecto.principal;

import com.proyecto.dao.CultivoDAO;
import com.proyecto.modelo.Cultivo;

public class Main {

    public static void main(String[] args) {

        CultivoDAO cultivoDAO = new CultivoDAO();

        Cultivo cultivo = new Cultivo(
                "Lote Norte",
                "Medicinal CBD",
                "Invernadero 1",
                "2026-06-24");

        cultivoDAO.insertar(cultivo);

        cultivoDAO.consultar();

        cultivoDAO.actualizar(
                1,
                "Lote Principal");

        cultivoDAO.eliminar(1);
    }
}