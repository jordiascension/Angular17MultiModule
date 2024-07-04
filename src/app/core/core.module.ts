import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  //the set of NgModules whose exported components, directives or pipes 
  //are used in the component templates of this module
  imports: [
    CommonModule
  ],
  //A list of declarations and NgModules that an importing module can use
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
