import Group from 'discourse/models/group';
import showModal from 'discourse/lib/show-modal';

export default Discourse.Route.extend({

  titleToken() {
    return [ this.modelFor('group').get('name') ];
  },

  model(params) {
    return Group.find(params.name);
  },

  serialize(model) {
    return { name: model.get('name').toLowerCase() };
  },

  setupController(controller, model) {
    controller.setProperties({ model, counts: this.get('counts') });
  },

  actions: {
    showGroupEditor() {
      showModal('edit-group');
      this.controllerFor('edit-group').set('model', this.modelFor('group'));
    }
  }
});
