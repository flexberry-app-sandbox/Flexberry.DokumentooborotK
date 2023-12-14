import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  расДок: DS.belongsTo('i-i-s-dokumentooborot-k-рас-док', { inverse: null, async: false }),
  хрДок: DS.belongsTo('i-i-s-dokumentooborot-k-хр-док', { inverse: 'тЧУтвержДок', async: false })
});

export let ValidationRules = {
  расДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-т-ч-утверж-док.validations.расДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хрДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-т-ч-утверж-док.validations.хрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧУтвержДокE', 'i-i-s-dokumentooborot-k-т-ч-утверж-док', {
    расДок: belongsTo('i-i-s-dokumentooborot-k-рас-док', 'Рас док', {
      дата: attr('Дата', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'дата' })
  });
};
