import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  id!: number;

  task: Task = new Task();

  constructor(private taskService: TaskService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

  onSubmit(value: any) {
    this.task.taskStartDate = new Date(value);
    this.taskService.updateTask(this.id, this.task).subscribe(data => {
      this.goToTaskList();
    }
      , error => console.log(error));
  }

  goToTaskList() {
    this.router.navigate(['/admin/task']);
  }
}