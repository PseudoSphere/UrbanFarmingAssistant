webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_entryform_entryform_component__ = __webpack_require__("../../../../../src/app/components/entryform/entryform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_data_data_component__ = __webpack_require__("../../../../../src/app/components/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__globals_ccp_service__ = __webpack_require__("../../../../../src/app/globals/ccp.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Core





// Components








// Globals


// Routs
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    /* Remove login requirement for ease of testing
      {path: 'input', component: EntryformComponent},
      {path: 'data', component: DataComponent},
      {path: 'profile', component: ProfileComponent}
    /**/
    /* */
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_7__components_entryform_entryform_component__["a" /* EntryformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__globals_user_control_service__["a" /* UserControlService */]] },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_9__components_data_data_component__["a" /* DataComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__globals_user_control_service__["a" /* UserControlService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__globals_user_control_service__["a" /* UserControlService */]] }
    /**/
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_entryform_entryform_component__["a" /* EntryformComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_data_data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__globals_user_control_service__["a" /* UserControlService */], __WEBPACK_IMPORTED_MODULE_14__globals_ccp_service__["a" /* CCPService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/data/data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>Product Over Time</h3>\r\n    <canvas id=\"myChart\"></canvas>\r\n    <div *ngIf=\"showGraph\">\r\n        <input type=\"checkbox\" [checked]=\"graphCEggs.show\" (change)=\"updateCEggs()\">Graph Chicken Egg Data<br>\r\n        <input type=\"checkbox\" [checked]=\"graphDEggs.show\"(change)=\"updateDEggs()\">Graph Duck Egg Data<br>\r\n        <input type=\"checkbox\" [checked]=\"graphGMilk.show\" (change)=\"updateGMilk()\">Graph Goat Milk Data<br>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"container\">\r\n    <h3>Time Frame Selector</h3>\r\n    <div *ngIf=\"dataInfo.show\" class=\"alert alert-info\" (click)=\"hideMessage()\">\r\n    {{ dataInfo.message }}\r\n  </div>\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-btn\" (click)=\"getData()\">\r\n            <button class=\"btn btn-default\" type=\"button\">View </button>\r\n        </span>\r\n        <input type=\"number\" [(ngModel)]=\"timeFrame\" class=\"form-control\">\r\n        <span class=\"input-group-btn\" (click)=\"getData()\">\r\n            <button class=\"btn btn-default\" type=\"button\"> days </button>\r\n        </span>\r\n    </div>\r\n</div>\r\n<hr>\r\n\r\n<!-- -- -- -- DATA TABLE -- -- -- -->\r\n<div *ngIf=\"showTable\" class=\"container\">\r\n    <h3>Product Data</h3>\r\n    <table class=\"table table-striped table-responsive text-center\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"text-center\">Date</th>\r\n                <th class=\"text-center\">Chicken Eggs</th>\r\n                <th class=\"text-center\">Duck Eggs</th>\r\n                <th class=\"text-center\">Goat Milk</th>\r\n                <th class=\"text-center\" colspan=\"2\">Options</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"table\">\r\n            <ng-template ngFor let-id [ngForOf]=\"idArray\">\r\n                <!-- EDIT -->\r\n                <tr *ngIf=\"table[id].edit\">\r\n                    <td>{{ table[id].date }}</td>\r\n                    <td><input type=\"number\" [(ngModel)]=\"table[id].data.edited.chickenEggs\" class=\"form-control\"></td>\r\n                    <td><input type=\"number\" [(ngModel)]=\"table[id].data.edited.duckEggs\" class=\"form-control\"></td>\r\n                    <td><input type=\"number\" [(ngModel)]=\"table[id].data.edited.goatMilk\" class=\"form-control\"></td>\r\n                    <td><input type=\"button\" class=\"btn btn-sm\" value=\"Submit\" (click)=\"submitEdit(id)\"></td>\r\n                    <td><input type=\"button\" class=\"btn btn-sm\" value=\"Cancel\" (click)=\"cancelEdit(id)\"></td>\r\n                </tr>\r\n                <!-- DELETE -->\r\n                <tr *ngIf=\"table[id].delete\" class=\"warning\">\r\n                    <td>{{ table[id].date }}</td>\r\n                    <td>{{ table[id].data.original.chickenEggs }}</td>\r\n                    <td>{{ table[id].data.original.duckEggs }}</td>\r\n                    <td>{{ table[id].data.original.goatMilk }}</td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm btn-danger\" value=\"Confirm Delete\" (click)=\"submitDelete(id)\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-danger btn-sm\" value=\"Cancel\" (click)=\"cancelDelete(id)\">\r\n                    </td>\r\n                </tr>\r\n                <!-- DEFAULT -->\r\n                <tr *ngIf=\"!table[id].edit && !table[id].delete\">\r\n                    <td>{{ table[id].date }}</td>\r\n                    <td>{{ table[id].data.original.chickenEggs }}</td>\r\n                    <td>{{ table[id].data.original.duckEggs }}</td>\r\n                    <td>{{ table[id].data.original.goatMilk }}</td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm\" value=\"Edit\" (click)=\"editRow(id)\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm\" value=\"Delete\" (click)=\"deleteRow(id)\">\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        <tbody>    \r\n    </table>\r\n    <div *ngIf=\"loading\" class=\"alert alert-info\">\r\n            Loading Data...\r\n    </div>\r\n    <div *ngIf=\"noData\" class=\"alert alert-info\">\r\n            You have no data to view. Submit some on the Input page!\r\n    </div>\r\n    <hr>\r\n\r\n    <!-- -- -- -- FEED TABLE-- -- -- -->\r\n    <h3>Feed Data</h3>\r\n    <table class=\"table table-striped table-responsive text-center\">\r\n        <thead>\r\n            <tr>\r\n                <th class=\"text-center\">Date</th>\r\n                <th class=\"text-center\">Feed For</th>\r\n                <th class=\"text-center\">Cost</th>\r\n                <th class=\"text-center\" colspan=\"2\">Options</th>\r\n                <th class=\"text-center\">Cost Per Product*</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"table\">\r\n            <ng-template ngFor let-id [ngForOf]=\"idFeed\">\r\n                <!-- EDIT -->\r\n                <tr *ngIf=\"feedTable[id].edit\">\r\n                    <td>{{ feedTable[id].date }}</td>\r\n                    <td>{{ feedTable[id].feedType }}</td>\r\n                    <td>$<input type=\"number\" [(ngModel)]=\"feedTable[id].data.edited.cost\" class=\"form-control\"></td>\r\n                    <td><input type=\"button\" class=\"btn btn-sm\" value=\"Submit\" (click)=\"submitEditFeed(id)\"></td>\r\n                    <td><input type=\"button\" class=\"btn btn-sm\" value=\"Cancel\" (click)=\"cancelEditFeed(id)\"></td>\r\n                </tr>\r\n                <!-- DELETE -->\r\n                <tr *ngIf=\"feedTable[id].delete\" class=\"warning\">\r\n                    <td>{{ feedTable[id].date }}</td>\r\n                    <td>{{ feedTable[id].feedType }}</td>\r\n                    <td>${{ feedTable[id].data.original.cost }}</td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm btn-danger\" value=\"Confirm Delete\" (click)=\"submitDeleteFeed(id)\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-danger btn-sm\" value=\"Cancel\" (click)=\"cancelDeleteFeed(id)\">\r\n                    </td>\r\n                </tr>\r\n                <!-- DEFAULT -->\r\n                <tr *ngIf=\"!feedTable[id].edit && !feedTable[id].delete\">\r\n                    <td>{{ feedTable[id].date }}</td>\r\n                    <td>{{ feedTable[id].feedType }}</td>\r\n                    <td>${{ feedTable[id].data.original.cost }}</td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm\" value=\"Edit\" (click)=\"editRowFeed(id)\">\r\n                    </td>\r\n                    <td>\r\n                        <input type=\"button\" class=\"btn btn-sm\" value=\"Delete\" (click)=\"deleteRowFeed(id)\">\r\n                    </td>\r\n                    <td>${{ feedTable[id].costPerProduct }}</td>\r\n                </tr>\r\n            </ng-template>\r\n        <tbody>\r\n    </table>\r\n    <p>*Product cost shown is for the period between the feed shown(inclusive) and the next(exclusive)</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Globals

var DataComponent = (function () {
    /* feedTable Structure
    {
      edit: false,
      delete: false,
      id: row.id,
      feedType: row.feedType,
      costPerProduct: calcCost(),
      data: {
        original: {cost: row.cost},
        edited: {cost: row.cost}
      }
    }
    
    */
    function DataComponent(http, userControl) {
        this.http = http;
        this.userControl = userControl;
        this.timeFrame = 30;
        this.showTable = false;
        this.dataInfo = { show: false };
        // Graph Variabls
        this.graphLabels = [];
        this.graphCEggs = { data: [], show: true };
        this.graphDEggs = { data: [], show: true };
        this.graphGMilk = { data: [], show: true };
        this.showGraph = false;
        // --- Product Table ---
        this.idArray = [];
        this.table = {};
        /* table Structure
          {
            edit: false,
            delete: false,
            id: row.id,
            data: {
              original: {
                chickenEggs: row.chickenEggs,
                duckEggs: row.duckEggs,
                goatMilk: row.goatMilk
              },
              edited: {
                chickenEggs: row.chickenEggs,
                duckEggs: row.duckEggs,
                goatMilk: row.goatMilk
              }
            }
         */
        this.idFeed = [];
        this.nextOpened = {}; //{"<feedType>":"<date>"}
        this.feedTable = {};
    }
    DataComponent.prototype.ngOnInit = function () {
        this.getData();
        /*
            let testData = [
              {"ID":68,"date":"2017-08-08","chickenEggs":4,"duckEggs":3,"goatMilk":2,"username":"test"},
              {"ID":69,"date":"2017-08-08","chickenEggs":2,"duckEggs":3,"goatMilk":2,"username":"test"},
              {"ID":71,"date":"2017-08-04","chickenEggs":2,"duckEggs":3,"goatMilk":2,"username":"test"},
              {"ID":70,"date":"2017-08-02","chickenEggs":6,"duckEggs":6,"goatMilk":6,"username":"test"},
              {"ID":72,"date":"2017-07-30","chickenEggs":2,"duckEggs":3,"goatMilk":2,"username":"test"},
              {"ID":73,"date":"2017-05-24","chickenEggs":2,"duckEggs":3,"goatMilk":2,"username":"test"}];
            this.constructProductTable(testData);
        
            let testFeed = [
              {"ID":68,"date":"2017-08-08", "feedType":"chickenEggs", "cost":"10","username":"test"},
              {"ID":69,"date":"2017-08-08", "feedType":"duckEggs", "cost":"15","username":"test"},
              {"ID":71,"date":"2017-08-08", "feedType":"goatMilk", "cost":"30","username":"test"},
              {"ID":73,"date":"2017-08-01", "feedType":"chickenEggs", "cost":"10","username":"test"},
              {"ID":75,"date":"2017-08-01", "feedType":"duckEggs", "cost":"15","username":"test"},
              {"ID":80,"date":"2017-08-01", "feedType":"goatMilk", "cost":"30","username":"test"}];
            this.constructFeedTable(testFeed);
        /**/
    };
    DataComponent.prototype.getData = function () {
        var _this = this;
        this.showTable = true;
        if (!this.userControl.loggedIn) {
            return;
        }
        this.loading = true;
        var url = '/data/' + this.userControl.username + '/' + this.timeFrame;
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.get(url, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.handleIt(data); }, function (err) { return console.log("Error", err); }, function () { return console.log('Data recieved.'); });
    };
    // Show/hide various messages and populate the table
    DataComponent.prototype.handleIt = function (data) {
        this.loading = false;
        if (data.dataExists) {
            var table = JSON.parse(data.table);
            this.constructProductTable(table);
            var feedTable = JSON.parse(data.feedTable);
            this.constructFeedTable(feedTable);
            this.noData = false;
        }
        else {
            this.noData = true;
        }
    };
    // Construct a table
    DataComponent.prototype.constructProductTable = function (data) {
        var _this = this;
        // Reset the Table and Visuals
        this.idArray = [];
        this.table = {};
        this.graphLabels = [];
        this.graphCEggs.data = [];
        this.graphDEggs.data = [];
        this.graphGMilk.data = [];
        data.forEach(function (row) {
            _this.constructProductElement(row);
        });
        this.buildGraph();
    };
    DataComponent.prototype.constructProductElement = function (row) {
        // Table
        this.idArray.push(row.ID);
        this.table[row.ID] = {
            edit: false,
            delete: false,
            id: row.ID,
            date: row.date,
            data: {
                original: {
                    chickenEggs: row.chickenEggs,
                    duckEggs: row.duckEggs,
                    goatMilk: row.goatMilk
                },
                edited: {
                    chickenEggs: row.chickenEggs,
                    duckEggs: row.duckEggs,
                    goatMilk: row.goatMilk
                }
            }
        };
        // --Graph--
        // Grab label if it exists
        var dateIndex = this.graphLabels.indexOf(row.date);
        // Not yet added
        if (dateIndex < 0) {
            this.graphLabels.unshift(row.date);
            this.graphCEggs.data.unshift(row.chickenEggs);
            this.graphDEggs.data.unshift(row.duckEggs);
            this.graphGMilk.data.unshift(row.goatMilk);
            // Lable exists, add to the value instead of creating another
        }
        else {
            this.graphCEggs.data[dateIndex] += row.chickenEggs;
            this.graphDEggs.data[dateIndex] += row.duckEggs;
            this.graphGMilk.data[dateIndex] += row.goatMilk;
        }
    }; // <--constructElement
    // HTML manipulation
    DataComponent.prototype.editRow = function (id) {
        this.table[id].edit = true;
    };
    DataComponent.prototype.submitEdit = function (id) {
        var _this = this;
        var toSend = {
            id: id,
            data: this.table[id].data.edited
        };
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.post('/update', toSend, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.onComplete(data); }, function (err) { return console.log("Error", err); }, function () { return console.log('Data recieved.'); });
    };
    DataComponent.prototype.cancelEdit = function (id) {
        this.table[id].edit = false;
    };
    DataComponent.prototype.deleteRow = function (id) {
        this.table[id].delete = true;
    };
    DataComponent.prototype.submitDelete = function (id) {
        var _this = this;
        var toSend = { id: id };
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.post('/delete', toSend, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.onComplete(data); }, function (err) { return console.log("Error", err); }, function () { return console.log('Data recieved.'); });
    };
    DataComponent.prototype.onComplete = function (data) {
        this.dataInfo.message = data.message;
        this.dataInfo.show = true;
        // Refresh
        this.getData();
    };
    DataComponent.prototype.cancelDelete = function (id) {
        this.table[id].delete = false;
    };
    DataComponent.prototype.hideMessage = function () {
        this.dataInfo.show = false;
    };
    // --- Build The Graph ---
    DataComponent.prototype.buildGraph = function () {
        this.showGraph = true;
        var chart = document.getElementById("myChart");
        var data = {
            labels: this.graphLabels,
            datasets: [
                {
                    label: "Chicken Eggs",
                    fill: false,
                    showLine: this.graphCEggs.show,
                    borderColor: "#fff",
                    pointRadius: 0,
                    data: this.graphCEggs.data
                },
                {
                    label: "Duck Eggs",
                    fill: false,
                    showLine: this.graphDEggs.show,
                    borderColor: "#555",
                    pointRadius: 0,
                    data: this.graphDEggs.data
                },
                {
                    label: "Goat Milk",
                    fill: false,
                    showLine: this.graphGMilk.show,
                    borderColor: "#888",
                    pointRadius: 0,
                    data: this.graphGMilk.data
                }
            ]
        };
        var dataChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(chart, {
            type: 'line',
            data: data,
            options: {}
        });
    };
    // Manipulate Graph Visuals
    DataComponent.prototype.updateCEggs = function () {
        this.graphCEggs.show = !this.graphCEggs.show;
        this.buildGraph();
    };
    DataComponent.prototype.updateDEggs = function () {
        this.graphDEggs.show = !this.graphDEggs.show;
        this.buildGraph();
    };
    DataComponent.prototype.updateGMilk = function () {
        this.graphGMilk.show = !this.graphGMilk.show;
        this.buildGraph();
    };
    // -- -- -- -- Feed Functions -- -- -- --
    // Construct a table
    DataComponent.prototype.constructFeedTable = function (data) {
        var _this = this;
        // Reset the Table and Visuals
        this.idFeed = [];
        this.feedTable = {};
        this.nextOpened = {};
        data.forEach(function (row) {
            _this.constructFeedElement(row);
        });
    };
    DataComponent.prototype.constructFeedElement = function (row) {
        var id = row.ID;
        var date = row.date;
        var feedType = row.feedType;
        var cost = row.cost;
        this.idFeed.push(id);
        this.feedTable[id] = {
            edit: false,
            delete: false,
            id: id,
            date: date,
            feedType: feedType,
            costPerProduct: this.calcCost(date, feedType, cost),
            data: {
                original: { cost: cost },
                edited: { cost: cost }
            }
        };
    };
    DataComponent.prototype.calcCost = function (dateLower, feedType, cost) {
        var _this = this;
        // final result = cost/sum(prodcut)
        var sumProduct = 0;
        // Check for history
        if (this.nextOpened[feedType]) {
            var dateUpper_1 = this.nextOpened[feedType];
            this.idArray.forEach(function (id) {
                var stringID = id.toString();
                var rowDate = _this.table[stringID].date;
                // Date is in range?
                if (rowDate >= dateLower && rowDate < dateUpper_1) {
                    // Add product to the sum
                    sumProduct += _this.table[stringID].data.original[feedType];
                }
            });
            if (sumProduct != 0) {
                var result = cost / sumProduct;
                return Math.round(result * 100) / 100;
            }
            // No history
        }
        else {
            this.nextOpened[feedType] = dateLower;
        }
        // Nothing happened
        return "N/A";
    };
    DataComponent.prototype.editRowFeed = function (id) {
        this.feedTable[id].edit = true;
    };
    DataComponent.prototype.submitEditFeed = function (id) {
        var _this = this;
        var toSend = {
            id: id,
            cost: this.feedTable[id].data.edited.cost
        };
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.post('/feed/update', toSend, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.onComplete(data); }, function (err) { return console.log("Error", err); }, function () { return console.log('Data recieved.'); });
    };
    DataComponent.prototype.cancelEditFeed = function (id) {
        this.feedTable[id].edit = false;
    };
    DataComponent.prototype.deleteRowFeed = function (id) {
        this.feedTable[id].delete = true;
    };
    DataComponent.prototype.submitDeleteFeed = function (id) {
        var _this = this;
        var toSend = { id: id };
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.post('/feed/delete', toSend, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.onComplete(data); }, function (err) { return console.log("Error", err); }, function () { return console.log('Data recieved.'); });
    };
    DataComponent.prototype.cancelDeleteFeed = function (id) {
        this.feedTable[id].delete = false;
    };
    return DataComponent;
}());
DataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-data',
        template: __webpack_require__("../../../../../src/app/components/data/data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/data/data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */]) === "function" && _b || Object])
], DataComponent);

var _a, _b;
//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/entryform/entryform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/entryform/entryform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width:500px\">\n  <div *ngIf=\"dataInfo.show\" class=\"alert alert-info\" (click)=\"hideMessage()\">\n    {{ dataInfo.message }}\n  </div>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Date</span>\n    <input type=\"date\" [(ngModel)]=\"inputDate\" class=\"form-control\">\n  </div>\n  <hr>\n\n  <div *ngFor=\"let animal of animals\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">{{animal.name}}</span>\n      <input type=\"number\" [(ngModel)]=\"animal.quantity\" class=\"form-control\"> \n      <span class=\"input-group-addon\">{{animal.product}}</span>\n    </div>\n    <br>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon\">New Feed*</span>\n      <span class=\"input-group-addon\">$</span>\n      <input type=\"number\" [(ngModel)]=\"animal.cost\" class=\"form-control\">\n    </div>\n    <hr>\n  </div>\n  <input type=\"button\" class=\"btn btn-block\" value=\"Submit\" (click)=\"inputData()\">\n  <br>\n  <p>*Only enter feed cost when starting new cycle (aka opening a new bag/box of feed)</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/entryform/entryform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Globals

var EntryformComponent = (function () {
    function EntryformComponent(http, userControl) {
        this.http = http;
        this.userControl = userControl;
        // Complicated thing to get the date because dates are bleh :P
        this.inputDate = new Date().toISOString().split('T')[0];
        this.animals = [
            { name: "Chickens", product: "Eggs", dbColumn: "chickenEggs" },
            { name: "Ducks", product: "Eggs", dbColumn: "duckEggs" },
            { name: "Goats", product: "Milk", dbColumn: "goatMilk" }
        ];
        this.dataInfo = {
            show: false
        };
    }
    EntryformComponent.prototype.ngOnInit = function () {
    };
    // Send data to the server
    EntryformComponent.prototype.inputData = function () {
        var _this = this;
        // Keep user updated
        this.dataInfo.show = true;
        this.dataInfo.message = "Sending...";
        // Create and send post request
        var request = {
            token: this.userControl.token,
            date: this.inputDate,
            username: this.userControl.username,
            feedValues: []
        };
        // Loop through each product
        this.animals.forEach(function (animal) {
            request[animal.dbColumn] = animal.quantity;
            // if feed
            if (animal.cost) {
                request.feedValues.push({
                    feedType: animal.dbColumn,
                    cost: animal.cost
                });
            }
        });
        console.log(request);
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('JWT', this.userControl.token.toString());
        var response = this.http.post('/input', request, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.dataInfo.message = data.message; }, function (err) { return console.log("Error", err); }, function () { return console.log("Data Transfer Complete"); });
    };
    EntryformComponent.prototype.hideMessage = function () {
        this.dataInfo.show = false;
    };
    return EntryformComponent;
}());
EntryformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-entryform',
        template: __webpack_require__("../../../../../src/app/components/entryform/entryform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/entryform/entryform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__globals_user_control_service__["a" /* UserControlService */]) === "function" && _b || Object])
], EntryformComponent);

var _a, _b;
//# sourceMappingURL=entryform.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail {\r\n    position: relative;\r\n    border: 0;\r\n}\r\n\r\n.caption {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <img src=\"/farm.jpg\" width=\"500\"\n        class=\"img-responsive img-rounded center-block\">\n\n    <p class=\"text-center\">\n        Take Urban Farming to the next level.\n    </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_ccp_service__ = __webpack_require__("../../../../../src/app/globals/ccp.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Globals

var HomeComponent = (function () {
    function HomeComponent(ccp) {
        this.ccp = ccp;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals_ccp_service__["a" /* CCPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals_ccp_service__["a" /* CCPService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width:500px\">\n  <div *ngIf=\"error.display\" class=\"alert alert-warning\" (click)=\"this.error.display = false\">\n    <p>{{ error.message }}</p>\n  </div> \n\n  <h3>Login</h3>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Username</span>\n    <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\">\n  </div>\n  <hr>\n\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Password</span>\n    <input type=\"text\" [(ngModel)]=\"user.password\" class=\"form-control\">\n  </div>\n  <hr>\n  <input type=\"button\" class=\"btn btn-block\" value=\"Login\" (click)=\"login()\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Globals

var LoginComponent = (function () {
    function LoginComponent(router, http, userControl) {
        this.router = router;
        this.http = http;
        this.userControl = userControl;
        this.user = {
            username: "",
            password: ""
        };
        this.error = {
            message: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var response = this.http.post('/login', this.user, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.newData(data); }, function (err) { return _this.httpErrResponse(err); }, function () { return console.log("Data Transfer Complete"); });
    };
    // Handle new data response
    LoginComponent.prototype.newData = function (data) {
        if (data.success) {
            this.userControl.loggedIn = true;
            this.router.navigate(['/profile']);
            this.userControl.username = data.username;
            this.userControl.token = data.token;
        }
        else {
            this.error.message = data.message;
            this.error.display = true;
        }
    };
    // Handle response with error
    LoginComponent.prototype.httpErrResponse = function (err) {
        if (err.statusCode == 404) {
            this.error.message = "Unable to reach server.";
        }
        else {
            this.error.message = err.statusText;
        }
        this.error.display = true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Urban Farming Assistant</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/input']\">Input</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/data']\">Data</a></li>\n      </ul>\n\n      <!-- Show while logged in -->\n      <ul *ngIf=\"userControl.loggedIn\" class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/profile']\">{{ userControl.username }}</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/login']\" (click)=\"userControl.logout()\">Logout</a></li>\n      </ul>\n\n      <!-- Show while logged out -->\n      <ul *ngIf=\"!userControl.loggedIn\" class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/login']\">Login</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Globals

var NavbarComponent = (function () {
    function NavbarComponent(userControl) {
        this.userControl = userControl;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__["a" /* UserControlService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Profile</h1>\r\n    <p>Username: {{ userControl.username }}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Globals

var ProfileComponent = (function () {
    function ProfileComponent(userControl) {
        this.userControl = userControl;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals_user_control_service__["a" /* UserControlService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"max-width:500px\">\n  <div *ngIf=\"error.display\" class=\"alert alert-warning\">\n    <p>{{ error.message }}</p>\n  </div> \n\n  <h3>Create New Account</h3>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Username</span>\n    <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\">\n  </div>\n  <hr>\n\n  \n  <div class=\"input-group\">\n    <span class=\"input-group-addon\">Password</span>\n    <input type=\"text\" [(ngModel)]=\"user.password\" class=\"form-control\">\n  </div>\n  <hr>\n  \n  <input type=\"button\" class=\"btn btn-block\" value=\"Register\" (click)=\"register()\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__ = __webpack_require__("../../../../../src/app/globals/user-control.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Globals

var RegisterComponent = (function () {
    function RegisterComponent(router, http, userControl) {
        this.router = router;
        this.http = http;
        this.userControl = userControl;
        this.user = {
            username: "",
            password: ""
        };
        this.error = {
            message: "Error"
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // HTTP request
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var response = this.http.post('/register', this.user, { headers: headers });
        response
            .map(function (n) { return n.json(); })
            .subscribe(function (data) { return _this.newData(data); }, function (err) { return _this.httpErrResponse(err); }, function () { return console.log("Data Transfer Complete"); });
    };
    // Handle new data response
    RegisterComponent.prototype.newData = function (data) {
        if (data.success) {
            this.userControl.loggedIn = true;
            this.router.navigate(['/profile']);
            this.userControl.username = data.username;
            this.userControl.token = data.token;
        }
        else {
            this.error.message = data.message;
            this.error.display = true;
        }
    };
    // Handle response with error
    RegisterComponent.prototype.httpErrResponse = function (err) {
        if (err.statusCode == 404) {
            this.error.message = "Unable to reach server.";
        }
        else {
            this.error.message = err.statusText;
        }
        this.error.display = true;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__globals_user_control_service__["a" /* UserControlService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/globals/ccp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CCPService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CCPService = (function () {
    function CCPService(http) {
        this.http = http;
    }
    return CCPService;
}());
CCPService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CCPService);

var _a;
//# sourceMappingURL=ccp.service.js.map

/***/ }),

/***/ "../../../../../src/app/globals/user-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserControlService = (function () {
    function UserControlService(router) {
        this.router = router;
        this.loggedIn = false;
    }
    UserControlService.prototype.logout = function () {
        this.token = null;
        this.username = null;
        this.loggedIn = false;
    };
    UserControlService.prototype.canActivate = function () {
        if (this.loggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return UserControlService;
}());
UserControlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], UserControlService);

var _a;
//# sourceMappingURL=user-control.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map