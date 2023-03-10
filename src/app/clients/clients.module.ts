import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageAddClientsComponent } from './page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './page-edit-clients/page-edit-clients.component';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientsComponent,
    PageEditClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
