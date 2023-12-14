import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  наименование: DS.attr('string'),
  отделы: DS.attr('i-i-s-dokumentooborot-k-отделы'),
  содержание: DS.attr('string'),
  авПользователи: DS.belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-форма-документа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-форма-документа.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-форма-документа.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  содержание: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-форма-документа.validations.содержание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-форма-документа.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаДокументаE', 'i-i-s-dokumentooborot-k-форма-документа', {
    дата: attr('Дата составления', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', 'ID пользователя', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-k-сотрудники', '', {
        фИОСотрудника: attr('Ответственный документа', { index: 2 }),
        отделы: attr('Отдел отправителя', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'iDПользователя' }),
    наименование: attr('Наименование документа', { index: 4 }),
    содержание: attr('Содержание документа', { index: 5 }),
    отделы: attr('Получаемый отдел', { index: 6 })
  });

  modelClass.defineProjection('ФормаДокументаL', 'i-i-s-dokumentooborot-k-форма-документа', {
    дата: attr('Дата создания', { index: 0 }),
    авПользователи: belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', 'Ответственный документа', {
      сотрудники: belongsTo('i-i-s-dokumentooborot-k-сотрудники', '', {
        фИОСотрудника: attr('Ответственный документа', { index: 1 }),
        отделы: attr('Отдел отправителя', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    наименование: attr('Наименование документа', { index: 3 }),
    содержание: attr('Содержание документа', { index: 4 }),
    отделы: attr('Получаемый отдел', { index: 5 })
  });
};
