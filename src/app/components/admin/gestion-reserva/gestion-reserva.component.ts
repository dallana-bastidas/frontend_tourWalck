import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-gestion-reserva',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './gestion-reserva.component.html',
    styleUrl: './gestion-reserva.component.css'
})
export class GestionReservaComponent {
    infoReserva: any[] = [];
    formReserva!: FormGroup

    constructor(private ConsumoApi: ApiService, private fb: FormBuilder) {
        this.formReserva = this.fb.group({
            idUsuario: ["", Validators.required],
            idDestino: ["", Validators.required],
            cantidadPersonas: ["", Validators.required],
            precio: ["", Validators.required],
            fechasDisponibles: ["", Validators.required],
        })
    }

    ngOnInit(): void {
        this.obtenerReserva();
    }

    CrearReserva() {
        this.ConsumoApi.postCrearReserva(this.formReserva.value).subscribe((data: any) => {
            Swal.fire({
                title: "Reserva creada",
                icon: "success"
            })
            this.obtenerReserva()
        });
    }


    obtenerReserva() {
        this.infoReserva = []
        this.ConsumoApi.getReserva().subscribe((data: any) => {
            this.infoReserva = data
        });
    }

    borrarReserva(idReserva:any) {
        Swal.fire({
            title: "Esta seguro de eliminar la reserva",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                this.ConsumoApi.deleteReserva(idReserva).subscribe((data: any) => {
                    this.obtenerReserva();
                    Swal.fire({
                        title: "Reserva cancelada correctamente!",
                    });
                });

            }
        });
    }

}
