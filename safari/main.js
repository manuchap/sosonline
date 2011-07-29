function load()
{
    dashcode.setupParts();
}

function gohome(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('intro');
    var stackLayout = document.getElementById('header_stackLayout').object;
	stackLayout.setCurrentView('status');
}

function gotut1(event)
{
	statuslight.object.setValue(1);
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tut1');
}


function gotut2(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tut2');
	statuslight.object.setValue(2);
}


function gotut3(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tut3');
	statuslight.object.setValue(3);
}


function gotut4(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tut4');
	statuslight.object.setValue(0);
}


function gotut5(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tut5');
	statuslight.object.setValue(2);
}


function goclip(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('clip');
}



function gotools(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('tools');
}


function gomotivation(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('motivation');
}


function gocommentaires(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('comments');
}


function gocontact(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('contact');
}


function goinit(event)
{
	var indicatorToChange = document.getElementById("statuslight");
		if (indicatorToChange.object.value==0){
			var stackLayout = document.getElementById('main_stackLayout').object;
			stackLayout.setCurrentView('tut4');
		}
		if (indicatorToChange.object.value==3){
			var stackLayout = document.getElementById('main_stackLayout').object;
			stackLayout.setCurrentView('tut3');
		}
		if (indicatorToChange.object.value==1){
			var stackLayout = document.getElementById('main_stackLayout').object;
			stackLayout.setCurrentView('chat');
		    var stackLayout = document.getElementById('header_stackLayout').object;
			stackLayout.setCurrentView('home');
		}
		if (indicatorToChange.object.value==2){
			var stackLayout = document.getElementById('main_stackLayout').object;
			stackLayout.setCurrentView('initchat');
			//send alert
				var pusher = new Pusher('7f47b26baff3b03526e2');
				var channel = pusher.subscribe('Chat');	
				var indicatorToChange = document.getElementById("statuslight");
				channel.bind('statuslight', function(data) {
				indicatorToChange.object.setValue(data);
					if (indicatorToChange.object.value==1) {
						var stackLayout = document.getElementById('header_stackLayout').object;
						stackLayout.setCurrentView('home');
						var stackLayout = document.getElementById('main_stackLayout').object;
						stackLayout.setCurrentView('chat');
					}
				});

		}
}

function goblog(event)
{
	window.open('http://manuchap.online.fr')
}


function gochat(event)
{
    var stackLayout = document.getElementById('main_stackLayout').object;
	stackLayout.setCurrentView('chat');
}
