import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасДокMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot-k-рас-док';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасДокMixin, Validations, {
});

defineProjections(Model);

export default Model;
