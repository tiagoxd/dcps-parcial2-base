import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    keyForAttribute(attr){
        switch(attr){
            case 'profilePicture':
                return 'profile_picture'
            default:
                return this._super(...arguments);
        }
    }
});
