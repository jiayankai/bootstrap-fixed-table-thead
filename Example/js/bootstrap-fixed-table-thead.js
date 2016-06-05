$(document).ready(function() {
	var th_len = $('.table>thead>tr>th').length;
	//遍历表头，获取各个表头的位置和宽度
	var thead_heihgt = $('.table>thead>').height();
	$('.table>thead>tr>th').each(function(i) {
		var _left = $(this).offset().left;
		var _width = this.offsetWidth;
		$(this).css({
			'left': _left+'px',
			'width': _width+'px',
			'backgroundColor': '#fff'
		});
		// $(this).html(_left+','+_width);
	});
	//tbody中各个表格的宽度随表头变化
	$('.table>tbody td').each(function(i) {
		var index = i%th_len;
		$(this).css('width', $('.table>thead>tr>th:eq('+index+')')[0].offsetWidth+'px');
	});
	//表头position转为fixed
	$('.table>thead>tr>th').css('position', 'fixed');
	$('.table>tbody').css('display', 'block');
});