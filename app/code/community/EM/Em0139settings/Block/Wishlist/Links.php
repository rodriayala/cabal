<?php
class EM_Em0139settings_Block_Wishlist_Links extends Mage_Wishlist_Block_Links
{
    /**
     * Create button label based on wishlist item quantity
     *
     * @param int $count
     * @return string
     */
    protected function _createLabel($count){
        if ($count > 1) {
            return $this->__('Wishlist <span>%d</span>', $count);
        }else {
            return $this->__('Wishlist');
        }
    }
}
