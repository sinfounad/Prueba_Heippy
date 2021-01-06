import { Injectable, ComponentFactoryResolver } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Task} from '../Task';
import {Datos} from '../Datos';
import {Fact} from '../components/fact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  domain: string ="http://localhost:3002/api";
  constructor(private http: HttpClient) {}

 
 
  getUsers(){
      return this.http.get<Task[]>(this.domain);
  }
  getTask (): Observable<Array<Task>> {
     console.log(78891223);
    let getAllTask = "/task";
    return this.http.get<Array<Task>>(this.domain + getAllTask)
    
  }


  getFact (): Observable<Array<Fact>> {
    console.log(78891223);
   let getAllTask = "/fact";
   return this.http.get<Array<Fact>>(this.domain + getAllTask)
   
 }

 getF(id: string) :Observable <Fact[]>{

  const path = `${this.domain}/task/${id}`;
  return this.http.get<Fact[]>(path);
}




    addTask(newTask): any {
      this.http.post<Task>(this.domain + '/task', newTask).subscribe(resp =>{
        console.log("running");
        let response = resp;
        //response = resp;
        return response;
      }
        );
        
    }


  
    
    deleteTask(is){
      console.log(is+"q2wwe");
      return this.http.post<String>(this.domain+'/Delete', is)
      
      .subscribe(resp =>{
        let response;
        response = resp;
        console.log("Entra")
        console.log(is+"q2wwe")

        return response;
      }
      );
      
    }
    updateTask(newTask){
         
      this.http.put(this.domain+'/update', newTask)
      .subscribe(resp =>{
        let response;
        response = resp;
        return response;
      });

    }
  /*
    updateFact(task: Task){

      const path = `${this.domain}/posts/${task._id}`;
      return this.http.put<Task>(path,task);
    }*/


    createFact(newTask): any {
      this.http.post<Fact>(this.domain + '/fact', newTask).subscribe(resp =>{
        console.log("running1");
        let response = resp;
        //response = resp;
        return response;
      }
        );
        
    }


    enviarEmail(newMensaje): any {
      this.http.post<Datos>(this.domain + '/msg', newMensaje).subscribe(resp =>{
        console.log("running2");
        let response = resp;
        //response = resp;
        return response;
      }
        );
        
    }
   
}
