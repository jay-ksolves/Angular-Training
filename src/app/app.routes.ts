import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Aboutpage } from './aboutpage/aboutpage';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { Grandchild } from './grandchild/grandchild';
import { Notlazyloadcomponent } from './notlazyloadcomponent/notlazyloadcomponent';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    
    {
        path: '', component: Homepage,
    },
    {
        path: 'about', component: Aboutpage,

    },
    {
        path:'parent', component: Parent,
        children:[
            {
            path: 'child', component: Child,
            children:[
                {
                path: 'grandchild', component: Grandchild
            }
        ]
        }]
    },
    {
        path:'lazyload-component',loadComponent:()=> import('./lazylaodcomponent/lazylaodcomponent').then(m => m.Lazylaodcomponent)
    },
    {
        path:'notlazyload-component', component:Notlazyloadcomponent
    },
    {
        path:'**', component:Pagenotfound
    }
];
