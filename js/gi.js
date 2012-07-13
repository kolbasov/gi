$(document).ready(function() {
	$('#url').each(function() {
   $(this).data('old', $(this).val());
   $(this).bind("propertychange keyup input paste", function(event){
      var url = $(this);
      if (url.data('old') != url.val()) {
      	url.data('old', url.val());
      	var src = url.val();
      	var template = '<img src="' + src + 'media/?size=';
   			var ending = '"/>';
   			var result = $('.result');
   			result.append(template + 'l' + ending);
   			result.append(template + 'm' + ending);
				result.append(template + 't' + ending);
				$('img').on('click', function() {
					window.open($(this).attr('src'));
				})
			}
		});
	});
});