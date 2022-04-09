package com.nativemodule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class CalendarModule extends ReactContextBaseJavaModule {
    private int eventCount =0;
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
    Log.d("CalendarModule", "Create event called with name: " + name
    + " and location: " + location);
    }

    @ReactMethod
    public void getDataFromCallback(Callback callback) {
        callback.invoke("Pass data in callback from native side");
    }

    @ReactMethod
    public void createCalendarPromise(Promise promise) {
        try {
            promise.resolve("Promise resolved");
            eventCount+=1;
            sendEvent(getReactApplicationContext(),"EventCount",eventCount);
        }
        catch( Exception error) {
            promise.reject("Got some error in Promise", error);
        }
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           int param) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, param);
    }
}
