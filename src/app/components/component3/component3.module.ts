import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component3Component } from "./component3.component";
import { SharedService } from "src/app/common/shared.service";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        Component3Component,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [Component3Component],
    providers: [SharedService]
})
export class Component3Module { }