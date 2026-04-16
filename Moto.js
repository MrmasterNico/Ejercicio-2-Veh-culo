public class Moto extends Vehiculo {
    private String tipo;

    public Moto(String placa, String marca, int velocidadMaxima, String tipo) {
        super(placa, marca, velocidadMaxima);
        this.tipo = tipo;
    }

    @Override
    public String mover() {
        return "La moto se desplaza con agilidad entre el tráfico.";
    }

    @Override
    public int calcularPeaje() {
        return 5000; // Tarifa reducida para motos
    }

    @Override
    public String toString() {
        return super.toString() + ", Tipo: " + tipo;
    }
}
