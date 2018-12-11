import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterCardPage } from './register-card';

@NgModule({
  declarations: [
    RegisterCardPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterCardPage),
  ],
})
export class RegisterCardPageModule {}
