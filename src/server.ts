// Corrección en el archivo server.ts
import express from 'express';
import { VehicleController } from './controllers/VehicleController'; 
import { ClientController } from './controllers/ClientController';

import { MongoVehicleRepository } from './repositories/MongoVehicleRepository';
import { PostgresVehicleRepository } from './repositories/PostgresVehicleRepository';
import { VehicleService } from './service/VehicleService';

import { ClientRepository } from './repositories/ClientRepository';
import { ClientService } from './service/ClientService';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
  }

  private routes(): void {

    //const vehicleRepository = new MongoVehicleRepository(); para usar Mongo simulado
    const vehicleRepository = new PostgresVehicleRepository(); 
    const vehicleService = new VehicleService(vehicleRepository); 
    const vehicleController = new VehicleController(vehicleService); 

    const clientRepository = new ClientRepository(); 
    const clientService = new ClientService(clientRepository); 
    const clientController = new ClientController(clientService); 

    this.app.post('/vehicles', vehicleController.createVehicle.bind(vehicleController));
    this.app.get('/vehicles/:id', vehicleController.getVehicle.bind(vehicleController));
    this.app.get('/vehicles', vehicleController.getAllVehicles.bind(vehicleController));

    this.app.post('/clients', clientController.createClient.bind(clientController));
    this.app.get('/clients/:id', clientController.getClient.bind(clientController));
    this.app.put('/clients', clientController.updateClient.bind(clientController));
    this.app.delete('/clients/:id', clientController.deleteClient.bind(clientController));
  }

  public start(): void {
    this.app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  }
}

const server = new Server();
server.start();
