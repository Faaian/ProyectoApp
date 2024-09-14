import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  email = "";

  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() { }

  async recuperar() {
    try {
      await this.firebase.recuperar(this.email);
      console.log('Correo de recuperación enviado.');
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.error('Error al recuperar contraseña:', error);
    }
  }
}
