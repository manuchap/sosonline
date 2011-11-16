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
			$.get('../mail.py');
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

var fadeEffect=function(){
	return{
		init:function(id, flag, target){
			this.elem = document.getElementById(id);
			clearInterval(this.elem.si);
			this.target = target ? target : flag ? 100 : 0;
			this.flag = flag || -1;
			this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
			this.si = setInterval(function(){fadeEffect.tween()}, 20);
		},
		tween:function(){
			if(this.alpha == this.target){
				clearInterval(this.si);
			}else{
				var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
				this.elem.style.opacity = value / 100;
				this.elem.style.filter = 'alpha(opacity=' + value + ')';
				this.alpha = value
			}
		}
	}
}();

function fadein(event)
{
    fadeEffect.init('fade', 1);
}

function fadeout(event)
{
    fadeEffect.init('fade', 0);
}

