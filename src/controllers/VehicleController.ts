import { Request, Response } from 'express';
import { VehicleService } from '../service/VehicleService';

export class VehicleController {
  constructor(private service: VehicleService) {}

  createVehicle(req: Request, res: Response): void {
    const vehicle = req.body; 
    this.service.addVehicle(vehicle);
    res.status(201).send('Vehicle added'); 
  }

  getVehicle(req: Request, res: Response): void {
    const id = req.params.id; 
    const vehicle = this.service.getVehicle(id); 
    if (vehicle) {
      res.status(200).json(vehicle); 
    } else {
      res.status(404).send('Vehicle not found');
    }
  }

  getAllVehicles(req: Request, res: Response): void {
    const vehicles = this.service.getAllVehicles(); 
    res.status(200).json(vehicles);
  }
}
