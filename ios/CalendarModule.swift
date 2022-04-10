//
//  CalendarModule.swift
//  NativeModule
//
//  Created by Ucreate-93 on 09/04/22.
//

import Foundation
@objc(CalendarModule)
class CalendarModule:RCTEventEmitter{
  private var count=0;
  @objc
  func createCalendarEvent(_ name:NSString,location:NSString){
    print("hello from native ios side", name, location);
  }
  @objc
  func getDataFromCallback(_ callback:RCTResponseSenderBlock){
    callback(["hello from native ios side"])
  }
  @objc
  func createCalendarPromise(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock){
    count+=1;
    
    resolve("Promise resolved")
    sendEvent(withName: "EventCount", body: ["Count :",count])
  }
  
  // By adding this function and pasing true value in it means that we want to initialize our module on main thread before any JS code execution
  @objc
  override static func requiresMainQueueSetup()->Bool{
    return true
  }
  
  override func supportedEvents() -> [String]! {
    return ["EventCount"]
  }
  
  @objc
    override func constantsToExport()->[AnyHashable:Any]!{
    return ["initialCount":0];
  }
}
