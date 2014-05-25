---
layout: post
title:  "How to centre an image"
date:   2014-05-25 23:49:00
categories: tips
---

How to centre an image may be the most commonly asked question for newbies like me. It is actually very simple, you can either use a div wrapper or simply add a class to the img tag itself.

#### Using the div wrapper and CSS
Simply add a div around the img tag:

{% highlight HTML %}
<div class="img-wrapper">
	<img src="/img/test.png" alt="test"/>
</div>
{% endhighlight %}

Then in your CSS file, add the following: 

{% highlight CSS %}
.img-wrapper {
	width: 100%;
	text-align: center;
}
{% endhighlight %}

The div will then treat the image as text and align it to the centre. You can align image to the right using the same principle.

#### Example

<div class="img-wrapper">
	<img src="http://img2.wikia.nocookie.net/__cb20100218161535/streetfighter/images/0/03/Dudley3sportrait.gif" alt="test"/>
</div>

#### Adding a class to the img tag itself
This may be simpler, all you have to do is add a class to your image like the following example:

{% highlight HTML %}
<img src="/img/test.png" alt="test" class=".img-centre"/>
{% endhighlight %}

Then in your CSS file:

{% highlight CSS %}
.img-centre{
	display: block;
	float: none;
	margin-left: auto;
	margin-right: auto;
}
{% endhighlight %}

#### Example
<img src="http://img2.wikia.nocookie.net/__cb20100218161535/streetfighter/images/0/03/Dudley3sportrait.gif" alt="test" class="img-centre"/>

This may be a better option as you can reuse the class on every image you want to centre instead of adding a div wrapper around each image.