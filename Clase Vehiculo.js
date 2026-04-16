Java:public abstract class Vehiculo {
    protected String placa;
    protected String marca;
    protected int velocidadMaxima;

    public Vehiculo(String placa, String marca, int velocidadMaxima) {
        this.placa = placa;
        this.marca = marca;
        this.velocidadMaxima = velocidadMaxima;
    }

    public abstract String mover();
    public abstract int calcularPeaje();

    @Override
    public String toString() {
        return "Placa: " + placa + ", Marca: " + marca + ", Vel. Max: " + velocidadMaxima + " km/h";
    }
}
