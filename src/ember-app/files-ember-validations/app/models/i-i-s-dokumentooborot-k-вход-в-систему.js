import {
  defineNamespace,
  defineProjections,
  Model as ВходВСистемуMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-вход-в-систему';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВходВСистемуMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
