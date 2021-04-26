import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { UI_EVENT } from "../type/type.event";

@Injectable()
export class SharedService {

  comp1Val: string;
  _comp1ValueBS = new BehaviorSubject<string>('');

  comp2Val: string;
  _comp2ValueBS = new BehaviorSubject<string>('');

  comp3Val: string;
  _comp3ValueBS = new BehaviorSubject<string>('');

  comp4Val: object;
  _comp4ValueBS = new BehaviorSubject<object>(UI_EVENT);

  constructor() {
    this.comp1Val;
    this.comp2Val;
    this.comp3Val;

    this._comp1ValueBS.next(this.comp1Val);
    this._comp2ValueBS.next(this.comp2Val);
    this._comp3ValueBS.next(this.comp3Val);
  }

  public setValue(value: object): void {
    this._comp4ValueBS.next(value);
  }
  public getValue(): Observable<object> {
    return this._comp4ValueBS;
  }

  public execEvent(event:string, object:any):void{
  console.log(event);
  }

  public listenEvent(event:string, callBack:any):void{
    console.log(event);
  }

  public removeLlistenEvent(event: string, callBack: any): void{
    console.log(event, callBack);
  }

  updateComp1Val(val) {
    this.comp1Val = val;
    this._comp1ValueBS.next(this.comp1Val);
  }

  updateComp2Val(val) {
    this.comp2Val = val;
    this._comp2ValueBS.next(this.comp2Val);
  }

  updateComp3Val(val) {
    this.comp3Val = val;
    this._comp3ValueBS.next(this.comp3Val);
  }

}