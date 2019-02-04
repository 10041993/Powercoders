/**
 * shopping list model.
 *
 * The list is modelled as an  array.
 */
class Model{
  /** @param controller {!controller} App controller*/
  constructor(controller){
    console.log('Model initialised');

    /** @private {!ShoppingListItem[] Items in the list */
    this.items_ = [];

    /** @private {!View} View  for this model. */
    this.View_ = new View(this, controller);
  }
}
