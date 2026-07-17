import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Aboutpage } from './aboutpage/aboutpage';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { Grandchild } from './grandchild/grandchild';
import { Notlazyloadcomponent } from './notlazyloadcomponent/notlazyloadcomponent';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Signpage } from './signpage/signpage';
import { authGuard } from './auth-guard';
import { Successfulsignin } from './successfulsignin/successfulsignin';
import { ProductComponent } from './product-component/product-component';
import { Dummyapicall } from './dummyapicall/dummyapicall';
import { UserCrud } from './user-crud/user-crud';
import { Typeahead } from './typeahead/typeahead';
import { StopwatchComponent } from './stopwatch/stopwatch';
import { Lifecycle } from './lifecycle/lifecycle';
import { StarRating } from './star-rating/star-rating';
import { Imageslider } from './imageslider/imageslider';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'about',
    component: Aboutpage,
  },
  {
    path: 'parent',
    component: Parent,
    children: [
      {
        path: 'child',
        component: Child,
        children: [
          {
            path: 'grandchild',
            component: Grandchild,
          },
        ],
      },
    ],
  },
  {
    path: 'lazyload-component',
    loadComponent: () =>
      import('./lazylaodcomponent/lazylaodcomponent').then((m) => m.Lazylaodcomponent),
  },
  {
    path: 'notlazyload-component',
    component: Notlazyloadcomponent,
  },
  {
    path: 'signin',
    component: Signpage,
  },
  {
    path: 'successful-signin',
    component: Successfulsignin,
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'apicall',
    component: Dummyapicall,
  },
  {
    path: 'users',
    component: UserCrud,
  },
  {
    path: 'typing',
    component: Typeahead,
  },
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    path: 'lifecycle',
    component: Lifecycle,
  },
  {
    path: 'star-rating',
    component: StarRating,
  },
  {
    path: 'image-slider',
    component: Imageslider,
  },
  {
    path: '**',
    component: Pagenotfound,
  },
];
