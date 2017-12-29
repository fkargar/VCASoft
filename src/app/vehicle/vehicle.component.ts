import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client.model';
import { IVehicle } from '../models/vehicle.model';
import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';
import { ClientComponent } from '../client/client.component';
// import { Client } from '../models/client.model'

@Component({
    selector: 'vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {
    private _vehicleService;
    errorMessage: string;

    vehicleData: Vehicle[];

    @Input('cV') clientVehicles: Vehicle[];
    // cc = new ClientComponent();
    // clientList: Client[];
    // clientAssociations = this.cc.clientData;
    // vehicle1 = new Vehicle(1, 1, "Honda", "Civic");
    // vehicle2 = new Vehicle(2, 2, "BMW", "M3");
    // vehicle3 = new Vehicle(3, 1, "Ford", "Mustang");

    // @Input() vehicleData: Vehicle[];

    // @Input() clientVehicles: Vehicle[] = [];
    //
    // @Output() displayOwnedVehicles: EventEmitter<Vehicle[]> =
    //                                 new EventEmitter<Vehicle[]>();


    constructor(_vehicleService: VehicleService) {
        this._vehicleService = _vehicleService;
        // this._vehicleService.fillVehicleData();
        // this.vehicleData = _vehicleService.vehicleData;
        this.clientVehicles = _vehicleService.clientVehicles;
        // this.vehicleData = [
        //     this.vehicle1, this.vehicle2, this.vehicle3
        // ]
        // console.log(this.clientVehicles);
    }

    ngOnInit(): void {
        this._vehicleService.fillVehicleData()
        .subscribe(vehicleData => {
            // this.clientData.push(clientData);
            this.vehicleData = vehicleData;
            console.log(this.vehicleData);
            // this.clientData = _vehicleService.clientData;
        },
        error => this.errorMessage = <any>error);
    }

    // matchId(clientId: number): Client[] {
    //     for(let client of this.clientAssociations) {
    //         if(client.id == clientId) {
    //             this.clientList.push(client);
    //         }
    //     }
    //     return this.clientList;
    // }
}
