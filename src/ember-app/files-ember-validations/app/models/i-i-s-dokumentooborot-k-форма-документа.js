import {
  defineNamespace,
  defineProjections,
  Model as ФормаДокументаMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-форма-документа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормаДокументаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
