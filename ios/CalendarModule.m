//
//  Calendar.m
//  NativeModule
//
//  Created by Ucreate-93 on 10/04/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CalendarModule, RCTEventEmitter)
RCT_EXTERN_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
RCT_EXTERN_METHOD(getDataFromCallback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(createCalendarPromise:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end
