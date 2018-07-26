import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup
  

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: this.formBuilder.control('', [ 
        Validators.required,
        Validators.minLength(2)
      ]),
      password: this.formBuilder.control('', [ Validators.required ])
    })
  }

  doLogin() {
    const {
      username,
      password
    } = this.userForm.value

    this.authService.login(username, password).subscribe(data => {
      if (data) {
      } else {
        alert('Usuário ou senha inválidos!')
      }
    })
  }

}
