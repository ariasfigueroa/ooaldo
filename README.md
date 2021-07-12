# ooaldo
### Setup
> To install the project and dependencies:
> ```
> yarn
> cd ios
> pod install
> cd ../
> ```   
> If you are running on M1 mac:
> ```
> cd ios
> sudo arch -x86_64 gem install ffi
> arch -x86_64 pod repo update
> arch -x86_64 pod install
> cd ../
> ```
> <sub><sup>Only needed after first pulling project or new dependencies being added.</sub></sup>
>
> TypeScript Compiler:
> ```
> yarn rn-watch
> ```
>Start React Native Environment:
>```
> yarn start 
>```
> Pulls in the translations from poeditor:
>```
> yarn update-translations 
>```
### Running iOS
> To start iOS simulator and install app: 
>```
> npm run ios 
>```
> <sub><sup>This will also automatically start the emulator if it's not running or install the app to an already running iOS emulator.</sub></sup>
### Running Android - On Device
> Ensure that USB debugging is enabled on the device. Also recommended is to ensure the device is in file transfer mode.
>
> Connect device to your laptop or PC:
>```
> adb devices
>``` 
> <sub><sup>If prompted to authorize your machine to access the phone approve this.</sup></sub>
> 
> This will build and deploy the application to the device.
>```
> npm run android
>```
> <sub><sup>If prompted by Android to allow overlays, enable this and then restart the app. This allows the phone to show debug overlay messages during development.</sub></sup>
### Running android - emulator
> Start emulator manually:
>```
> ~/Library/Android/sdk/tools/emulator -avd <NAME_OF_DEVICE> 
>```
> <sub><sup>eg : ~/Library/Android/sdk/tools/emulator -avd Nexus_5X_API_26</sub></sup>
>
> To start android simulator and install app:
>```
> npm run android
>```
### Reloading and dev menu
> To access the device app menu:
>```
>adb shell input keyevent 82
>```
> To reload an RN app instantly: 
>```
> adb shell input text "RR"
>```
### Fastlane integration - iOS
> In order to run fastlane, there are some pre-requisites that need to be completed: 
>
> Create environment variables: 
>```
> export LOGIN_PROFILE=<your_profile_name>
> export CODEBUILD_BUILD_NUMBER=1
> export VERSION_NAME=0.0.1
> export PROJECT_DIR_NAME=hardrock-native-client
> export BUILD_DIR=~/build
> export ANDROID_SDK_ROOT=~/Library/Android/sdk
> export DEFAULT_BRANCH=master
>```
> For the initial setup only, make sure openssl is installed for ios:
>```
> sudo gem install openssl  -- --with-openssl-dir=/opt/homebrew/opt/openssl
>```
> To run fastlane:
>```
> cd ios 
> bundle install 
> pod install 
> yarn rn-build 
> bundle exec fastlane publish_testflight
>```
### Fastlane integration - Android
> As we did in iOS in order to run fastlane, same pre-requisites need to be completed: 
>
> Create (make sure) environment variables: 
>```
> export LOGIN_PROFILE=<your_profile_name>
> export CODEBUILD_BUILD_NUMBER=1
> export VERSION_NAME=0.0.1
> export PROJECT_DIR_NAME=hardrock-native-client
> export BUILD_DIR=~/build
> export ANDROID_SDK_ROOT=~/Library/Android/sdk
> export DEFAULT_BRANCH=master
>```
> To run fastlane:
>```
> cd android
> bundle install
> yarn rn-build
> bundle exec fastlane publish_playstore
>```
### Automated build - pipeline - on EC2
> Pre-requisites: 
> make sure the following software/packages are installed: 
>
> - brew
> - yarn
> - ruby 
> - bundle 
> - react native cli
> - fastlane
> - python
> - git-remote-codecommit
> - java
> - android studio
> - android command line tools
> - xcode
> - xcode command tools
>
> To setup aws profile, run: 
>```
> aws configure --profile <your_profile_name>
>```
> To complete the setup, aws is going to ask for the following information:
> - aws_access_key_id: <your_access_key> - empty for ec2
> - aws_secret_access_key: <your_secret_access_key> - empty for ec2
> - region: us-east-1
> - output: json
>
> Before running fastlane, create the following environment variables: 
>```
> export LOGIN_PROFILE=<your_profile_name>
> export CODEBUILD_BUILD_NUMBER=1
> export VERSION_NAME=0.0.1
> export PROJECT_DIR_NAME=hardrock-native-client
> export BUILD_DIR=~/build
> export ANDROID_SDK_ROOT=~/Library/Android/sdk
> export DEFAULT_BRANCH=master
>```
>
> Then clone/clean the project for first time running:
>``` 
> sh $BUILD_DIR/$PROJECT_DIR_NAME/scripts/clone.sh
>```
> To run build-pipeline:
>```
> sh $BUILD_DIR/$PROJECT_DIR_NAME/scripts/build-pipeline.sh
>```
> For build-pipeline options: 
>```
>sh $BUILD_DIR/$PROJECT_DIR_NAME/scripts/build-pipeline -h
>```
