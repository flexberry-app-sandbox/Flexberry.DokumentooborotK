import {
  defineNamespace,
  defineProjections,
  Model as РасДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-рас-док';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасДокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
