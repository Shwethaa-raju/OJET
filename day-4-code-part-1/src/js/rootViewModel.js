define(["require", 
        "exports", 
        "ojs/ojcorerouter", 
        "ojs/ojknockoutrouteradapter", 
        "ojs/ojurlparamadapter", 
        "ojs/ojarraydataprovider", 
        "ojs/ojmodulerouter-adapter",
        "knockout", 
        "ojs/ojbootstrap", 
        "ojs/ojknockout", 
        "ojs/ojnavigationlist",
        "ojs/ojmodule-element"], 
        function(
            require, 
            exports, 
            CoreRouter, 
            KnockoutRouterAdapter, 
            UrlParamAdapter, 
            ArrayDataProvider,
            ModuleRouterAdapter, 
            ko, 
            ojbootstrap_1
        ){

            function rootViewModel(){

                // Define the routes
              this.routes = [
                { path: "", redirect: "table" },
                { path: "table", detail: { label: "Table" } },
                { path: "calculator", detail: { label: "Calculator" } },
                { path: "rest", detail: { label: "ReST" } },
                { path: "fdcalc", detail: { label: "FD Calculator" } },
            ];
            // Create ADP with partial array, excluding first redirect route
            this.dataProvider = new ArrayDataProvider(this.routes.slice(1), {
                keyAttributes: "path",
            });
            // Create the router with the routes
            this.router = new CoreRouter(this.routes, {
                urlAdapter: new UrlParamAdapter(),
            });
            // Create an observable to react to the current router state path
            this.selection = new KnockoutRouterAdapter(this.router);

            //Module Router Adapter
            this.moduleConfig = new ModuleRouterAdapter(this.router);

            // Synchronize the router, causing it to go to its default route
            this.router.sync();
        }
        

        return new rootViewModel();
})

