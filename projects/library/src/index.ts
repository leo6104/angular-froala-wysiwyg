import { NgModule } from '@angular/core';

import {FroalaEditorModule} from './editor/index';
import {FroalaViewModule} from './view/index';

export {
  FroalaEditorDirective,
  FroalaEditorModule
} from './editor/index';

export {
  FroalaViewDirective,
  FroalaViewModule
} from './view/index';

const MODULES = [
  FroalaEditorModule,
  FroalaViewModule
]

@NgModule({
 imports: [
   FroalaEditorModule.forRoot(),
   FroalaViewModule.forRoot()
 ],
 exports: MODULES
})
export class FERootModule {

}
