import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  public model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public register(): void {
    this.accountService.register(this.model).subscribe(
      res => {
        console.log(res);
        this.cancel();
      },
      error => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  public cancel(): void {
    this.cancelRegister.emit(false);
  }
}
