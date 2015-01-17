Incremental = {};

cursors = [];

Incremental.push = function(sub, customFields, cursor) {
	collection = cursor._cursorDescription.collectionName;

	observeHandle = cursor.observeChanges({
		added: function(id, fields) {
			sub.added(collection, id, _.extend(fields, customFields));
		},
		changed: function(id, fields) {
			sub.changed(collection, id, _.extend(fields, customFields));
		},
		removed: function(id) {
			sub.removed(collection, id);
		}
	});

	sub.onStop(function() {
		observeHandle.stop();
	});

	sub.ready();

	return cursor;
};