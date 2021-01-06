import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

 
})
export class MenuComponent implements OnInit {
  valor=false;
  valido=true;
  menuAdmin=false;

  constructor() { }

  ngOnInit() {
     
    //this.msg();
    var Local= localStorage.getItem('tutorial');
    alert(Local);

    console.log("buenos dias" + this.menuAdmin)

 
      
     if(Local=="permitido")
     {
   
       this.menuAdmin=true;

     }else
     {
      
      this.menuAdmin=false;
     } 
    
     
    
  }

    
  
   msg() {
    var a;
     a=  setInterval(this.cambiar1, 18000);
    };
  
  Salir(){

 
    localStorage.removeItem('tutorial');
    window.location.href = '/galery' 
  }
  cambiar1(){


    //function actualizar(){location.reload(true);}
    //Función para actualizar cada 4 segundos(4000 milisegundos)
    //actualizar();
    //this.valido=valor
    var Local= localStorage.getItem('tutorial');
    alert(Local);


 
      
     if(Local=="permitido")
     {
       //alert("hola")
      //this.valido=true;
       this.menuAdmin=true;

     }else
     {
      //alert("Que pasa? Vuelve a intentar")
      //this.valido=false;
      this.menuAdmin=false;
     } 
      alert("Hello"+this.menuAdmin); 
      
  
  
  
  


  }

}
