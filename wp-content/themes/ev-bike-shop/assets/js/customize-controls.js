( function( api ) {

	// Extends our custom "ev-bike-shop" section.
	api.sectionConstructor['ev-bike-shop'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );