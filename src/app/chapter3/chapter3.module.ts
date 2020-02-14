import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter3PageRoutingModule } from './chapter3-routing.module';

import { Chapter3Page } from './chapter3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter3PageRoutingModule
  ],
  declarations: [Chapter3Page]
})
export class Chapter3PageModule {}
