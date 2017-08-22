var getSleepHours = function(day) {
  if (day === 'monday') {
    return 8;
  }
  else if (day === 'tuesday') {
    return 8;
  }
  else if (day === 'wendsday') {
    return 8;
  }
  else if (day === 'thursday') {
    return 8;
  }
  else if (day === 'friday') {
    return 8;
  }
  else if (day === 'saturday') {
    return 8;
  }
  else {
    return 8;
  }
}

var getActualSleepHours = function() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

var getIdealSleepHours = function() {
 var idealHours = 7;
  return idealHours * 7;
}

var calculateSleepDebt = function() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}

if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}

if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
}
}

calculateSleepDebt();
