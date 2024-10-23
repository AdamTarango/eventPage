const addEvent = (event) => {
  main = document.querySelector(`main`)
  eventText = `<h2>${event.name}</h2>
  <h3> ${event.location} </h3>
  <p>${event.description}</p>
  <time>${(event.date.valueAsDate)} Time<time>`;
  main.innerHTML += eventText
}
// const getData = async() => {
  
//   const events = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-CPU-RM-WEB-PT/recipes`)
//   const eventData = await events.data
//   console.log(events)
//   return eventData

// }
(async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-CPU-RM-WEB-PT/events`);
  const events = await response.json();
  console.log(events.data)
  events.data.forEach(event => {
    addEvent(event)
    
  });
  submitButton = document.querySelector(`button`)
  submitButton.addEventListener('click', event =>{
    event.preventDefault();
    const newEvent = {};
    newEvent.name = document.querySelector(`#title`).value;
    newEvent.description = document.querySelector(`#description`).value
    newEvent.location = document.querySelector(`#location`).value
    newEvent.date = document.querySelector(`#time`)
    addEvent(newEvent)
  })
})();
