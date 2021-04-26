import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../common/shared.service';
import { HelloComponent } from '../components/hello.component';
import { BrowserModule } from '@angular/platform-browser';
import { Component1Module } from '../components/component1/component1.module';
import { Component2Module } from '../components/component2/component2.module';
import { Component3Module } from '../components/component3/component3.module';
import { Component4Module } from '../components/component4/component4.module';



@NgModule({
    declarations: [
        HelloComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        Component1Module,
        Component2Module,
        Component3Module,   
        Component4Module
    ],
    providers: [SharedService
    ],
    exports: [
        HelloComponent,
        Component1Module,
        Component2Module,
        Component3Module,
        Component4Module
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
 export class SharedModule {
    // static forRoot() {
    //     return {
    //       ngModule: SharedModule,
    //       providers: [],
    //       import: []
    //     }
    //   }
 }
