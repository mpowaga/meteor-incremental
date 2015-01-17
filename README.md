Incremental subscriptions
=========================

Experimental package for incremental subscriptions.

`meteor add mpowaga:incremental`

### Example ###

both/collections.js
```
Posts = new Mongo.Collection('posts');
```

server/publish.js
```
Meteor.publish('posts', function(page) {
  return Incremental.push(this, { page: page }, Posts.find({}, { limit: 5, skip: page * n, sort: { createdAt: 1 } }));
});
```

both/router.js
```
Router.route('/posts/:page', {
  template: 'posts',
  waitOn: function() {
    return Meteor.subscribe('posts', page);    
  },
  data: function() {
    return Posts.find({ page: page });
  }
})
```

### Incremental.push details ###

`Incremental.push = function(sub, customFields, cursor) { ... }`

#### Arguments ####

**sub** publish handler object (i.e. `this` context of publish function).

**customFields** custom object to be merged with document. This object can hold a page number.

**cursor** cursor object.