import { Request, Response } from 'express';
import { ClientService } from '../service/ClientService';
import { IClient } from '../interface/interfaces';

export class ClientController {
  constructor(private service: ClientService) {}

  createClient(req: Request, res: Response): void {
    const client: IClient = req.body;
    this.service.addClient(client);
    res.status(201).send('Client added');
  }

  getClient(req: Request, res: Response): void {
    const id = req.params.id;
    const client = this.service.getClient(id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).send('Client not found');
    }
  }

  updateClient(req: Request, res: Response): void {
    const client: IClient = req.body;
    this.service.updateClient(client);
    res.status(200).send('Client updated');
  }

  deleteClient(req: Request, res: Response): void {
    const id = req.params.id;
    this.service.removeClient(id);
    res.status(200).send('Client deleted');
  }
}
