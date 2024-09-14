import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  email = "";
  password = "";
  
  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit() { }

  async registrar() {
    try {
      const usuario = await this.firebase.registrar(this.email, this.password);
      console.log(usuario);
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  }
}
