import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Fact } from '../fact';
import {interval, timer} from 'rxjs';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  facts: Array<Fact>;
  factura: Fact[] = [];
  Numero:string;
  Nombre:string;
  Celular:string;
  Direccion: string;
  Cumple: string;


  constructor(public facturas:TasksService) { }

  ngOnInit() {
    this.facts = new Array<Fact>();
    this.getFact();

  }


  getFact(): void {
    this.facts=[];
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.facturas.getFact());
  }

  deleteFact(id: Fact): void{
    
    const response= confirm('are you sure')
    console.log(id)
    if(response){
  
     const tasks = this.facts
     console.log("35546633")
     this.facturas.deleteTask(id)
     data=>{
       if(data.n==1){
         for(let i=0;i <= tasks.length; i++){
  
           tasks.splice(i, 1);
  
           }
         }
  
     
     }
  
    }
  
    const cuenta= timer(2000);
  
      cuenta.subscribe((n)=>{
        this.getFact();
        //console.log('cada:' + n+ 'segundos');
      });
    return;
       
       
       console.log(2)
     }
      
     Actualiza(contacto: Fact){
      localStorage.setItem("ID_Update", contacto._id);
     
      setTimeout(function(){window.location.href = '/Actualizar' }, 1000);

     }  




  createTask(event){

    event.preventDefault(); 

    var variable=2;

    var  C = this.Cumple.toString();
    
   const fact :Fact ={
   
   _id: "",
   nombre:  this.Numero,
   documento: this.Nombre,
   celular: this.Celular,
   direccion: this.Direccion,
   cumple:C,
   cumpleSF: this.Cumple
 
   
   };
   
    this.facturas.createFact(fact)
     task =>{this.facts.push(task)};
     console.log(fact.direccion)
   //this.facturas.createFact(fact).subscribe((newFact)=>{console.log(newFact)});console.log(this.Nombre+this.Documento+this.Direccion);
  
   console.log(event.title);
  }


  

}
