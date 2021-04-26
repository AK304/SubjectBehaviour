import { AfterContentChecked, Component } from '@angular/core';
import { SharedService } from 'src/app/common/shared.service';
import { UI_EVENT } from 'src/app/type/type.event';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements AfterContentChecked {

  comp1Val: string;
  comp2Val: string;
  comp3Val: string;
  isbuttonClicked: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.comp3Val = "";
  }

  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
    this.comp2Val = this.sharedService.comp2Val;
  }

  addValue(str) {
    this.sharedService.updateComp3Val(str);
  }

  editServiceData(data: object) {
    this.sharedService.listenEvent(UI_EVENT.NAV_COLLAPSE, (e: CustomEvent)=>{
      this.sharedService.setValue(data);
      this.isbuttonClicked = e.detail.collapsed;
    })
  }
  
}

