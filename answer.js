// 2. How would you sanitize user input before further processing?



// 3. Write a javascript function that takes in records (an array of all the database records), an action, and a start_time and end_time time window and returns all user ids that performed that action within that time window.

var records = [
  {user_id: 1, device: "Windows 10", action: "start", time: 100},
  {user_id: 2, device: "OSX 15.4", action: "start", time: 200},
  {user_id: 1, device: "iPhone 8s", action: "start", time: 250},
  {user_id: 1, device: "Windows 10", action: "stop", time: 370},
  {user_id: 1, device: "iPhone 8s", action: "stop", time: 410},
  {user_id: 2, device: "OSX 15.4", action: "stop", time: 490},
  {user_id: 2, device: "OSX 15.4", action: "stop", time: 500},
  {user_id: 3, device: "Android 9.1", action: "start", time: 700}
]

function getUsers(records, action, start_time, end_time) {
  result = records.filter(obj => obj.action == action && (obj.time >= start_time && obj.time < end_time)) // filter out the records that perform the action within the time window
  if(result.length == 0) {
    return 'No records found' // edge case: if there's no record
  }

  var ids = []
  result.forEach((item) =>{ ids.push(item.user_id) }) // push only the user ids into a new array
  return [...new Set(ids)] // use Set to remove duplicate ids
}

console.log(getUsers(records, "stop", 490, 600)) // return [2]
console.log(getUsers(records, "start", 700, 900)) // return [3]
console.log(getUsers(records, "start", 1000, 1200)) // return 'No records found'



// 4. Write a javascript function that takes in a user_id and an array of all the database records, and reports a user’s total “unique” playback time in seconds.

function getPlaybackTime(user_id, records) {
  result = records.filter(obj => obj.user_id == user_id) // filter out the user's data by the id
  if(result.length == 0) {
    return 'No users found' // edge case: if users not found
  }
  return result[result.length - 1].time - result[0].time // calculate the playback time
}

console.log(getPlaybackTime(1, records)) // return 310
console.log(getPlaybackTime(2, records)) // return 300
console.log(getPlaybackTime(5, records)) // return 'No users found'


// 5. Write inline comments for your functions where appropriate.


// 6. Identify any possible shortcomings or limitations of both your functions if any.



// edge cases: Both will return undefined if the array is empty.
