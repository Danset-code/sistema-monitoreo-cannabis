package com.proyecto.dao;

import com.proyecto.conexion.ConexionBD;
import com.proyecto.modelo.Cultivo;

import java.sql.*;

public class CultivoDAO {

    public void insertar(Cultivo cultivo) {

        String sql = "INSERT INTO cultivo(nombre,variedad,ubicacion,fecha_siembra) VALUES(?,?,?,?)";

        try (Connection conexion = ConexionBD.obtenerConexion();

                PreparedStatement sentencia = conexion.prepareStatement(sql)) {

            sentencia.setString(
                    1,
                    cultivo.getNombre());

            sentencia.setString(
                    2,
                    cultivo.getVariedad());

            sentencia.setString(
                    3,
                    cultivo.getUbicacion());

            sentencia.setString(
                    4,
                    cultivo.getFechaSiembra());

            sentencia.executeUpdate();

            System.out.println(
                    "Registro insertado correctamente");

        } catch (Exception e) {

            e.printStackTrace();
        }
    }

    public void consultar() {

        String sql = "SELECT * FROM cultivo";

        try (Connection conexion = ConexionBD.obtenerConexion();

                Statement sentencia = conexion.createStatement();

                ResultSet resultado = sentencia.executeQuery(sql)) {

            while (resultado.next()) {

                System.out.println(
                        resultado.getInt("id")
                                + " - "
                                + resultado.getString("nombre"));
            }

        } catch (Exception e) {

            e.printStackTrace();
        }
    }

    public void actualizar(
            int id,
            String nombre) {

        String sql = "UPDATE cultivo SET nombre=? WHERE id=?";

        try (Connection conexion = ConexionBD.obtenerConexion();

                PreparedStatement sentencia = conexion.prepareStatement(sql)) {

            sentencia.setString(
                    1,
                    nombre);

            sentencia.setInt(
                    2,
                    id);

            sentencia.executeUpdate();

            System.out.println(
                    "Registro actualizado");

        } catch (Exception e) {

            e.printStackTrace();
        }
    }

    public void eliminar(int id) {

        String sql = "DELETE FROM cultivo WHERE id=?";

        try (Connection conexion = ConexionBD.obtenerConexion();

                PreparedStatement sentencia = conexion.prepareStatement(sql)) {

            sentencia.setInt(
                    1,
                    id);

            sentencia.executeUpdate();

            System.out.println(
                    "Registro eliminado");

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}