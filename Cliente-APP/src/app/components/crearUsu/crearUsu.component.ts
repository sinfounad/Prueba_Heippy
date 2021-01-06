import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Fact } from '../fact';
import { Task } from 'src/app/Task';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//https://www.devglan.com/angular/angular-8-crud-example
@Component({
  selector: 'app-factura',
  templateUrl: './crearUsu.component.html',
  styleUrls: ['./crearUsu.component.css']
})
export class crearUsuComponent implements OnInit {
  facts: Array<Fact>;
  Numero:string;
  Nombre:string;
  Celular:string;
  Direccion: string;
  Cumple: string;
  condicion=false;
   
  public formulario: FormGroup;
  constructor(public facturas:TasksService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.facts = new Array<Fact>();
    this.getFact();
    this.initForms();
  }
  
  initForms() {
    this.formulario = this._fb.group({
      input1: [, Validators.required],
      input2: [, Validators.required],
      input3: [, Validators.required],
      input4: [, Validators.required],
      input5: [, Validators.required]
    });
  }
   

  public funcion; validarValores(event): any {
    if(this.formulario.valid){
      console.log('Datos son diferente de null');
      this.condicion=false;
      this.createTask(event)
    }else{
     console.log('Datos estan null');
     this.condicion=true;
    }
  }
  getFact(): void {
  
    this.facturas.getFact().subscribe(resp =>{
    console.log(resp)
    resp.forEach(nombre => this.facts.push(nombre));
    console.log('Facturas');
    console.log(this.facts);
  });
  
    //.subscribe(tasks => this.tasks = tasks);
    console.log(this.facturas.getFact());

    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
    
  }


  createTask(event){

    event.preventDefault(); 

  
    //const f = Date.now();
    
    var fecha = new Date(this.Cumple);
   var options = { year: 'numeric', month: 'long', day: 'numeric' };
   var cumpleA= fecha.toLocaleDateString("es-ES", options)

   console.log(
     fecha.toLocaleDateString("es-ES", options));
   
    
   const fact :Fact ={
   
   _id: "",
   nombre:  this.Nombre,
   documento: this.Numero,
   celular: this.Celular,
   direccion: this.Direccion,
   cumple: cumpleA,
   cumpleSF:this.Cumple
 
   
   };
 
   
    this.facturas.createFact(fact)
     task =>{this.facts.push(task)};
     console.log(fact.direccion)
     
     this.Numero=" ",
     this.Nombre=" ",
     this.Celular=" ",
     this.Direccion=" ",
     this.Cumple=" "
    

     setTimeout(function(){window.location.href = '/principal' }, 1000);
  }

}
