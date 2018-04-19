import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PrimeiroExemploComponent } from './primeiro-exemplo/primeiro-exemplo.component';
import { SegundoComponent } from './segundo-exemplo/segundo.component';
import { TerceiroExemploComponent } from './terceiro-exemplo/terceiro-exemplo.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    NoticiaComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoComponent,
    TerceiroExemploComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
