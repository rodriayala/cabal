<?php
class EM_Em0139settings_Block_Adminhtml_System_Config_Form_Field_Font extends Mage_Adminhtml_Block_System_Config_Form_Field
{
	/**
     * Override field method to add js
     *
     * @param Varien_Data_Form_Element_Abstract $element
     * @return String
     */
	protected function _getElementHtml(Varien_Data_Form_Element_Abstract $element){
		$html = parent::_getElementHtml($element);
         return $html;
    }
}
?>