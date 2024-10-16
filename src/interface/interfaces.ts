export interface IVehicle {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
}
  
export interface IVehicleRepository {
    create(vehicle: IVehicle): void;
    findById(id: string): IVehicle | undefined;
    update(vehicle: IVehicle): void;
    delete(id: string): void;
    getAll(): IVehicle[]; 
}

  
export interface IClient {
    id: string;
    name: string;
    email: string;
    phone: string;
}
  
export interface IClientRepository {
    create(client: IClient): void;
    findById(id: string): IClient | undefined;
    update(client: IClient): void;
    delete(id: string): void;
}
  