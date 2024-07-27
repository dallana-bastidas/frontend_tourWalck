import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
    ],
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    formRegistro: FormGroup;
    regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    constructor(
        private fb: FormBuilder,
        private _apiServicio: ApiService
    ) {
        this.formRegistro = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmarPassword: ['', Validators.required],
            rol:['',Validators.required]
        });
    }

    passwordMatchValidator(form: FormGroup) {
        return form.controls['password'].value === form.controls['confirmarPassword'].value ? null : { mismatch: true };
    }

    registerUsuarioSistema() {
        if (this.formRegistro.valid) {
            this._apiServicio.postRegistrarUsuario(this.formRegistro.value).subscribe(data => {
                Swal.fire({
                    title: 'Registro exitoso',
                    icon: 'success',
                });
                console.log(data);
            });
        }
    }
}
