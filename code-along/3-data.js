function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let profile = {
    name: {first: 'Dan', last: 'Sekelik'},
    location: { city: 'Chicago', state: 'Illinois' },
    timeline: [
      { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
      { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
      { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
    ]
  }

  let output = `${profile.timeline[0].what}`
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
  
  // let profile = {
  //   name: 'Dan',
  //   location: 'Evanston',
  //   status: 'Staying alive and awake'
  // }

  // let burger = ['buns','ground beef','tacos']

  // template literals support HTML too!
  // output = `
  //   <div class="text-4xl">${profile.status}</div>
  // `
  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}