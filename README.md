# Grip Tech Test

### Q1. Given the following sample screen, create a simple responsive mock up of this imageusing html and css.

The given example:
![example](example.png)

The mockup:
![mockup](mockup.png)

Getting Started:
- Clone the repo
- Open `image_mockup/index.html` file on the browser


### Q2 - Q5 The answers can be found in `answer.js` file.

### Q6. Identify any possible shortcomings or limitations of both your functions if any.

`getUsers` function:
- It doesn't return the detail information for each record, which means we won't find out how many times each user performs the action or what device they use.

`getPlaybackTime` function:
- For the second function, if we only calculate the unique time between the first and the last action, then it would include the time period that is not playing the video between actions. 
- Also, it would have a problem if the action of the last record is 'start' rather than 'stop', then the calculation will include the time between the record and its previous one. 
- It cannot specify what device the users use to play the video. It would be better to return playback time based on different devices. This way, the time calculation will be more precise.

Edge cases are considered in the functions when there is no matching data. 

