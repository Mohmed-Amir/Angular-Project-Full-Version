import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allContacts:any = [];

  constructor(_contactsService:ContactsService)
  {
    _contactsService.getAllContacts().subscribe(response=>{
        this.allContacts=response.data;
      })
  }

  ngOnInit(): void {
  }

}
