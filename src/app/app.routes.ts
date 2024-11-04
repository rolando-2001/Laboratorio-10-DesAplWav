import { Routes } from '@angular/router';
import { Ejercicio1Component } from './ejemplo1/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejemplo2/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejemplo3/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejemplo4/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejemplo5/ejercicio5/ejercicio5.component';


export const routes: Routes = [
    {
        path:'',
        component:Ejercicio1Component
    },
    {
     path:'ejercicio2',
     component:Ejercicio2Component
    },
    {
     path:'ejercicio3',
     component:Ejercicio3Component
    },
    {
     path:'ejercicio4',
     component:Ejercicio4Component
    },
    {
        path:'ejercicio5',
        component:Ejercicio5Component
       },
    {
        path: '**', 
        redirectTo: '' 
    }
];
