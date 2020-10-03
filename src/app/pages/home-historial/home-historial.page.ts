import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interface/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-home-historial',
  templateUrl: './home-historial.page.html',
  styleUrls: ['./home-historial.page.scss'],
})
export class HomeHistorialPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private menuController: MenuController, 
                private DataService:DataService) { }

  ngOnInit() {
    this.componentes = this.DataService.getMenuOptions();
  }

  menuMostrar(){
    this.menuController.open('first');
  }
}
