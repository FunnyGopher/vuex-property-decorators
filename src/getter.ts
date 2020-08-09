import { createMapDecorator } from './util';
import { mapGetters } from 'vuex';

export const Getter = createMapDecorator(mapGetters, 'computed');
