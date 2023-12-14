import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-k-ав-пользователи', 'Unit | Model | i-i-s-dokumentooborot-k-ав-пользователи', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot-k-ав-пользователи',
    'model:i-i-s-dokumentooborot-k-вход-в-систему',
    'model:i-i-s-dokumentooborot-k-должность',
    'model:i-i-s-dokumentooborot-k-рас-док',
    'model:i-i-s-dokumentooborot-k-сотрудники',
    'model:i-i-s-dokumentooborot-k-т-ч-пользователь',
    'model:i-i-s-dokumentooborot-k-т-ч-права',
    'model:i-i-s-dokumentooborot-k-т-ч-созд-док',
    'model:i-i-s-dokumentooborot-k-т-ч-утверж-док',
    'model:i-i-s-dokumentooborot-k-форма-документа',
    'model:i-i-s-dokumentooborot-k-хр-док',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
