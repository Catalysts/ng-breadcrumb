# ng-breadcrumb
This component is a fork from https://github.com/akiocloud/ng-breadcrumb which is a fork of https://github.com/gmostert/ng2-breadcrumb.
The component has been updated to work with Angular 6 and Angular CLI 6.

This component generates a breadcrumb trail, as you navigate to child routes using the @angular/router. It interprets the browser URL of a navigate request, 
in the same way the component router does to match a path to a specific component, to build up a hierarchy of available parent/child routes for that destination.

So given a navigation request to a url '/comp1/comp2/comp3', a breadcrumb trail with 3 levels will be generated. Each level includes all the elements from the previous 
level along with the next child. Thus the above url request will result in the following 3 levels being generated: '/comp1', '/comp1/comp2', '/comp1/comp2/comp3'.

Theres a breadcrumbService that allows you to add friendly names for each of your app's available routes. This friendly name will show up in the breadcrumb trail 
for each matching level, otherwise it will show the last url fragment.

## Dependencies
Optionally uses bootstrap.css (v 3.x.x) for styling of some elements (although the component is fully functional without it and there is a flag to turn off the dependency).

## Install
[![npm package](https://nodei.co/npm/ng-breadcrumb.png?compact=true)](https://www.npmjs.com/package/ng-breadcrumb)
 - Install the module via npm:
   - `npm install ng-breadcrumb --save`

## Usage
Import the this module into your module using forRoot()

    import {NgBreadcrumbModule} from 'ng-breadcrumb';

	@NgModule({
        imports: [NgBreadcrumbModule.forRoot()]
    })
    export class AppModule {
        ...
    }

Alternatively you can import the this module into your module and manually provide its service

	import {NgBreadcrumbModule, BreadcrumbService} from 'ng-breadcrumb';

	@NgModule({
        imports: [NgBreadcrumbModule],
        providers: [BreadcrumbService]
    })
    export class AppModule {
        ...
    }
	
Inject the BreadcrumbService into your component to map your routes

    export class AppComponent {
        constructor(private breadcrumbService: BreadcrumbService) {
        }
    }

Place the breadcrumb selector in your component's html where you added your router-outlet:

	<breadcrumb></breadcrumb>
	<router-outlet></router-outlet>
	
## Directives
`useBootstrap: boolean` to apply the bootstrap breadcrumb style. Defaulted to true.

	<breadcrumb [useBootstrap]="false"></breadcrumb>
	
`prefix: string` to have a static prefix as the first breadcrumb which routes to the base root when clicked.

	<breadcrumb prefix="App Title"></breadcrumb>
    
## BreadcrumbService
Add friendly names for each of your app's routes (paths). Can also specify regular expressions to match routes and assign a friendly name.

    breadcrumbService.addFriendlyNameForRoute('/home', 'Home Sweet Home');
    breadcrumbService.addFriendlyNameForRoute('/home/users', 'All users');
    breadcrumbService.addFriendlyNameForRouteRegex('/home/users/[0-9]/info', 'Information');
    
Specify a callback function that will supply a name for a specific route or regex. 
This is intended to be used when a route contains path params. It allows you display a specific name for the given id contained in the route url.
    
    breadcrumbService.addCallbackForRoute('/home/users/1', this.getNameForUser);
    breadcrumbService.addCallbackForRouteRegex('^/home/users/[0-9]$', this.getNameForUser);
    
    getNameForUser(id:string):string {
        return 'specific name for user with id';
    }
    
Hide certain routes (paths) from the breadcrumb trail using an exact url or regex.
    
    breadcrumbService.hideRoute('/home/secret');
    breadcrumbService.hideRouteRegex('^/home/secret/[a-zA-Z]');

## Build

    npm install
    npm build

## Running with Angular CLI

    ng serve

### How to build a release

- update the `CHANGELOG.md` with all changes regarding the new release
- update the release version in the `package.json`
- push the changes
- build the project locally with `npm run build`
- run `npm publish --access public`
- draft a new release at `Github` with the contents of the `CHANGELOG.md` file
