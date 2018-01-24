window.onload = function () {
	var scool = document.getElementById("one");
	var mscool = document.getElementById("mscool");
	var bg = document.getElementById("BGblur");
	var obu = document.getElementById("two");
	var mObu = document.getElementById("mObu");
	var parent = document.getElementById("three");
	var mparent = document.getElementById("mparent");
	var fitness = document.getElementById("four");
	var mfitness = document.getElementById("mfitness");
	var kids = document.getElementById("five");
	var mkids = document.getElementById("mkids");
	var master = document.getElementById("six");
	var mmaster = document.getElementById("mmaster");


	scool.onclick = function () {
		bg.style.display = "block";
		mscool.style.display = "block";
	}
	obu.onclick = function () {
		bg.style.display = "block";
		mObu.style.display = "block";
	}
	parent.onclick = function () {
		bg.style.display = "block";
		mparent.style.display = "block";
	}
	fitness.onclick = function () {
		bg.style.display = "block";
		mfitness.style.display = "block";
	}
	kids.onclick = function () {
		bg.style.display = "block";
		mkids.style.display = "block";
	}
	master.onclick = function () {
		bg.style.display = "block";
		mmaster.style.display = "block";
	}
	window.onclick = function (event) {
		if (event.target == bg) {
			bg.style.display = "none";
			mscool.style.display = "none";
			mObu.style.display = "none";
			mparent.style.display = "none";
			mfitness.style.display = "none";
			mmaster.style.display = "none";
			mkids.style.display = "none";
		}
	}
	$('a[href^="#"]').bind("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr("href")).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;
}
