/**
 * controller for the shopping list application.
 */
class controller{
  constructor(){
    console.log('Controller running!');
    /** @private {!Model} App controller*/
    this.model_ = new Model(this);
  }
}
