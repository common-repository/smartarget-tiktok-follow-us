function init_tiktok_follow (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_tiktok_follow(hash);
}

function insertJs_tiktok_follow (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_tiktok_follow`;
	document.head.appendChild(script);
}

init_tiktok_follow(smartarget_tiktok_follow_params.hash);
