import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogIndexComponent, BlogListComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
