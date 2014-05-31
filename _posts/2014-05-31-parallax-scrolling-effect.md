---
layout: post
title:  "Parallax scrolling effect"
date:   2014-05-31 15:32:00
categories: tips
---

On a web page, when the content is scrolling at a different speed from the background image, this causes a 3D effect which is refers to the "Parallax scrolling effect". If you want to see it in action, head to [homepage][homepage] and when you scroll, you can see the header's contents is actually moving faster than the background image. Its a really subtle and cool effect. When I was trying to implement this effect on my homepage, I found a lot of tutorials, while they produced the effect I was looking for, they were all laggy and making it a pain to scroll. Until I found this: [Smooth Parallax Scrolling][link1]. The tutorial clearly explained what parallax effect is and provided an excellent example for easy implementation. I am not going to copy and paste. Basically you can stop reading now and head to the tutorial. But I want to share a little tip that will make it even more awesome. 

In the JavaScript code, there is a function called "setup" and within that, there are two lines that deal with the mouse wheel:

{% highlight javascript %}
// deal with the mouse wheel
window.addEventListener("mousewheel", mouseScroll, false);
window.addEventListener("DOMMouseScroll", mouseScroll, false);
{% endhighlight %}

The purpose of the two lines is to control the scrolling speed and provide a consistent scrolling experience across multiple devices or OS. However, in my case, I didn't like the scrolling speed so I simply commented out those two lines. Now I have a much better scrolling experience on my mac.

Alternatively, you can edit the function "mouseScroll" located below "setup". You will see the line: 

{% highlight javascript %}
mouseDelta = e.wheelDelta / 120;
{% endhighlight %}

Change "120" to something like "50", the smaller number gives you a faster scrolling speed.

Until next time!

[homepage]: http://colloque.me
[link1]: http://www.kirupa.com/html5/smooth_parallax_scrolling.htm