export interface IClient {
    id: number;
    checkbox: boolean;
    showVehicles: boolean;
    firstName: string;
    lastName: string;
    middleInitial: string;
}

export class Client implements IClient {
    public id: number;
    public checkbox: boolean;
    public showVehicles: boolean;
    public firstName: string
    public lastName: string;
    public middleInitial: string;

    constructor(id: number, checkbox: boolean, showVehicles: boolean,
        firstName: string, lastName: string, middleInitial: string) {
            this.id = id;
            this.checkbox = checkbox;
            this.showVehicles = showVehicles;
            this.firstName = firstName;
            this.lastName = lastName;
            this.middleInitial = middleInitial;
    }
}
