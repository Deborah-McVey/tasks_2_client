import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeTasks: Task[] = [];


  constructor(private tasksService: TaskService) {}

	ngOnInit(): void {
		this.tasksService.getTasks().subscribe({
			next: (tasks) => {
				this.homeTasks = tasks;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}
}
