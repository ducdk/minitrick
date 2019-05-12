import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogModel } from '../../models/blog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { combineLatest, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {

  public listBlogs = Array<BlogModel>();
  private _destroyed = new Subject();

  constructor(
    public httpClient: HttpClient,
  ) { 
  }

  ngOnInit() {
    this.httpClient.get('/blogs').subscribe(
      (res) => {
        if (res instanceof Object) {
          this.listBlogs = res['data'];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

}
