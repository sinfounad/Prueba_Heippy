import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact';
import { TasksService } from '../../services/tasks.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actual-usu',
  templateUrl: './actual-usu.component.html',
  styleUrls: ['./actual-usu.component.css']
})
export class ActualUsuComponent implements OnInit {

  facts: Array<Fact>;
  contacto: Fact[] = [];
  Numero:string;
  Nombre:string;
  Celular:string;
  Direccion: string;
  Cumple: string;
  condicion=false;
  public formulario: FormGroup;
  //constructor(public facturas:TasksService, ) { }
  constructor( public contactos:TasksService, private _fb: FormBuilder) { }

  ngOnInit() {
    
    var id_Act=localStorage.getItem("ID_Update");
    this.getContacto(id_Act);
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
public funcion; validarValores(evento,contacto): any {
  if(this.formulario.valid){
    console.log('Datos son diferente de null');
    this.condicion=false;
    this.updateContact(evento,contacto);
  }else{
   console.log('Datos estan null');
   this.condicion=true;
  }
}
  updateContact(event, contacto){
 
    
    //this.validarValores()
    var fecha = new Date(contacto.cumple);
   var options = { year: 'numeric', month: 'long', day: 'numeric' };
   var cumpleA= fecha.toLocaleDateString("es-ES", options)

   

   
 
    const FacturaActual: any[] = this.contacto;
     const newFact : Fact = {
 


       _id:contacto._id,
      
       nombre:  contacto.nombre,
       documento: contacto.documento,
       celular: contacto.celular,
       direccion: contacto.direccion,
       cumple: cumpleA,
       cumpleSF:contacto.cumple
      
     
      };
  
   
    this.contactos.updateTask(newFact)

    this.contacto=[];
    setTimeout(function(){window.location.href = '/principal' }, 1000);
  

    
  }
  getContacto(id) {
  
  
    this.contactos.getF(id).subscribe( micontacto =>{
    this.contacto = micontacto
    console.log(micontacto);
      
    }
      
      
  );
     console.log("Hola")
    
   }  
  
  
}
