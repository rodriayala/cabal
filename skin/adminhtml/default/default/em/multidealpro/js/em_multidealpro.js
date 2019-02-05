/*
	Version : 1.0.0
	date create : 20-10-2013
*/
jQuery(document).ready(function($) {

	var pid		=	$("#product_id").val();
	var pname	=	$("#product_name").val();

	if((pid) && pid.length != 0){
		pname	=	pname.evalJSON();
		$("#multidealpro_tabs_form_general_content .show_name .p_name .val").html(pname.name);
		$("#multidealpro_tabs_form_general_content .show_name .p_price .val").html(pname.price);
		$("#multidealpro_tabs_form_general_content .show_name .p_qty .val").html(pname.qty);

		$("#multidealpro_tabs_form_general_content .show_name").show();
		$("#multidealpro_tabs_form_general_content .redir_p").hide();
	}

	$( "#multidealpro_tabs_form_general_content .redir_p" ).click(function() {

		$( "#multidealpro_tabs_form_general" ).removeClass("active");
		$( "#multidealpro_tabs_products" ).addClass("active");

		$( "#multidealpro_tabs_form_general_content" ).hide();
		$( "#multidealpro_tabs_products_content" ).show();
	});

});

	function radioclick(element){
		var $ = jQuery;
		var radio 	= $(element);
		var tr 		= radio.parents('tr');
		var name	= tr.children('.em_name');
		var price	= tr.children('.em_price');
		var qty		= tr.children('.em_qty');

		$("#product_id").show();
		$("#product_name").show();
		$("#product_id").val(radio.val());
		$("#product_name").val(name.html());
		$("#product_id").hide();
		$("#product_name").hide();

		$("#multidealpro_tabs_form_general_content .show_name .p_name .val").html(name.html());
		$("#multidealpro_tabs_form_general_content .show_name .p_price .val").html(price.html());
		$("#multidealpro_tabs_form_general_content .show_name .p_qty .val").html(qty.html());
		$("#multidealpro_tabs_form_general_content .show_name").show();

		$("#multidealpro_tabs_form_general_content .redir_p").hide();
	}