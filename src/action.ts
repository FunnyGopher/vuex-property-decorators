import { createMapDecorator } from './util';
import { mapActions } from 'vuex';

export const Action = createMapDecorator(mapActions, 'methods');
