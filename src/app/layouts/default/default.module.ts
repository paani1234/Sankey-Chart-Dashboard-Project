import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { AngularDraggableModule } from 'angular2-draggable';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface,GridType } from 'angular-gridster2';
import { GridsterModule } from "angular-gridster2";
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,
    SharedModule,
    AngularDraggableModule,
    GridsterModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
