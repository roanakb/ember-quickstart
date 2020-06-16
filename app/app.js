import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import alanBtn from "@alan-ai/alan-sdk-web";

alanBtn({
    key: "YOUR-ALAN-KEY",
    rootEl: document.getElementById("alan-btn"),
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
