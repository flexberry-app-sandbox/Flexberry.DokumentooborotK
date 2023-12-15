import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.caption'),
          title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-k-должность-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-k-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-k-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot-k-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-k-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.информация-о-сотрудниках.i-i-s-dokumentooborot-k-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.администратору-системы.caption'),
          title: i18n.t('forms.application.sitemap.администратору-системы.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-k-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-k-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-k-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot-k-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-k-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.администратору-системы.i-i-s-dokumentooborot-k-ав-пользователи-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.пользователю.caption'),
          title: i18n.t('forms.application.sitemap.пользователю.title'),
          children: [{
            link: 'i-i-s-dokumentooborot-k-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.пользователю.i-i-s-dokumentooborot-k-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователю.i-i-s-dokumentooborot-k-вход-в-систему-l.title'),
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.пользователю.документация.caption'),
            title: i18n.t('forms.application.sitemap.пользователю.документация.title'),
            children: [{
              link: 'i-i-s-dokumentooborot-k-форма-документа-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-форма-документа-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-форма-документа-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-dokumentooborot-k-рас-док-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-рас-док-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-рас-док-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-dokumentooborot-k-хр-док-l',
              caption: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-хр-док-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователю.документация.i-i-s-dokumentooborot-k-хр-док-l.title'),
              icon: 'paperclip',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})