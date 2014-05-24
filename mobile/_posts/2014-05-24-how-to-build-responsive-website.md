---
layout: post
title:  "How to build responsive web page"
date:   2014-05-24 09:42:00
categories: tips
---

The key to developing a mobile friendly web page is to make your web page responsive. It will adapt to your screen size and display contents accordingly. There are several ways to do that:

#### Simply add this line to your <head> section:

{% highlight html %}
<link media="handheld, only screen and (max-width: 480px), only screen and (max-device-width: 480px)" href="mobile.css" type="text/css" rel="stylesheet" />
{% endhighlight %}

This will enable "mobile.css" for devices with width less than 480px.

#### Or simply add this to your main css file:

{% highlight css %}
@media screen and (max-width: 480px) {
	//Your CSS properties
	//Example
	body {
		font-size: 1em;
	}
}
{% endhighlight %}

Anything within the @media query will be applied if device width is less than 480px! 
