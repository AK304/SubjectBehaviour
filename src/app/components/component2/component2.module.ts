import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component2Component } from "./component2.component";
import { SharedService } from "src/app/common/shared.service";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        Component2Component,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [Component2Component],
    providers: [SharedService]
})
export class Component2Module { }