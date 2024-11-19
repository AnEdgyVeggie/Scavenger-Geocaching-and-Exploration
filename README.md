hey there, just wanted to denote some things before you get started on this. Expo is a little weird in terms of how it works, and some stuff may not work right out of the box after pulling this repo. I will mark down some prerequisite stuff for you to do

# TO START
https://docs.expo.dev/build/setup/


## To start, you will need to creat an EAS account (expo application services), and install the eas-cli

https://expo.dev/signup

`npm install -g eas-cli`

This is because even displaying custom fonts isn't available unless you are in 'development mode', which is unavailable outside of using eas. 
Generic convention with expo, is that it sets up a *'web server' much like localhost* that your phone / emulator goes to via IP address, and you do your dev'ing there, but the *'development mode'* will actually install the app to your phone, akin to android studio.

## once you are done, you will need to login to your eas account

`eas login`
Email or username . . . `username / email`
password . . . `password`

## after that, you should be able to run the build command

My build ID is 'aeed6c27-d2a7-4679-9792-4f6034036786'. I am not sure if you can just link to this or not, you are welcome to look it up, otherwise:

`eas build:configure`

`Would you like to automatically create an EAS project for @anedgyveggie/comp3074-project-Group_48? ... yes`
`Which platforms would you like to configure for EAS Build? » All

## Next, you need to create a developmental build:

`eas build --profile development --platform android`

This installs the dev build into the emulator or device, which going back is what android studios does. 
*This step can take a few minutes.*

When the build completes, it will ask you if you want to install it on an emulator > select yes (have the emulator open)

# when the application dev build is complete

Now that the build is complete and installed, you can launch the app
`npm expo start`

after it is started, look under the option '> Press s | switch to {Expo Go || development build }'
if you see 'development build', press 's', wait for it to switch over, then press a
otherwise, just press a

Your app should now boot up into development mode and give you all of the flexibility that expo has to offer.