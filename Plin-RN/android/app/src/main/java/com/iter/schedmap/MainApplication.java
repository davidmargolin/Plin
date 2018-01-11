package com.iter.schedmap;

import android.support.multidex.MultiDexApplication;

import com.calendarevents.CalendarEventsPackage;
import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

//import com.facebook.react.shell.MainReactPackage;

public class MainApplication extends MultiDexApplication {

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        //new MainReactPackage(),
        new CalendarEventsPackage()
    );
  }
}
