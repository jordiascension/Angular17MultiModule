import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PensionPlanAngularModules';
  markdown = '# Hello, from variable!';
  typescriptMarkdown  = '# Hello, world!';
  file_name!: string;

  constructor(private markdownService: MarkdownService) {
  }

  async ngOnInit() {
    console.log(this.typescriptMarkdown);
    console.log(this.markdownService.parse('I am using __markdown__.'));
    this.file_name = await this.markdownService.parse('I am using __markdown__.');
  }
}
