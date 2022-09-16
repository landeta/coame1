import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: 'oscar',
    pass: '123456'
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  // login(){
  //   console.log(this.user);
  //   this.authService.singin(this.user).subscribe(res  => {
  //       console.log(res);
  //     })
  // }
  login() {
    this.router.navigateByUrl('/');
  }
}
