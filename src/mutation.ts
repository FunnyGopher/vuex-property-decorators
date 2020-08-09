import { createMapDecorator } from './util';
import { mapMutations } from 'vuex';

export const Mutation = createMapDecorator(mapMutations, 'methods');
