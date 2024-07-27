import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    esAdministrador: boolean = false
    constructor(private _api: ApiService) { }

    ngOnInit():void {
        this.esAdministrador = this._api.administracion()
    }

}
