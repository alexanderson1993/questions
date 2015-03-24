if (Meteor.isClient) {


  Template.main.helpers({
    page: function () {
      return shuffle(questions);
    },

  });

  Template.header_page.created = function(){
  };
  Template.header_page.helpers({
   backgroundColor: function(){
    return Please.make_color();
  },
});
  Template.question_page.helpers({
   backgroundColor: function(){
    return Please.make_color();
  },
  active: function(){
    return this.active;
  }
})
  Template.question_page.events({
    'click button':function(e,t){
      t.find('.page').classList.add('active')
    }
  })
  Template.header_page.events({
    'click button':function(e,t){
     t.find('.page').classList.add('active')
   }
 })
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var questions = [
{content:"What are you most afraid to desire?"},
{content:"Why do you do what you do?"},
{content:"Where do you find yourself most vulnerable?"},
{content:"What is your deepest shame?"},
{content:"What do you do that is not socially acceptable?"},
{content:"What is one experience you’ve had that you don’t believe anyone else has ever experienced before?"},
{content:"What is a belief you would be willing to die for?"},
{content:"What would it look like if you peeled away your mask?"},
{content:"What would be the most difficult decision you’ve ever made?"},
{content:"If today were the last day of your life, would you do what you are about to do today? If not, what would you do instead?"},
{content:"What is something you would happily fail at?"},
{content:"When do you feel you can surrender yourself completely?"},
{content:"What worries you most about the future?"},
{content:"What are you holding onto that you need to let go of?"},
{content:"What is your self-talk like?"},
{content:"What is the biggest mistake you have ever made?"},
{content:"Why do you matter?"},
{content:"Are you happy with yourself?"},
{content:"What is the time when you were most afraid? Heartbroken? Lonely?"},
{content:"What is something that you pretend to understand when you really don’t?"},
{content:"What’s the number one change you need to make in your life in the next twelve months?"},
{content:"When did you not speak up when you should have?"},
{content:"In what way are you your own worst enemy?"},
{content:"What life do you think you are worth?"},
{content:"What do you wish you didn’t know?"},
{content:"What have you given up on?"},
{content:"What mistake do you make over and over again?"},
{content:"What is the biggest thing that has been draining your happiness?"},
{content:"What has your inner voice been telling you lately?"},
{content:"What is worse than death to you?"},
{content:"What do you hate being judged for?"},
{content:"What do you wish you could erase from the past?"},
{content:"When was a time where you took someone for granted and you wish you hadn’t?"},
{content:"In what way are you stronger than you look?"},
{content:"What do people thank you for most often?"},
{content:"What is always worth the wait?"},
{content:"What makes your life worth living?"},
{content:"What do you love most about your life?"},
{content:"In what way do you need a second chance?"},
{content:"What in life frustrates you the most?"},
{content:"What is the best piece of advice you’ve ever gotten?"},
{content:"In what way are you above average?"},
{content:"What kind of love do you believe you deserve?"},
{content:"How do you show someone you love them?"},
{content:"How do you define love?"},
{content:"How do you define poverty?"},
{content:"How do you define illness?"},
{content:"What is the biggest lie you have told yourself?"},
{content:"What is the biggest lie you have ever told someone?"},
{content:"If you had $100 million in the bank, what would your day look like?"},
{content:"What kind of negativity do you struggle to defend yourself against?"},
{content:"What helps you persevere when you feel like giving up?"},
{content:"What is a belief that has slowed you down and held you back in life?"},
{content:"Describe a situation that had been stealing your happiness."},
{content:"What would you most like to forgive, but can’t allow yourself to?"},
{content:"Where is the one place in the world that you like to escape to?"},
{content:"What is your response to someone says they hate you?"},
{content:"What do you wish people could understand about you?"},
{content:"What do you most apologize for?"},
{content:"What are you dealing with right now?"},
{content:"How would you define loneliness?"},
{content:"What seems the most real to you?"},
{content:"What is one thing that is unique and true about you?"},
{content:"What is the biggest risk you have ever taken in your life?"},
{content:"What gives you a reason to smile?"},
{content:"What is something your mom once said that you will never forget?"},
{content:"What should you never do to yourself?"},
{content:"What is something interesting about you that almost no one knows?"},
{content:"What are you most proud of yourself for?"},
{content:"What is the best compliment someone can give you?"},
{content:"What is the most valuable thing you have ever lost?"},
{content:"When do you think about what you are thinking about?"},
{content:"What could you always use more of?"},
{content:"What do you wish you did sooner?"},
{content:"What are you most afraid to talk about? Why?"},
{content:"What disappoints you the most about life?"},
{content:"What is your back-up plan if the unthinkable happens?"},
{content:"If you were only allowed to keep one memory with you for the rest of your life, what would it be?"},
{content:"What’s something that you’re glad you’ll never have to do again?"},
{content:"When do you lose yourself in what you are doing?"},
{content:"What is one thing that changes people?"},
{content:"What would your version of hell look like?"},
{content:"What would your version of heaven look like?"},
{content:"What has been the worst struggle in your life?"},
{content:"What does your inner child want?"},
{content:"What is something you would love to do so much that you would be okay with failing at."},
{content:"What are you uncertain about?"},
{content:"What are your best techniques for making someone smile?"},
{content:"What is the nicest thing you have done for a complete stranger?"},
{content:"Where are you playing small in your life right now?"},
{content:"What is something where you have a hard time asking for help?"},
{content:"How did you feel the last time you were completely alone?"},
{content:"What made you cry last?"},
{content:"Where in the world are you the happiest?"},
{content:"Where in the world are you the saddest?"},
{content:"When have you physically/emotionally felt weak?"},
{content:"Do you feel that you have already reached your peak?"},
{content:"What are you doing when you feel most alive?"},
{content:"Who are you surrounded by when you feel most at peace?"},
{content:"What can make you laugh so hard you cry?"}
]
