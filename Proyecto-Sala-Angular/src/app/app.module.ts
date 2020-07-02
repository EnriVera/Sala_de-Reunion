import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AgregarSalaComponent } from './Pages/agregar-sala/agregar-sala.component';
import { ListaSalaComponent } from './Pages/lista-sala/lista-sala.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarSalaComponent,
    ListaSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
