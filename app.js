
var counter=0;
$(document).ready(function(){

  $('.smallbox').append('<button class="generate">'+"generate"+'</button');
  $('.smallbox').on('click', container);
  $('body').on('click', '.delete', showHide);
  $('.change').on('click', container);
  $('body').on('click', '.change', highlight);


});

  function container(){

    $( ".smallbox" ).after(function() {
  return "<div class='smallerbox'>" + '<button class="delete">'+'delete'+'</button>'+'<button class="change">'+'change'+'</button'+"</div>";
});
    counter++;
    $('.generate').text('rows generated:'+counter);
  }

  function showHide(){
    $(this).parent().slideUp();
    counter--;
  }

  function highlight(){
    $(this).parent().toggleClass("colorchange");
  }

/*

Hey Everyone!

Here is your week 2 assessment challenge!

TODO:When the page loads, have a button on the DOM that says 'generate'.
TODO:Upon clicking on that button, append a new container onto the DOM.
TODO:That container should have two buttons, one that reads 'delete',
the other that reads 'change'.
TODO:Additionally, there should be text that provides a number.
The number should be the number of times
the 'generate row' button has been clicked.

TODO: The delete button should delete JUST the container that the button
is in. The change button should change the background-color of the
container to red. The default or 'normal' state of the
background-color should be yellow. Clicking the button a second
time should change it back to yellow, 3rd time red, 4th time yellow, etc.

Do not add in anything additional beyond what is required. The goal
is not to be clever here, it is simply to execute on the provided
instructions.

Once you are complete, check your work into a new repo and post it
on GitHub.

A friendly reminder that this is simply a way for us to see how
you are individually doing with the technology. If this is no
problem, great. If you are struggling with it, get done what
you can and still submit. This assessment is not an indicator
of how you will perform post Prime or a measure of overall success
 thus far. It just gives us an idea of where you are at.

Just relax and show us what you know!

Thanks and good luck!

*/
