import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVar = '';
  tasks: object[] = [{
    title: 'El título es lo más importante',
    body: 'Lorem ipsum',
    done: false,
    date: 'Wed Jun 10 2020 09:16:12'
  }, {
    title: 'El título es lo más importante',
    body: 'Lorem ipsum',
    done: false,
    date: 'Wed Jun 10 2020 09:06:12'
  }];
  task: string;
  title: string;
  blackboards: string[] = [
    'To do',
    'El título es lo más importante'
  ];
  weekday = ['Monday', 'Tuesday', 'Wedeneday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Augost', 'September', 'October', 'November', 'December'];
  today = this.weekday[new Date().getDay()] + ', ' + new Date().getDate() + ' of ' + this.months[new Date().getMonth()] + ' of ' + new Date().getFullYear()

  add(): void {
    if (this.task && this.task !== '') {
      console.log(this.task);
      this.tasks.push({
        title: this.title,
        body: this.task,
        done: false,
        date: new Date()
      });
      this.task = '';
    }
  }
  delete(taskDeleted): void {
    var pos = this.tasks.indexOf(taskDeleted)
    this.tasks.splice(pos, 1)
  }
  markAsDone(taskDone): void {
    taskDone.done = true;
    setTimeout(function () { this.myVar = this.delete(taskDone) }, 1000)
  }
}
