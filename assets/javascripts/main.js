// require('nw.gui').Window.get().showDevTools()
var markdown = require('markdown').markdown;

$('#source textarea').keyup(function(){
	var source = $(this).val();
  $('#output').html(markdown.toHTML(source));
}).keyup();
