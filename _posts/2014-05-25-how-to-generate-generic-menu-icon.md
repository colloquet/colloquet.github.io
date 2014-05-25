---
layout: post
title:  "How to generate generic menu icon"
date:   2014-05-25 10:38:00
categories: tips
---

A slide menu or drawer is very common amongst mobilised websites, the most commonly used one must be the 3 parallel bars. I know 3 different ways to generate one:

#### Using HTML entity
Turns out there is a handy little HTML entity for that!

{% highlight HTML %}
&#9776;
{% endhighlight %}

#### Using SVG
According to Wikipedia, Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics that has support for interactivity and animation.
Just paste the following code into your HTML file:

{% highlight HTML %}
<a id="YOUR_ID" href=#YOUR_ACTION">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 15" enable-background="new 0 0 18 15" xml:space="preserve">
<path fill="#fff" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
<path fill="#fff" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
<path fill="#fff" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
</svg></a>
{% endhighlight %}

Then give it a height and width:

{% highlight CSS %}
#YOUR_ID {
	height: 16px;
	width: 18px;
}
{% endhighlight %}

#### Simply using a PNG image
You can google that yourself.
Nah, [I will help you out][lmgtfy].

[lmgtfy]: http://lmgtfy.com/?q=menu+icon+png