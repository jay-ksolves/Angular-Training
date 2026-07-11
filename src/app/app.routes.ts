import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Aboutpage } from './aboutpage/aboutpage';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { Grandchild } from './grandchild/grandchild';

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
    }
];
