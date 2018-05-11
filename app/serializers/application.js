import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    /*keyForAttribute(attr){
        switch(attr){
            case 'profilePicture':
                return 'profile_picture'
            default:
                return this._super(...arguments);
        }
    }*/
});
