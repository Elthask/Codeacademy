let allEvents;
let event;
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

/* this is used a few places and it is vulnerable */ 

const getRandomEvent = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  event = allEvents[Math.floor(Math.random() * allEvents.length)];
};


const getEventActivities = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  if (event === 'Marathon') {
    const activities = ['Running'];
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    const activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    const activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

const getDaysToTrain = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  return eventTrainingTimes[event];
};


getRandomEvent();
console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');
