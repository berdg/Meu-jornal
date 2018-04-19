import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from '../noticia/noticia.component';
import { AlertaComponent } from '../alerta/alerta.component';
import { PrimeiroExemploComponent } from '../primeiro-exemplo/primeiro-exemplo.component';
import { SegundoComponent } from '../segundo-exemplo/segundo.component';
import { TerceiroExemploComponent } from '../terceiro-exemplo/terceiro-exemplo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NoticiaComponent,
    AlertaComponent,
    PrimeiroExemploComponent,
    SegundoComponent,
    TerceiroExemploComponent,
    ],
  exports: [
    NoticiaComponent
  ]


})
export class NoticiasModule { }
