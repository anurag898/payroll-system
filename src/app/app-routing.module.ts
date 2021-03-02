import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Path for salary calcualtion component.
const routes: Routes = [
  {
    path: "salary",
    loadChildren: () =>
      import(
        "./pages/salary-calculation/salary-calculation.module"
      ).then(m => m.SalaryModule)
  },
  //Path for history component.
  {
    path: "history",
    loadChildren: () =>
      import("./pages/history/history.module").then(
        m => m.HistoryModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
