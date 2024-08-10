This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Packages 
This React Native project integrates various packages to enhance the functionality and styling of a video app. Below is a brief overview of the key packages used and their purposes:

### 1. `@dyst/native`
   - **Usage**: Employed for dynamic styling in the application.

### 2. `@react-native-community/slider`
   - **Usage**: Used to implement a seek bar for video screen navigation.

### 3. `react-native-flex-layout`
   - **Usage**: Simplifies the implementation of flex layouts in the app.

### 4. `react-native-orientation-locker`
   - **Usage**: Enables screen rotation between landscape and portrait modes.

### 5. `react-native-pip-android`
   - **Usage**: Facilitates a seamless picture-in-picture experience for video playback on Android devices.

### 6. `react-native-svg`
   - **Usage**: Allows the usage of SVG files as components in the React Native application.

### 7. `react-native-video`
   - **Usage**: Essential for running video files within the React Native app.

### 8. `patch-package`
   - **Usage**: Enables app authors to quickly apply and maintain fixes to npm dependencies.

### 9. `postinstall-postinstall`
   - **Usage**: Ensures seamless application of changes made by the author after the package installation.

### 10. `rn-fetch-blob`
   - **Usage**: Download File to your android or ios devices

### 11. `react-native-permissions`
   - **Usage**: To request permissions for various resources on both iOS and Android in a React Native application.    

### 12. `@react-native-firebase/crashlytics`
   - **Usage**:  Log events in your app to be sent with the crash report for context if your app crashes/Every crash is automatically turned into a crash report and sent/.

### 13. `@react-native-firebase/app`
   - **Usage**: Dependency for crashlytics and firebase messaging.

### 14. `@react-native-firebase/messaging`
   - **Usage**:  To receive the notification from FCM. 
   
### 15. `Notifee`
   - **Usage**:  To Display the notification received from FCM.

### 16. `react-native-element-dropdown`
   - **Usage**:  Used for dropdown list view.  

### 17. `react-native-date-picker`
   - **Usage**:  Used for date picking.  

### 18. `react-native-pdf`
   - **Usage**: To display PDF file in react-native

### 19. `react-native-fs`
   - **Usage**: To get file path

### 20. `react-native-file-viewer`
   - **Usage**: Accustomed to launching files with extensions such as xlsx (Excel), docx (Word), etc., in a different application.

### 21. `react-native-audio-recorder-player`
   - **Usage**: To play and record audio file

### 22. `react-native-circular-progress-indicator`
   - **Usage**: Customizable React Native circular progress indicator component used for progress bar. 
   
### 23. `react-native-awesome-slider`
   - **Usage**: Used in rating screen slider for giving rating.

### 24. `react-native-bootsplash`
   - **Usage**: Used for custom splash screen implementation.

### 25. `react-native-document-picker`
   - **Usage**: Used for implementing document picking functionality from device's storage.
  

