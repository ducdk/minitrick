import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from '../../models/blog';
import { combineLatest, map, takeUntil, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subject, of } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  public blog: BlogModel = {};
  public path: any;
  public paramPath: string;
  private _destroyed = new Subject();
  
  constructor(
    public httpClient: HttpClient,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.pipe(
      combineLatest( this.route.parent.params),
      map((p: [Params, Params]) => ({'path': p[0]['file-path']})),
      map(p => ({'path': p['path']}),
      takeUntil(this._destroyed))
      ).subscribe(d => {
        this.paramPath = d.path;
        this.path = 'assets/content/blogs/' + this.paramPath + '.md';
        this.getBlog();
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }

  getBlog() {
    this.httpClient.get('/blogs/'+this.paramPath).pipe(
      (response) => {
        return response;
      }
    ).subscribe(
      (res) => {
        this.blog = res;
      },
      (error) => {
       this.router.navigate(['/blog/index']);
      }
    );   
  }

}
