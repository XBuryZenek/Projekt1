app.controller('mainController', ['$scope', 'mainService', '$routeParams', function($scope, mainService, $routeParams) {
 // var positionmap = [ [ 450, 700 ], [ 269, 676 ], [ 232, 591 ], [ 213, 550 ], [ 203, 530 ], [ 195, 502 ], [ 187, 485 ], [ 176, 476 ], [ 126, 481 ], [ 175, 454 ], [ 155, 435 ], [ 171, 419 ], [ 215, 407 ],
 //]; 
var positionmap = [ [ 450, 700 ], [ 269, 676 ], [ 232, 591 ], [ 213, 550 ], [ 203, 530 ], [ 195, 502 ], [ 187, 485 ], [ 176, 476 ], [ 126, 481 ], [ 175, 454 ], [ 155, 435 ], [ 171, 419 ], [ 215, 407 ],
 ]; 
 var sala;
 sala=331;
 switch (sala){
	case 23:		 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 640, 600 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ], [ 680, 640 ]
		 ]; 
		 break;
	case 329:
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 600 ], [ 590, 560 ], [ 590, 560 ],[ 590, 560 ],[ 590, 560 ],[ 590, 560 ],[ 590, 560 ],[ 590, 560 ],[ 590, 560 ],[ 590, 560 ]
		 ];
		 break;
		 
	case 330:
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 600 ], [ 680, 585 ], [ 650, 550 ],[ 650, 550 ],[ 650, 550 ],[ 650, 550 ],[ 650, 550 ],[ 650, 550 ],[ 650, 550 ],[ 650, 550 ]
		 ];
		  break;
	case 331:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 680, 510 ],[ 680, 510 ],[ 680, 510 ],[ 680, 510 ],[ 680, 510 ],[ 680, 510 ],[ 680, 510 ],[ 680, 510 ]
		 ];
		  break;
	case 339:
		   var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 750, 560 ],[ 770, 595 ],[ 770, 595 ],[ 770, 595 ],[ 770, 595 ],[ 770, 595 ],[ 770, 595 ],[ 770, 595 ]
		 ];
		  break;
	case 28:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 800, 550 ],[ 850, 575 ],[ 850, 575 ],[ 850, 575 ],[ 850, 575 ],[ 850, 575 ],[ 850, 575 ],[ 850, 575 ]
		 ];
		  break;
	case 22:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 930, 550 ],[ 930, 550 ],[ 930, 550 ],[ 930, 550 ],[ 930, 550 ],[ 930, 550 ],[ 930, 550 ]
		 ];
		  break;
	case 352:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 990, 500 ],[ 1020, 520 ],[ 1020, 520 ],[ 1020, 520 ],[ 1020, 520 ],[ 1020, 520 ],[ 1020, 520 ]
		 ];
		  break;
	case 354:
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1050, 480 ],[ 1080, 510 ],[ 1080, 510 ],[ 1080, 510 ],[ 1080, 510 ],[ 1080, 510 ],[ 1080, 510 ]
		 ];
		  break;
	case 355:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1090, 460 ],[ 1110, 500 ],[ 1110, 500 ],[ 1110, 500 ],[ 1110, 500 ],[ 1110, 500 ],[ 1110, 500 ]
		 ];
		  break;
	case 4:
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1050, 470 ],[ 1020, 430 ],[ 1020, 430 ],[ 1020, 430 ],[ 1020, 430 ],[ 1020, 430 ],[ 1020, 430 ]
		 ];
		  break;
	case 357:
		   var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1110, 460 ],[ 1100, 420 ],[ 1100, 420 ],[ 1100, 420 ],[ 1100, 420 ],[ 1100, 420 ],[ 1100, 420 ]
		 ];
		  break;
	case 358:
			var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1210, 430 ],[ 1265, 470 ],[ 1265, 470 ],[ 1265, 470 ],[ 1265, 470 ],[ 1265, 470 ],[ 1265, 470 ]
		 ];
		  break;
	case 359:
		   var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1290, 420 ],[ 1360, 440 ],[ 1360, 440 ],[ 1360, 440 ],[ 1360, 440 ],[ 1360, 440 ],[ 1360, 440 ]
		 ];
		  break;
	case 30:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [ 310, 660  ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ]
		 ];
		  break;
	case 'sek' :
		var sekretariat=[ [ 450, 700 ], [  420,640 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 640 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ], [ 315, 695 ]
		 ];
		  break;
	 case 309:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [215, 555 ], [215, 555 ], [215, 555 ], [215, 555 ], [215, 555 ], [215, 555 ], [215, 555 ], [215, 555 ]
		 ];
		  break;
	case 311:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [220, 520 ], [200, 530 ], [200, 530 ], [200, 530 ], [200, 530 ], [200, 530 ], [200, 530 ], [200, 530 ]
		 ];
		  break;
		////
	case 312:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [225, 502 ], [193, 507 ], [193, 507 ], [193, 507 ], [193, 507 ], [193, 507 ], [193, 507 ], [193, 507 ]
		 ];
		  break;
	case 313:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [216, 482 ], [185, 490 ], [185, 490 ], [185, 490 ], [185, 490 ], [185, 490 ], [185, 490 ], [185, 490 ]
		 ];
		  break;
	case 314:	 
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [200, 462 ], [176, 470 ], [176, 470 ], [176, 470 ], [176, 470 ], [176, 470 ], [176, 470 ], [176, 470 ]
		 ];
		  break;
	case 315:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [200, 462 ], [127, 479 ], [127, 479 ], [127, 479 ], [127, 479 ], [127, 479 ], [127, 479 ], [127, 479 ]
		 ];
		  break;
	case 316:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [195, 450 ], [172, 453 ], [172, 453 ], [172, 453 ], [172, 453 ], [172, 453 ], [172, 453 ], [172, 453 ]
		 ];
		  break;
	case 'Sem':
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [188, 431 ], [159, 435 ], [159, 435 ], [159, 435 ], [159, 435 ], [159, 435 ], [159, 435 ], [159, 435 ]
		 ];
		  break;
	case 'PMK':
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [188, 431 ], [172, 425 ], [172, 425 ], [172, 425 ], [172, 425 ], [172, 425 ], [172, 425 ], [172, 425 ]
		 ];
		  break;
	case 394:	 
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [188, 431 ], [213, 410 ], [213, 410 ], [213, 410 ], [213, 410 ], [213, 410 ], [213, 410 ], [213, 410 ]
		 ];
		  break;
	case 395:	 
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [188, 431 ], [281, 395 ], [281, 395 ], [281, 395 ], [281, 395 ], [281, 395 ], [281, 395 ], [281, 395 ]
		 ];
		  break;
	case 396:	 
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [188, 431 ], [355, 375 ], [355, 375 ], [355, 375 ], [355, 375 ], [355, 375 ], [355, 375 ], [355, 375 ]
		 ];
		  break;
	case 'GAJ':	 
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [200, 462 ], [230, 450 ], [230, 450 ], [230, 450 ], [230, 450 ], [230, 450 ], [230, 450 ], [230, 450 ]
		 ];
		  break;
	case 'PIUE':
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [216, 482 ], [244, 472 ], [244, 472 ], [244, 472 ], [244, 472 ], [244, 472 ], [244, 472 ], [244, 472 ]
		 ];
		  break;
	case 321:	 
		var positionmap=[ [ 450, 700 ], [  420,640 ], [  310, 660 ],  [ 270, 590 ], [ 245, 545 ], [225, 502 ], [255, 487 ], [255, 487 ], [255, 487 ], [255, 487 ], [255, 487 ], [255, 487 ], [255, 487 ]
		 ];
		  break;
	case 327:
		 var positionmap=[ [ 450, 700 ], [  420,640 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ], [ 426, 560 ]
		 ];
		  break;
	case 363:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1150, 410 ],[ 1150, 410 ],[ 1150, 410 ],[ 1150, 410 ],[ 1150, 410 ]
		 ];
		  break;
	case 364:	 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1150, 390 ],[ 1135, 385 ],[ 1110, 385 ],[ 1110, 385 ],[ 1110, 385 ]
		 ];
		  break;
	case 365:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1110, 370 ],[ 1080, 375 ],[ 1080, 375 ],[ 1080, 375 ],[ 1080, 375 ]
		 ];
		  break;
	case 367:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1065, 350 ],[ 1030, 355 ],[ 1030, 355 ],[ 1030, 355 ],[ 1030, 355 ]
		 ];
		  break;
	case 369:	 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1015, 325 ],[ 980, 330 ],[ 980, 330 ],[ 980, 330 ],[ 980, 330 ]
		 ];
		  break;
	case 372:	 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1015, 325 ],[ 950, 300 ],[ 930, 300 ],[ 930, 300 ],[ 930, 300 ]
		 ];
		  break;
	case 370:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 975, 315 ],[ 940, 320 ],[ 940, 320 ],[ 940, 320 ],[ 940, 320 ]
		 ];
		  break;
	case 373:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1015, 325 ],[ 920, 285 ],[ 900, 290 ],[ 900, 290 ],[ 900, 290 ]
		 ];
		  break;
	case 375:	 
		   var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1015, 325 ],[ 900, 280 ],[ 840, 290 ],[ 825, 270 ],[ 825, 270 ]
		 ];
		  break;
	case '375a':	 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1015, 325 ],[ 900, 280 ],[ 867, 270 ],[ 867, 270 ],[ 867, 270 ]
		 ];
		  break;
	case 390:	 
		 var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1180, 410 ],[ 1205, 385 ],[ 1205, 385 ],[ 1205, 385 ],[ 1205, 385 ]
		 ];
		  break;
	case 391:	 
		  var positionmap=[ [ 450, 700 ], [  530, 630 ], [  580, 610  ], [ 600, 599 ], [ 700, 580 ], [ 890, 520 ],[ 1120, 460 ],[ 1200, 430 ],[ 1152, 390 ],[ 1180, 370 ],[ 1180, 370 ],[ 1180, 370 ],[ 1180, 370 ]
		 ];
		 break;
	default:
		text="Nie ma takiej sali"; 
		 
 }
 
/*punkty na mapie*/ 
 mainService.success(function(data) {
    
    var i, points = [];
    for (i = 0; i < data.data.length; i = i + 1) {
        points.push(positionmap[data.data[i] - 1]);
    }
    $scope.data = points;
  });
}]);
