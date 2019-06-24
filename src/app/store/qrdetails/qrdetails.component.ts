import { Component, Input, ViewChild, ElementRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { screen } from "tns-core-modules/platform";
import { Auto } from "../../auto";
import { AutosService } from "../../autos-service";
import { AnimationsService } from "../../animations-service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/internal/operators";

@Component({
  selector: 'ns-qrdetails',
  templateUrl: './qrdetails.component.html',
  styleUrls: ['./qrdetails.component.css'],
  moduleId: module.id,
})
export class QrdetailsComponent implements OnInit {
  auto: any;
  auto$:any;
  static IMAGE_MIN_HEIGHT = 48;

  constructor(private animationsService: AnimationsService,
              private autosService: AutosService,
              private routerExtensions: RouterExtensions,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.autosService.id);
    this.autosService.getAutoDetails2(this.autosService.id).subscribe((res: any)=>{
      console.log("Qr result", res)
      if(res.ok)
        this.auto=res.auto;
    })
  }
  get minHeight() {
    return screen.mainScreen.heightDIPs + 2 * QrdetailsComponent.IMAGE_MIN_HEIGHT;
  }

  animateIn(view: View, duration: number, delay: number) {
    view.animate({
      scale: { x: 1, y: 1 },
      translate: { x: 0, y: 0 },
      duration: duration,
      delay: delay,
      curve: AnimationCurve.easeOut
    }).catch(() => { });
  }

  animateOut(view: View) {
    view.animate({
      opacity: 0,
      duration: 200
    }).catch(() => { });
  }

  onScroll(args: ScrollEventData) {

  }


  onTap():void{
    console.log("Qr regresar");
    this.routerExtensions.navigate(["/store"], {
      transition: {
        name: "fade"
      }
    });
  }

}
