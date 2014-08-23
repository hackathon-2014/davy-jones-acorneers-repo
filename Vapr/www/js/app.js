// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

      var gamesPost = {
          "game" : [
                  {
              Title : 'Younger Scrolls',
              Description : 'Younger Scrolls is a role-playing game (RPG) that incorporates open-ended ' +
                  'gameplay. The player can follow side-quests, interact with NPCs, dispatch ' +
                  'monsters, develop their character, and travel anywhere in the province of ' +
                  'Krogadiil at any time while playing the game (provided the areas are not quest-specific' +
                  ' and otherwise inaccessible when not questing).The game never ends, and the player can ' +
                  'continue playing after completing the main quest. The gameplay includes a "fast travel" ' +
                  'system, in which an icon appears on the game world map every time the player visits a new location.',
              Tag : 5,
              Stars : '5',
                  "Comments" : [{
                      1 : 'This is a wonderful idea for a game, and in need right now' +
                          'I have played many RPG games and they always fall flat in some area.' +
                          'From what I have read in the description, this game covers all the bases.',
                      2 : 'Please make this game. I have not played a good Role Playing Game in a long time.' +
                          'I would spend every waking moment playing this if it was released',
                      3 : 'I do not like RPGs because I am an idiot. You should only make shitty War games' +
                          ' because that is all my little brain can handle. Point click kill man.',
                      4 : 'If it involves killing with swords and magic, then sign me up. I would recommend some' +
                          'that you leave vampires out of the equation though. Vampire\'s don\'t sparkle, they burn.',
                      5 : 'I would love to see dragons tearing people to pieces and destroying towns. Please add dragons.',
                      6 : 'How can a game never end. I hope you have some kind of final boss battle and a conclusion. If not' +
                          'then whats the point'
                          }
                          ],
                  GameId : 1,
                  Twitter : 'https://twitter.com/da_nations',
                  GitHub : 'https://github.com/BrianAcorn',
                  CommentsNumber : 6
              },
              {
                  Title : 'Sportal',
                  Description : 'In Sportal, the player controls the protagonist Chello, , from a first-person' +
                      ' perspective as he is challenged to navigate through a series of rooms using a Sportal' +
                      ' gun. The sportal gun can create two distinct' +
                      ' sportal ends, orange and blue. The sportals create a visual and physical connection between' +
                      ' two different locations in three-dimensional space. Neither end is specifically an entrance' +
                      ' or exit; all objects that travel through one sportal will exit through the other. An important' +
                      ' aspect of the games physics is momentum redirection. As moving objects pass through' +
                      ' sportals, they come through the exit portal at the same direction as the exit portal is facing',
                  Tag : 2,
                  Stars : 5,
                  "Comments" : [{
                      1 : 'What is a sportal? I understand the concept, but you might want to come up with a better name',
                      2 : 'This sounds like an awesome idea for a game. I would definitely buy it. I would think that the' +
                          ' physics for this would be difficult, but the payoff would be a truly unique experience. I\'m' +
                          ' going to keep an eye out for this game',
                      3 : 'I think my kid would love to play a game like this. I would consider buying it for him it was' +
                          'developed. I gave it 5 Stars!'
                  }
                  ],
                  GameId : 2,
                  Twitter : 'https://twitter.com/RyanBarrineau',
                  GitHub : 'https://github.com/xRYANx',
                  CommentsNumber : 3
              },
              {
                  Title : 'Crane Simulator 2025',
                  Description : 'Crains are certainly one of the most complicated systems across the ' +
                      'globe and Crane Simulator 2014 brings just that to your computer screen in high' +
                      ' resolution visuals and loads of cranes. To deliver an authentic experience, you’ll be presented with ' +
                      'cranes that are based on real-world ones. They comprise of the London-Faversham, Donner Pass and Hamburg-Hanover.',
                  Tag : 7,
                  Stars : 1,
                  "Comments" : [{
                      1 : 'To say that this is an awful idea for a game would be a gross understatement. Do not develop' +
                          ' this game or you will go bankrupt',
                      2 : 'I work on a crane all day long and let me just say, it is the most boring job in the world.',
                      3 : 'My 2 year old thinks this sound like a great game. If you make it and it doesn\'t cost too much' +
                          ' I will buy it for him.',
                      4 : 'I love Cranes, I love Cranes, I love Cranes, I love Cranes, I love Cranes, I love Cranes, I love Cranes ' +
                          ' , I love Cranes, I love Cranes',
                      5 : 'Train simulators are fun and I would like to be able to use the Crane simulator to '
                  }
                  ],
                  GameId : 3,
                  Twitter : 'https://twitter.com/cyborgatheart',
                  GitHub : 'https://github.com/RonakR',
                  CommentsNumber : 5
              }
          ],
          "maxId" : [
              {
                  MaxId : 3
              }
          ]
          };
         window.localStorage['gamesPost'] = JSON.stringify(gamesPost);
         var gamesPost = JSON.parse(window.localStorage['gamesPost'] || '{}');
    });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
      .state('app.home', {
          url: "/home",
          views: {
              'menuContent' :{
                  templateUrl: "templates/home.html",
                  controller: "HomeCtrl"
              }
          }
      })

      .state('app.submit', {
          url: "/submit",
          views: {
              'menuContent' :{
                  templateUrl: "templates/submit.html",
                  controller: "SubmitCtrl"
              }
          }
      })
      .state('app.crowdsource', {
          url: "/crowdsource",
          views: {
              'menuContent' :{
                  templateUrl: "templates/crowdsource.html"
              }
          }
      })
      .state('app.idea', {
          url: "/idea",
          views: {
              'menuContent' :{
                  templateUrl: "templates/idea.html"
              }
          }
      })
      .state('app.viewall', {
          url: "/viewall",
          views: {
              'menuContent' :{
                  templateUrl: "templates/viewall.html"
              }
          }
      })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
