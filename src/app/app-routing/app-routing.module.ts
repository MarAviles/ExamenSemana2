import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { InicioComponent } from "../components/inicio/inicio.component"
import { ListadoComponent } from "../components/listado/listado.component"

const routes : Routes = [
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'listado',
        component: ListadoComponent
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }