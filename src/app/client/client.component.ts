import { Component, OnInit, Input } from '@angular/core';
// import { VehicleComponent } from '../vehicle/vehicle.component';
import { Vehicle } from '../models/vehicle.model';
import { IClient } from '../models/client.model';
import { Client } from '../models/client.model';
import { VehicleService } from '../services/vehicle.service';

console.log("Something");

@Component({
    selector: 'client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    // providers: [VehicleService]
})

export class ClientComponent implements OnInit {
    // flag: boolean = false;
    private _vehicleService;
    // private vc: VehicleComponent;
    errorMessage: string;
    // vc = new VehicleComponent();
    // ownedVehicles: Vehicle[] = [];
    // @Output() displayOwnedVehicles: EventEmitter<Vehicle[]> =
    //                                 new EventEmitter<Vehicle[]>();
    // allVehicles = this.vc.vehicleData;
    // client1 = new Client(1, false, false, "Afshin", "Kargar", "");
    // client2 = new Client(2, false, false, "Farshad", "Kargar", "");

    clientData: Client[];
    // clientData: Client[] = [];

    clientVehicles: Vehicle[];
    // onClick(): void {
    //     this.displayOwnedVehicles.emit(this.ownedVehicles);
    //     console.log(this.displayOwnedVehicles);
    // }

    constructor(_vehicleService: VehicleService) {
        this._vehicleService = _vehicleService;
        // this._vehicleService.fillClientData();
        // this._vehicleService.fillClientData()
        // .subscribe(clientData => {
        //     this.clientData.push(clientData);
        //     console.log(this.clientData);
        //     // this.clientData = _vehicleService.clientData;
        // },
        // error => this.errorMessage = <any>error);
        // this.clientData = _vehicleService.clientData;
        // this.vc = new VehicleComponent(this._vehicleService);
        // this.clientData = [
        //     this.client1, this.client2
        // ]
    }

    ngOnInit(): void {
        this._vehicleService.fillClientData()
        .subscribe(clientData => {
            // this.clientData.push(clientData);
            this.clientData = clientData;
            console.log(this.clientData);
            // this.clientData = _vehicleService.clientData;
        },
        error => this.errorMessage = <any>error);
    }

    public uncheck() : void {
        // this._vehicleService.uncheck();
        for(let clients of this.clientData) {
            clients.showVehicles = false;
            clients.checkbox = false;
        }
    }

    toggleVehicles1(client: Client): void {
        // this._vehicleService.toggleVehicles2(client);
        this.uncheck();
        client.showVehicles = !client.showVehicles;
        client.checkbox = !client.checkbox;
    }

    // matchId(clientId: number): Vehicle[] {
    //     this.clientVehicles = this._vehicleService.matchId(clientId);
    //     return this.clientVehicles;
    //     // for(let vehicle of this._vehicleService.getVehicleData(this)) {
    //     //     if(vehicle.clientId == clientId) {
    //     //         console.log(vehicle);
    //     //         this.ownedVehicles.push(vehicle);
    //     //         // this.ownedVehicles = [vehicle];
    //     //         this.flag = true;
    //     //     }
    //     // }
    //     // console.log(this._vehicleService);
    //     // console.log(this.ownedVehicles);
    //     // return this.flag;
    // }

    matchId(clientId: number): Vehicle[] {
        this._vehicleService.getVehicles(clientId)
        .subscribe(clientVehicles => {
            // this.clientData.push(clientData);
            this.clientVehicles = clientVehicles;
            console.log(this.clientVehicles);
            // this.clientData = _vehicleService.clientData;
        },
        error => this.errorMessage = <any>error);
        return this.clientVehicles;
    }
}
