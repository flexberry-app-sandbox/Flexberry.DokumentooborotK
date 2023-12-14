import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDokumentooborotKАвПользователиLForm from './forms/i-i-s-dokumentooborot-k-ав-пользователи-l';
import IISDokumentooborotKВходВСистемуLForm from './forms/i-i-s-dokumentooborot-k-вход-в-систему-l';
import IISDokumentooborotKДолжностьLForm from './forms/i-i-s-dokumentooborot-k-должность-l';
import IISDokumentooborotKРасДокLForm from './forms/i-i-s-dokumentooborot-k-рас-док-l';
import IISDokumentooborotKСотрудникиLForm from './forms/i-i-s-dokumentooborot-k-сотрудники-l';
import IISDokumentooborotKФормаДокументаLForm from './forms/i-i-s-dokumentooborot-k-форма-документа-l';
import IISDokumentooborotKХрДокLForm from './forms/i-i-s-dokumentooborot-k-хр-док-l';
import IISDokumentooborotKАвПользователиEForm from './forms/i-i-s-dokumentooborot-k-ав-пользователи-e';
import IISDokumentooborotKВходВСистемуEForm from './forms/i-i-s-dokumentooborot-k-вход-в-систему-e';
import IISDokumentooborotKДолжностьEForm from './forms/i-i-s-dokumentooborot-k-должность-e';
import IISDokumentooborotKРасДокEForm from './forms/i-i-s-dokumentooborot-k-рас-док-e';
import IISDokumentooborotKСотрудникиEForm from './forms/i-i-s-dokumentooborot-k-сотрудники-e';
import IISDokumentooborotKФормаДокументаEForm from './forms/i-i-s-dokumentooborot-k-форма-документа-e';
import IISDokumentooborotKХрДокEForm from './forms/i-i-s-dokumentooborot-k-хр-док-e';
import IISDokumentooborotKАвПользователиModel from './models/i-i-s-dokumentooborot-k-ав-пользователи';
import IISDokumentooborotKВходВСистемуModel from './models/i-i-s-dokumentooborot-k-вход-в-систему';
import IISDokumentooborotKДолжностьModel from './models/i-i-s-dokumentooborot-k-должность';
import IISDokumentooborotKРасДокModel from './models/i-i-s-dokumentooborot-k-рас-док';
import IISDokumentooborotKСотрудникиModel from './models/i-i-s-dokumentooborot-k-сотрудники';
import IISDokumentooborotKТЧПользовательModel from './models/i-i-s-dokumentooborot-k-т-ч-пользователь';
import IISDokumentooborotKТЧПраваModel from './models/i-i-s-dokumentooborot-k-т-ч-права';
import IISDokumentooborotKТЧСоздДокModel from './models/i-i-s-dokumentooborot-k-т-ч-созд-док';
import IISDokumentooborotKТЧУтвержДокModel from './models/i-i-s-dokumentooborot-k-т-ч-утверж-док';
import IISDokumentooborotKФормаДокументаModel from './models/i-i-s-dokumentooborot-k-форма-документа';
import IISDokumentooborotKХрДокModel from './models/i-i-s-dokumentooborot-k-хр-док';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot-k-ав-пользователи': IISDokumentooborotKАвПользователиModel,
    'i-i-s-dokumentooborot-k-вход-в-систему': IISDokumentooborotKВходВСистемуModel,
    'i-i-s-dokumentooborot-k-должность': IISDokumentooborotKДолжностьModel,
    'i-i-s-dokumentooborot-k-рас-док': IISDokumentooborotKРасДокModel,
    'i-i-s-dokumentooborot-k-сотрудники': IISDokumentooborotKСотрудникиModel,
    'i-i-s-dokumentooborot-k-т-ч-пользователь': IISDokumentooborotKТЧПользовательModel,
    'i-i-s-dokumentooborot-k-т-ч-права': IISDokumentooborotKТЧПраваModel,
    'i-i-s-dokumentooborot-k-т-ч-созд-док': IISDokumentooborotKТЧСоздДокModel,
    'i-i-s-dokumentooborot-k-т-ч-утверж-док': IISDokumentooborotKТЧУтвержДокModel,
    'i-i-s-dokumentooborot-k-форма-документа': IISDokumentooborotKФормаДокументаModel,
    'i-i-s-dokumentooborot-k-хр-док': IISDokumentooborotKХрДокModel
  },

  'application-name': 'Dokumentooborot K',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dokumentooborot K',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentooborot K',
          title: 'Dokumentooborot K'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'dokumentooborot-k': {
          caption: 'DokumentooborotK',
          title: 'DokumentooborotK',
          'i-i-s-dokumentooborot-k-хр-док-l': {
            caption: 'Хр док',
            title: ''
          },
          'i-i-s-dokumentooborot-k-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-dokumentooborot-k-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-dokumentooborot-k-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          },
          'i-i-s-dokumentooborot-k-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentooborot-k-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-dokumentooborot-k-рас-док-l': {
            caption: 'Рас док',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dokumentooborot-k-ав-пользователи-l': IISDokumentooborotKАвПользователиLForm,
    'i-i-s-dokumentooborot-k-вход-в-систему-l': IISDokumentooborotKВходВСистемуLForm,
    'i-i-s-dokumentooborot-k-должность-l': IISDokumentooborotKДолжностьLForm,
    'i-i-s-dokumentooborot-k-рас-док-l': IISDokumentooborotKРасДокLForm,
    'i-i-s-dokumentooborot-k-сотрудники-l': IISDokumentooborotKСотрудникиLForm,
    'i-i-s-dokumentooborot-k-форма-документа-l': IISDokumentooborotKФормаДокументаLForm,
    'i-i-s-dokumentooborot-k-хр-док-l': IISDokumentooborotKХрДокLForm,
    'i-i-s-dokumentooborot-k-ав-пользователи-e': IISDokumentooborotKАвПользователиEForm,
    'i-i-s-dokumentooborot-k-вход-в-систему-e': IISDokumentooborotKВходВСистемуEForm,
    'i-i-s-dokumentooborot-k-должность-e': IISDokumentooborotKДолжностьEForm,
    'i-i-s-dokumentooborot-k-рас-док-e': IISDokumentooborotKРасДокEForm,
    'i-i-s-dokumentooborot-k-сотрудники-e': IISDokumentooborotKСотрудникиEForm,
    'i-i-s-dokumentooborot-k-форма-документа-e': IISDokumentooborotKФормаДокументаEForm,
    'i-i-s-dokumentooborot-k-хр-док-e': IISDokumentooborotKХрДокEForm
  },

});

export default translations;
