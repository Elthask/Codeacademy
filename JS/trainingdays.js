//global scopes

const getAllEvents = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
}
/* this is used a few places and it is vulnerable */ 

const getRandomEvent = () => {
  const allEvents = getAllEvents();
  
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
};

const getEventActivities = event => {
  const allEvents = getAllEvents();

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  let activities;
  if (event === 'Marathon') {
	activities = ['Running'];

  } 
  if (event === 'Triathlon') {
	activities = ['Running', 'Cycling', 'Swimming'];

  } 
  if (event === 'Decathlon') {
  activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];

  }
  
};

const getDaysToTrain = event => {
  
  const allEvents = getAllEvents();
  
  if (!allEvents.includes(event)) {
    return null; 
  }
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

const getEventMessage = () => {
  const myEvent = getRandomEvent();
  
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');
}

getRandomEvent();
getEventMessage();
