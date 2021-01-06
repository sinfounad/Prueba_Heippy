import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Fact } from '../fact';
import {interval, timer} from 'rxjs';
//import { timeStamp } from 'console';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  facts: Array<Fact>;
  factura: Fact[] = [];
  Numero:string;
  Nombre:string;
  Celular:string;
  Direccion: string;
  Cumple: string;
  Total: string;
  Largo:string;
   birthdayToday:string []=[];
  TodayD:string;
  BirthDay:string;
  ListadoCumple:string="";
   

  constructor(public facturas:TasksService) { }

  ngOnInit() {

  this.getFact()

  }


  getFact(): void {
    this.facts=[];
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
    console.log(this.facturas.getFact());
    var large =Object.entries(this.facts).length
    console.log(large)
     this.Largo=large.toString();
     console.log(this.Largo)
     var contador=0;
     const f = new Date(Date.now());
    const mes= f.getMonth();
    const dia= f.getDate()
   
     
     for ( let i=0;i<large;i++){
      const fC = new Date(this.facts[i].cumpleSF);
      const mesC= fC.getMonth();
      const diaC= fC.getDate();
      
     
 
      this.TodayD=dia+"/"+mes;
      this.BirthDay=diaC+"/"+mesC;
      if(this.BirthDay==this.TodayD){
         contador=contador+1;
         this.birthdayToday[contador-1]= this.facts[i].nombre;
         
      
         this.ListadoCumple=this.birthdayToday.toString();
      }
      
      
      //alert(diaC+" "+fC+" "+mesC)
      
      
     }
 
  });
  
    //.subscribe(tasks => this.tasks = tasks);
  
  }

}
