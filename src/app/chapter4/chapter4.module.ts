import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter4PageRoutingModule } from './chapter4-routing.module';

import { Chapter4Page } from './chapter4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter4PageRoutingModule
  ],
  declarations: [Chapter4Page]
})
export class Chapter4PageModule {}
