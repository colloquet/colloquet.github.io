---
layout: post
title:  "Tips on developing mobile web"
date:   2014-05-23 19:18:04
categories: tips
---

When I started developing websites for mobile, the first problem I faced was the scaling problem. When you browse the web using your smart phone, the websites tends to be zoomed out by default. To disable such feature, I simply added this meta tag in the <head> section.

{% highlight html %}
<meta name="viewport" content="width=device-width" minimum-scale="1"/>
{% endhighlight %}

However, this causes a slight problem, when I view my site on iPad, the background colour were not filling the whole background. Turns out that was due to my div container's width being 940px but my device's width is only 768px. Therefore, the background colour have only filled 768px but my contents are 940px wide. The 172px difference is left blank. To encounter that, I did a bit of research and found the solution on [StackOverflow][stackoverflow]. I added this piece of code to my <head>.

{% highlight html %}
<script type="text/javascript">
	if(navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)) {
	document.write('<meta name="viewport" content="width=device-width" minimum-scale="1"/>');
	}
</script>
{% endhighlight %}

By having that code, that meta tag will only apply to listed devices and its now working perfectly on my iPad! Magic!

[stackoverflow]: http://stackoverflow.com/questions/18134386/meta-viewport-only-for-phones
