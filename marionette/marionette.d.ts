// Type definitions for Marionette
// Project: https://github.com/zhamid/marionette
// Definitions by: Zeeshan Hamid <https://github.com/zhamid>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Backbone {

  export module Wreqr {

    export class Handlers extends Backbone.Model {

      constructor(options?);

      public setHandlers(options?);
      public setHandler(name: string, handler: any, context?: any);

      public hasHandler(name: string): Boolean;
      public getHandler(name: string): any;

      public removeHandler(name: string);
      public removeAllHandlers();
    }

    export class CommandStorage extends Backbone.Events {
      constructor(options?);

      getCommands(commandName: string);
      addCommand(commandName: string, arg: any);
      clearCommands(commandName: string);

    }

    export class Commands extends Backbone.Wreqr.Handlers {
      constructor(options?);

      execute(name: string, arg: any);
    }

    export class EventAggregator {
    }

    export class RequestResponse extends Backbone.Wreqr.Handlers {
    }
  }

  export module Marionette {
    export class View extends Backbone.View {
      constructor(options?: any);

      modelEvents: any;
      collectionEvents: any;
      ui: any;

      getTemplate(): any;
      mixinTemplateHelpers(target?: any): any;
      configureTriggers(): any;
      delegateEvents(events?: any): any;
      undelegateEvents();

      close();
      bindUIElements();
      unbindUIElements();
    }

    export class ItemView extends Marionette.View {
      ui: any;

      constructor(options?: any);

      serializeData(): any;
      render(): View;
      close();
    }

    export class CollectionView extends Marionette.View {
      itemView: any;
      emptyView: any;

      constructor(options?: any);

      _initialEvents();
      addChildView(item: View, collection: View, options?: any);
      onShowCalled();

      triggerBeforeRender();
      triggerRendered();
      render(): View;
      renderModel(): View;

      getItemView(item: any): ItemView;
      addItemView(item: any, ItemView: ItemView, index: Number);
      renderItemView(view: View, index: Number);
      buildItemView(item: any, ItemViewType: any, itemViewOptions: any): any;
      removeItemView(item: any);
      removeChildView(view: View);

      checkEmpty();

      appendHtml(collectionView: View, itemView: View, index: Number);

      close();
      closeChildren();
      addChildViewEventForwarding(view: View);
    }


    export class CompositeView extends Marionette.CollectionView {
      itemView: any;
      itemViewContainer: string;

      constructor(options?: any);

      appendHtml(cv: any, iv: any, index: Number);
      getItemViewContainer(iv: any);
    }

    export class Controller {
      constructor(options?);
    }



    export class AppRouter extends Backbone.Router {

      controller: any;
      appRoutes: any;


      constructor(options?);

      processAppRoutes(controller: Controller, appRoutes: AppRouter);

    }

    class Application extends Backbone.Events {
      addInitializer(callback);
      addRegion(region);
      removeRegion(region);

      commands: Backbone.Wreqr.Commands;
      vent: Backbone.Wreqr.EventAggregator;
      reqres: Backbone.Wreqr.RequestResponse;

      start();

      module(moduleNames, moduleDefinition);
      execute(name: string, args?: any);
    }

    class Module extends Backbone.Events {

      create(app: any, moduleNames: any, moduleDefinition: any);

      addInitializer(callback: any);
      addFinalizer(callback: any);
      start(options: any);
      stop();
      addDefinition(moduleDefinition: any, customArgs: any);
    }
  }
};
