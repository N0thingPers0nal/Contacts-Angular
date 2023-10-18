import { Component } from '@angular/core';
import { Contacts } from 'src/app/model/contacts';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  name = '';
  phoneNo= '';
  email = '';
  btnText = 'Add';
  editId = 0;
  id = 1;
  contactsArr: Contacts[] = [];
  constructor(private contactsService: ContactsService) {}
  add(): void {
    let add: Contacts[] = [
      {
        // id: this.contactsService.getRandomNumber(),
        id: this.id ,
        // id:this.contactsArr.length+1, duplicates
        name: this.name,
        phoneNo: this.phoneNo,
        email: this.email,
      },
    ];
    this.contactsArr = this.contactsService.add(add, this.editId);
    this.name = '';
    this.phoneNo = '';
    this.email = '';
    this.editId = 0;
    this.id+=1
    this.btnText = 'Add';
    document.getElementById("btn")?.classList.add("btn-warning");
    document.getElementById("btn")?.classList.remove("btn-primary");
  }
  delete(id: number): void {
    this.contactsArr = this.contactsService.delete(id);
  }
  edit(id: number): void {
    this.btnText = 'Update';
    document.getElementById("btn")?.classList.remove("btn-warning");
    document.getElementById("btn")?.classList.add("btn-primary");
    let arr = this.contactsService.edit(id);
    for (let i of arr) {
      this.name = i.name;
      this.phoneNo = i.phoneNo;
      this.email = i.email;
    }
    this.editId = id;
  }
}
