import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧСоздДок: DS.hasMany('i-i-s-dokumentooborot-k-т-ч-созд-док', { inverse: 'хрДок', async: false }),
  тЧУтвержДок: DS.hasMany('i-i-s-dokumentooborot-k-т-ч-утверж-док', { inverse: 'хрДок', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-хр-док.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-хр-док.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-хр-док.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХрДокE', 'i-i-s-dokumentooborot-k-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧСоздДок: hasMany('i-i-s-dokumentooborot-k-т-ч-созд-док', 'Созданные документы', {
      формаДокумента: belongsTo('i-i-s-dokumentooborot-k-форма-документа', 'Наименование документа', {
        наименование: attr('Наименование документа', { index: 1, hidden: true }),
        дата: attr('Дата создания', { index: 2 })
      }, { index: 0, displayMemberPath: 'наименование' })
    }),
    тЧУтвержДок: hasMany('i-i-s-dokumentooborot-k-т-ч-утверж-док', 'Рассмотренные документы', {
      расДок: belongsTo('i-i-s-dokumentooborot-k-рас-док', 'Рассмотренный документ', {
        дата: attr('Дата рассмотрения', { index: 1, hidden: true }),
        формаДокумента: belongsTo('i-i-s-dokumentooborot-k-форма-документа', '', {
          наименование: attr('Наименование документа', { index: 2 })
        }, { index: -1, hidden: true }),
        утверждение: attr('Статус решения', { index: 3 })
      }, { index: 0, displayMemberPath: 'дата' })
    })
  });

  modelClass.defineProjection('ХрДокL', 'i-i-s-dokumentooborot-k-хр-док', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
