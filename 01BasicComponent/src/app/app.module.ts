import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './components/child.component';
import { TemplateDrivenForm } from './components/templateDrivenFrom.component';
import { ReactiveFormComponent } from './components/reactiveForm.component';
import { RoutingDemoComponent } from './components/routing/routing.demo.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TemplateDrivenForm,
    ReactiveFormComponent,
    RoutingDemoComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
