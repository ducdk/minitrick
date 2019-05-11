import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BlogsModule } from './modules/blogs/blogs.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => DashboardModule
      },
      {
        path: 'blog',
        loadChildren: () => BlogsModule
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // enableTracing: true,
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
