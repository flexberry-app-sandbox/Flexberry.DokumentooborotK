import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВхода: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧПользователь: DS.hasMany('i-i-s-dokumentooborot-k-т-ч-пользователь', { inverse: 'входВСистему', async: false })
});

export let ValidationRules = {
  датаВхода: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-вход-в-систему.validations.датаВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧПользователь: {
    descriptionKey: 'models.i-i-s-dokumentooborot-k-вход-в-систему.validations.тЧПользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходВСистемуE', 'i-i-s-dokumentooborot-k-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 }),
    тЧПользователь: hasMany('i-i-s-dokumentooborot-k-т-ч-пользователь', 'Пользователь', {
      авПользователи: belongsTo('i-i-s-dokumentooborot-k-ав-пользователи', 'ID пользователя', {
        сотрудники: belongsTo('i-i-s-dokumentooborot-k-сотрудники', '', {
          фИОСотрудника: attr('ФИО сотрудника', { index: 1 })
        }, { index: -1, hidden: true }),
        логин: attr('Логин', { index: 2, hidden: true }),
        пароль: attr('Пароль', { index: 3 })
      }, { index: 0, displayMemberPath: 'iDПользователя' })
    })
  });

  modelClass.defineProjection('ВходВСистемуL', 'i-i-s-dokumentooborot-k-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 })
  });
};
