$(document).ready(function() {
	function updateClock() {
		var now = moment(),
			second = now.seconds() * 6,
			minute = now.minutes() * 6 + second / 60,
			hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

		new TweenMax('path', 2, {delay: 0, Ease: 'Linear', rotation: '+=6', rotation: '10deg', transformOrigin: '0% 100%'});
	}

	function timedUpdate() {
		updateClock()
		setTimeout(timedUpdate, 1000);
	}

	timedUpdate();
});
