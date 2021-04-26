import { Component, OnChanges, OnInit } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';
import { UI_EVENT } from 'src/app/type/type.event';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit, OnChanges{

  comp4Val: string;
  clicked:boolean = false;
  constructor( private SharedService:SharedService) { 
    //  this.SharedService.getValue().subscribe(data =>{
    //    console.log(data);
    //  })
  }
  ngOnChanges(): void {
    alert("you clicked button in 4th component");
  }

  ngOnInit(){
  }

  public toggleCollapse(): void {
    this.clicked = !this.clicked;
    this.SharedService.execEvent(UI_EVENT.NAV_COLLAPSE, {clicked: this.clicked});
  }

  ngOnDestroy(){
    // this.SharedService.removeLlistenEvent(UI_EVENT.NAV_COLLAPSE,this.toggleCollapse );
  }
}
