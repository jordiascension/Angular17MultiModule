import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.scss'
})
export class NoticeBoardComponent {
  public title = 'NOTICE BOARD';
  public disableNoButton = true;
  public userResponse!: string;
  
  constructor() {}

  ngOnInit() {}

  public sayYes() {
    this.userResponse = 'I am In';
  }
}
