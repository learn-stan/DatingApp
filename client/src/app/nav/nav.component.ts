import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public model = { username: '', password: '' };
  public currentUser$: Observable<User | null>;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  public login(): void {
    this.accountService.login(this.model).subscribe(
      res => {
        this.router.navigateByUrl('/members');
      },
      error => {
        this.toastr.error(error.error);
      }
    );
  }

  public logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
