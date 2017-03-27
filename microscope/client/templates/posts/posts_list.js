/**
 * Created by alexandre on 25.03.2017.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});