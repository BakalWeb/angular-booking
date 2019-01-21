# Objectives

* Brief Angular Outline
    * Angular CLI
    * Project Structure
	
Base project: https://github.com/BakalWeb/AngularLunchAndLearn

# Angular CLI
Angular cli is a command line interface to scaffold and build angular apps.

Can be accessed through the 'ng' command.

# Base Project


* SCSS (sassy css) superset of CSS3s syntax
* Material components [ sidenav, material table, datasource, 
* Uses flex which i dont like

# Project structure

* Components (smart (APPLICATION LEVEL) & dumb (PRESENTATIONAL))
* Containers 
* Modules
* Core

## Components

A component is typically comprised of 4 items:
* Template (HTML)
* TypeScript file (Code)
* Style Sheet 

## Exercise

* Create a new feature for 'My Account' using Angular CLI
* Add component to an export component array
* Add routing
* Change routing for account to be lazy loaded
* Add routing to 'edit booking' from booking.component
    * 1. Declare a normal route
	* 2. Declare a children route and add a router-outlet (URL changes but nothing else happens) - THIS USES NESTED ROUTER OUTLETS
* GenerateDashboardData in bookings.component.ts move to it's own service
* Create a model for booking-dashboard
* Use dependency injection to instantiate a new instance of the booking-dashboard service
* Return an observable of booking-dashboard to the booking.component
* Update the template
* Create new booking template




