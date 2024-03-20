import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task:Task= new Task();

  constructor(private taskService: TaskService, private router:Router) { }

  ngOnInit(): void {
  }
  saveTask(value:any){
    this.task.taskStartDate= new Date(value);
    this.taskService.createTask(this.task).subscribe( data =>{
      console.log(data);
      this.goToTaskList();
    },
    error => console.log(error));
  }

  goToTaskList(){
    this.router.navigate(['/admin/task']);
  }
  
  onSubmit(value:any){
    console.log(this.task);
    this.saveTask(value);
  }
}
