<?php
class EM_Em0139settings_Block_Html_Header extends Mage_Page_Block_Html_Header
{
    public function setTemplate()
    {
        $this->_template = 'page/html/em_header/em_header_'.Mage::helper('themeframework/settings')->getGeneral_HeaderStyle('style01').'.phtml';
        return $this;
    }
}
