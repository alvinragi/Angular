import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

export interface Post {
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {
  firstName: string = '';
  posts:Post[]= [];
  constructor(private route: ActivatedRoute, private postService:PostService,private router: Router) {}

  ngOnInit() {
    // Extract the username from the query parameter
    this.route.queryParamMap.subscribe((query) => {
      console.log(query);
      this.firstName = query.get('firstName') || '';

      this.postService.getData().subscribe((data)=>{
        this.posts = data;
        console.log(this.posts);
      })
    });
  }
  editPost(post_id:number){
    console.log(post_id)
    // this.postService.id = post_id;
    this.router.navigate(['edit'],{ queryParams: { postId: post_id } });
  }
}