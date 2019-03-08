import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "aditya",
    "LastName": "chopra",
    "Email": "aditya@gmail.com",
    "Id": 1,
    "PhoneNumber": 9822753647,
    "Designation": "Software Engineer",
    "DOB": "12/11/1996"
},
{
    "FirstName": "shantanu",
    "LastName": "bhardwaj",
    "Email": "shantanu@gmail.com",
    "Id": 2,
    "PhoneNumber": 9554899824,
    "Designation": "Tester",
    "DOB": "11/02/1998"
},
{
    "FirstName": "mukesh",
    "LastName": "jain",
    "Email": "mukesh@gmail.com",
    "Id": 3,
    "PhoneNumber": 9554899825,
    "Designation": "Software engineer",
    "DOB": "12/02/1999"
},
{
    "FirstName": "mangal",
    "LastName": "pandey",
    "Email": "mangal@gmail.com",
    "Id": 4,
    "PhoneNumber": 9554899856,
    "Designation": "Software engineer",
    "DOB": "15/02/1999"
},
{
    "FirstName": "Kamal",
    "LastName": "hasan",
    "Email": "kamal@gmail.com",
    "Id": 5,
    "PhoneNumber": 9554899889,
    "Designation": "Software engineer",
    "DOB": "15/02/1999"
},
{
    "FirstName": "pappu",
    "LastName": "chudhary",
    "Email": "rockysingh@gmail.com",
    "Id": 6,
    "PhoneNumber": 9554899789,
    "Designation": "Intern",
    "DOB": "19/02/1999"
}

]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
