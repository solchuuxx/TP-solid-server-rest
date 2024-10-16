import { IClient, IClientRepository } from '../interface/interfaces';

export class ClientService {
    constructor(private repository: IClientRepository) {}
  
    addClient(client: IClient): void {
      this.repository.create(client);
    }
  
    getClient(id: string): IClient | undefined {
      return this.repository.findById(id);
    }
  
    updateClient(client: IClient): void {
      this.repository.update(client);
    }
  
    removeClient(id: string): void {
      this.repository.delete(id);
    }
}
  