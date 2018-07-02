document.getElementById("share-button").addEventListener("click", toggleQRCode);
document.getElementById("modal-button").addEventListener("click", hideModal);

function toggleQRCode() {
	if (document.getElementById("profile-pic").style.display === "none") {
		document.getElementById("profile-pic").style.display = "block";
		document.getElementById("qr-code").style.display = "none";
	} else {
		document.getElementById("profile-pic").style.display = "none";
		document.getElementById("qr-code").style.display = "block";
	}
}

window.onload = function() {
	if (navigator.platform === "iPhone" || navigator.platform === "iPad") {
		if (window.navigator.standalone === false) {
			document.getElementById("opaque-background").style.display = "block";
			document.getElementById("modal").style.display = "block";
		}
	}
};

function hideModal() {
	document.getElementById("opaque-background").style.display = "none";
	document.getElementById("modal").style.display = "none";
}