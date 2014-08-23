angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    $ionicModal.fromTemplateUrl('templates/crowdsource.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.crowdsourceModal = modal;
    });

    $ionicModal.fromTemplateUrl('templates/share.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.shareModal = modal;
    });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


    $scope.closeCrowdsource = function() {
        $scope.crowdsourceModal.hide();
    };

    $scope.crowdsource = function() {
        $scope.crowdsourceModal.show();
    };


    $scope.closeShare = function() {
        $scope.shareModal.hide();
    };

    $scope.share = function() {
        $scope.shareModal.show();
    };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HomeCtrl', function($scope){
  $scope.featuredGame = function(){
    //TODO: Add code to get most rated game
    alert('Here you will see the highest rated(featured)game')
  }
})

.controller('SubmitCtrl', function($scope){
  
  
  $scope.gameData = {};
  $scope.doSubmit = function(){
    //get Maxid and make it your new game id
    //add comment and max comment # to new list
    //add that to unserialized gamesPost json
    
    var data = angular.fromJson(window.localStorage['gamesPost']);
    var json =angular.toJson($scope.gameData);
    console.log($scope.gameData);
    console.log(data);
  }
  $scope.tagActive = function(tag){
    tag.isActive = !tag.isActive; 
    $scope.gameData.isActive += '|' + tag.id;
  }
  
  $scope.tags = [
       { title: 'Action', id: 1 },
       { title: 'Adventure', id: 2 },
       { title: 'FPS', id: 3 },
       { title: 'MMO', id: 4 },
       { title: 'Role Playing', id: 5 },
       { title: 'Sports', id: 6 },
       ];
})

.controller('ViewAllCtrl', function($scope){
  var data = angular.fromJson(window.localStorage['gamesPost']);
  $scope.games=data['game'];
  console.log(data['game']);
  
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

    });
