package com.iter.schedmap;

import android.support.multidex.MultiDexApplication;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.calendarevents.CalendarEventsPackage;
import com.airbnb.android.react.maps.MapsPackage;

public class MainApplication extends MultiDexApplication {

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {
    return Arrays.asList(
        new MainReactPackage(),
        new CalendarEventsPackage(),
        new MapsPackage()
    );
  }
}
