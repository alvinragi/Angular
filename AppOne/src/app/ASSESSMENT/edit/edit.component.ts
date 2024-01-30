import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DButtonDirective } from 'src/app/d-button.directive';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  postId!: number;
  post_id!:number;
  constructor(private postService: PostService, private route: ActivatedRoute,private fb: FormBuilder, private router:Router) {    
  }

  data :any = {};

  ngOnInit() {    
    this.data = this.route.snapshot.data["posts"]
    this.editForm = this.fb.group({
      content: ['', [Validators.required]] // Add your validation rules here
    });
  }
  save() {
    if (this.editForm.valid) {
      const content = this.editForm.value.content;
      this.postService.updatePost(this.postId, content).subscribe({
        next:()=> {
          alert("successfuly patched!")
          this.router.navigate(['home']);
        }
      });
      
    }
  }

}
