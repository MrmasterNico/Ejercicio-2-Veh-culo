public class Carro extends Vehiculo {
    private int numPuertas;

    public Carro(String placa, String marca, int velocidadMaxima, int numPuertas) {
        super(placa, marca, velocidadMaxima);
        this.numPuertas = numPuertas;
    }

    @Override
    public String mover() {
        return "El carro se desplaza de forma estable sobre 4 ruedas.";
    }

    @Override
    public int calcularPeaje() {
        return 10000; // Tarifa fija para carros
    }

    @Override
    public String toString() {
        return super.toString() + ", Puertas: " + numPuertas;
    }
}
