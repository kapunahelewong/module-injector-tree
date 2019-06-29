# ModuleInjector Demo

This repo shows a simple ModuleInjector tree in Angular.

To use:

1. Clone this repo with `git clone https://github.com/kapunahelewong/module-injector-tree.git`
2. `cd` into the directory
3. `npm install`
4. `ng serve`
5. Open a browser to `http://localhost:4200`
6. Open the code in your editor.

There are two services, the FlowerService and the AnimalService.
The FlowerService is available via the root ModuleInjector so the
AppModule and LazyModule can see it, but the AnimalService is visible
only to the LazyModule. This demonstrates the ModuleInjector tree.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.
