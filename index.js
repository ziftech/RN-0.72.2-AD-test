// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { Instrumentation } from '@appdynamics/react-native-agent';



// AppRegistry.registerComponent(appName, () => App);


/**
* @format
*/
 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  Instrumentation,
  InteractionCaptureMode,
  LoggingLevel,
} from '@appdynamics/react-native-agent';
 
async function initializeApp() {
  try {
    await Instrumentation.start({
      appKey: '',
      collectorURL: '',
      loggingLevel: LoggingLevel.VERBOSE,
      anrDetectionEnabled: true,
      //interactionCaptureMode: InteractionCaptureMode.NotAll,
      interactionCaptureMode: InteractionCaptureMode.None.with(
        InteractionCaptureMode.ButtonPressed,
        InteractionCaptureMode.TextFieldSelected
    ),
      excludedURLPatterns: [
        ''
      ]
      
    });
 
    console.log('AppD Instrumentation started successfully');

  } catch (error) {
    console.error('Error during initialization:', error);
  }
}
 
initializeApp();
 
AppRegistry.registerComponent(appName, () => App);