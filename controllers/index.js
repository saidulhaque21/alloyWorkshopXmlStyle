function doClick(e) {
	alert($.label.text);
}

$.index.open();

$.dynamic1.addEventListener('click', function(e) {
	 $.addClass($.dynamic1, "dynamic1");
});
$.dynamic2.addEventListener('click', function(e) {
	 var style = $.createStyle({
        backgroundColor: 'blue'
    });	
    $.verticalView.applyProperties(style);
});