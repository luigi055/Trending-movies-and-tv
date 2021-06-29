export function setCookie(
	cookieName: string,
	value: string,
	expirationInDays: number
) {
	const date = new Date();
	date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + date.toUTCString();
	document.cookie = cookieName + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(cookieName: string) {
	let name = `${cookieName}=`;
	let decodedCookie = decodeURIComponent(document.cookie);
	let cookies = decodedCookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0) === " ") {
			console.warn(cookie);
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}
