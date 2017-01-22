'use strict';

angular.module('ConfusionApp')
    .controller('Menucontroller',['$scope','menuFactory',function($scope,menuFactory){
            $scope.tab=1;
            $scope.filtText="";
            $scope.showDetails=false;

            $scope.dishes={};
            menuFactory.getDishes()
            .then(
                    function(response){
                            $scope.dishes=response.data;
                    }
                );

            $scope.select=function(settab){
                $scope.tab=settab;

                if(settab === 2)
                    { $scope.filtText = "appetizer";}
                else if(settab === 3)
                    {$scope.filtText = "mains";}
                else if(settab === 4)
                    {$scope.filtText = "dessert";}
                else
                    {$scope.filtText = "";}
            };
            $scope.isSelected=function(checktab) {
                return (checktab === $scope.tab);
            };
            $scope.toggleDetails=function(){
                $scope.showDetails=!$scope.showDetails;
            };
    }])
    .controller('ContactController',['$scope',function($scope){
            $scope.feedback={mychannel:"",firstName:"",
                            lastName:"",agree:false,email:""
                            };
            var channels=[{value:"tel",label:"Tel."},
                            {value:"Email",label:"Email"}];
            $scope.channels=channels;
            $scope.invalidChannelSelection= false;
    }])
    .controller('FeedbackController',['$scope',function($scope){
            $scope.sendFeedback=function(){
                console.log($scope.feedback);
                if($scope.feedback.agree && ($scope.feedback.mychannel == "")){
                    $scope.invalidChannelSelection=true;
                    console.log('incorrect');
                }
                else{
                    $scope.invalidChannelSelection=false;
                    $scope.feedback={
                        mychannel:"", firstName:"",
                        lastName:"",agree:false,email:""
                    };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
    }])
    .controller('dishDetailController',['$scope','$stateParams','menuFactory', function($scope,$stateParams,menuFactory) {
            //$scope.sortname="";
            $scope.dish = {};
            menuFactory.getDish(parseInt($stateParams.id,10))
            .then(function(response){
                    $scope.dish=response.data;
            });
            
        }])
    .controller('DishCommentController',['$scope',function($scope){

              var yourfeedback={    rating:5,
                                    comment:"",
                                    author:"",
                                    date:""};
              $scope.yourfeedback=yourfeedback;
              
              $scope.submitComment=function(){
                yourfeedback.date=new Date().toISOString();
                $scope.dish.comments.push(yourfeedback);
                $scope.commentForm.$setPristine();
                yourfeedback={ rating:5,comment:"",author:"",date:""};
              };
    }])

    // implement the IndexController and About Controller here
    .controller('IndexController',['$scope' ,'corporateFactory','menuFactory', function($scope,corporateFactory,menuFactory){
            $scope.displaydish={};

            menuFactory.getDish(0)
            .then(function(){
                $scope.displaydish=response.data;
            });
            $scope.weekendpromotion=menuFactory.getPromotion(0);
            $scope.leader=corporateFactory.getLeader(3);
    }])

    .controller('AboutController',['$scope','corporateFactory' , function($scope,corporateFactory){
            $scope.leaders=corporateFactory.getLeaders();
    }])
;