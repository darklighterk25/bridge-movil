import { Component, OnInit } from '@angular/core';
import { GestureEventData } from "ui/gestures";
import { RouterExtensions } from "nativescript-angular";
import { UserService } from "~/app/user.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "application";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  private userName: string
  private password: string
  constructor(private routerExtensions: RouterExtensions, private userService: UserService) { }

  ngOnInit() {
  }
  onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }
  login(){
    this.userService.login(this.userName,this.password).subscribe( (res: any)=>{
      console.log(res)
      if(res.ok){
        this.userService.SessionToken=res;
        this.userService.LoggedIn=true;
        this.routerExtensions.back();
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
      }
    })
  }
}
