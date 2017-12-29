import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Client } from '../models/client.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
// import { ClientComponent } from '../client/client.component';
// import { VehicleComponent } from '../vehicle/vehicle.component';

@Injectable()
export class VehicleService {
    private _clientUrl = 'http://localhost:9000/client/';
    private _vehicleUrl = 'http://localhost:9000/vehicle/';
    private _testUrl: string;

    errorMessage: string;

    constructor(private _http: HttpClient) {

    }

    // client1 = new Client(1, false, false, "Afshin", "Kargar", "");
    // client2 = new Client(2, false, false, "Farshad", "Kargar", "");

    clientData: Client[] = [];

    // vehicle1 = new Vehicle(1, 1, "Honda", "Civic");
    // vehicle2 = new Vehicle(2, 2, "BMW", "M3");
    // vehicle3 = new Vehicle(3, 1, "Ford", "Mustang");
    // vehicle4 = new Vehicle(4, 3, "Mercedes-Benz", "E63");

    vehicleData: Vehicle[] = [];

    clientVehicles: Vehicle[] = [];

    // Hardcoded vehicle data
    // fillVehicleData(): void {
    //     this.vehicleData = [
    //         this.vehicle1, this.vehicle2, this.vehicle3, this.vehicle4
    //     ]
    //     // console.log(this.vehicleData);
    // }

    // API call to get client data
    fillClientData(): Observable<Client[]> {
        return this._http.get<Client[]>(this._clientUrl)
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

    // API call to get vehicle data
    fillVehicleData(): Observable<Vehicle[]> {
        return this._http.get<Client[]>(this._vehicleUrl)
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getVehicles(clientId: number): Observable<Vehicle[]> {
        this._testUrl = 'http://localhost:9000/vehicle/' + clientId;
        return this._http.get<Client[]>(this._testUrl)
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
    // Hardcoded client data
    // fillClientData(): void {
    //     this.clientData = [
    //         this.client1, this.client2
    //     ]
    //     // console.log(this.clientData);
    // }

    // uncheck() : void {
    //     for(let clients of this.clientData) {
    //         clients.showVehicles = false;
    //         clients.checkbox = false;
    //     }
    // }

    // toggleVehicles2(client: Client): void {
    //     this.uncheck();
    //     client.showVehicles = !client.showVehicles;
    //     client.checkbox = !client.checkbox;
    // }

    // matchId(clientId: number): Vehicle[] {
    //     // this.clientVehicles = [
    //     //     this.vehicle1, this.vehicle2, this.vehicle3
    //     // ]
    //     // return this.clientVehicles;
    //     let tempVehicle: Vehicle[] = [];
    //     for(let vehicle of this.vehicleData) {
    //         if(vehicle.clientId === clientId) {
    //             tempVehicle.push(vehicle);
    //         }
    //     }
    //     for(let vehicle of this.clientVehicles) {
    //         this.clientVehicles.pop();
    //     }
    //     this.clientVehicles = tempVehicle;
    //     console.log(this.clientVehicles);
    //     // this.clientVehicles = tempVehicle;
    //     return this.clientVehicles;
    // }
}
