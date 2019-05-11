import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogIndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
      },
      {
        path: 'index',
        component: BlogListComponent,
      },
      {
        path: ':file-path',
        component: BlogDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
