<?php
/** @var $installer Mage_Catalog_Model_Resource_Setup */
$installer  = $this;
	$pathFile = Mage::getBaseDir('var').DS.'[EM_Multidealpro]update_1-0-2.txt';
	if(file_exists($pathFile)){
		echo 'Updating EM Multidealpro version 1.0.2 , please come back in some minutes ...';
		exit;
	}
	file_put_contents($pathFile,'Updating EM Multideal version 1.0.2');

	$installer->getConnection()->addColumn(
		$installer->getTable('multidealpro/deal'),
		'qty_start',
		'DECIMAL(12,2) NULL'
	);

	Mage::getModel("multidealpro/update")->version("1.0.2");

	unlink($pathFile);
$installer->endSetup();