import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    IconsModule,
    LoginModule,
    UiModule
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class CoreModule { }
