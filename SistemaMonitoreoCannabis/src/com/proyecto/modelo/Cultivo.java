package com.proyecto.modelo;

public class Cultivo {

    private int id;

    private String nombre;

    private String variedad;

    private String ubicacion;

    private String fechaSiembra;

    public Cultivo() {
    }

    public Cultivo(
            String nombre,
            String variedad,
            String ubicacion,
            String fechaSiembra) {

        this.nombre = nombre;
        this.variedad = variedad;
        this.ubicacion = ubicacion;
        this.fechaSiembra = fechaSiembra;
    }

    // Getters y Setters
}