import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  birthday!:Date;

  title = 'tdangular';

  valeur="super"


  items!: MenuItem[];


  ngOnInit(): void {
    this.birthday=new Date();

    this.items = [
      {
          
          label:'Accueil',
          icon:'pi pi-fw pi-home',
         
      },{
        label:'Persone',
        icon:'pi pi-fw pi-user',
      }
    ];
}   
 
    
}
