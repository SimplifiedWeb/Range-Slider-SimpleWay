# Range-Slider-SimpleWay
# The Main goal is to Understand The Logic How it is working.
# Open project code one side and this readme another side to better understand what I'm trying to say.
Check out Demo: https://simplifiedweb.github.io/Range-Slider-SimpleWay/
I develop a range-slider, let me explain you my approach in simple way, Read the read.me file to understand and make use of it on different objectives

So this is the simple basic range slider project.

So in this range slider project the main thing to under is was oninput event handler and why we use the Anonymous function.

var scroll = document.getElementById('rangevalue');
var range = document.getElementById('result');

range.innerHTML = scroll.value;
scroll.oninput = function(){
    range.innerHTML = this.value;
}

range.innerHTML = scroll.value. So this is the intial value of range it is 1, so when we scroll it we see the change of values,
when page is loaded we show the intial value that is goin to be 1.

scroll.oninput--> oninput simply an event handler. when user changes the value than this oninput triggered.

why anonymous function, bcz we can't use it on multiple place, and it is simple and short, and it doesn't matter the 
name when we want to perform a single operation, we can directly access the value of the scroll element using this.value.

simply understand that when we are using some kind of event handlers then using anonymous function is simple, short and
access directly the this.value. that's what we get.

And the this.value is refer to the current value of the scroll event. and when the user change the value the oninput
event triggered everytime and we use this.value to get the current value and assign it to the range.innerHTML that was
basically the result, which we are showing in the browser.
HOPE THIS EXPLANATION HELPS YOU.	
