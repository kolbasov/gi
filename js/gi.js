$(document).ready(function() {
	$('#url').each(function() {
   $(this).data('old', $(this).val());
   $(this).bind("propertychange keyup input paste", function(event){
      var url = $(this);
      if (url.data('old') != url.val()) {
         url.data('old', url.val());
         change(url);
      }
	});});
});

function change(url) {
   var src = url.val();
   if(!endsWith(src, '/'))
      src += '/';

   var result = $('.result');
   result.empty();
   if(validate(src)) {
      var template = '<img src="' + src + 'media/?size=';
      var ending = '"/>';
      result.append(template + 'l' + ending);
   } else {
      result.append('<div class="error">o_O</div>');
   }
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function validate(url) {
   var pattern = /http:\/\/instagram.com\/p\/\w*/i;
   return pattern.test(url);
}