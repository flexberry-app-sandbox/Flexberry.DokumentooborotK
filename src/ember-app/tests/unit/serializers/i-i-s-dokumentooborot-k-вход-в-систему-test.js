import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot-k-вход-в-систему', 'Unit | Serializer | i-i-s-dokumentooborot-k-вход-в-систему', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot-k-вход-в-систему',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot-k-отделы',
    'transform:i-i-s-dokumentooborot-k-пол',
    'transform:i-i-s-dokumentooborot-k-права-пол',
    'transform:i-i-s-dokumentooborot-k-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
