import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {LoginComponent} from './app.login';
import {HomeComponent} from './app.home';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent}    
];


@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),FormsModule
        
    ],
    declarations: [
        AppComponent,HomeComponent, LoginComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }