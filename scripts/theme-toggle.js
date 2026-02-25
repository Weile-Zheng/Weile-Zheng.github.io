(function () {
	var storageKey = "theme-preference";
	var root = document.documentElement;
	var button = document.getElementById("theme-toggle");

	function getStoredTheme() {
		try {
			var stored = localStorage.getItem(storageKey);
			if (stored === "light" || stored === "dark") {
				return stored;
			}
		} catch (e) {}
		return null;
	}

	function setStoredTheme(theme) {
		try {
			localStorage.setItem(storageKey, theme);
		} catch (e) {}
	}

	function systemTheme() {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}
		return "light";
	}

	function applyTheme(theme) {
		root.dataset.theme = theme;
		if (!button) {
			return;
		}
		var isDark = theme === "dark";
		button.innerHTML = isDark
			? '<i class="fas fa-moon" aria-hidden="true"></i>'
			: '<i class="far fa-sun" aria-hidden="true"></i>';
		button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
		button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
		button.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
	}

	var initial = root.dataset.theme || getStoredTheme() || systemTheme();
	applyTheme(initial);

	if (!button) {
		return;
	}

	button.addEventListener("click", function () {
		var current = root.dataset.theme === "dark" ? "dark" : "light";
		var next = current === "dark" ? "light" : "dark";
		applyTheme(next);
		setStoredTheme(next);
	});
})();
