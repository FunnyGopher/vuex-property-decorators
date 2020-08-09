import Vue, { ComponentOptions } from 'vue';
import { createDecorator } from 'vue-class-component';
import { Mapper, MapperWithNamespace } from 'vuex';

export const createMapDecorator = function(mapper: Mapper<any> & MapperWithNamespace<any>, vueProp: 'computed' | 'methods') {
  return function(options: string | Vue, key?: string): any {
    // key will be defined as the property name if using the decorator without the function syntax. Ex: @Decorator myProp
    let prop = key ?? options as string;

    const decorator = createDecorator((options: ComponentOptions<Vue>, key: string) => {
      if(!options[vueProp]) options[vueProp] = {};

      // Determine if a namespace is being used by checking for '/' delimeter
      let namespace = undefined;
      const index = prop.lastIndexOf('/');
      const usingNamespace = index !== -1;
      let map = { [key]: prop };

      if(usingNamespace) {
        namespace = prop.slice(0, index);
        prop = index === prop.length - 1 ? key: prop.slice(index + 1);
        map = { [key]: prop };

        options[vueProp]![key] = mapper(namespace, map)[key];
      } else {
        options[vueProp]![key] = mapper(map)[key];
      }
    });
  
    return key ? decorator(options as Vue, key as string) : decorator;
  }
}