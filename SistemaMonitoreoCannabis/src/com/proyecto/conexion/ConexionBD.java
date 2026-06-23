package com.proyecto.conexion;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionBD {

    private static final String URL =
            jdbcmysqllocalhost3306monitoreo_cannabis;

    private static final String USUARIO = root;

    private static final String PASSWORD = "";

    public static Connection obtenerConexion() {

        try {

            Class.forName(com.mysql.cj.jdbc.Driver);

            return DriverManager.getConnection(
                    URL,
                    USUARIO,
                    PASSWORD);

        } catch (Exception e) {

            System.out.println(
                    "Error de conexión: "
                            + e.getMessage());

            return null;
        }
    }
}