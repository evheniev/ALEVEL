var bag = { 
	addItems: function addItems (itemName){ 
    	bag [itemName] = itemName
	},
	deleteItems:function deleteItems (itemName){ 
    	delete bag [ itemName ]
	},
	mirror: "mirror"
}