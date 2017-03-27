/**
 * Created by alexandre on 25.03.2017.
 */

Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});