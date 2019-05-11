import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../../models/blog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public listBlogs = Array<BlogModel>();

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/blogs').subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
