import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common'
import { Model, ToDoItem } from './model';
import { FormSubmittedEvent } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})
export class AppComponent {
 model = new Model();
 isDisplay=false;
  getName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value:string){
    if(value!=""){
      this.model.items.push(new ToDoItem(value,false))
    }
  }
}
