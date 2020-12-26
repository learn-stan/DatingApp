import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';

  constructor(private accountService: AccountService) {}

  public ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser(): void {
    const user: User = JSON.parse(localStorage.getItem('user') || 'null');
    this.accountService.setCurrentUser(user);
  }
}
