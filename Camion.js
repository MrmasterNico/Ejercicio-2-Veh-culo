public class Camion extends Vehiculo {
    private double capacidadCarga;

    public Camion(String placa, String marca, int velocidadMaxima, double capacidadCarga) {
        super(placa, marca, velocidadMaxima);
        this.capacidadCarga = capacidadCarga;
    }

    @Override
    public String mover() {
        return "El camión se desplaza lentamente transportando carga pesada.";
    }

    @Override
    public int calcularPeaje() {
        return 25000; // Tarifa alta por ejes/carga
    }

    @Override
    public String toString() {
        return super.toString() + ", Capacidad Carga: " + capacidadCarga + " toneladas";
    }
}
