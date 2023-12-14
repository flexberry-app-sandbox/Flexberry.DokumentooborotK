import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentooborot-k-ав-пользователи-l');
  this.route('i-i-s-dokumentooborot-k-ав-пользователи-e',
  { path: 'i-i-s-dokumentooborot-k-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentooborot-k-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentooborot-k-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentooborot-k-вход-в-систему-l');
  this.route('i-i-s-dokumentooborot-k-вход-в-систему-e',
  { path: 'i-i-s-dokumentooborot-k-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentooborot-k-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentooborot-k-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentooborot-k-должность-l');
  this.route('i-i-s-dokumentooborot-k-должность-e',
  { path: 'i-i-s-dokumentooborot-k-должность-e/:id' });
  this.route('i-i-s-dokumentooborot-k-должность-e.new',
  { path: 'i-i-s-dokumentooborot-k-должность-e/new' });
  this.route('i-i-s-dokumentooborot-k-рас-док-l');
  this.route('i-i-s-dokumentooborot-k-рас-док-e',
  { path: 'i-i-s-dokumentooborot-k-рас-док-e/:id' });
  this.route('i-i-s-dokumentooborot-k-рас-док-e.new',
  { path: 'i-i-s-dokumentooborot-k-рас-док-e/new' });
  this.route('i-i-s-dokumentooborot-k-сотрудники-l');
  this.route('i-i-s-dokumentooborot-k-сотрудники-e',
  { path: 'i-i-s-dokumentooborot-k-сотрудники-e/:id' });
  this.route('i-i-s-dokumentooborot-k-сотрудники-e.new',
  { path: 'i-i-s-dokumentooborot-k-сотрудники-e/new' });
  this.route('i-i-s-dokumentooborot-k-форма-документа-l');
  this.route('i-i-s-dokumentooborot-k-форма-документа-e',
  { path: 'i-i-s-dokumentooborot-k-форма-документа-e/:id' });
  this.route('i-i-s-dokumentooborot-k-форма-документа-e.new',
  { path: 'i-i-s-dokumentooborot-k-форма-документа-e/new' });
  this.route('i-i-s-dokumentooborot-k-хр-док-l');
  this.route('i-i-s-dokumentooborot-k-хр-док-e',
  { path: 'i-i-s-dokumentooborot-k-хр-док-e/:id' });
  this.route('i-i-s-dokumentooborot-k-хр-док-e.new',
  { path: 'i-i-s-dokumentooborot-k-хр-док-e/new' });
});

export default Router;
