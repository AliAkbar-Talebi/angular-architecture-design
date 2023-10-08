import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/app/service/repository/user.repository';

@Component({
  selector: 'arch-home',
  templateUrl: './arch-home.component.html',
  styleUrls: ['./arch-home.component.scss']
})
export class ArchHomeComponent implements OnInit {
  constructor(private userService: UserRepository) {

  }
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(res => {
      console.log(res);
    })
  }
}
