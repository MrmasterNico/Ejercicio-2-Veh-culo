 import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Vehiculo> flota = new ArrayList<>();

        Vehiculo miCarro = new Carro("ABC-123", "Mazda", 220, 4);
        Vehiculo miMoto = new Moto("XYZ-789", "Yamaha", 180, "Deportiva");
        Vehiculo miCamion = new Camion("TRK-456", "Volvo", 110, 15.5);

        
        flota.add(miCarro);
        flota.add(miMoto);
        flota.add(miCamion);

      
        System.out.println("--- REPORTE DE GESTIÓN DE VEHÍCULOS ---");
        
    }for (Vehiculo v : flota) {
            System.out.println("---------------------------------------");
            System.out.println("Datos: " + v.toString());
            
      
            System.out.println("Movimiento: " + v.mover());
            System.out.println("Peaje a pagar: $" + v.calcularPeaje());
        }
        
        System.out.println("---------------------------------------");
    }
}
