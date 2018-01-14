<h1><img src="Plin-RN/Resources/Images/app_icon.png" width="64"/>Plin</h1>


<img src="Mockups/1.png" width="250"> <img src="Mockups/2.png" width="250">

## Requirements
Node 6.11.4

NPM 3.5.2

Android SDK 27 (Build Tools 27.0.3)

## Installation

```sh
git pull https://github.com/trickedoutdavid/Plin.git
```

```sh
cd Plin/Plin-RN
npm install
```

Edit the build.gradle at Plin/Plin-RN/node_modules/react-native-calendar-events to below:

```gradle
apply plugin: 'com.android.library'

android {
    compileSdkVersion 27
    buildToolsVersion '27.0.3'

    defaultConfig {
        minSdkVersion 19
        targetSdkVersion 27
        versionCode 1
        versionName "1.0"

    }
    lintOptions {
       warning 'InvalidPackage'
    }
}

dependencies {
    provided 'com.facebook.react:react-native:+'
}
```

Open Android Studio and rebuild project (Build -> Rebuild Project)

## Build and Test

Debug: Use Expo XDE to compile and run.

Release: 
- Requires compile from Android Studio (Build -> Generate Signed APK) and Publish from XDE
- Replace publish url in Plin/Plin-RN/android/app/src/main/java/com/iter/schedmap/MainActivity.java with your own
```java
  @Override
  public String publishedUrl() {
    return "exp://exp.host/@trickedoutdavid/plin";  //replace here
  }
```
