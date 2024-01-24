import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  ResolveListService } from '../resolve-child/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-parent',
  templateUrl: './resolve-parent.component.html',
  styleUrls: ['./resolve-parent.component.css']
})
export class ResolveParentComponent implements OnInit {
  users: any;
constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit() {
    this.users = this.activatedRoute.snapshot.data['users'];
  }

}
