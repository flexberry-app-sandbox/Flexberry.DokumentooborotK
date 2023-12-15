import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  формаДокумента: DS.belongsTo('i-i-s-dokumentooborot-k-форма-документа', { inverse: null, async: false }),
  хрДок: DS.belongsTo('i-i-s-dokumentooborot-k-хр-док', { inverse: 'тЧСоздДок', async: false })
});

export let ValidationRules = {
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-т-ч-созд-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хрДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-т-ч-созд-док.validations.хрДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоздДокE', 'i-i-s-dokumentooborot-k-т-ч-созд-док', {
    формаДокумента: belongsTo('i-i-s-dokumentooborot-k-форма-документа', 'Дата создания', {
      дата: attr('Дата создания', { index: 0 }),
      наименование: attr('Наименование документа', { index: 2, hidden: true })
    }, { index: 1 })
  });
};
