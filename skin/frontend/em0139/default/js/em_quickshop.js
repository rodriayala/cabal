jQuery.noConflict();
jQuery(function($) {	
	function _qsJnit() {	
        var $_qs = $('.quickshop-link');
		$_qs.fancybox({
			width: EM.QuickShop.QS_FRM_WIDTH,
			height: EM.QuickShop.QS_FRM_HEIGHT,
			margin: [20, 40, 20, 10],
			autoSize: false,
			type: 'ajax',
			helpers: {
				overlay: {
					closeClick: EM.QuickShop.QS_OVERLAY_CLOSE
				}
			},
			afterShow: function() {					
				$(window).trigger("qs_load");
				if ($('.cloud-zoom, .cloud-zoom-gallery').length) {
					if ($('.cloud-zoom, .cloud-zoom-gallery').data('zoom') != null) {
						$('.cloud-zoom, .cloud-zoom-gallery').data('zoom').destroy();
					}
					$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
				}
				initAjaxCart('.quickshop-main', 'qs_product_addtocart_form');
			},
			afterClose: function() {
				$(window).off("qs_load");				
			}
		});
	}
	if(navigator.userAgent.match(/iPad/i)) isMobile = false; 
	if ((typeof EM_QUICKSHOP_DISABLED == 'undefined' || !EM_QUICKSHOP_DISABLED) && !isMobile) _qsJnit({
		itemClass: EM.QuickShop.QS_ITEM_CLASS,

		aClass: EM.QuickShop.QS_A_CLASS,
		imgClass: EM.QuickShop.QS_IMG_CLASS 
	});
	$(document).ready(function(){
		_qsJnit();
	})
});