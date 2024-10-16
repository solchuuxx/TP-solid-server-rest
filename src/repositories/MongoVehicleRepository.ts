import { IVehicle, IVehicleRepository } from '../interface/interfaces';
import fs from 'fs';
import path from 'path';

export class MongoVehicleRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];
    private filePath: string;

    constructor() {
        this.filePath = path.join(__dirname, '../models/vehicles.json');
        this.vehicles = this.loadVehicles(); 
    }

    private loadVehicles(): IVehicle[] {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data) || [];
        }
        return [];
    }

    private saveVehicles(): void {
        fs.writeFileSync(this.filePath, JSON.stringify(this.vehicles, null, 2));
    }

    create(vehicle: IVehicle): void {
        this.vehicles.push(vehicle);
        this.saveVehicles();
    }

    findById(id: string): IVehicle | undefined {
        return this.vehicles.find(vehicle => vehicle.id === id);
    }

    update(vehicle: IVehicle): void {
        const index = this.vehicles.findIndex(v => v.id === vehicle.id);
        if (index !== -1) {
            this.vehicles[index] = vehicle;
            this.saveVehicles(); 
        }
    }

    delete(id: string): void {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        this.saveVehicles();
    }

    getAll(): IVehicle[] { 
        return this.vehicles; 
    }
}
