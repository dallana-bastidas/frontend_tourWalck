import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
})
export class ContactoComponent {
    fromContacto: FormGroup;
    regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    constructor(
        private fb: FormBuilder,
        private _apiServervicio: ApiService,
    ) {
        this.fromContacto = this.fb.group({
            nombre: ['', Validators.required],
            correoElectronico: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
            asunto: ['', Validators.required],
            comentario: ['', Validators.required],
        });
    }

    solicitarContacto() {
        this._apiServervicio.postContacto(this.fromContacto.value).subscribe((data: any) => {
            Swal.fire({
                title: 'Mensaje enviado',
                icon: 'success',
            });
            console.log(data);
        });
    }
}
