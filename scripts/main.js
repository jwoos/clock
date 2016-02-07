$(document).ready(function() {
	var temp = moment(),
		tempSecond = temp.seconds() * 6,
		tempMinute = temp.minutes() * 6 + second / 60,
		tempHour = ((temp.hours() % 12) / 12) * 360 + 90 + minute / 12;
	$('#minute-hand').css('transform', 'rotateZ(' + tempMinute + 'deg)');
	$('#hour-hand').css('transform', 'rotateZ(' + tempHour + 'deg)');
	$('#second').css('transform', 'rotateZ(' + tempSecond + 'deg)');

	function updateClock() {
		var now = moment(),
			second = now.seconds() * 6,
			minute = now.minutes() * 6 + second / 60,
			hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

		$('#minute-hand').css('transform', 'rotateZ(' + minute + 'deg)');
		$('#hour-hand').css('transform', 'rotateZ(' + hour + 'deg)');
		var animation = new TimelineMax();
		animation.to('#second-hand', 0, {className: 'float', ease: Linear.easeNone, transformOrigin: '0% 100%'})
		         .to('#second-hand-path', 0.3, {delay: 0, ease: Linear.easeNone, rotation: '+=6', transformOrigin: '0% 100%'})
		         .to('#second-hand', 0, {className: '', ease: Linear.easeNone, transformOrigin: '0% 100%'})
	}

	function timedUpdate() {
		updateClock()
		setTimeout(timedUpdate, 1000);
	}

	setTimeout(timedUpdate, 1000);
});
