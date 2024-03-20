import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }
  private getTasks() {
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data;
    });
  }

  updateTask(id: number) {
    this.router.navigate(['/admin/update-task', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(data => {
      console.log(data);
      this.getTasks();
    })
  }
}



