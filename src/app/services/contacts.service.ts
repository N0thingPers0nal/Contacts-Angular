import { Injectable } from '@angular/core';
import { Contacts } from '../model/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactsArr: Contacts[] = [];

  constructor() {}
  add(arr: Contacts[], editId: number): Contacts[] {
    if (editId === 0) {
      this.contactsArr.push(arr[0]);
    } else {
      for (let i of this.contactsArr) {
        if (editId === i.id) {
          i.name = arr[0].name;
          i.email = arr[0].email;
          i.phoneNo = arr[0].phoneNo;
        }
      }
    }
    return this.contactsArr;
  }
  edit(id: number): Contacts[] {
    return this.contactsArr.filter((a) => a.id === id);
  }
  delete(id: number): Contacts[] {
    const arr = [];
    // console.log(id)
    this.contactsArr = this.contactsArr.filter((a) => a.id !== id);
    return this.contactsArr;
  }
  getRandomNumber(): number {
    return Math.floor(Math.random() * 100 + 1);
  }
}
