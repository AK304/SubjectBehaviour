import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component1Component } from "./component1.component";
import { SharedService } from "src/app/common/shared.service";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        Component1Component,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [Component1Component],
    providers: [SharedService]
})
export class Component1Module { }