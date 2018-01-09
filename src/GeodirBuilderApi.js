import { BuilderClient as B } from './builder/client';

const GeodirBuilderApi = {

    install: (Vue, options) => {
        if(!options){
            options = {};
        }

        let myGeodirBuilderClient = new B(options, Vue);
        Vue.geodirBuilderApi = Vue.prototype.$geodirBuilderApi =  myGeodirBuilderClient;
    }
};

// resgistrar el plugin si es usado via cdn
if(typeof window !== 'undefined' && window.Vue){
    window.GeodirBuilderApi = GeodirBuilderApi;
}

export default GeodirBuilderApi;