import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ApFront';

  progress: number = 0;
  noOfFiles: number = 13;
  completed: boolean = false;

  public ngOnInit(): void {
    this.updateProgress();
  }

  delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async updateProgress() {
    this.completed = false;
    let n = 100 / this.noOfFiles;
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(500);
      this.progress = Math.round(i * n);
      console.log(i);
    }
    this.completed = true;
  }
}
