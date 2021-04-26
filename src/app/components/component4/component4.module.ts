import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component4Component } from "./component4.component";
import { SharedService } from "src/app/common/shared.service";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        Component4Component,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [Component4Component],
    providers: [SharedService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class Component4Module { }