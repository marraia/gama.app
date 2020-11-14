import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/providers/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  public emailModel: string;
  public passwordModel: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginForm.valid)
    {
      return;
    }

    this.authService
        .login(this.emailModel, this.passwordModel)
        .subscribe((user) =>  {
          this.router.navigate(['/hero']);
        }, (error) => 
        {
          alert("Não foi possivel fazer o login, tente novamente!")
        });
  }

}
