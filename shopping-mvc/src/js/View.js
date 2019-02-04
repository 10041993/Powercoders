/**HTML View for the shoppingList*/
class  View {
/**
 *@param model {!Model} App data model.
 *@param controller {!controller} App controller.
 */
  constructor(model, controller){
    console.log('View ready');

    /** @param model {!Model} App data model. */
    this.model_ = model;

    /** @param controller {!controller} App controller. */
    this.controller_ = controller;
  }
}