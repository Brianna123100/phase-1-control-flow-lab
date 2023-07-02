function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = 'This one is on me!'
  } else if (distance > 400 && distance < 2000) {
    result = "That will be twenty bucks."
  } else if (distance > 2000 && distance < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
 return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response
}