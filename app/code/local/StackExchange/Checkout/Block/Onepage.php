<?php
class StackExchange_Checkout_Block_Onepage extends Mage_Checkout_Block_Onepage 
{
    protected function _getStepCodes()
    {
        if (!Mage::helper('stackexchange_checkout')->getHideShipping()){
            return parent::_getStepCodes();
        }
        return array_diff(parent::_getStepCodes(), array('shipping_method'));
    }
}