# You might need to run a few commands to get going here

`npx react-native-asset` *this should make sure that custom fonts load in properly*

`npx expo start -go` *this starts expo in 'go' node rather than development. it is more lightweight, and setting up development mode is like choking an amish boy with his own hat buckle*

# There are packages installed that will cause problems if you are not running in a dev environment.
## to run in a dev env do the following:
- go to https://expo.dev/accounts/anedgyveggie/projects/comp3074-project-Group_48/builds/97a0330b-24cb-4db1-b1e1-5f031dbdf966
- click 'install' and install on your device (you can do this in an emulator as well)
- instead of running the above `npx expo start -go`, run `npx expo start` and check the output to see if you are running in 'go' or 'dev'
- if running in 'go', press 's' to switch to dev
- press 'a' with your emulator running, or device plugged in (your device will need to have USB debugging enabled)

  this this bring up Expo's server finder. See if you can see your server on that screen, and select 'Scavenger'
  The app should boot safely now
