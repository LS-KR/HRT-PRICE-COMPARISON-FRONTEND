window.addEventListener('DOMContentLoaded', function () {
	var e = new XMLHttpRequest();
	e.open('get', ''),
		e.addEventListener('load', function () {
			var t = document.createElement('canvas').getContext('2d');
			t.font = '1rem Consolas';
			var n = [],
				o = document.querySelector('div#container');
			e.responseText.split('\n').forEach(function (e, t) {
				(n[t] = []),
					e.split(',').forEach(function (e) {
						n[t].push(e);
					});
			}),
				n.pop();
			var a = [];
			n.forEach(function (e, n) {
				(t.font = 0 === n ? '1rem Consolas bold' : '1rem Consolas'),
					e.forEach(function (e, n) {
						a[n] || (a[n] = 0);
						var o = t.measureText(e).width + 10;
						o > a[n] && (a[n] = o);
					});
			}),
				n.forEach(function (e) {
					var t = document.createElement('div');
					t.classList.add('row'),
						e.forEach(function (e, n) {
							var o = document.createElement('div');
							o.classList.add('cell'), (o.innerText = e), (o.style.width = a[n] + 'px'), t.appendChild(o);
						}),
						o.appendChild(t);
				});
		}),
		e.send();
});
