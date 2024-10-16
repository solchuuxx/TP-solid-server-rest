import { VehicleService } from "./VehicleService";

class DiscountVehicleService extends VehicleService {
    applyDiscount(id: string, discount: number): void {
        const vehicle = this.getVehicle(id);
        if (vehicle) {
            vehicle.price -= vehicle.price * discount;
            this.repository.update(vehicle); 
        }
    }
}
