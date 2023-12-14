import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-dokumentooborot-k-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.DokumentooborotK.Пол'
});
