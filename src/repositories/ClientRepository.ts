import { IClient, IClientRepository } from '../interface/interfaces';

export class ClientRepository implements IClientRepository {
    private clients: IClient[] = [];

    create(client: IClient): void {
        this.clients.push(client);
    }

    findById(id: string): IClient | undefined {
        return this.clients.find(client => client.id === id);
    }

    update(client: IClient): void {
        const index = this.clients.findIndex(c => c.id === client.id);
        if (index !== -1) {
            this.clients[index] = client;
        }
    }

    delete(id: string): void {
        this.clients = this.clients.filter(client => client.id !== id);
    }
}
