import { Component, OnInit } from '@angular/core';
import {GetPostApiService} from '../../service/get-post-api.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable }   from 'rxjs';
import {model} from '../../model/model';


export interface PeriodicElement {
  id: number;
  title: string;
  userid: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'id', 'userid'];
  dataSource = new UserDataSource(this.userService);
  PostDetails:any[]=[];
  posts:any[]=[];
  postInfo:any[]=[];
  constructor(public userService:GetPostApiService) { 
    
    // this.userService.getListData()
    // .subscribe((data)=>{
    //   console.log("The Data is",data);
    //   this.PostDetails.push(data);
    //   // console.log("The PostDetails are",this.PostDetails[0].length);
    //   for(let i=0;i<this.PostDetails[0].length;i++)
    //   {
    //     this.posts.push(this.PostDetails[0][i]);
    //   }
    //  for(let i=0;i<this.posts.length;i++)
    //  {
    //    this.postInfo.push(this.posts[i]);
    //  }
    // //  console.log("The PostDetails are",this.postInfo);
    //   this.dataSource=this.postInfo;
      
    // })
  }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: GetPostApiService) {
    super();
  }
  connect(): Observable<model[]> {
    return this.userService.getListData();
  }
  disconnect() {}
}