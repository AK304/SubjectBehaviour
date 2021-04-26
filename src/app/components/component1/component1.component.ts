import { Component, AfterContentChecked } from '@angular/core';
import { SharedService } from "../../common/shared.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements AfterContentChecked {

  comp1Val: string;
  comp2Val: string;
  comp3Val: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.comp1Val = "";
  }

  ngAfterContentChecked() {
    this.comp2Val = this.sharedService.comp2Val;
    this.comp3Val = this.sharedService.comp3Val;

  }

  addValue(str) {
    this.sharedService.updateComp1Val(str);
  }

}
