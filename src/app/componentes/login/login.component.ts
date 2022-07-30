import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwitchService } from 'src/app/servicios/switch.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: SwitchService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  login() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if (this.loginForm.value.email === 'test@test.com' && this.loginForm.value.password === '123456') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }

    return userLogged;
  }

  closeModal() {
    this.modalService.$modal.emit(false);
    
  }

}

/*

########Archivo HTML

<form [formGroup]="form"  (ngSubmit)="onEnviar($event)">    
    <div>
        <label for="email">Email: </label>                          
        <input type="email" formControlName="email">
    </div>
    <!-- Gracias al getter que configuramos en el controlador -->
    <div *ngIf="Mail?.errors  && Mail?.touched">    
        <p *ngIf="Mail?.hasError('required')" class="error">
            El email es requerido.
        </p>
        <p *ngIf="Mail?.hasError('email')" class="error">
            El formato del email debe ser válido.
          </p>
    </div>

    <br/>
    <div>
        <label for="exampleInputPassword1" class="form-label">Password: </label>
        <input type="password" formControlName="password" [class.border-danger]="MailValid">
    </div>
    <!-- Gracias al getter que configuramos en el controlador -->
    <div *ngIf="Password?.errors  && Password?.touched">
    <p *ngIf="Password?.hasError('required')" class="error">
      El password es requerido.
    </p>
    <p *ngIf="Password?.errors?.minlength
" class="error">
      El password debe ser de 8 o más caracteres.
    </p>
  </div>
    <br/>
    <div>
        <button   type="submit">Iniciar Sesión</button>
    </div>
</form>

<div>
  <p>Un debuger para mostrar que es posible hacer un biding directo al formulario <strong>{{form.value.email}} </strong><strong>{{form.value.password}} </strong><p> 
<br>

</div>


####### Archivo test
import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}


*/