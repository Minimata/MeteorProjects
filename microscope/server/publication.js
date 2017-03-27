/**
 * Created by alexandre on 26.03.2017.
 */

Meteor.publish('posts', function() {
    return Posts.find();
});