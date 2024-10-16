import { IVehicle, IVehicleRepository } from '../interface/interfaces';

export class VehicleService {
    protected repository: IVehicleRepository; 

    constructor(repository: IVehicleRepository) {
        this.repository = repository;
    }

    addVehicle(vehicle: IVehicle): void {
        this.repository.create(vehicle);
    }

    getVehicle(id: string): IVehicle | undefined {
        return this.repository.findById(id);
    }

    getAllVehicles(): IVehicle[] {
        return this.repository.getAll(); 
    }
}
