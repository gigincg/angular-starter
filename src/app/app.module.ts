import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { ShrtComponent } from './components/shrt/shrt.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    HomeComponent,
    ShrtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
