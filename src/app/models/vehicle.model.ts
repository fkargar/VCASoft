export interface IVehicle {
    vehicleId: number;
    clientId: number;
    make: string;
    model: string;
}

export class Vehicle implements IVehicle {
    public vehicleId: number;
    public clientId: number;
    public make: string;
    public model: string;

    constructor(vehicleId: number, clientId: number, make: string, model: string) {
        this.vehicleId = vehicleId;
        this.clientId = clientId;
        this.make = make;
        this.model = model;
    }
}
