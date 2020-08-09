import { createMapDecorator } from './util';
import { mapState } from 'vuex';

export const State = createMapDecorator(mapState, 'computed');
