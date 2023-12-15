import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  утверждение: DS.attr('i-i-s-dokumentooborot-k-утверждение'),
  авПользователи: DS.belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', { inverse: null, async: false }),
  формаДокумента: DS.belongsTo('i-i-s-dokumentooborot-k-форма-документа', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-рас-док.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-рас-док.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-рас-док.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-рас-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасДокE', 'i-i-s-dokumentooborot-k-рас-док', {
    дата: attr('Дата рассмотрения', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', 'ID пользователя', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-k-сотрудники', '', {
        фИОСотрудника: attr('Утверждающее лицо', { index: 2 }),
        отделы: attr('Утверждающий отдел', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'iDПользователя' }),
    формаДокумента: belongsTo('i-i-s-dokumentooborot-k-форма-документа', 'Наименование документа', {
      наименование: attr('Наименование документа', { index: 5, hidden: true }),
      содержание: attr('Описание документа', { index: 6 })
    }, { index: 4, displayMemberPath: 'наименование' }),
    утверждение: attr('Статус решения', { index: 7 })
  });

  modelClass.defineProjection('РасДокL', 'i-i-s-dokumentooborot-k-рас-док', {
    дата: attr('Дата рассмотрения', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', 'Утверждающее лицо', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-k-сотрудники', '', {
        фИОСотрудника: attr('Утверждающее лицо', { index: 1 }),
        отделы: attr('Утверждающий отдел', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    формаДокумента: belongsTo('i-i-s-dokumentooborot-k-форма-документа', 'Наименование документа', {
      наименование: attr('Наименование документа', { index: 3 }),
      содержание: attr('Описание документа', { index: 4 })
    }, { index: -1, hidden: true }),
    утверждение: attr('Статус решения', { index: 5 })
  });
};
