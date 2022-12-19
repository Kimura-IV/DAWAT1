import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {
  @Input() dataUsuario: any = "grupo12"
 
  constructor() { }

  ngOnInit(): void {
  }

}
