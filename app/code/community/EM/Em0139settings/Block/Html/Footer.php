<?php
class EM_Em0139settings_Block_Html_Footer extends Mage_Page_Block_Html_Footer
{    
    protected function _construct()
    {
        $this->addData(array('cache_lifetime' => false));
        $this->addCacheTag(array(
            Mage_Core_Model_Store::CACHE_TAG,
            Mage_Cms_Model_Block::CACHE_TAG
        ));
        $this->setTemplate('page/html/em_footer/em_footer_'.Mage::helper('themeframework/settings')->getGeneral_FooterStyle('style01').'.phtml');
    }
}
