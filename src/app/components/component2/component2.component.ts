import { Component, AfterContentChecked } from '@angular/core';
import { SharedService } from "../../common/shared.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements AfterContentChecked {

  comp1Val: string;
  comp2Val: string;
  comp3Val: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.comp2Val = "";
  }

  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
    this.comp3Val = this.sharedService.comp3Val;

  }

  addValue(str) {
    this.sharedService.updateComp2Val(str);
  }

}