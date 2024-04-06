import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private tasksService: TaskService) {}

	ngOnInit(): void {
		this.tasksService.getTasks().subscribe({
			next: (tasks) => {
				console.log(tasks);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}
}
