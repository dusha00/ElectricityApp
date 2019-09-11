package com.communication;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CommModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext mContext;
    public static final String MODULE_NAME="commModule";
    public static final String EVENT_NAME="nativeCallRn";

    public CommModule(ReactApplicationContext reactContext){
        super(reactContext);
        this.mContext=reactContext;
    }
    @Override
    public String getName(){
        return MODULE_NAME;
    }
    @ReactMethod
    public void rnCallNativeWithPromise(String msg, Promise promise){
        String result="Native"+msg;
        promise.resolve(result);
    }
    public  void nativeCallRn(String msg){
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(EVENT_NAME,msg);
    }
}
