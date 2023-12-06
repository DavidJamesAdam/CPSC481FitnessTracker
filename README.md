# CPSC481FitnessTracker
Our implementation of our designs from Assignment 01 in CPSC 481 - Human-Computer Interaction

# TO RUN
cd CPSC481FITNESSTRACKER
cd FitTech
npm install
npm start

Adam, David
 30111821
david.adam1@ucalgary.ca

Ali Khan, Momin
30087388 
mohammed.alikhan@ucalgary.ca

Graham, Parker Michael
30120927
parker.graham1@ucalgary.ca

Nyud, Rayner
30120995
rayner.nyud@ucalgary.ca

Vadlamudi, Vihari 
30123338
vihari.vadlamudi@ucalgary.ca

# What functions we implemented
We have 6 main functions in our prototype:
- Create a new workout
- Create a new exersice
- Log workout info
- Track progress
- Interact with the community
- Settings that would allow the user to change info such as passwords and request help

# Walkthrough
### For creating a workout:
1. From workout screen, click "Workouts"
2. The list will be empty, click the plus button to create a new workout
3. When typing in the name of the workout, "Chest Day" should be entered, description is optional
4. Click the checkmark in the bottom left
5. Feel free to view category view or list view, but "Chest category" is what is functional
6. When selecting from category view, select "Chest" category
7. This will bring you to a menu with chest exercises, click the "+" icon on the top right of the benchpress item, which will add an exercise to your list.
8. Currently cannot add more exercises, but theoretically, the processes would be the exact same; click the plus icon, select an exercise to add it to the workout
9. You can delete an exercise by clicking the red garbage can. There will be a popup with a green check mark and a red x. Click the green check mark to delete, or click out of the popup to cancel. We were just having trouble getting the red x to cancel the delete, something that can be fixed if given more time
10. Regardless of deleting or not, click the finish icon in the bottom right corner to finish creating a workout
11. You will be redirected to the workout list with the newly created workout

### For creating an exercise
1. 

### For logging information during a workout


### For tracking progress
1. Click small graph icon (centre bottom icon)
2. From here you can check previous workouts
3. Click "View" under the first chest day (Nov 22nd 2023)
4. Here the user can see their progress from that workout
5. If there are a lot of exercises, user can scroll to see rest of exercises
6. To go back to progress menu, just click back button on top left of screen

### For interacting with the community
1. Click grou of people icon (second from right)
2. Click on the top post (Jenna)
3. You'll be brought to Jenna's workout that she shared
4. Click blue back button on top left of screen to go back to main community screen
5. Click "plus" icon in top right corner to share workout
6. Enter the kind of workout, the workout target you achieved, and how long your workout was
7. Click paper airplane icon in top right to post workout

### For adjusting settings
The user can reset their password two different ways through "Account", from the app or through "forgot password" function, and they can send a message to the support team

For changing password:
1. From Settings page (gear icon, bottom right) click account
2. Click change password
3. From here you can click cancel, which will bring you back to the account page, or enter in your current password and a new password, then click save changes
4. You will be prompted with a popup confirming your password has been changed
5. Click the green check mark
6. You will be redirected back to the Account page

If password is forgotten:
1. From Settings page (gear icon, bottom right) click account
2. Click "Forgot Password"
3. From here, you can click "cancel" which will redirect you back to the account page, or enter in your email can click "Save Changes"
4. You will be prompted with a popup confirming an email has been sent
5. Click Green check mark
6. You will be redirected by the "Account" page

To send a help request:
1. From Settings page (gear icon, bottom right) click help
2. From here, you can click cancel to return ro main setting page, or enter your Name, email, and message you have for support team, and click send
3. You will be prompted with a popup confirming your message has been sent
4. Click the green checkmark
5. You will be redirected back to the main settings page
