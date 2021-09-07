import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent{
 
  registerform = new FormGroup({
    name :new FormControl('',Validators.required),
    job:new FormControl('',Validators.required)
  })
  

  constructor(private _ContactsService:ContactsService) 
  { 
  
  }
  
  create()
      {
        let name_Entered = (<HTMLInputElement>document.getElementById("name")).value;
        let job_Entered = (<HTMLInputElement>document.getElementById("job")).value;

        this.registerform.get("name")?.setValue(name_Entered)
        this.registerform.get("job")?.setValue(job_Entered)
        
        if (name_Entered.trim() == '' || job_Entered.trim() == '')
          {
            alert('Please enter all fields !');
          }
        else{
            this._ContactsService.createContants(this.registerform.value).subscribe(response=>{
                console.log(response);
                alert("Done - New Contact Added");
              })
        }
      }
}

