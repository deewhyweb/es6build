/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _templateObject = _taggedTemplateLiteral(["\n            query allTasks {\n              allTasks {\n                name\n              }\n            }\n          "], ["\n            query allTasks {\n              allTasks {\n                name\n              }\n            }\n          "]);

	var _voyagerClient = __webpack_require__(1);

	var _graphqlTag = __webpack_require__(109);

	var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	angular.module('phoenix.core.rhmi.sync.poc', []).factory('rhmiSync', function () {
	  //$scope.message = "Hello World";
	  var config = {
	    httpUrl: "http://localhost:8001/graphql",
	    wsUrl: "ws://localhost:8001/graphql"
	  };

	  (0, _voyagerClient.createClient)(config).then(function (client) {
	    client.query({
	      fetchPolicy: "network-only",
	      query: (0, _graphqlTag2.default)(_templateObject)
	    })
	    //Print the response of the query
	    .then(function (_ref) {
	      var data = _ref.data;

	      console.log(data);
	    });
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(2));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	var OffixBoostConfig_1 = __webpack_require__(3);
	var offix_client_1 = __webpack_require__(39);
	/**
	* Create an ApolloOfflineClient with authentication,
	websockets and file uploads enabled
	*
	* @param options options object used to build client
	*/
	exports.createClient = function (options) { return __awaiter(void 0, void 0, void 0, function () {
	    var boostConfig, offlineClient;
	    return __generator(this, function (_a) {
	        switch (_a.label) {
	            case 0:
	                boostConfig = new OffixBoostConfig_1.OffixBoostConfig(options);
	                offlineClient = new offix_client_1.ApolloOfflineClient(boostConfig);
	                return [4 /*yield*/, offlineClient.init()];
	            case 1:
	                _a.sent();
	                return [2 /*return*/, offlineClient];
	        }
	    });
	}); };
	__export(__webpack_require__(39));
	__export(__webpack_require__(9));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var offix_conflicts_client_1 = __webpack_require__(4);
	var links_1 = __webpack_require__(9);
	var apollo_cache_inmemory_1 = __webpack_require__(105);
	/**
	 * Class for managing user and default configuration.
	 * Default config is applied on top of user provided configuration
	 */
	var OffixBoostConfig = /** @class */ (function () {
	    function OffixBoostConfig(options) {
	        if (options === void 0) { options = {}; }
	        if (!options.httpUrl) {
	            throw new Error("config missing httpUrl");
	        }
	        if (!options.wsUrl) {
	            throw new Error("config missing wsUrl");
	        }
	        Object.assign(this, options);
	        this.httpUrl = options.httpUrl;
	        this.wsUrl = options.wsUrl;
	        this.cache = options.cache || new apollo_cache_inmemory_1.InMemoryCache(),
	            this.conflictProvider = options.conflictProvider || new offix_conflicts_client_1.VersionedState(),
	            this.conflictStrategy = options.conflictStrategy || offix_conflicts_client_1.UseClient,
	            this.fileUpload = options.fileUpload || false,
	            this.retryOptions = options.retryOptions || {
	                delay: {
	                    initial: 1000,
	                    max: Infinity,
	                    jitter: true
	                },
	                attempts: {
	                    max: 5
	                }
	            };
	        this.link = links_1.createDefaultLink(this);
	    }
	    return OffixBoostConfig;
	}());
	exports.OffixBoostConfig = OffixBoostConfig;
	//# sourceMappingURL=OffixBoostConfig.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// Used as default strategy for SDK
	exports.UseClient = {
	    resolve: function (_a) {
	        var server = _a.server, clientDiff = _a.clientDiff;
	        return Object.assign(server, clientDiff);
	    }
	};
	//# sourceMappingURL=strategies.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Object state manager using a version field
	 * Allows moving to next state using the version field of the object
	 *
	 * VersionedObjectState requires GraphQL types to contain version field.
	 * For example:
	 *
	 * type User {
	 *   id: ID!
	 *   version: String
	 * }
	 */
	var VersionedState = /** @class */ (function () {
	    function VersionedState() {
	    }
	    VersionedState.prototype.assignServerState = function (client, server) {
	        client.version = server.version;
	    };
	    VersionedState.prototype.hasConflict = function (client, server) {
	        return client.version !== server.version;
	    };
	    VersionedState.prototype.getStateFields = function () {
	        // Id should be removed because we don't need to compare it for conflicts
	        return ["version", "id"];
	    };
	    VersionedState.prototype.currentState = function (currentObjectState) {
	        return currentObjectState.version;
	    };
	    return VersionedState;
	}());
	exports.VersionedState = VersionedState;
	//# sourceMappingURL=VersionedState.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Filtered conflict handler enables tree stage conflict resolution:
	 *
	 * - checks if data conflicts exist
	 * - perform resolution for conflicts or merge data otherwise
	 * - notify listeners about merge/conflict
	 */
	var ConflictHandler = /** @class */ (function () {
	    function ConflictHandler(options) {
	        this.conflicted = false;
	        this.clientDiff = {};
	        this.serverDiff = {};
	        this.options = options;
	        this.ignoredKeys = this.options.objectState.getStateFields();
	        this.checkConflict();
	    }
	    /**
	     * Executes the supplied strategy for each handler
	     */
	    ConflictHandler.prototype.executeStrategy = function () {
	        var serverState = Object.assign({}, this.options.server);
	        var resolvedData = this.options.strategy.resolve({
	            base: this.options.base,
	            server: this.options.server,
	            serverDiff: this.serverDiff,
	            client: this.options.client,
	            clientDiff: this.clientDiff,
	            operation: this.options.operationName
	        });
	        this.options.objectState.assignServerState(resolvedData, serverState);
	        if (this.options.listener) {
	            if (this.conflicted) {
	                this.options.listener.conflictOccurred(this.options.operationName, resolvedData, this.options.server, this.options.client);
	            }
	            else if (this.options.listener.mergeOccurred) {
	                this.options.listener.mergeOccurred(this.options.operationName, resolvedData, this.options.server, this.options.client);
	            }
	        }
	        // Filter to send only original data from client
	        var filteredData = {};
	        for (var _i = 0, _a = Object.keys(resolvedData); _i < _a.length; _i++) {
	            var key = _a[_i];
	            if (this.options.client[key]) {
	                filteredData[key] = resolvedData[key];
	            }
	        }
	        return filteredData;
	    };
	    ConflictHandler.prototype.checkConflict = function () {
	        var base = this.options.base;
	        var client = this.options.client;
	        var server = this.options.server;
	        if (!base || !client || !server) {
	            return;
	        }
	        // calculate client diff
	        for (var _i = 0, _a = Object.keys(client); _i < _a.length; _i++) {
	            var key = _a[_i];
	            if (base[key] && base[key] !== client[key]) {
	                if (!this.ignoredKeys.includes(key)) {
	                    this.clientDiff[key] = client[key];
	                }
	            }
	        }
	        // calculate server diff
	        for (var _b = 0, _c = Object.keys(this.options.client); _b < _c.length; _b++) {
	            var key = _c[_b];
	            if (base[key] && base[key] !== server[key]) {
	                if (!this.ignoredKeys.includes(key)) {
	                    this.serverDiff[key] = server[key];
	                    if (this.clientDiff[key]) {
	                        this.conflicted = true;
	                    }
	                }
	            }
	        }
	    };
	    return ConflictHandler;
	}());
	exports.ConflictHandler = ConflictHandler;
	//# sourceMappingURL=ConflictHandler.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Local conflict thrown when data outdates even before sending it to the server.
	 * Can be used to correct any data in flight or shown user another UI to visualize new state
	 *
	 * Local conflict happens when user opens view with cached data and in the mean time
	 * cache gets updated by subscriptions. In this case it makes no sense to send request to server as we know
	 * that data was outdated. Developers need to handle this use case instantly
	 * (instead enqueuing data for offline processing)
	 */
	var LocalConflictError = /** @class */ (function (_super) {
	    __extends(LocalConflictError, _super);
	    function LocalConflictError(conflictBase, variables) {
	        var _this = _super.call(this) || this;
	        _this.conflictBase = conflictBase;
	        _this.variables = variables;
	        /**
	         * Flag used to recognize this type of error
	         */
	        _this.localConflict = true;
	        return _this;
	    }
	    return LocalConflictError;
	}(Error));
	exports.LocalConflictError = LocalConflictError;
	//# sourceMappingURL=LocalConflictError.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_link_1 = __webpack_require__(10);
	var apollo_link_http_1 = __webpack_require__(26);
	var AuthLink_1 = __webpack_require__(31);
	var apollo_upload_client_1 = __webpack_require__(33);
	var offix_client_1 = __webpack_require__(39);
	var WebsocketLink_1 = __webpack_require__(92);
	/**
	 * Method for creating "uber" composite Apollo Link implementation including:
	 *
	 * - Http support
	 * - Websocket support
	 * - Conflict resolution
	 * - File uploads
	 */
	function createDefaultLink(config) {
	    var terminatingLink = createHTTPCompositeLink(config);
	    if (config.wsUrl) {
	        var wsLink = WebsocketLink_1.defaultWebSocketLink(config);
	        terminatingLink = apollo_link_1.ApolloLink.split(offix_client_1.isSubscription, wsLink, terminatingLink);
	    }
	    return terminatingLink;
	}
	exports.createDefaultLink = createDefaultLink;
	/**
	 * Default HTTP Apollo Links
	 * creates a composite link containing the following
	 *
	 * - Auth Link
	 * - HTTP Link
	 * - File Upload Link
	 */
	function createHTTPCompositeLink(config) {
	    var links = [];
	    if (config.authContextProvider) {
	        links.push(AuthLink_1.createAuthLink(config));
	    }
	    if (config.fileUpload) {
	        links.push(apollo_upload_client_1.createUploadLink({
	            uri: config.httpUrl
	        }));
	    }
	    else {
	        var httpLink = new apollo_link_http_1.HttpLink({
	            uri: config.httpUrl
	        });
	        links.push(httpLink);
	    }
	    return apollo_link_1.ApolloLink.from(links);
	}
	//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	tslib_1.__exportStar(__webpack_require__(12), exports);
	var linkUtils_1 = __webpack_require__(19);
	exports.createOperation = linkUtils_1.createOperation;
	exports.makePromise = linkUtils_1.makePromise;
	exports.toPromise = linkUtils_1.toPromise;
	exports.fromPromise = linkUtils_1.fromPromise;
	exports.fromError = linkUtils_1.fromError;
	exports.getOperationName = linkUtils_1.getOperationName;
	var zen_observable_ts_1 = tslib_1.__importDefault(__webpack_require__(13));
	exports.Observable = zen_observable_ts_1.default;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var __spreadArrays;
	var __await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	var __makeTemplateObject;
	var __importStar;
	var __importDefault;
	(function (factory) {
	    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) { factory(createExporter(root, createExporter(exports))); }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === "object" && typeof module.exports === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    }
	    else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        if (exports !== root) {
	            if (typeof Object.create === "function") {
	                Object.defineProperty(exports, "__esModule", { value: true });
	            }
	            else {
	                exports.__esModule = true;
	            }
	        }
	        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
	    }
	})
	(function (exporter) {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

	    __extends = function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };

	    __rest = function (s, e) {
	        var t = {};
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	        if (s != null && typeof Object.getOwnPropertySymbols === "function")
	            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                    t[p[i]] = s[p[i]];
	            }
	        return t;
	    };

	    __decorate = function (decorators, target, key, desc) {
	        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function (paramIndex, decorator) {
	        return function (target, key) { decorator(target, key, paramIndex); }
	    };

	    __metadata = function (metadataKey, metadataValue) {
	        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function (thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function (thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    __exportStar = function (m, exports) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    };

	    __values = function (o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function () {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function (o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	        }
	        catch (error) { e = { error: error }; }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            }
	            finally { if (e) throw e.error; }
	        }
	        return ar;
	    };

	    __spread = function () {
	        for (var ar = [], i = 0; i < arguments.length; i++)
	            ar = ar.concat(__read(arguments[i]));
	        return ar;
	    };

	    __spreadArrays = function () {
	        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	        for (var r = Array(s), k = 0, i = 0; i < il; i++)
	            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	                r[k] = a[j];
	        return r;
	    };

	    __await = function (v) {
	        return this instanceof __await ? (this.v = v, this) : new __await(v);
	    };

	    __asyncGenerator = function (thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []), i, q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
	        function fulfill(value) { resume("next", value); }
	        function reject(value) { resume("throw", value); }
	        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	    };

	    __asyncDelegator = function (o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	    };

	    __asyncValues = function (o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator], i;
	        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	    };

	    __makeTemplateObject = function (cooked, raw) {
	        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	        return cooked;
	    };

	    __importStar = function (mod) {
	        if (mod && mod.__esModule) return mod;
	        var result = {};
	        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	        result["default"] = mod;
	        return result;
	    };

	    __importDefault = function (mod) {
	        return (mod && mod.__esModule) ? mod : { "default": mod };
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__spreadArrays", __spreadArrays);
	    exporter("__await", __await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	    exporter("__makeTemplateObject", __makeTemplateObject);
	    exporter("__importStar", __importStar);
	    exporter("__importDefault", __importDefault);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var zen_observable_ts_1 = tslib_1.__importDefault(__webpack_require__(13));
	var ts_invariant_1 = __webpack_require__(17);
	var linkUtils_1 = __webpack_require__(19);
	function passthrough(op, forward) {
	    return forward ? forward(op) : zen_observable_ts_1.default.of();
	}
	function toLink(handler) {
	    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
	}
	function empty() {
	    return new ApolloLink(function () { return zen_observable_ts_1.default.of(); });
	}
	exports.empty = empty;
	function from(links) {
	    if (links.length === 0)
	        return empty();
	    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
	}
	exports.from = from;
	function split(test, left, right) {
	    var leftLink = toLink(left);
	    var rightLink = toLink(right || new ApolloLink(passthrough));
	    if (linkUtils_1.isTerminating(leftLink) && linkUtils_1.isTerminating(rightLink)) {
	        return new ApolloLink(function (operation) {
	            return test(operation)
	                ? leftLink.request(operation) || zen_observable_ts_1.default.of()
	                : rightLink.request(operation) || zen_observable_ts_1.default.of();
	        });
	    }
	    else {
	        return new ApolloLink(function (operation, forward) {
	            return test(operation)
	                ? leftLink.request(operation, forward) || zen_observable_ts_1.default.of()
	                : rightLink.request(operation, forward) || zen_observable_ts_1.default.of();
	        });
	    }
	}
	exports.split = split;
	exports.concat = function (first, second) {
	    var firstLink = toLink(first);
	    if (linkUtils_1.isTerminating(firstLink)) {
	        ts_invariant_1.invariant.warn(new linkUtils_1.LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
	        return firstLink;
	    }
	    var nextLink = toLink(second);
	    if (linkUtils_1.isTerminating(nextLink)) {
	        return new ApolloLink(function (operation) {
	            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts_1.default.of(); }) || zen_observable_ts_1.default.of();
	        });
	    }
	    else {
	        return new ApolloLink(function (operation, forward) {
	            return (firstLink.request(operation, function (op) {
	                return nextLink.request(op, forward) || zen_observable_ts_1.default.of();
	            }) || zen_observable_ts_1.default.of());
	        });
	    }
	};
	var ApolloLink = (function () {
	    function ApolloLink(request) {
	        if (request)
	            this.request = request;
	    }
	    ApolloLink.prototype.split = function (test, left, right) {
	        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
	    };
	    ApolloLink.prototype.concat = function (next) {
	        return exports.concat(this, next);
	    };
	    ApolloLink.prototype.request = function (operation, forward) {
	        throw new ts_invariant_1.InvariantError('request is not implemented');
	    };
	    ApolloLink.empty = empty;
	    ApolloLink.from = from;
	    ApolloLink.split = split;
	    ApolloLink.execute = execute;
	    return ApolloLink;
	}());
	exports.ApolloLink = ApolloLink;
	function execute(link, operation) {
	    return (link.request(linkUtils_1.createOperation(operation.context, linkUtils_1.transformOperation(linkUtils_1.validateOperation(operation)))) || zen_observable_ts_1.default.of());
	}
	exports.execute = execute;
	//# sourceMappingURL=link.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var zenObservable_1 = __webpack_require__(14);
	tslib_1.__exportStar(__webpack_require__(14), exports);
	exports.default = zenObservable_1.Observable;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var zen_observable_1 = tslib_1.__importDefault(__webpack_require__(15));
	exports.Observable = zen_observable_1.default;
	//# sourceMappingURL=zenObservable.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).Observable;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observable = void 0;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	// === Symbol Support ===
	var hasSymbols = function () {
	  return typeof Symbol === 'function';
	};

	var hasSymbol = function (name) {
	  return hasSymbols() && Boolean(Symbol[name]);
	};

	var getSymbol = function (name) {
	  return hasSymbol(name) ? Symbol[name] : '@@' + name;
	};

	if (hasSymbols() && !hasSymbol('observable')) {
	  Symbol.observable = Symbol('observable');
	}

	var SymbolIterator = getSymbol('iterator');
	var SymbolObservable = getSymbol('observable');
	var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

	function getMethod(obj, key) {
	  var value = obj[key];
	  if (value == null) return undefined;
	  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
	  return value;
	}

	function getSpecies(obj) {
	  var ctor = obj.constructor;

	  if (ctor !== undefined) {
	    ctor = ctor[SymbolSpecies];

	    if (ctor === null) {
	      ctor = undefined;
	    }
	  }

	  return ctor !== undefined ? ctor : Observable;
	}

	function isObservable(x) {
	  return x instanceof Observable; // SPEC: Brand check
	}

	function hostReportError(e) {
	  if (hostReportError.log) {
	    hostReportError.log(e);
	  } else {
	    setTimeout(function () {
	      throw e;
	    });
	  }
	}

	function enqueue(fn) {
	  Promise.resolve().then(function () {
	    try {
	      fn();
	    } catch (e) {
	      hostReportError(e);
	    }
	  });
	}

	function cleanupSubscription(subscription) {
	  var cleanup = subscription._cleanup;
	  if (cleanup === undefined) return;
	  subscription._cleanup = undefined;

	  if (!cleanup) {
	    return;
	  }

	  try {
	    if (typeof cleanup === 'function') {
	      cleanup();
	    } else {
	      var unsubscribe = getMethod(cleanup, 'unsubscribe');

	      if (unsubscribe) {
	        unsubscribe.call(cleanup);
	      }
	    }
	  } catch (e) {
	    hostReportError(e);
	  }
	}

	function closeSubscription(subscription) {
	  subscription._observer = undefined;
	  subscription._queue = undefined;
	  subscription._state = 'closed';
	}

	function flushSubscription(subscription) {
	  var queue = subscription._queue;

	  if (!queue) {
	    return;
	  }

	  subscription._queue = undefined;
	  subscription._state = 'ready';

	  for (var i = 0; i < queue.length; ++i) {
	    notifySubscription(subscription, queue[i].type, queue[i].value);
	    if (subscription._state === 'closed') break;
	  }
	}

	function notifySubscription(subscription, type, value) {
	  subscription._state = 'running';
	  var observer = subscription._observer;

	  try {
	    var m = getMethod(observer, type);

	    switch (type) {
	      case 'next':
	        if (m) m.call(observer, value);
	        break;

	      case 'error':
	        closeSubscription(subscription);
	        if (m) m.call(observer, value);else throw value;
	        break;

	      case 'complete':
	        closeSubscription(subscription);
	        if (m) m.call(observer);
	        break;
	    }
	  } catch (e) {
	    hostReportError(e);
	  }

	  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
	}

	function onNotify(subscription, type, value) {
	  if (subscription._state === 'closed') return;

	  if (subscription._state === 'buffering') {
	    subscription._queue.push({
	      type: type,
	      value: value
	    });

	    return;
	  }

	  if (subscription._state !== 'ready') {
	    subscription._state = 'buffering';
	    subscription._queue = [{
	      type: type,
	      value: value
	    }];
	    enqueue(function () {
	      return flushSubscription(subscription);
	    });
	    return;
	  }

	  notifySubscription(subscription, type, value);
	}

	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(observer, subscriber) {
	    _classCallCheck(this, Subscription);

	    // ASSERT: observer is an object
	    // ASSERT: subscriber is callable
	    this._cleanup = undefined;
	    this._observer = observer;
	    this._queue = undefined;
	    this._state = 'initializing';
	    var subscriptionObserver = new SubscriptionObserver(this);

	    try {
	      this._cleanup = subscriber.call(undefined, subscriptionObserver);
	    } catch (e) {
	      subscriptionObserver.error(e);
	    }

	    if (this._state === 'initializing') this._state = 'ready';
	  }

	  _createClass(Subscription, [{
	    key: "unsubscribe",
	    value: function unsubscribe() {
	      if (this._state !== 'closed') {
	        closeSubscription(this);
	        cleanupSubscription(this);
	      }
	    }
	  }, {
	    key: "closed",
	    get: function () {
	      return this._state === 'closed';
	    }
	  }]);

	  return Subscription;
	}();

	var SubscriptionObserver =
	/*#__PURE__*/
	function () {
	  function SubscriptionObserver(subscription) {
	    _classCallCheck(this, SubscriptionObserver);

	    this._subscription = subscription;
	  }

	  _createClass(SubscriptionObserver, [{
	    key: "next",
	    value: function next(value) {
	      onNotify(this._subscription, 'next', value);
	    }
	  }, {
	    key: "error",
	    value: function error(value) {
	      onNotify(this._subscription, 'error', value);
	    }
	  }, {
	    key: "complete",
	    value: function complete() {
	      onNotify(this._subscription, 'complete');
	    }
	  }, {
	    key: "closed",
	    get: function () {
	      return this._subscription._state === 'closed';
	    }
	  }]);

	  return SubscriptionObserver;
	}();

	var Observable =
	/*#__PURE__*/
	function () {
	  function Observable(subscriber) {
	    _classCallCheck(this, Observable);

	    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
	    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
	    this._subscriber = subscriber;
	  }

	  _createClass(Observable, [{
	    key: "subscribe",
	    value: function subscribe(observer) {
	      if (typeof observer !== 'object' || observer === null) {
	        observer = {
	          next: observer,
	          error: arguments[1],
	          complete: arguments[2]
	        };
	      }

	      return new Subscription(observer, this._subscriber);
	    }
	  }, {
	    key: "forEach",
	    value: function forEach(fn) {
	      var _this = this;

	      return new Promise(function (resolve, reject) {
	        if (typeof fn !== 'function') {
	          reject(new TypeError(fn + ' is not a function'));
	          return;
	        }

	        function done() {
	          subscription.unsubscribe();
	          resolve();
	        }

	        var subscription = _this.subscribe({
	          next: function (value) {
	            try {
	              fn(value, done);
	            } catch (e) {
	              reject(e);
	              subscription.unsubscribe();
	            }
	          },
	          error: reject,
	          complete: resolve
	        });
	      });
	    }
	  }, {
	    key: "map",
	    value: function map(fn) {
	      var _this2 = this;

	      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
	      var C = getSpecies(this);
	      return new C(function (observer) {
	        return _this2.subscribe({
	          next: function (value) {
	            try {
	              value = fn(value);
	            } catch (e) {
	              return observer.error(e);
	            }

	            observer.next(value);
	          },
	          error: function (e) {
	            observer.error(e);
	          },
	          complete: function () {
	            observer.complete();
	          }
	        });
	      });
	    }
	  }, {
	    key: "filter",
	    value: function filter(fn) {
	      var _this3 = this;

	      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
	      var C = getSpecies(this);
	      return new C(function (observer) {
	        return _this3.subscribe({
	          next: function (value) {
	            try {
	              if (!fn(value)) return;
	            } catch (e) {
	              return observer.error(e);
	            }

	            observer.next(value);
	          },
	          error: function (e) {
	            observer.error(e);
	          },
	          complete: function () {
	            observer.complete();
	          }
	        });
	      });
	    }
	  }, {
	    key: "reduce",
	    value: function reduce(fn) {
	      var _this4 = this;

	      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
	      var C = getSpecies(this);
	      var hasSeed = arguments.length > 1;
	      var hasValue = false;
	      var seed = arguments[1];
	      var acc = seed;
	      return new C(function (observer) {
	        return _this4.subscribe({
	          next: function (value) {
	            var first = !hasValue;
	            hasValue = true;

	            if (!first || hasSeed) {
	              try {
	                acc = fn(acc, value);
	              } catch (e) {
	                return observer.error(e);
	              }
	            } else {
	              acc = value;
	            }
	          },
	          error: function (e) {
	            observer.error(e);
	          },
	          complete: function () {
	            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
	            observer.next(acc);
	            observer.complete();
	          }
	        });
	      });
	    }
	  }, {
	    key: "concat",
	    value: function concat() {
	      var _this5 = this;

	      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
	        sources[_key] = arguments[_key];
	      }

	      var C = getSpecies(this);
	      return new C(function (observer) {
	        var subscription;
	        var index = 0;

	        function startNext(next) {
	          subscription = next.subscribe({
	            next: function (v) {
	              observer.next(v);
	            },
	            error: function (e) {
	              observer.error(e);
	            },
	            complete: function () {
	              if (index === sources.length) {
	                subscription = undefined;
	                observer.complete();
	              } else {
	                startNext(C.from(sources[index++]));
	              }
	            }
	          });
	        }

	        startNext(_this5);
	        return function () {
	          if (subscription) {
	            subscription.unsubscribe();
	            subscription = undefined;
	          }
	        };
	      });
	    }
	  }, {
	    key: "flatMap",
	    value: function flatMap(fn) {
	      var _this6 = this;

	      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
	      var C = getSpecies(this);
	      return new C(function (observer) {
	        var subscriptions = [];

	        var outer = _this6.subscribe({
	          next: function (value) {
	            if (fn) {
	              try {
	                value = fn(value);
	              } catch (e) {
	                return observer.error(e);
	              }
	            }

	            var inner = C.from(value).subscribe({
	              next: function (value) {
	                observer.next(value);
	              },
	              error: function (e) {
	                observer.error(e);
	              },
	              complete: function () {
	                var i = subscriptions.indexOf(inner);
	                if (i >= 0) subscriptions.splice(i, 1);
	                completeIfDone();
	              }
	            });
	            subscriptions.push(inner);
	          },
	          error: function (e) {
	            observer.error(e);
	          },
	          complete: function () {
	            completeIfDone();
	          }
	        });

	        function completeIfDone() {
	          if (outer.closed && subscriptions.length === 0) observer.complete();
	        }

	        return function () {
	          subscriptions.forEach(function (s) {
	            return s.unsubscribe();
	          });
	          outer.unsubscribe();
	        };
	      });
	    }
	  }, {
	    key: SymbolObservable,
	    value: function () {
	      return this;
	    }
	  }], [{
	    key: "from",
	    value: function from(x) {
	      var C = typeof this === 'function' ? this : Observable;
	      if (x == null) throw new TypeError(x + ' is not an object');
	      var method = getMethod(x, SymbolObservable);

	      if (method) {
	        var observable = method.call(x);
	        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
	        if (isObservable(observable) && observable.constructor === C) return observable;
	        return new C(function (observer) {
	          return observable.subscribe(observer);
	        });
	      }

	      if (hasSymbol('iterator')) {
	        method = getMethod(x, SymbolIterator);

	        if (method) {
	          return new C(function (observer) {
	            enqueue(function () {
	              if (observer.closed) return;
	              var _iteratorNormalCompletion = true;
	              var _didIteratorError = false;
	              var _iteratorError = undefined;

	              try {
	                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                  var _item = _step.value;
	                  observer.next(_item);
	                  if (observer.closed) return;
	                }
	              } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	              } finally {
	                try {
	                  if (!_iteratorNormalCompletion && _iterator.return != null) {
	                    _iterator.return();
	                  }
	                } finally {
	                  if (_didIteratorError) {
	                    throw _iteratorError;
	                  }
	                }
	              }

	              observer.complete();
	            });
	          });
	        }
	      }

	      if (Array.isArray(x)) {
	        return new C(function (observer) {
	          enqueue(function () {
	            if (observer.closed) return;

	            for (var i = 0; i < x.length; ++i) {
	              observer.next(x[i]);
	              if (observer.closed) return;
	            }

	            observer.complete();
	          });
	        });
	      }

	      throw new TypeError(x + ' is not observable');
	    }
	  }, {
	    key: "of",
	    value: function of() {
	      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        items[_key2] = arguments[_key2];
	      }

	      var C = typeof this === 'function' ? this : Observable;
	      return new C(function (observer) {
	        enqueue(function () {
	          if (observer.closed) return;

	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (observer.closed) return;
	          }

	          observer.complete();
	        });
	      });
	    }
	  }, {
	    key: SymbolSpecies,
	    get: function () {
	      return this;
	    }
	  }]);

	  return Observable;
	}();

	exports.Observable = Observable;

	if (hasSymbols()) {
	  Object.defineProperty(Observable, Symbol('extensions'), {
	    value: {
	      symbol: SymbolObservable,
	      hostReportError: hostReportError
	    },
	    configurable: true
	  });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var tslib = __webpack_require__(11);

	var genericMessage = "Invariant Violation";
	var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
	    obj.__proto__ = proto;
	    return obj;
	} : _a;
	var InvariantError = /** @class */ (function (_super) {
	    tslib.__extends(InvariantError, _super);
	    function InvariantError(message) {
	        if (message === void 0) { message = genericMessage; }
	        var _this = _super.call(this, typeof message === "number"
	            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
	            : message) || this;
	        _this.framesToPop = 1;
	        _this.name = genericMessage;
	        setPrototypeOf(_this, InvariantError.prototype);
	        return _this;
	    }
	    return InvariantError;
	}(Error));
	function invariant(condition, message) {
	    if (!condition) {
	        throw new InvariantError(message);
	    }
	}
	function wrapConsoleMethod(method) {
	    return function () {
	        return console[method].apply(console, arguments);
	    };
	}
	(function (invariant) {
	    invariant.warn = wrapConsoleMethod("warn");
	    invariant.error = wrapConsoleMethod("error");
	})(invariant || (invariant = {}));
	// Code that uses ts-invariant with rollup-plugin-invariant may want to
	// import this process stub to avoid errors evaluating process.env.NODE_ENV.
	// However, because most ESM-to-CJS compilers will rewrite the process import
	// as tsInvariant.process, which prevents proper replacement by minifiers, we
	// also attempt to define the stub globally when it is not already defined.
	exports.process = { env: {} };
	if (typeof process === "object") {
	    exports.process = process;
	}
	else
	    try {
	        // Using Function to evaluate this assignment in global scope also escapes
	        // the strict mode of the current module, thereby allowing the assignment.
	        // Inspired by https://github.com/facebook/regenerator/pull/369.
	        Function("stub", "process = stub")(exports.process);
	    }
	    catch (atLeastWeTried) {
	        // The assignment can fail if a Content Security Policy heavy-handedly
	        // forbids Function usage. In those environments, developers should take
	        // extra care to replace process.env.NODE_ENV in their production builds,
	        // or define an appropriate global.process polyfill.
	    }
	var invariant$1 = invariant;

	exports.default = invariant$1;
	exports.InvariantError = InvariantError;
	exports.invariant = invariant;
	//# sourceMappingURL=invariant.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var zen_observable_ts_1 = tslib_1.__importDefault(__webpack_require__(13));
	var apollo_utilities_1 = __webpack_require__(20);
	exports.getOperationName = apollo_utilities_1.getOperationName;
	var ts_invariant_1 = __webpack_require__(17);
	function validateOperation(operation) {
	    var OPERATION_FIELDS = [
	        'query',
	        'operationName',
	        'variables',
	        'extensions',
	        'context',
	    ];
	    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
	        var key = _a[_i];
	        if (OPERATION_FIELDS.indexOf(key) < 0) {
	            throw new ts_invariant_1.InvariantError("illegal argument: " + key);
	        }
	    }
	    return operation;
	}
	exports.validateOperation = validateOperation;
	var LinkError = (function (_super) {
	    tslib_1.__extends(LinkError, _super);
	    function LinkError(message, link) {
	        var _this = _super.call(this, message) || this;
	        _this.link = link;
	        return _this;
	    }
	    return LinkError;
	}(Error));
	exports.LinkError = LinkError;
	function isTerminating(link) {
	    return link.request.length <= 1;
	}
	exports.isTerminating = isTerminating;
	function toPromise(observable) {
	    var completed = false;
	    return new Promise(function (resolve, reject) {
	        observable.subscribe({
	            next: function (data) {
	                if (completed) {
	                    ts_invariant_1.invariant.warn("Promise Wrapper does not support multiple results from Observable");
	                }
	                else {
	                    completed = true;
	                    resolve(data);
	                }
	            },
	            error: reject,
	        });
	    });
	}
	exports.toPromise = toPromise;
	exports.makePromise = toPromise;
	function fromPromise(promise) {
	    return new zen_observable_ts_1.default(function (observer) {
	        promise
	            .then(function (value) {
	            observer.next(value);
	            observer.complete();
	        })
	            .catch(observer.error.bind(observer));
	    });
	}
	exports.fromPromise = fromPromise;
	function fromError(errorValue) {
	    return new zen_observable_ts_1.default(function (observer) {
	        observer.error(errorValue);
	    });
	}
	exports.fromError = fromError;
	function transformOperation(operation) {
	    var transformedOperation = {
	        variables: operation.variables || {},
	        extensions: operation.extensions || {},
	        operationName: operation.operationName,
	        query: operation.query,
	    };
	    if (!transformedOperation.operationName) {
	        transformedOperation.operationName =
	            typeof transformedOperation.query !== 'string'
	                ? apollo_utilities_1.getOperationName(transformedOperation.query)
	                : '';
	    }
	    return transformedOperation;
	}
	exports.transformOperation = transformOperation;
	function createOperation(starting, operation) {
	    var context = tslib_1.__assign({}, starting);
	    var setContext = function (next) {
	        if (typeof next === 'function') {
	            context = tslib_1.__assign({}, context, next(context));
	        }
	        else {
	            context = tslib_1.__assign({}, context, next);
	        }
	    };
	    var getContext = function () { return (tslib_1.__assign({}, context)); };
	    Object.defineProperty(operation, 'setContext', {
	        enumerable: false,
	        value: setContext,
	    });
	    Object.defineProperty(operation, 'getContext', {
	        enumerable: false,
	        value: getContext,
	    });
	    Object.defineProperty(operation, 'toKey', {
	        enumerable: false,
	        value: function () { return getKey(operation); },
	    });
	    return operation;
	}
	exports.createOperation = createOperation;
	function getKey(operation) {
	    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
	    return JSON.stringify([operationName, query, variables]);
	}
	exports.getKey = getKey;
	//# sourceMappingURL=linkUtils.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports.__esModule = true;
	exports.addTypenameToDocument = addTypenameToDocument;
	exports.argumentsObjectFromField = argumentsObjectFromField;
	exports.assign = assign;
	exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
	exports.checkDocument = checkDocument;
	exports.cloneDeep = cloneDeep;
	exports.createFragmentMap = createFragmentMap;
	exports.getDefaultValues = getDefaultValues;
	exports.getDirectiveInfoFromField = getDirectiveInfoFromField;
	exports.getDirectiveNames = getDirectiveNames;
	exports.getDirectivesFromDocument = getDirectivesFromDocument;
	exports.getEnv = getEnv;
	exports.getFragmentDefinition = getFragmentDefinition;
	exports.getFragmentDefinitions = getFragmentDefinitions;
	exports.getFragmentQueryDocument = getFragmentQueryDocument;
	exports.getInclusionDirectives = getInclusionDirectives;
	exports.getMainDefinition = getMainDefinition;
	exports.getMutationDefinition = getMutationDefinition;
	exports.getOperationDefinition = getOperationDefinition;
	exports.getOperationDefinitionOrDie = getOperationDefinitionOrDie;
	exports.getOperationName = getOperationName;
	exports.getQueryDefinition = getQueryDefinition;
	exports.getStoreKeyName = getStoreKeyName;
	exports.graphQLResultHasError = graphQLResultHasError;
	exports.hasClientExports = hasClientExports;
	exports.hasDirectives = hasDirectives;
	exports.isDevelopment = isDevelopment;
	exports.isEnv = isEnv;
	exports.isField = isField;
	exports.isIdValue = isIdValue;
	exports.isInlineFragment = isInlineFragment;
	exports.isJsonValue = isJsonValue;
	exports.isNumberValue = isNumberValue;
	exports.isProduction = isProduction;
	exports.isScalarValue = isScalarValue;
	exports.isTest = isTest;
	exports.maybeDeepFreeze = maybeDeepFreeze;
	exports.mergeDeep = mergeDeep;
	exports.mergeDeepArray = mergeDeepArray;
	exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
	exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
	exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
	exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
	exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
	exports.resultKeyNameFromField = resultKeyNameFromField;
	exports.shouldInclude = shouldInclude;
	exports.storeKeyNameFromField = storeKeyNameFromField;
	exports.stripSymbols = stripSymbols;
	exports.toIdValue = toIdValue;
	exports.tryFunctionOrLogError = tryFunctionOrLogError;
	exports.valueFromNode = valueFromNode;
	exports.valueToObjectRepresentation = valueToObjectRepresentation;
	exports.variablesInOperation = variablesInOperation;
	exports.warnOnceInDevelopment = warnOnceInDevelopment;
	exports.canUseWeakMap = exports.isEqual = void 0;

	var _visitor = __webpack_require__(21);

	var _tsInvariant = __webpack_require__(17);

	var _tslib = __webpack_require__(11);

	var _fastJsonStableStringify = _interopRequireDefault(__webpack_require__(24));

	var _equality = __webpack_require__(25);

	exports.isEqual = _equality.equal;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isScalarValue(value) {
	  return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
	}

	function isNumberValue(value) {
	  return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
	}

	function isStringValue(value) {
	  return value.kind === 'StringValue';
	}

	function isBooleanValue(value) {
	  return value.kind === 'BooleanValue';
	}

	function isIntValue(value) {
	  return value.kind === 'IntValue';
	}

	function isFloatValue(value) {
	  return value.kind === 'FloatValue';
	}

	function isVariable(value) {
	  return value.kind === 'Variable';
	}

	function isObjectValue(value) {
	  return value.kind === 'ObjectValue';
	}

	function isListValue(value) {
	  return value.kind === 'ListValue';
	}

	function isEnumValue(value) {
	  return value.kind === 'EnumValue';
	}

	function isNullValue(value) {
	  return value.kind === 'NullValue';
	}

	function valueToObjectRepresentation(argObj, name, value, variables) {
	  if (isIntValue(value) || isFloatValue(value)) {
	    argObj[name.value] = Number(value.value);
	  } else if (isBooleanValue(value) || isStringValue(value)) {
	    argObj[name.value] = value.value;
	  } else if (isObjectValue(value)) {
	    var nestedArgObj_1 = {};
	    value.fields.map(function (obj) {
	      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
	    });
	    argObj[name.value] = nestedArgObj_1;
	  } else if (isVariable(value)) {
	    var variableValue = (variables || {})[value.name.value];
	    argObj[name.value] = variableValue;
	  } else if (isListValue(value)) {
	    argObj[name.value] = value.values.map(function (listValue) {
	      var nestedArgArrayObj = {};
	      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
	      return nestedArgArrayObj[name.value];
	    });
	  } else if (isEnumValue(value)) {
	    argObj[name.value] = value.value;
	  } else if (isNullValue(value)) {
	    argObj[name.value] = null;
	  } else {
	    throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(17) : new _tsInvariant.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.');
	  }
	}

	function storeKeyNameFromField(field, variables) {
	  var directivesObj = null;

	  if (field.directives) {
	    directivesObj = {};
	    field.directives.forEach(function (directive) {
	      directivesObj[directive.name.value] = {};

	      if (directive.arguments) {
	        directive.arguments.forEach(function (_a) {
	          var name = _a.name,
	              value = _a.value;
	          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
	        });
	      }
	    });
	  }

	  var argObj = null;

	  if (field.arguments && field.arguments.length) {
	    argObj = {};
	    field.arguments.forEach(function (_a) {
	      var name = _a.name,
	          value = _a.value;
	      return valueToObjectRepresentation(argObj, name, value, variables);
	    });
	  }

	  return getStoreKeyName(field.name.value, argObj, directivesObj);
	}

	var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export'];

	function getStoreKeyName(fieldName, args, directives) {
	  if (directives && directives['connection'] && directives['connection']['key']) {
	    if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
	      var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
	      filterKeys.sort();
	      var queryArgs_1 = args;
	      var filteredArgs_1 = {};
	      filterKeys.forEach(function (key) {
	        filteredArgs_1[key] = queryArgs_1[key];
	      });
	      return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
	    } else {
	      return directives['connection']['key'];
	    }
	  }

	  var completeFieldName = fieldName;

	  if (args) {
	    var stringifiedArgs = (0, _fastJsonStableStringify.default)(args);
	    completeFieldName += "(" + stringifiedArgs + ")";
	  }

	  if (directives) {
	    Object.keys(directives).forEach(function (key) {
	      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;

	      if (directives[key] && Object.keys(directives[key]).length) {
	        completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
	      } else {
	        completeFieldName += "@" + key;
	      }
	    });
	  }

	  return completeFieldName;
	}

	function argumentsObjectFromField(field, variables) {
	  if (field.arguments && field.arguments.length) {
	    var argObj_1 = {};
	    field.arguments.forEach(function (_a) {
	      var name = _a.name,
	          value = _a.value;
	      return valueToObjectRepresentation(argObj_1, name, value, variables);
	    });
	    return argObj_1;
	  }

	  return null;
	}

	function resultKeyNameFromField(field) {
	  return field.alias ? field.alias.value : field.name.value;
	}

	function isField(selection) {
	  return selection.kind === 'Field';
	}

	function isInlineFragment(selection) {
	  return selection.kind === 'InlineFragment';
	}

	function isIdValue(idObject) {
	  return idObject && idObject.type === 'id' && typeof idObject.generated === 'boolean';
	}

	function toIdValue(idConfig, generated) {
	  if (generated === void 0) {
	    generated = false;
	  }

	  return (0, _tslib.__assign)({
	    type: 'id',
	    generated: generated
	  }, typeof idConfig === 'string' ? {
	    id: idConfig,
	    typename: undefined
	  } : idConfig);
	}

	function isJsonValue(jsonObject) {
	  return jsonObject != null && typeof jsonObject === 'object' && jsonObject.type === 'json';
	}

	function defaultValueFromVariable(node) {
	  throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(18) : new _tsInvariant.InvariantError("Variable nodes are not supported by valueFromNode");
	}

	function valueFromNode(node, onVariable) {
	  if (onVariable === void 0) {
	    onVariable = defaultValueFromVariable;
	  }

	  switch (node.kind) {
	    case 'Variable':
	      return onVariable(node);

	    case 'NullValue':
	      return null;

	    case 'IntValue':
	      return parseInt(node.value, 10);

	    case 'FloatValue':
	      return parseFloat(node.value);

	    case 'ListValue':
	      return node.values.map(function (v) {
	        return valueFromNode(v, onVariable);
	      });

	    case 'ObjectValue':
	      {
	        var value = {};

	        for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
	          var field = _a[_i];
	          value[field.name.value] = valueFromNode(field.value, onVariable);
	        }

	        return value;
	      }

	    default:
	      return node.value;
	  }
	}

	function getDirectiveInfoFromField(field, variables) {
	  if (field.directives && field.directives.length) {
	    var directiveObj_1 = {};
	    field.directives.forEach(function (directive) {
	      directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
	    });
	    return directiveObj_1;
	  }

	  return null;
	}

	function shouldInclude(selection, variables) {
	  if (variables === void 0) {
	    variables = {};
	  }

	  return getInclusionDirectives(selection.directives).every(function (_a) {
	    var directive = _a.directive,
	        ifArgument = _a.ifArgument;
	    var evaledValue = false;

	    if (ifArgument.value.kind === 'Variable') {
	      evaledValue = variables[ifArgument.value.name.value];
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(evaledValue !== void 0, 3) : (0, _tsInvariant.invariant)(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
	    } else {
	      evaledValue = ifArgument.value.value;
	    }

	    return directive.name.value === 'skip' ? !evaledValue : evaledValue;
	  });
	}

	function getDirectiveNames(doc) {
	  var names = [];
	  (0, _visitor.visit)(doc, {
	    Directive: function (node) {
	      names.push(node.name.value);
	    }
	  });
	  return names;
	}

	function hasDirectives(names, doc) {
	  return getDirectiveNames(doc).some(function (name) {
	    return names.indexOf(name) > -1;
	  });
	}

	function hasClientExports(document) {
	  return document && hasDirectives(['client'], document) && hasDirectives(['export'], document);
	}

	function isInclusionDirective(_a) {
	  var value = _a.name.value;
	  return value === 'skip' || value === 'include';
	}

	function getInclusionDirectives(directives) {
	  return directives ? directives.filter(isInclusionDirective).map(function (directive) {
	    var directiveArguments = directive.arguments;
	    var directiveName = directive.name.value;
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(directiveArguments && directiveArguments.length === 1, 4) : (0, _tsInvariant.invariant)(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
	    var ifArgument = directiveArguments[0];
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(ifArgument.name && ifArgument.name.value === 'if', 5) : (0, _tsInvariant.invariant)(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
	    var ifValue = ifArgument.value;
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 6) : (0, _tsInvariant.invariant)(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
	    return {
	      directive: directive,
	      ifArgument: ifArgument
	    };
	  }) : [];
	}

	function getFragmentQueryDocument(document, fragmentName) {
	  var actualFragmentName = fragmentName;
	  var fragments = [];
	  document.definitions.forEach(function (definition) {
	    if (definition.kind === 'OperationDefinition') {
	      throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
	    }

	    if (definition.kind === 'FragmentDefinition') {
	      fragments.push(definition);
	    }
	  });

	  if (typeof actualFragmentName === 'undefined') {
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fragments.length === 1, 2) : (0, _tsInvariant.invariant)(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
	    actualFragmentName = fragments[0].name.value;
	  }

	  var query = (0, _tslib.__assign)({}, document, {
	    definitions: [{
	      kind: 'OperationDefinition',
	      operation: 'query',
	      selectionSet: {
	        kind: 'SelectionSet',
	        selections: [{
	          kind: 'FragmentSpread',
	          name: {
	            kind: 'Name',
	            value: actualFragmentName
	          }
	        }]
	      }
	    }].concat(document.definitions)
	  });
	  return query;
	}

	function assign(target) {
	  var sources = [];

	  for (var _i = 1; _i < arguments.length; _i++) {
	    sources[_i - 1] = arguments[_i];
	  }

	  sources.forEach(function (source) {
	    if (typeof source === 'undefined' || source === null) {
	      return;
	    }

	    Object.keys(source).forEach(function (key) {
	      target[key] = source[key];
	    });
	  });
	  return target;
	}

	function getMutationDefinition(doc) {
	  checkDocument(doc);
	  var mutationDef = doc.definitions.filter(function (definition) {
	    return definition.kind === 'OperationDefinition' && definition.operation === 'mutation';
	  })[0];
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(mutationDef, 7) : (0, _tsInvariant.invariant)(mutationDef, 'Must contain a mutation definition.');
	  return mutationDef;
	}

	function checkDocument(doc) {
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(doc && doc.kind === 'Document', 8) : (0, _tsInvariant.invariant)(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	  var operations = doc.definitions.filter(function (d) {
	    return d.kind !== 'FragmentDefinition';
	  }).map(function (definition) {
	    if (definition.kind !== 'OperationDefinition') {
	      throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(9) : new _tsInvariant.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
	    }

	    return definition;
	  });
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(operations.length <= 1, 10) : (0, _tsInvariant.invariant)(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
	  return doc;
	}

	function getOperationDefinition(doc) {
	  checkDocument(doc);
	  return doc.definitions.filter(function (definition) {
	    return definition.kind === 'OperationDefinition';
	  })[0];
	}

	function getOperationDefinitionOrDie(document) {
	  var def = getOperationDefinition(document);
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(def, 11) : (0, _tsInvariant.invariant)(def, "GraphQL document is missing an operation");
	  return def;
	}

	function getOperationName(doc) {
	  return doc.definitions.filter(function (definition) {
	    return definition.kind === 'OperationDefinition' && definition.name;
	  }).map(function (x) {
	    return x.name.value;
	  })[0] || null;
	}

	function getFragmentDefinitions(doc) {
	  return doc.definitions.filter(function (definition) {
	    return definition.kind === 'FragmentDefinition';
	  });
	}

	function getQueryDefinition(doc) {
	  var queryDef = getOperationDefinition(doc);
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(queryDef && queryDef.operation === 'query', 12) : (0, _tsInvariant.invariant)(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
	  return queryDef;
	}

	function getFragmentDefinition(doc) {
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(doc.kind === 'Document', 13) : (0, _tsInvariant.invariant)(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(doc.definitions.length <= 1, 14) : (0, _tsInvariant.invariant)(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
	  var fragmentDef = doc.definitions[0];
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fragmentDef.kind === 'FragmentDefinition', 15) : (0, _tsInvariant.invariant)(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
	  return fragmentDef;
	}

	function getMainDefinition(queryDoc) {
	  checkDocument(queryDoc);
	  var fragmentDefinition;

	  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
	    var definition = _a[_i];

	    if (definition.kind === 'OperationDefinition') {
	      var operation = definition.operation;

	      if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
	        return definition;
	      }
	    }

	    if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
	      fragmentDefinition = definition;
	    }
	  }

	  if (fragmentDefinition) {
	    return fragmentDefinition;
	  }

	  throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(16) : new _tsInvariant.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
	}

	function createFragmentMap(fragments) {
	  if (fragments === void 0) {
	    fragments = [];
	  }

	  var symTable = {};
	  fragments.forEach(function (fragment) {
	    symTable[fragment.name.value] = fragment;
	  });
	  return symTable;
	}

	function getDefaultValues(definition) {
	  if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
	    var defaultValues = definition.variableDefinitions.filter(function (_a) {
	      var defaultValue = _a.defaultValue;
	      return defaultValue;
	    }).map(function (_a) {
	      var variable = _a.variable,
	          defaultValue = _a.defaultValue;
	      var defaultValueObj = {};
	      valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
	      return defaultValueObj;
	    });
	    return assign.apply(void 0, [{}].concat(defaultValues));
	  }

	  return {};
	}

	function variablesInOperation(operation) {
	  var names = new Set();

	  if (operation.variableDefinitions) {
	    for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
	      var definition = _a[_i];
	      names.add(definition.variable.name.value);
	    }
	  }

	  return names;
	}

	function filterInPlace(array, test, context) {
	  var target = 0;
	  array.forEach(function (elem, i) {
	    if (test.call(this, elem, i, array)) {
	      array[target++] = elem;
	    }
	  }, context);
	  array.length = target;
	  return array;
	}

	var TYPENAME_FIELD = {
	  kind: 'Field',
	  name: {
	    kind: 'Name',
	    value: '__typename'
	  }
	};

	function isEmpty(op, fragments) {
	  return op.selectionSet.selections.every(function (selection) {
	    return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
	  });
	}

	function nullIfDocIsEmpty(doc) {
	  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
	}

	function getDirectiveMatcher(directives) {
	  return function directiveMatcher(directive) {
	    return directives.some(function (dir) {
	      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
	    });
	  };
	}

	function removeDirectivesFromDocument(directives, doc) {
	  var variablesInUse = Object.create(null);
	  var variablesToRemove = [];
	  var fragmentSpreadsInUse = Object.create(null);
	  var fragmentSpreadsToRemove = [];
	  var modifiedDoc = nullIfDocIsEmpty((0, _visitor.visit)(doc, {
	    Variable: {
	      enter: function (node, _key, parent) {
	        if (parent.kind !== 'VariableDefinition') {
	          variablesInUse[node.name.value] = true;
	        }
	      }
	    },
	    Field: {
	      enter: function (node) {
	        if (directives && node.directives) {
	          var shouldRemoveField = directives.some(function (directive) {
	            return directive.remove;
	          });

	          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
	            if (node.arguments) {
	              node.arguments.forEach(function (arg) {
	                if (arg.value.kind === 'Variable') {
	                  variablesToRemove.push({
	                    name: arg.value.name.value
	                  });
	                }
	              });
	            }

	            if (node.selectionSet) {
	              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
	                fragmentSpreadsToRemove.push({
	                  name: frag.name.value
	                });
	              });
	            }

	            return null;
	          }
	        }
	      }
	    },
	    FragmentSpread: {
	      enter: function (node) {
	        fragmentSpreadsInUse[node.name.value] = true;
	      }
	    },
	    Directive: {
	      enter: function (node) {
	        if (getDirectiveMatcher(directives)(node)) {
	          return null;
	        }
	      }
	    }
	  }));

	  if (modifiedDoc && filterInPlace(variablesToRemove, function (v) {
	    return !variablesInUse[v.name];
	  }).length) {
	    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
	  }

	  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function (fs) {
	    return !fragmentSpreadsInUse[fs.name];
	  }).length) {
	    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
	  }

	  return modifiedDoc;
	}

	function addTypenameToDocument(doc) {
	  return (0, _visitor.visit)(checkDocument(doc), {
	    SelectionSet: {
	      enter: function (node, _key, parent) {
	        if (parent && parent.kind === 'OperationDefinition') {
	          return;
	        }

	        var selections = node.selections;

	        if (!selections) {
	          return;
	        }

	        var skip = selections.some(function (selection) {
	          return isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
	        });

	        if (skip) {
	          return;
	        }

	        var field = parent;

	        if (isField(field) && field.directives && field.directives.some(function (d) {
	          return d.name.value === 'export';
	        })) {
	          return;
	        }

	        return (0, _tslib.__assign)({}, node, {
	          selections: selections.concat([TYPENAME_FIELD])
	        });
	      }
	    }
	  });
	}

	var connectionRemoveConfig = {
	  test: function (directive) {
	    var willRemove = directive.name.value === 'connection';

	    if (willRemove) {
	      if (!directive.arguments || !directive.arguments.some(function (arg) {
	        return arg.name.value === 'key';
	      })) {
	        process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('Removing an @connection directive even though it does not have a key. ' + 'You may want to use the key parameter to specify a store key.');
	      }
	    }

	    return willRemove;
	  }
	};

	function removeConnectionDirectiveFromDocument(doc) {
	  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
	}

	function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
	  if (nestedCheck === void 0) {
	    nestedCheck = true;
	  }

	  return selectionSet && selectionSet.selections && selectionSet.selections.some(function (selection) {
	    return hasDirectivesInSelection(directives, selection, nestedCheck);
	  });
	}

	function hasDirectivesInSelection(directives, selection, nestedCheck) {
	  if (nestedCheck === void 0) {
	    nestedCheck = true;
	  }

	  if (!isField(selection)) {
	    return true;
	  }

	  if (!selection.directives) {
	    return false;
	  }

	  return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
	}

	function getDirectivesFromDocument(directives, doc) {
	  checkDocument(doc);
	  var parentPath;
	  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
	    SelectionSet: {
	      enter: function (node, _key, _parent, path) {
	        var currentPath = path.join('-');

	        if (!parentPath || currentPath === parentPath || !currentPath.startsWith(parentPath)) {
	          if (node.selections) {
	            var selectionsWithDirectives = node.selections.filter(function (selection) {
	              return hasDirectivesInSelection(directives, selection);
	            });

	            if (hasDirectivesInSelectionSet(directives, node, false)) {
	              parentPath = currentPath;
	            }

	            return (0, _tslib.__assign)({}, node, {
	              selections: selectionsWithDirectives
	            });
	          } else {
	            return null;
	          }
	        }
	      }
	    }
	  }));
	}

	function getArgumentMatcher(config) {
	  return function argumentMatcher(argument) {
	    return config.some(function (aConfig) {
	      return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
	    });
	  };
	}

	function removeArgumentsFromDocument(config, doc) {
	  var argMatcher = getArgumentMatcher(config);
	  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
	    OperationDefinition: {
	      enter: function (node) {
	        return (0, _tslib.__assign)({}, node, {
	          variableDefinitions: node.variableDefinitions.filter(function (varDef) {
	            return !config.some(function (arg) {
	              return arg.name === varDef.variable.name.value;
	            });
	          })
	        });
	      }
	    },
	    Field: {
	      enter: function (node) {
	        var shouldRemoveField = config.some(function (argConfig) {
	          return argConfig.remove;
	        });

	        if (shouldRemoveField) {
	          var argMatchCount_1 = 0;
	          node.arguments.forEach(function (arg) {
	            if (argMatcher(arg)) {
	              argMatchCount_1 += 1;
	            }
	          });

	          if (argMatchCount_1 === 1) {
	            return null;
	          }
	        }
	      }
	    },
	    Argument: {
	      enter: function (node) {
	        if (argMatcher(node)) {
	          return null;
	        }
	      }
	    }
	  }));
	}

	function removeFragmentSpreadFromDocument(config, doc) {
	  function enter(node) {
	    if (config.some(function (def) {
	      return def.name === node.name.value;
	    })) {
	      return null;
	    }
	  }

	  return nullIfDocIsEmpty((0, _visitor.visit)(doc, {
	    FragmentSpread: {
	      enter: enter
	    },
	    FragmentDefinition: {
	      enter: enter
	    }
	  }));
	}

	function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
	  var allFragments = [];
	  selectionSet.selections.forEach(function (selection) {
	    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
	      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) {
	        return allFragments.push(frag);
	      });
	    } else if (selection.kind === 'FragmentSpread') {
	      allFragments.push(selection);
	    }
	  });
	  return allFragments;
	}

	function buildQueryFromSelectionSet(document) {
	  var definition = getMainDefinition(document);
	  var definitionOperation = definition.operation;

	  if (definitionOperation === 'query') {
	    return document;
	  }

	  var modifiedDoc = (0, _visitor.visit)(document, {
	    OperationDefinition: {
	      enter: function (node) {
	        return (0, _tslib.__assign)({}, node, {
	          operation: 'query'
	        });
	      }
	    }
	  });
	  return modifiedDoc;
	}

	function removeClientSetsFromDocument(document) {
	  checkDocument(document);
	  var modifiedDoc = removeDirectivesFromDocument([{
	    test: function (directive) {
	      return directive.name.value === 'client';
	    },
	    remove: true
	  }], document);

	  if (modifiedDoc) {
	    modifiedDoc = (0, _visitor.visit)(modifiedDoc, {
	      FragmentDefinition: {
	        enter: function (node) {
	          if (node.selectionSet) {
	            var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
	              return isField(selection) && selection.name.value === '__typename';
	            });

	            if (isTypenameOnly) {
	              return null;
	            }
	          }
	        }
	      }
	    });
	  }

	  return modifiedDoc;
	}

	var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
	exports.canUseWeakMap = canUseWeakMap;
	var toString = Object.prototype.toString;

	function cloneDeep(value) {
	  return cloneDeepHelper(value, new Map());
	}

	function cloneDeepHelper(val, seen) {
	  switch (toString.call(val)) {
	    case "[object Array]":
	      {
	        if (seen.has(val)) return seen.get(val);
	        var copy_1 = val.slice(0);
	        seen.set(val, copy_1);
	        copy_1.forEach(function (child, i) {
	          copy_1[i] = cloneDeepHelper(child, seen);
	        });
	        return copy_1;
	      }

	    case "[object Object]":
	      {
	        if (seen.has(val)) return seen.get(val);
	        var copy_2 = Object.create(Object.getPrototypeOf(val));
	        seen.set(val, copy_2);
	        Object.keys(val).forEach(function (key) {
	          copy_2[key] = cloneDeepHelper(val[key], seen);
	        });
	        return copy_2;
	      }

	    default:
	      return val;
	  }
	}

	function getEnv() {
	  if (typeof process !== 'undefined' && process.env.NODE_ENV) {
	    return process.env.NODE_ENV;
	  }

	  return 'development';
	}

	function isEnv(env) {
	  return getEnv() === env;
	}

	function isProduction() {
	  return isEnv('production') === true;
	}

	function isDevelopment() {
	  return isEnv('development') === true;
	}

	function isTest() {
	  return isEnv('test') === true;
	}

	function tryFunctionOrLogError(f) {
	  try {
	    return f();
	  } catch (e) {
	    if (console.error) {
	      console.error(e);
	    }
	  }
	}

	function graphQLResultHasError(result) {
	  return result.errors && result.errors.length;
	}

	function deepFreeze(o) {
	  Object.freeze(o);
	  Object.getOwnPropertyNames(o).forEach(function (prop) {
	    if (o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
	      deepFreeze(o[prop]);
	    }
	  });
	  return o;
	}

	function maybeDeepFreeze(obj) {
	  if (isDevelopment() || isTest()) {
	    var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';

	    if (!symbolIsPolyfilled) {
	      return deepFreeze(obj);
	    }
	  }

	  return obj;
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function mergeDeep() {
	  var sources = [];

	  for (var _i = 0; _i < arguments.length; _i++) {
	    sources[_i] = arguments[_i];
	  }

	  return mergeDeepArray(sources);
	}

	function mergeDeepArray(sources) {
	  var target = sources[0] || {};
	  var count = sources.length;

	  if (count > 1) {
	    var pastCopies = [];
	    target = shallowCopyForMerge(target, pastCopies);

	    for (var i = 1; i < count; ++i) {
	      target = mergeHelper(target, sources[i], pastCopies);
	    }
	  }

	  return target;
	}

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	function mergeHelper(target, source, pastCopies) {
	  if (isObject(source) && isObject(target)) {
	    if (Object.isExtensible && !Object.isExtensible(target)) {
	      target = shallowCopyForMerge(target, pastCopies);
	    }

	    Object.keys(source).forEach(function (sourceKey) {
	      var sourceValue = source[sourceKey];

	      if (hasOwnProperty.call(target, sourceKey)) {
	        var targetValue = target[sourceKey];

	        if (sourceValue !== targetValue) {
	          target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
	        }
	      } else {
	        target[sourceKey] = sourceValue;
	      }
	    });
	    return target;
	  }

	  return source;
	}

	function shallowCopyForMerge(value, pastCopies) {
	  if (value !== null && typeof value === 'object' && pastCopies.indexOf(value) < 0) {
	    if (Array.isArray(value)) {
	      value = value.slice(0);
	    } else {
	      value = (0, _tslib.__assign)({
	        __proto__: Object.getPrototypeOf(value)
	      }, value);
	    }

	    pastCopies.push(value);
	  }

	  return value;
	}

	var haveWarned = Object.create({});

	function warnOnceInDevelopment(msg, type) {
	  if (type === void 0) {
	    type = 'warn';
	  }

	  if (!isProduction() && !haveWarned[msg]) {
	    if (!isTest()) {
	      haveWarned[msg] = true;
	    }

	    if (type === 'error') {
	      console.error(msg);
	    } else {
	      console.warn(msg);
	    }
	  }
	}

	function stripSymbols(data) {
	  return JSON.parse(JSON.stringify(data));
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.visit = visit;
	exports.visitInParallel = visitInParallel;
	exports.visitWithTypeInfo = visitWithTypeInfo;
	exports.getVisitFn = getVisitFn;
	exports.BREAK = exports.QueryDocumentKeys = void 0;

	var _inspect = _interopRequireDefault(__webpack_require__(22));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QueryDocumentKeys = {
	  Name: [],
	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],
	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
	  // or removed in the future.
	  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  NullValue: [],
	  EnumValue: [],
	  ListValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],
	  Directive: ['name', 'arguments'],
	  NamedType: ['name'],
	  ListType: ['type'],
	  NonNullType: ['type'],
	  SchemaDefinition: ['directives', 'operationTypes'],
	  OperationTypeDefinition: ['type'],
	  ScalarTypeDefinition: ['description', 'name', 'directives'],
	  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
	  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
	  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
	  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
	  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
	  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
	  EnumValueDefinition: ['description', 'name', 'directives'],
	  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
	  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
	  SchemaExtension: ['directives', 'operationTypes'],
	  ScalarTypeExtension: ['name', 'directives'],
	  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
	  InterfaceTypeExtension: ['name', 'directives', 'fields'],
	  UnionTypeExtension: ['name', 'directives', 'types'],
	  EnumTypeExtension: ['name', 'directives', 'values'],
	  InputObjectTypeExtension: ['name', 'directives', 'fields']
	};
	exports.QueryDocumentKeys = QueryDocumentKeys;
	var BREAK = Object.freeze({});
	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traversal, and calling the
	 * leave function after visiting that node and all of its child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     const editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */

	exports.BREAK = BREAK;

	function visit(root, visitor) {
	  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

	  /* eslint-disable no-undef-init */
	  var stack = undefined;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var node = undefined;
	  var key = undefined;
	  var parent = undefined;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;
	  /* eslint-enable no-undef-init */

	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var isEdited = isLeaving && edits.length !== 0;

	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path[path.length - 1];
	      node = parent;
	      parent = ancestors.pop();

	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};

	          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
	            var k = _Object$keys2[_i2];
	            clone[k] = node[k];
	          }

	          node = clone;
	        }

	        var editOffset = 0;

	        for (var ii = 0; ii < edits.length; ii++) {
	          var editKey = edits[ii][0];
	          var editValue = edits[ii][1];

	          if (inArray) {
	            editKey -= editOffset;
	          }

	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }

	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;

	      if (node === null || node === undefined) {
	        continue;
	      }

	      if (parent) {
	        path.push(key);
	      }
	    }

	    var result = void 0;

	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + (0, _inspect.default)(node));
	      }

	      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);

	        if (result === BREAK) {
	          break;
	        }

	        if (result === false) {
	          if (!isLeaving) {
	            path.pop();
	            continue;
	          }
	        } else if (result !== undefined) {
	          edits.push([key, result]);

	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }

	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }

	    if (isLeaving) {
	      path.pop();
	    } else {
	      stack = {
	        inArray: inArray,
	        index: index,
	        keys: keys,
	        edits: edits,
	        prev: stack
	      };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];

	      if (parent) {
	        ancestors.push(parent);
	      }

	      parent = node;
	    }
	  } while (stack !== undefined);

	  if (edits.length !== 0) {
	    newRoot = edits[edits.length - 1][1];
	  }

	  return newRoot;
	}

	function isNode(maybeNode) {
	  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
	}
	/**
	 * Creates a new visitor instance which delegates to many visitors to run in
	 * parallel. Each visitor will be visited for each node before moving on.
	 *
	 * If a prior visitor edits a node, no following visitors will see that node.
	 */


	function visitInParallel(visitors) {
	  var skipping = new Array(visitors.length);
	  return {
	    enter: function enter(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind,
	          /* isLeaving */
	          false);

	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);

	            if (result === false) {
	              skipping[i] = node;
	            } else if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined) {
	              return result;
	            }
	          }
	        }
	      }
	    },
	    leave: function leave(node) {
	      for (var i = 0; i < visitors.length; i++) {
	        if (!skipping[i]) {
	          var fn = getVisitFn(visitors[i], node.kind,
	          /* isLeaving */
	          true);

	          if (fn) {
	            var result = fn.apply(visitors[i], arguments);

	            if (result === BREAK) {
	              skipping[i] = BREAK;
	            } else if (result !== undefined && result !== false) {
	              return result;
	            }
	          }
	        } else if (skipping[i] === node) {
	          skipping[i] = null;
	        }
	      }
	    }
	  };
	}
	/**
	 * Creates a new visitor instance which maintains a provided TypeInfo instance
	 * along with visiting visitor.
	 */


	function visitWithTypeInfo(typeInfo, visitor) {
	  return {
	    enter: function enter(node) {
	      typeInfo.enter(node);
	      var fn = getVisitFn(visitor, node.kind,
	      /* isLeaving */
	      false);

	      if (fn) {
	        var result = fn.apply(visitor, arguments);

	        if (result !== undefined) {
	          typeInfo.leave(node);

	          if (isNode(result)) {
	            typeInfo.enter(result);
	          }
	        }

	        return result;
	      }
	    },
	    leave: function leave(node) {
	      var fn = getVisitFn(visitor, node.kind,
	      /* isLeaving */
	      true);
	      var result;

	      if (fn) {
	        result = fn.apply(visitor, arguments);
	      }

	      typeInfo.leave(node);
	      return result;
	    }
	  };
	}
	/**
	 * Given a visitor instance, if it is leaving or not, and a node kind, return
	 * the function the visitor runtime should call.
	 */


	function getVisitFn(visitor, kind, isLeaving) {
	  var kindVisitor = visitor[kind];

	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }

	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	  } else {
	    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

	    if (specificVisitor) {
	      if (typeof specificVisitor === 'function') {
	        // { enter() {}, leave() {} }
	        return specificVisitor;
	      }

	      var specificKindVisitor = specificVisitor[kind];

	      if (typeof specificKindVisitor === 'function') {
	        // { enter: { Kind() {} }, leave: { Kind() {} } }
	        return specificKindVisitor;
	      }
	    }
	  }
	}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = inspect;

	var _nodejsCustomInspectSymbol = _interopRequireDefault(__webpack_require__(23));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var MAX_ARRAY_LENGTH = 10;
	var MAX_RECURSIVE_DEPTH = 2;
	/**
	 * Used to print values in error messages.
	 */

	function inspect(value) {
	  return formatValue(value, []);
	}

	function formatValue(value, seenValues) {
	  switch (_typeof(value)) {
	    case 'string':
	      return JSON.stringify(value);

	    case 'function':
	      return value.name ? "[function ".concat(value.name, "]") : '[function]';

	    case 'object':
	      if (value === null) {
	        return 'null';
	      }

	      return formatObjectValue(value, seenValues);

	    default:
	      return String(value);
	  }
	}

	function formatObjectValue(value, previouslySeenValues) {
	  if (previouslySeenValues.indexOf(value) !== -1) {
	    return '[Circular]';
	  }

	  var seenValues = [].concat(previouslySeenValues, [value]);
	  var customInspectFn = getCustomFn(value);

	  if (customInspectFn !== undefined) {
	    // $FlowFixMe(>=0.90.0)
	    var customValue = customInspectFn.call(value); // check for infinite recursion

	    if (customValue !== value) {
	      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
	    }
	  } else if (Array.isArray(value)) {
	    return formatArray(value, seenValues);
	  }

	  return formatObject(value, seenValues);
	}

	function formatObject(object, seenValues) {
	  var keys = Object.keys(object);

	  if (keys.length === 0) {
	    return '{}';
	  }

	  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
	    return '[' + getObjectTag(object) + ']';
	  }

	  var properties = keys.map(function (key) {
	    var value = formatValue(object[key], seenValues);
	    return key + ': ' + value;
	  });
	  return '{ ' + properties.join(', ') + ' }';
	}

	function formatArray(array, seenValues) {
	  if (array.length === 0) {
	    return '[]';
	  }

	  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
	    return '[Array]';
	  }

	  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
	  var remaining = array.length - len;
	  var items = [];

	  for (var i = 0; i < len; ++i) {
	    items.push(formatValue(array[i], seenValues));
	  }

	  if (remaining === 1) {
	    items.push('... 1 more item');
	  } else if (remaining > 1) {
	    items.push("... ".concat(remaining, " more items"));
	  }

	  return '[' + items.join(', ') + ']';
	}

	function getCustomFn(object) {
	  var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];

	  if (typeof customInspectFn === 'function') {
	    return customInspectFn;
	  }

	  if (typeof object.inspect === 'function') {
	    return object.inspect;
	  }
	}

	function getObjectTag(object) {
	  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

	  if (tag === 'Object' && typeof object.constructor === 'function') {
	    var name = object.constructor.name;

	    if (typeof name === 'string' && name !== '') {
	      return name;
	    }
	  }

	  return tag;
	}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
	var _default = nodejsCustomInspectSymbol;
	exports.default = _default;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function (data, opts) {
	    if (!opts) opts = {};
	    if (typeof opts === 'function') opts = { cmp: opts };
	    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

	    var cmp = opts.cmp && (function (f) {
	        return function (node) {
	            return function (a, b) {
	                var aobj = { key: a, value: node[a] };
	                var bobj = { key: b, value: node[b] };
	                return f(aobj, bobj);
	            };
	        };
	    })(opts.cmp);

	    var seen = [];
	    return (function stringify (node) {
	        if (node && node.toJSON && typeof node.toJSON === 'function') {
	            node = node.toJSON();
	        }

	        if (node === undefined) return;
	        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
	        if (typeof node !== 'object') return JSON.stringify(node);

	        var i, out;
	        if (Array.isArray(node)) {
	            out = '[';
	            for (i = 0; i < node.length; i++) {
	                if (i) out += ',';
	                out += stringify(node[i]) || 'null';
	            }
	            return out + ']';
	        }

	        if (node === null) return 'null';

	        if (seen.indexOf(node) !== -1) {
	            if (cycles) return JSON.stringify('__cycle__');
	            throw new TypeError('Converting circular structure to JSON');
	        }

	        var seenIndex = seen.push(node) - 1;
	        var keys = Object.keys(node).sort(cmp && cmp(node));
	        out = '';
	        for (i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            var value = stringify(node[key]);

	            if (!value) continue;
	            if (out) out += ',';
	            out += JSON.stringify(key) + ':' + value;
	        }
	        seen.splice(seenIndex, 1);
	        return '{' + out + '}';
	    })(data);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
	var previousComparisons = new Map();
	/**
	 * Performs a deep equality check on two JavaScript values, tolerating cycles.
	 */
	function equal(a, b) {
	    try {
	        return check(a, b);
	    }
	    finally {
	        previousComparisons.clear();
	    }
	}
	function check(a, b) {
	    // If the two values are strictly equal, our job is easy.
	    if (a === b) {
	        return true;
	    }
	    // Object.prototype.toString returns a representation of the runtime type of
	    // the given value that is considerably more precise than typeof.
	    var aTag = toString.call(a);
	    var bTag = toString.call(b);
	    // If the runtime types of a and b are different, they could maybe be equal
	    // under some interpretation of equality, but for simplicity and performance
	    // we just return false instead.
	    if (aTag !== bTag) {
	        return false;
	    }
	    switch (aTag) {
	        case '[object Array]':
	            // Arrays are a lot like other objects, but we can cheaply compare their
	            // lengths as a short-cut before comparing their elements.
	            if (a.length !== b.length)
	                return false;
	        // Fall through to object case...
	        case '[object Object]': {
	            if (previouslyCompared(a, b))
	                return true;
	            var aKeys = Object.keys(a);
	            var bKeys = Object.keys(b);
	            // If `a` and `b` have a different number of enumerable keys, they
	            // must be different.
	            var keyCount = aKeys.length;
	            if (keyCount !== bKeys.length)
	                return false;
	            // Now make sure they have the same keys.
	            for (var k = 0; k < keyCount; ++k) {
	                if (!hasOwnProperty.call(b, aKeys[k])) {
	                    return false;
	                }
	            }
	            // Finally, check deep equality of all child properties.
	            for (var k = 0; k < keyCount; ++k) {
	                var key = aKeys[k];
	                if (!check(a[key], b[key])) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        case '[object Error]':
	            return a.name === b.name && a.message === b.message;
	        case '[object Number]':
	            // Handle NaN, which is !== itself.
	            if (a !== a)
	                return b !== b;
	        // Fall through to shared +a === +b case...
	        case '[object Boolean]':
	        case '[object Date]':
	            return +a === +b;
	        case '[object RegExp]':
	        case '[object String]':
	            return a == "" + b;
	        case '[object Map]':
	        case '[object Set]': {
	            if (a.size !== b.size)
	                return false;
	            if (previouslyCompared(a, b))
	                return true;
	            var aIterator = a.entries();
	            var isMap = aTag === '[object Map]';
	            while (true) {
	                var info = aIterator.next();
	                if (info.done)
	                    break;
	                // If a instanceof Set, aValue === aKey.
	                var _a = info.value, aKey = _a[0], aValue = _a[1];
	                // So this works the same way for both Set and Map.
	                if (!b.has(aKey)) {
	                    return false;
	                }
	                // However, we care about deep equality of values only when dealing
	                // with Map structures.
	                if (isMap && !check(aValue, b.get(aKey))) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }
	    // Otherwise the values are not equal.
	    return false;
	}
	function previouslyCompared(a, b) {
	    // Though cyclic references can make an object graph appear infinite from the
	    // perspective of a depth-first traversal, the graph still contains a finite
	    // number of distinct object references. We use the previousComparisons cache
	    // to avoid comparing the same pair of object references more than once, which
	    // guarantees termination (even if we end up comparing every object in one
	    // graph to every object in the other graph, which is extremely unlikely),
	    // while still allowing weird isomorphic structures (like rings with different
	    // lengths) a chance to pass the equality test.
	    var bSet = previousComparisons.get(a);
	    if (bSet) {
	        // Return true here because we can be sure false will be returned somewhere
	        // else if the objects are not equivalent.
	        if (bSet.has(b))
	            return true;
	    }
	    else {
	        previousComparisons.set(a, bSet = new Set);
	    }
	    bSet.add(b);
	    return false;
	}

	exports.default = equal;
	exports.equal = equal;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	tslib_1.__exportStar(__webpack_require__(27), exports);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var apollo_link_1 = __webpack_require__(10);
	var apollo_link_http_common_1 = __webpack_require__(28);
	exports.createHttpLink = function (linkOptions) {
	    if (linkOptions === void 0) { linkOptions = {}; }
	    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = tslib_1.__rest(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
	    apollo_link_http_common_1.checkFetcher(fetcher);
	    if (!fetcher) {
	        fetcher = fetch;
	    }
	    var linkConfig = {
	        http: { includeExtensions: includeExtensions },
	        options: requestOptions.fetchOptions,
	        credentials: requestOptions.credentials,
	        headers: requestOptions.headers,
	    };
	    return new apollo_link_1.ApolloLink(function (operation) {
	        var chosenURI = apollo_link_http_common_1.selectURI(operation, uri);
	        var context = operation.getContext();
	        var clientAwarenessHeaders = {};
	        if (context.clientAwareness) {
	            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
	            if (name_1) {
	                clientAwarenessHeaders['apollographql-client-name'] = name_1;
	            }
	            if (version) {
	                clientAwarenessHeaders['apollographql-client-version'] = version;
	            }
	        }
	        var contextHeaders = tslib_1.__assign({}, clientAwarenessHeaders, context.headers);
	        var contextConfig = {
	            http: context.http,
	            options: context.fetchOptions,
	            credentials: context.credentials,
	            headers: contextHeaders,
	        };
	        var _b = apollo_link_http_common_1.selectHttpOptionsAndBody(operation, apollo_link_http_common_1.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
	        var controller;
	        if (!options.signal) {
	            var _c = apollo_link_http_common_1.createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
	            controller = _controller;
	            if (controller)
	                options.signal = signal;
	        }
	        var definitionIsMutation = function (d) {
	            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
	        };
	        if (useGETForQueries &&
	            !operation.query.definitions.some(definitionIsMutation)) {
	            options.method = 'GET';
	        }
	        if (options.method === 'GET') {
	            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
	            if (parseError) {
	                return apollo_link_1.fromError(parseError);
	            }
	            chosenURI = newURI;
	        }
	        else {
	            try {
	                options.body = apollo_link_http_common_1.serializeFetchParameter(body, 'Payload');
	            }
	            catch (parseError) {
	                return apollo_link_1.fromError(parseError);
	            }
	        }
	        return new apollo_link_1.Observable(function (observer) {
	            fetcher(chosenURI, options)
	                .then(function (response) {
	                operation.setContext({ response: response });
	                return response;
	            })
	                .then(apollo_link_http_common_1.parseAndCheckHttpResponse(operation))
	                .then(function (result) {
	                observer.next(result);
	                observer.complete();
	                return result;
	            })
	                .catch(function (err) {
	                if (err.name === 'AbortError')
	                    return;
	                if (err.result && err.result.errors && err.result.data) {
	                    observer.next(err.result);
	                }
	                observer.error(err);
	            });
	            return function () {
	                if (controller)
	                    controller.abort();
	            };
	        });
	    });
	};
	function rewriteURIForGET(chosenURI, body) {
	    var queryParams = [];
	    var addQueryParam = function (key, value) {
	        queryParams.push(key + "=" + encodeURIComponent(value));
	    };
	    if ('query' in body) {
	        addQueryParam('query', body.query);
	    }
	    if (body.operationName) {
	        addQueryParam('operationName', body.operationName);
	    }
	    if (body.variables) {
	        var serializedVariables = void 0;
	        try {
	            serializedVariables = apollo_link_http_common_1.serializeFetchParameter(body.variables, 'Variables map');
	        }
	        catch (parseError) {
	            return { parseError: parseError };
	        }
	        addQueryParam('variables', serializedVariables);
	    }
	    if (body.extensions) {
	        var serializedExtensions = void 0;
	        try {
	            serializedExtensions = apollo_link_http_common_1.serializeFetchParameter(body.extensions, 'Extensions map');
	        }
	        catch (parseError) {
	            return { parseError: parseError };
	        }
	        addQueryParam('extensions', serializedExtensions);
	    }
	    var fragment = '', preFragment = chosenURI;
	    var fragmentStart = chosenURI.indexOf('#');
	    if (fragmentStart !== -1) {
	        fragment = chosenURI.substr(fragmentStart);
	        preFragment = chosenURI.substr(0, fragmentStart);
	    }
	    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
	    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
	    return { newURI: newURI };
	}
	var HttpLink = (function (_super) {
	    tslib_1.__extends(HttpLink, _super);
	    function HttpLink(opts) {
	        return _super.call(this, exports.createHttpLink(opts).request) || this;
	    }
	    return HttpLink;
	}(apollo_link_1.ApolloLink));
	exports.HttpLink = HttpLink;
	//# sourceMappingURL=httpLink.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var printer_1 = __webpack_require__(29);
	var ts_invariant_1 = __webpack_require__(17);
	var defaultHttpOptions = {
	    includeQuery: true,
	    includeExtensions: false,
	};
	var defaultHeaders = {
	    accept: '*/*',
	    'content-type': 'application/json',
	};
	var defaultOptions = {
	    method: 'POST',
	};
	exports.fallbackHttpConfig = {
	    http: defaultHttpOptions,
	    headers: defaultHeaders,
	    options: defaultOptions,
	};
	exports.throwServerError = function (response, result, message) {
	    var error = new Error(message);
	    error.name = 'ServerError';
	    error.response = response;
	    error.statusCode = response.status;
	    error.result = result;
	    throw error;
	};
	exports.parseAndCheckHttpResponse = function (operations) { return function (response) {
	    return (response
	        .text()
	        .then(function (bodyText) {
	        try {
	            return JSON.parse(bodyText);
	        }
	        catch (err) {
	            var parseError = err;
	            parseError.name = 'ServerParseError';
	            parseError.response = response;
	            parseError.statusCode = response.status;
	            parseError.bodyText = bodyText;
	            return Promise.reject(parseError);
	        }
	    })
	        .then(function (result) {
	        if (response.status >= 300) {
	            exports.throwServerError(response, result, "Response not successful: Received status code " + response.status);
	        }
	        if (!Array.isArray(result) &&
	            !result.hasOwnProperty('data') &&
	            !result.hasOwnProperty('errors')) {
	            exports.throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
	                ? operations.map(function (op) { return op.operationName; })
	                : operations.operationName) + "'.");
	        }
	        return result;
	    }));
	}; };
	exports.checkFetcher = function (fetcher) {
	    if (!fetcher && typeof fetch === 'undefined') {
	        var library = 'unfetch';
	        if (typeof window === 'undefined')
	            library = 'node-fetch';
	        throw new ts_invariant_1.InvariantError("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
	    }
	};
	exports.createSignalIfSupported = function () {
	    if (typeof AbortController === 'undefined')
	        return { controller: false, signal: false };
	    var controller = new AbortController();
	    var signal = controller.signal;
	    return { controller: controller, signal: signal };
	};
	exports.selectHttpOptionsAndBody = function (operation, fallbackConfig) {
	    var configs = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        configs[_i - 2] = arguments[_i];
	    }
	    var options = tslib_1.__assign({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
	    var http = fallbackConfig.http;
	    configs.forEach(function (config) {
	        options = tslib_1.__assign({}, options, config.options, { headers: tslib_1.__assign({}, options.headers, config.headers) });
	        if (config.credentials)
	            options.credentials = config.credentials;
	        http = tslib_1.__assign({}, http, config.http);
	    });
	    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
	    var body = { operationName: operationName, variables: variables };
	    if (http.includeExtensions)
	        body.extensions = extensions;
	    if (http.includeQuery)
	        body.query = printer_1.print(query);
	    return {
	        options: options,
	        body: body,
	    };
	};
	exports.serializeFetchParameter = function (p, label) {
	    var serialized;
	    try {
	        serialized = JSON.stringify(p);
	    }
	    catch (e) {
	        var parseError = new ts_invariant_1.InvariantError("Network request failed. " + label + " is not serializable: " + e.message);
	        parseError.parseError = e;
	        throw parseError;
	    }
	    return serialized;
	};
	exports.selectURI = function (operation, fallbackURI) {
	    var context = operation.getContext();
	    var contextURI = context.uri;
	    if (contextURI) {
	        return contextURI;
	    }
	    else if (typeof fallbackURI === 'function') {
	        return fallbackURI(operation);
	    }
	    else {
	        return fallbackURI || '/graphql';
	    }
	};
	//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.print = print;

	var _visitor = __webpack_require__(21);

	var _blockString = __webpack_require__(30);

	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */
	function print(ast) {
	  return (0, _visitor.visit)(ast, {
	    leave: printDocASTReducer
	  });
	} // TODO: provide better type coverage in future


	var printDocASTReducer = {
	  Name: function Name(node) {
	    return node.value;
	  },
	  Variable: function Variable(node) {
	    return '$' + node.name;
	  },
	  // Document
	  Document: function Document(node) {
	    return join(node.definitions, '\n\n') + '\n';
	  },
	  OperationDefinition: function OperationDefinition(node) {
	    var op = node.operation;
	    var name = node.name;
	    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
	    var directives = join(node.directives, ' ');
	    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
	    // the query short form.

	    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
	  },
	  VariableDefinition: function VariableDefinition(_ref) {
	    var variable = _ref.variable,
	        type = _ref.type,
	        defaultValue = _ref.defaultValue,
	        directives = _ref.directives;
	    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
	  },
	  SelectionSet: function SelectionSet(_ref2) {
	    var selections = _ref2.selections;
	    return block(selections);
	  },
	  Field: function Field(_ref3) {
	    var alias = _ref3.alias,
	        name = _ref3.name,
	        args = _ref3.arguments,
	        directives = _ref3.directives,
	        selectionSet = _ref3.selectionSet;
	    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
	  },
	  Argument: function Argument(_ref4) {
	    var name = _ref4.name,
	        value = _ref4.value;
	    return name + ': ' + value;
	  },
	  // Fragments
	  FragmentSpread: function FragmentSpread(_ref5) {
	    var name = _ref5.name,
	        directives = _ref5.directives;
	    return '...' + name + wrap(' ', join(directives, ' '));
	  },
	  InlineFragment: function InlineFragment(_ref6) {
	    var typeCondition = _ref6.typeCondition,
	        directives = _ref6.directives,
	        selectionSet = _ref6.selectionSet;
	    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
	  },
	  FragmentDefinition: function FragmentDefinition(_ref7) {
	    var name = _ref7.name,
	        typeCondition = _ref7.typeCondition,
	        variableDefinitions = _ref7.variableDefinitions,
	        directives = _ref7.directives,
	        selectionSet = _ref7.selectionSet;
	    return (// Note: fragment variable definitions are experimental and may be changed
	      // or removed in the future.
	      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
	    );
	  },
	  // Value
	  IntValue: function IntValue(_ref8) {
	    var value = _ref8.value;
	    return value;
	  },
	  FloatValue: function FloatValue(_ref9) {
	    var value = _ref9.value;
	    return value;
	  },
	  StringValue: function StringValue(_ref10, key) {
	    var value = _ref10.value,
	        isBlockString = _ref10.block;
	    return isBlockString ? (0, _blockString.printBlockString)(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
	  },
	  BooleanValue: function BooleanValue(_ref11) {
	    var value = _ref11.value;
	    return value ? 'true' : 'false';
	  },
	  NullValue: function NullValue() {
	    return 'null';
	  },
	  EnumValue: function EnumValue(_ref12) {
	    var value = _ref12.value;
	    return value;
	  },
	  ListValue: function ListValue(_ref13) {
	    var values = _ref13.values;
	    return '[' + join(values, ', ') + ']';
	  },
	  ObjectValue: function ObjectValue(_ref14) {
	    var fields = _ref14.fields;
	    return '{' + join(fields, ', ') + '}';
	  },
	  ObjectField: function ObjectField(_ref15) {
	    var name = _ref15.name,
	        value = _ref15.value;
	    return name + ': ' + value;
	  },
	  // Directive
	  Directive: function Directive(_ref16) {
	    var name = _ref16.name,
	        args = _ref16.arguments;
	    return '@' + name + wrap('(', join(args, ', '), ')');
	  },
	  // Type
	  NamedType: function NamedType(_ref17) {
	    var name = _ref17.name;
	    return name;
	  },
	  ListType: function ListType(_ref18) {
	    var type = _ref18.type;
	    return '[' + type + ']';
	  },
	  NonNullType: function NonNullType(_ref19) {
	    var type = _ref19.type;
	    return type + '!';
	  },
	  // Type System Definitions
	  SchemaDefinition: function SchemaDefinition(_ref20) {
	    var directives = _ref20.directives,
	        operationTypes = _ref20.operationTypes;
	    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
	  },
	  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
	    var operation = _ref21.operation,
	        type = _ref21.type;
	    return operation + ': ' + type;
	  },
	  ScalarTypeDefinition: addDescription(function (_ref22) {
	    var name = _ref22.name,
	        directives = _ref22.directives;
	    return join(['scalar', name, join(directives, ' ')], ' ');
	  }),
	  ObjectTypeDefinition: addDescription(function (_ref23) {
	    var name = _ref23.name,
	        interfaces = _ref23.interfaces,
	        directives = _ref23.directives,
	        fields = _ref23.fields;
	    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
	  }),
	  FieldDefinition: addDescription(function (_ref24) {
	    var name = _ref24.name,
	        args = _ref24.arguments,
	        type = _ref24.type,
	        directives = _ref24.directives;
	    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
	  }),
	  InputValueDefinition: addDescription(function (_ref25) {
	    var name = _ref25.name,
	        type = _ref25.type,
	        defaultValue = _ref25.defaultValue,
	        directives = _ref25.directives;
	    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
	  }),
	  InterfaceTypeDefinition: addDescription(function (_ref26) {
	    var name = _ref26.name,
	        directives = _ref26.directives,
	        fields = _ref26.fields;
	    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
	  }),
	  UnionTypeDefinition: addDescription(function (_ref27) {
	    var name = _ref27.name,
	        directives = _ref27.directives,
	        types = _ref27.types;
	    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
	  }),
	  EnumTypeDefinition: addDescription(function (_ref28) {
	    var name = _ref28.name,
	        directives = _ref28.directives,
	        values = _ref28.values;
	    return join(['enum', name, join(directives, ' '), block(values)], ' ');
	  }),
	  EnumValueDefinition: addDescription(function (_ref29) {
	    var name = _ref29.name,
	        directives = _ref29.directives;
	    return join([name, join(directives, ' ')], ' ');
	  }),
	  InputObjectTypeDefinition: addDescription(function (_ref30) {
	    var name = _ref30.name,
	        directives = _ref30.directives,
	        fields = _ref30.fields;
	    return join(['input', name, join(directives, ' '), block(fields)], ' ');
	  }),
	  DirectiveDefinition: addDescription(function (_ref31) {
	    var name = _ref31.name,
	        args = _ref31.arguments,
	        repeatable = _ref31.repeatable,
	        locations = _ref31.locations;
	    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
	  }),
	  SchemaExtension: function SchemaExtension(_ref32) {
	    var directives = _ref32.directives,
	        operationTypes = _ref32.operationTypes;
	    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
	  },
	  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
	    var name = _ref33.name,
	        directives = _ref33.directives;
	    return join(['extend scalar', name, join(directives, ' ')], ' ');
	  },
	  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
	    var name = _ref34.name,
	        interfaces = _ref34.interfaces,
	        directives = _ref34.directives,
	        fields = _ref34.fields;
	    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
	  },
	  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
	    var name = _ref35.name,
	        directives = _ref35.directives,
	        fields = _ref35.fields;
	    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
	  },
	  UnionTypeExtension: function UnionTypeExtension(_ref36) {
	    var name = _ref36.name,
	        directives = _ref36.directives,
	        types = _ref36.types;
	    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
	  },
	  EnumTypeExtension: function EnumTypeExtension(_ref37) {
	    var name = _ref37.name,
	        directives = _ref37.directives,
	        values = _ref37.values;
	    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
	  },
	  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
	    var name = _ref38.name,
	        directives = _ref38.directives,
	        fields = _ref38.fields;
	    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
	  }
	};

	function addDescription(cb) {
	  return function (node) {
	    return join([node.description, cb(node)], '\n');
	  };
	}
	/**
	 * Given maybeArray, print an empty string if it is null or empty, otherwise
	 * print all items together separated by separator if provided
	 */


	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return x;
	  }).join(separator || '') : '';
	}
	/**
	 * Given array, print each item on its own line, wrapped in an
	 * indented "{ }" block.
	 */


	function block(array) {
	  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
	}
	/**
	 * If maybeString is not null or empty, then wrap with start and end, otherwise
	 * print an empty string.
	 */


	function wrap(start, maybeString, end) {
	  return maybeString ? start + maybeString + (end || '') : '';
	}

	function indent(maybeString) {
	  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
	}

	function isMultiline(string) {
	  return string.indexOf('\n') !== -1;
	}

	function hasMultilineItems(maybeArray) {
	  return maybeArray && maybeArray.some(isMultiline);
	}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.dedentBlockStringValue = dedentBlockStringValue;
	exports.getBlockStringIndentation = getBlockStringIndentation;
	exports.printBlockString = printBlockString;

	/**
	 * Produces the value of a block string from its parsed raw value, similar to
	 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
	 *
	 * This implements the GraphQL spec's BlockStringValue() static algorithm.
	 */
	function dedentBlockStringValue(rawString) {
	  // Expand a block string's raw value into independent lines.
	  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

	  var commonIndent = getBlockStringIndentation(lines);

	  if (commonIndent !== 0) {
	    for (var i = 1; i < lines.length; i++) {
	      lines[i] = lines[i].slice(commonIndent);
	    }
	  } // Remove leading and trailing blank lines.


	  while (lines.length > 0 && isBlank(lines[0])) {
	    lines.shift();
	  }

	  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
	    lines.pop();
	  } // Return a string of the lines joined with U+000A.


	  return lines.join('\n');
	} // @internal


	function getBlockStringIndentation(lines) {
	  var commonIndent = null;

	  for (var i = 1; i < lines.length; i++) {
	    var line = lines[i];
	    var indent = leadingWhitespace(line);

	    if (indent === line.length) {
	      continue; // skip empty lines
	    }

	    if (commonIndent === null || indent < commonIndent) {
	      commonIndent = indent;

	      if (commonIndent === 0) {
	        break;
	      }
	    }
	  }

	  return commonIndent === null ? 0 : commonIndent;
	}

	function leadingWhitespace(str) {
	  var i = 0;

	  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
	    i++;
	  }

	  return i;
	}

	function isBlank(str) {
	  return leadingWhitespace(str) === str.length;
	}
	/**
	 * Print a block string in the indented block form by adding a leading and
	 * trailing blank line. However, if a block string starts with whitespace and is
	 * a single-line, adding a leading blank line would strip that whitespace.
	 */


	function printBlockString(value) {
	  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var isSingleLine = value.indexOf('\n') === -1;
	  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
	  var hasTrailingQuote = value[value.length - 1] === '"';
	  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
	  var result = ''; // Format a multi-line block quote to account for leading space.

	  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
	    result += '\n' + indentation;
	  }

	  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

	  if (printAsMultipleLines) {
	    result += '\n';
	  }

	  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
	}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_link_context_1 = __webpack_require__(32);
	exports.createAuthLink = function (config) {
	    var asyncHeadersLink = apollo_link_context_1.setContext(function (operation, previousContext) { return __awaiter(void 0, void 0, void 0, function () {
	        var headers;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    if (!config.authContextProvider) return [3 /*break*/, 2];
	                    return [4 /*yield*/, config.authContextProvider()];
	                case 1:
	                    headers = (_a.sent()).headers;
	                    return [2 /*return*/, {
	                            headers: headers
	                        }];
	                case 2: return [2 /*return*/];
	            }
	        });
	    }); });
	    return asyncHeadersLink;
	};
	//# sourceMappingURL=AuthLink.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var apollo_link_1 = __webpack_require__(10);
	function setContext(setter) {
	    return new apollo_link_1.ApolloLink(function (operation, forward) {
	        var request = tslib_1.__rest(operation, []);
	        return new apollo_link_1.Observable(function (observer) {
	            var handle;
	            Promise.resolve(request)
	                .then(function (req) { return setter(req, operation.getContext()); })
	                .then(operation.setContext)
	                .then(function () {
	                handle = forward(operation).subscribe({
	                    next: observer.next.bind(observer),
	                    error: observer.error.bind(observer),
	                    complete: observer.complete.bind(observer),
	                });
	            })
	                .catch(observer.error.bind(observer));
	            return function () {
	                if (handle)
	                    handle.unsubscribe();
	            };
	        });
	    });
	}
	exports.setContext = setContext;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'

	var _interopRequireDefault = __webpack_require__(34)

	var _extends2 = _interopRequireDefault(
	  __webpack_require__(35)
	)

	var _require = __webpack_require__(10),
	  ApolloLink = _require.ApolloLink,
	  Observable = _require.Observable

	var _require2 = __webpack_require__(28),
	  selectURI = _require2.selectURI,
	  selectHttpOptionsAndBody = _require2.selectHttpOptionsAndBody,
	  fallbackHttpConfig = _require2.fallbackHttpConfig,
	  serializeFetchParameter = _require2.serializeFetchParameter,
	  createSignalIfSupported = _require2.createSignalIfSupported,
	  parseAndCheckHttpResponse = _require2.parseAndCheckHttpResponse

	var _require3 = __webpack_require__(36),
	  extractFiles = _require3.extractFiles,
	  ReactNativeFile = _require3.ReactNativeFile

	exports.ReactNativeFile = ReactNativeFile

	exports.createUploadLink = function(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	    _ref$uri = _ref.uri,
	    fetchUri = _ref$uri === void 0 ? '/graphql' : _ref$uri,
	    _ref$fetch = _ref.fetch,
	    linkFetch = _ref$fetch === void 0 ? fetch : _ref$fetch,
	    fetchOptions = _ref.fetchOptions,
	    credentials = _ref.credentials,
	    headers = _ref.headers,
	    includeExtensions = _ref.includeExtensions

	  var linkConfig = {
	    http: {
	      includeExtensions: includeExtensions
	    },
	    options: fetchOptions,
	    credentials: credentials,
	    headers: headers
	  }
	  return new ApolloLink(function(operation) {
	    var uri = selectURI(operation, fetchUri)
	    var context = operation.getContext()
	    var _context$clientAwaren = context.clientAwareness
	    _context$clientAwaren =
	      _context$clientAwaren === void 0 ? {} : _context$clientAwaren
	    var name = _context$clientAwaren.name,
	      version = _context$clientAwaren.version,
	      headers = context.headers
	    var contextConfig = {
	      http: context.http,
	      options: context.fetchOptions,
	      credentials: context.credentials,
	      headers: (0, _extends2.default)(
	        {},
	        name && {
	          'apollographql-client-name': name
	        },
	        {},
	        version && {
	          'apollographql-client-version': version
	        },
	        {},
	        headers
	      )
	    }

	    var _selectHttpOptionsAnd = selectHttpOptionsAndBody(
	        operation,
	        fallbackHttpConfig,
	        linkConfig,
	        contextConfig
	      ),
	      options = _selectHttpOptionsAnd.options,
	      body = _selectHttpOptionsAnd.body

	    var _extractFiles = extractFiles(body),
	      clone = _extractFiles.clone,
	      files = _extractFiles.files

	    var payload = serializeFetchParameter(clone, 'Payload')

	    if (files.size) {
	      delete options.headers['content-type']
	      var form = new FormData()
	      form.append('operations', payload)
	      var map = {}
	      var i = 0
	      files.forEach(function(paths) {
	        map[++i] = paths
	      })
	      form.append('map', JSON.stringify(map))
	      i = 0
	      files.forEach(function(paths, file) {
	        form.append(++i, file, file.name)
	      })
	      options.body = form
	    } else options.body = payload

	    return new Observable(function(observer) {
	      var abortController

	      if (!options.signal) {
	        var _createSignalIfSuppor = createSignalIfSupported(),
	          controller = _createSignalIfSuppor.controller

	        if (controller) {
	          abortController = controller
	          options.signal = abortController.signal
	        }
	      }

	      linkFetch(uri, options)
	        .then(function(response) {
	          operation.setContext({
	            response: response
	          })
	          return response
	        })
	        .then(parseAndCheckHttpResponse(operation))
	        .then(function(result) {
	          observer.next(result)
	          observer.complete()
	        })
	        .catch(function(error) {
	          if (error.name === 'AbortError') return
	          if (error.result && error.result.errors && error.result.data)
	            observer.next(error.result)
	          observer.error(error)
	        })
	      return function() {
	        if (abortController) abortController.abort()
	      }
	    })
	  })
	}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	module.exports = _interopRequireDefault;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'

	exports.__esModule = true
	exports.ReactNativeFile = exports.extractFiles = void 0

	var _extractFiles = __webpack_require__(37)

	exports.extractFiles = _extractFiles.extractFiles

	var _ReactNativeFile = __webpack_require__(38)

	exports.ReactNativeFile = _ReactNativeFile.ReactNativeFile


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'

	exports.__esModule = true
	exports.extractFiles = extractFiles

	var _ReactNativeFile = __webpack_require__(38)

	function extractFiles(value, path) {
	  if (path === void 0) {
	    path = ''
	  }

	  var clone
	  var files = new Map()

	  function addFile(paths, file) {
	    var storedPaths = files.get(file)
	    if (storedPaths) storedPaths.push.apply(storedPaths, paths)
	    else files.set(file, paths)
	  }

	  if (
	    (typeof File !== 'undefined' && value instanceof File) ||
	    (typeof Blob !== 'undefined' && value instanceof Blob) ||
	    value instanceof _ReactNativeFile.ReactNativeFile
	  ) {
	    clone = null
	    addFile([path], value)
	  } else {
	    var prefix = path ? path + '.' : ''
	    if (typeof FileList !== 'undefined' && value instanceof FileList)
	      clone = Array.prototype.map.call(value, function(file, i) {
	        addFile(['' + prefix + i], file)
	        return null
	      })
	    else if (Array.isArray(value))
	      clone = value.map(function(child, i) {
	        var result = extractFiles(child, '' + prefix + i)
	        result.files.forEach(addFile)
	        return result.clone
	      })
	    else if (value && value.constructor === Object) {
	      clone = {}

	      for (var i in value) {
	        var result = extractFiles(value[i], '' + prefix + i)
	        result.files.forEach(addFile)
	        clone[i] = result.clone
	      }
	    } else clone = value
	  }

	  return {
	    clone: clone,
	    files: files
	  }
	}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict'

	exports.__esModule = true
	exports.ReactNativeFile = void 0

	var ReactNativeFile = function ReactNativeFile(_ref) {
	  var uri = _ref.uri,
	    name = _ref.name,
	    type = _ref.type
	  this.uri = uri
	  this.name = name
	  this.type = type
	}

	exports.ReactNativeFile = ReactNativeFile


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(40));
	__export(__webpack_require__(86));
	__export(__webpack_require__(50));
	__export(__webpack_require__(4));
	__export(__webpack_require__(61));
	var cache_1 = __webpack_require__(91);
	exports.createDefaultCacheStorage = cache_1.createDefaultCacheStorage;
	__export(__webpack_require__(85));
	var offix_scheduler_1 = __webpack_require__(45);
	exports.createDefaultOfflineStorage = offix_scheduler_1.createDefaultOfflineStorage;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_client_1 = __importDefault(__webpack_require__(41));
	var offix_scheduler_1 = __webpack_require__(45);
	var apollo_cache_persist_1 = __webpack_require__(77);
	var offix_cache_1 = __webpack_require__(61);
	var apollo_1 = __webpack_require__(78);
	var ApolloOfflineClientConfig_1 = __webpack_require__(90);
	var ApolloOfflineClient = /** @class */ (function (_super) {
	    __extends(ApolloOfflineClient, _super);
	    function ApolloOfflineClient(options) {
	        var _this = this;
	        var config = new ApolloOfflineClientConfig_1.ApolloOfflineClientConfig(options);
	        _this = _super.call(this, config) || this;
	        _this.initialized = false;
	        _this.mutationCacheUpdates = config.mutationCacheUpdates;
	        _this.conflictProvider = config.conflictProvider;
	        _this.persistor = new apollo_cache_persist_1.CachePersistor({
	            cache: _this.cache,
	            serialize: false,
	            storage: config.cacheStorage,
	            maxSize: false,
	            debug: false
	        });
	        _this.scheduler = new offix_scheduler_1.OffixScheduler({
	            executor: _this,
	            storage: config.offlineStorage,
	            networkStatus: config.networkStatus,
	            serializer: apollo_1.ApolloOperationSerializer,
	            offlineQueueListener: config.offlineQueueListener
	        });
	        _this.queue = _this.scheduler.queue;
	        _this.networkStatus = _this.scheduler.networkStatus;
	        _this.offlineStore = _this.scheduler.offlineStore;
	        return _this;
	    }
	    ApolloOfflineClient.prototype.init = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!this.persistor) return [3 /*break*/, 2];
	                        return [4 /*yield*/, this.persistor.restore()];
	                    case 1:
	                        _a.sent();
	                        _a.label = 2;
	                    case 2:
	                        // Optimistic Responses
	                        this.queue.registerOfflineQueueListener({
	                            onOperationEnqueued: function (operation) {
	                                apollo_1.addOptimisticResponse(_this, operation);
	                            },
	                            onOperationSuccess: function (operation, result) {
	                                apollo_1.replaceClientGeneratedIDsInQueue(_this.scheduler.queue.queue, operation, result);
	                                apollo_1.removeOptimisticResponse(_this, operation);
	                            },
	                            onOperationFailure: function (operation, error) {
	                                apollo_1.removeOptimisticResponse(_this, operation);
	                            },
	                            onOperationRequeued: function (operation) {
	                                if (_this.mutationCacheUpdates) {
	                                    apollo_1.restoreOptimisticResponse(_this, _this.mutationCacheUpdates, operation);
	                                }
	                            }
	                        });
	                        return [4 /*yield*/, this.scheduler.init()];
	                    case 3:
	                        _a.sent();
	                        this.initialized = true;
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    ApolloOfflineClient.prototype.execute = function (options) {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                return [2 /*return*/, this.mutate(options)];
	            });
	        });
	    };
	    ApolloOfflineClient.prototype.offlineMutate = function (options) {
	        return __awaiter(this, void 0, void 0, function () {
	            var mutationOptions;
	            return __generator(this, function (_a) {
	                if (!this.initialized) {
	                    throw new Error("cannot call client.offlineMutate until client is initialized");
	                }
	                mutationOptions = this.createOfflineMutationOptions(options);
	                return [2 /*return*/, this.scheduler.execute(mutationOptions)];
	            });
	        });
	    };
	    /**
	     * Add new listener for listening for queue changes
	     *
	     * @param listener
	     */
	    ApolloOfflineClient.prototype.registerOfflineEventListener = function (listener) {
	        this.scheduler.registerOfflineQueueListener(listener);
	    };
	    ApolloOfflineClient.prototype.createOfflineMutationOptions = function (options) {
	        var offlineMutationOptions = offix_cache_1.createMutationOptions(options);
	        offlineMutationOptions.context.conflictBase = apollo_1.getBaseStateFromCache(this.cache, this.conflictProvider, offlineMutationOptions);
	        if (!offlineMutationOptions.update && this.mutationCacheUpdates) {
	            offlineMutationOptions.update = this.mutationCacheUpdates[offlineMutationOptions.context.operationName];
	        }
	        return offlineMutationOptions;
	    };
	    return ApolloOfflineClient;
	}(apollo_client_1.default));
	exports.ApolloOfflineClient = ApolloOfflineClient;
	//# sourceMappingURL=ApolloOfflineClient.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(11), __webpack_require__(20), __webpack_require__(10), __webpack_require__(42), __webpack_require__(17), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("tslib"), require("apollo-utilities"), require("apollo-link"), require("symbol-observable"), require("ts-invariant"), require("graphql/language/visitor"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.tslib, global.apolloUtilities, global.apolloLink, global.symbolObservable, global.tsInvariant, global.visitor);
	    global.unknown = mod.exports;
	  }
	})(this, function (_exports, _tslib, _apolloUtilities, _apolloLink, _symbolObservable, _tsInvariant, _visitor) {

	  _exports.__esModule = true;
	  _exports.isApolloError = isApolloError;
	  _exports.ObservableQuery = _exports.NetworkStatus = _exports.FetchType = _exports.ApolloError = _exports.ApolloClient = _exports.default = void 0;
	  _symbolObservable = _interopRequireDefault(_symbolObservable);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var NetworkStatus;
	  _exports.NetworkStatus = NetworkStatus;

	  (function (NetworkStatus) {
	    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
	    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
	    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
	    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
	    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
	    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
	    NetworkStatus[NetworkStatus["error"] = 8] = "error";
	  })(NetworkStatus || (_exports.NetworkStatus = NetworkStatus = {}));

	  function isNetworkRequestInFlight(networkStatus) {
	    return networkStatus < 7;
	  }

	  var Observable = function (_super) {
	    (0, _tslib.__extends)(Observable, _super);

	    function Observable() {
	      return _super !== null && _super.apply(this, arguments) || this;
	    }

	    Observable.prototype[_symbolObservable.default] = function () {
	      return this;
	    };

	    Observable.prototype['@@observable'] = function () {
	      return this;
	    };

	    return Observable;
	  }(_apolloLink.Observable);

	  function isNonEmptyArray(value) {
	    return Array.isArray(value) && value.length > 0;
	  }

	  function isApolloError(err) {
	    return err.hasOwnProperty('graphQLErrors');
	  }

	  var generateErrorMessage = function (err) {
	    var message = '';

	    if (isNonEmptyArray(err.graphQLErrors)) {
	      err.graphQLErrors.forEach(function (graphQLError) {
	        var errorMessage = graphQLError ? graphQLError.message : 'Error message not found.';
	        message += "GraphQL error: " + errorMessage + "\n";
	      });
	    }

	    if (err.networkError) {
	      message += 'Network error: ' + err.networkError.message + '\n';
	    }

	    message = message.replace(/\n$/, '');
	    return message;
	  };

	  var ApolloError = function (_super) {
	    (0, _tslib.__extends)(ApolloError, _super);

	    function ApolloError(_a) {
	      var graphQLErrors = _a.graphQLErrors,
	          networkError = _a.networkError,
	          errorMessage = _a.errorMessage,
	          extraInfo = _a.extraInfo;

	      var _this = _super.call(this, errorMessage) || this;

	      _this.graphQLErrors = graphQLErrors || [];
	      _this.networkError = networkError || null;

	      if (!errorMessage) {
	        _this.message = generateErrorMessage(_this);
	      } else {
	        _this.message = errorMessage;
	      }

	      _this.extraInfo = extraInfo;
	      _this.__proto__ = ApolloError.prototype;
	      return _this;
	    }

	    return ApolloError;
	  }(Error);

	  _exports.ApolloError = ApolloError;
	  var FetchType;
	  _exports.FetchType = FetchType;

	  (function (FetchType) {
	    FetchType[FetchType["normal"] = 1] = "normal";
	    FetchType[FetchType["refetch"] = 2] = "refetch";
	    FetchType[FetchType["poll"] = 3] = "poll";
	  })(FetchType || (_exports.FetchType = FetchType = {}));

	  var hasError = function (storeValue, policy) {
	    if (policy === void 0) {
	      policy = 'none';
	    }

	    return storeValue && (storeValue.networkError || policy === 'none' && isNonEmptyArray(storeValue.graphQLErrors));
	  };

	  var ObservableQuery = function (_super) {
	    (0, _tslib.__extends)(ObservableQuery, _super);

	    function ObservableQuery(_a) {
	      var queryManager = _a.queryManager,
	          options = _a.options,
	          _b = _a.shouldSubscribe,
	          shouldSubscribe = _b === void 0 ? true : _b;

	      var _this = _super.call(this, function (observer) {
	        return _this.onSubscribe(observer);
	      }) || this;

	      _this.observers = new Set();
	      _this.subscriptions = new Set();
	      _this.isTornDown = false;
	      _this.options = options;
	      _this.variables = options.variables || {};
	      _this.queryId = queryManager.generateQueryId();
	      _this.shouldSubscribe = shouldSubscribe;
	      var opDef = (0, _apolloUtilities.getOperationDefinition)(options.query);
	      _this.queryName = opDef && opDef.name && opDef.name.value;
	      _this.queryManager = queryManager;
	      return _this;
	    }

	    ObservableQuery.prototype.result = function () {
	      var _this = this;

	      return new Promise(function (resolve, reject) {
	        var observer = {
	          next: function (result) {
	            resolve(result);

	            _this.observers.delete(observer);

	            if (!_this.observers.size) {
	              _this.queryManager.removeQuery(_this.queryId);
	            }

	            setTimeout(function () {
	              subscription.unsubscribe();
	            }, 0);
	          },
	          error: reject
	        };

	        var subscription = _this.subscribe(observer);
	      });
	    };

	    ObservableQuery.prototype.currentResult = function () {
	      var result = this.getCurrentResult();

	      if (result.data === undefined) {
	        result.data = {};
	      }

	      return result;
	    };

	    ObservableQuery.prototype.getCurrentResult = function () {
	      if (this.isTornDown) {
	        var lastResult = this.lastResult;
	        return {
	          data: !this.lastError && lastResult && lastResult.data || void 0,
	          error: this.lastError,
	          loading: false,
	          networkStatus: NetworkStatus.error
	        };
	      }

	      var _a = this.queryManager.getCurrentQueryResult(this),
	          data = _a.data,
	          partial = _a.partial;

	      var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
	      var result;
	      var fetchPolicy = this.options.fetchPolicy;
	      var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';

	      if (queryStoreValue) {
	        var networkStatus = queryStoreValue.networkStatus;

	        if (hasError(queryStoreValue, this.options.errorPolicy)) {
	          return {
	            data: void 0,
	            loading: false,
	            networkStatus: networkStatus,
	            error: new ApolloError({
	              graphQLErrors: queryStoreValue.graphQLErrors,
	              networkError: queryStoreValue.networkError
	            })
	          };
	        }

	        if (queryStoreValue.variables) {
	          this.options.variables = (0, _tslib.__assign)({}, this.options.variables, queryStoreValue.variables);
	          this.variables = this.options.variables;
	        }

	        result = {
	          data: data,
	          loading: isNetworkRequestInFlight(networkStatus),
	          networkStatus: networkStatus
	        };

	        if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') {
	          result.errors = queryStoreValue.graphQLErrors;
	        }
	      } else {
	        var loading = isNetworkFetchPolicy || partial && fetchPolicy !== 'cache-only';
	        result = {
	          data: data,
	          loading: loading,
	          networkStatus: loading ? NetworkStatus.loading : NetworkStatus.ready
	        };
	      }

	      if (!partial) {
	        this.updateLastResult((0, _tslib.__assign)({}, result, {
	          stale: false
	        }));
	      }

	      return (0, _tslib.__assign)({}, result, {
	        partial: partial
	      });
	    };

	    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
	      var snapshot = this.lastResultSnapshot;
	      return !(snapshot && newResult && snapshot.networkStatus === newResult.networkStatus && snapshot.stale === newResult.stale && (0, _apolloUtilities.isEqual)(snapshot.data, newResult.data));
	    };

	    ObservableQuery.prototype.getLastResult = function () {
	      return this.lastResult;
	    };

	    ObservableQuery.prototype.getLastError = function () {
	      return this.lastError;
	    };

	    ObservableQuery.prototype.resetLastResults = function () {
	      delete this.lastResult;
	      delete this.lastResultSnapshot;
	      delete this.lastError;
	      this.isTornDown = false;
	    };

	    ObservableQuery.prototype.resetQueryStoreErrors = function () {
	      var queryStore = this.queryManager.queryStore.get(this.queryId);

	      if (queryStore) {
	        queryStore.networkError = null;
	        queryStore.graphQLErrors = [];
	      }
	    };

	    ObservableQuery.prototype.refetch = function (variables) {
	      var fetchPolicy = this.options.fetchPolicy;

	      if (fetchPolicy === 'cache-only') {
	        return Promise.reject(process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(3) : new _tsInvariant.InvariantError('cache-only fetchPolicy option should not be used together with query refetch.'));
	      }

	      if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'cache-and-network') {
	        fetchPolicy = 'network-only';
	      }

	      if (!(0, _apolloUtilities.isEqual)(this.variables, variables)) {
	        this.variables = (0, _tslib.__assign)({}, this.variables, variables);
	      }

	      if (!(0, _apolloUtilities.isEqual)(this.options.variables, this.variables)) {
	        this.options.variables = (0, _tslib.__assign)({}, this.options.variables, this.variables);
	      }

	      return this.queryManager.fetchQuery(this.queryId, (0, _tslib.__assign)({}, this.options, {
	        fetchPolicy: fetchPolicy
	      }), FetchType.refetch);
	    };

	    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
	      var _this = this;

	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fetchMoreOptions.updateQuery, 4) : (0, _tsInvariant.invariant)(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
	      var combinedOptions = (0, _tslib.__assign)({}, fetchMoreOptions.query ? fetchMoreOptions : (0, _tslib.__assign)({}, this.options, fetchMoreOptions, {
	        variables: (0, _tslib.__assign)({}, this.variables, fetchMoreOptions.variables)
	      }), {
	        fetchPolicy: 'network-only'
	      });
	      var qid = this.queryManager.generateQueryId();
	      return this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, this.queryId).then(function (fetchMoreResult) {
	        _this.updateQuery(function (previousResult) {
	          return fetchMoreOptions.updateQuery(previousResult, {
	            fetchMoreResult: fetchMoreResult.data,
	            variables: combinedOptions.variables
	          });
	        });

	        _this.queryManager.stopQuery(qid);

	        return fetchMoreResult;
	      }, function (error) {
	        _this.queryManager.stopQuery(qid);

	        throw error;
	      });
	    };

	    ObservableQuery.prototype.subscribeToMore = function (options) {
	      var _this = this;

	      var subscription = this.queryManager.startGraphQLSubscription({
	        query: options.document,
	        variables: options.variables
	      }).subscribe({
	        next: function (subscriptionData) {
	          var updateQuery = options.updateQuery;

	          if (updateQuery) {
	            _this.updateQuery(function (previous, _a) {
	              var variables = _a.variables;
	              return updateQuery(previous, {
	                subscriptionData: subscriptionData,
	                variables: variables
	              });
	            });
	          }
	        },
	        error: function (err) {
	          if (options.onError) {
	            options.onError(err);
	            return;
	          }

	          process.env.NODE_ENV === "production" || _tsInvariant.invariant.error('Unhandled GraphQL subscription error', err);
	        }
	      });
	      this.subscriptions.add(subscription);
	      return function () {
	        if (_this.subscriptions.delete(subscription)) {
	          subscription.unsubscribe();
	        }
	      };
	    };

	    ObservableQuery.prototype.setOptions = function (opts) {
	      var oldFetchPolicy = this.options.fetchPolicy;
	      this.options = (0, _tslib.__assign)({}, this.options, opts);

	      if (opts.pollInterval) {
	        this.startPolling(opts.pollInterval);
	      } else if (opts.pollInterval === 0) {
	        this.stopPolling();
	      }

	      var fetchPolicy = opts.fetchPolicy;
	      return this.setVariables(this.options.variables, oldFetchPolicy !== fetchPolicy && (oldFetchPolicy === 'cache-only' || oldFetchPolicy === 'standby' || fetchPolicy === 'network-only'), opts.fetchResults);
	    };

	    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
	      if (tryFetch === void 0) {
	        tryFetch = false;
	      }

	      if (fetchResults === void 0) {
	        fetchResults = true;
	      }

	      this.isTornDown = false;
	      variables = variables || this.variables;

	      if (!tryFetch && (0, _apolloUtilities.isEqual)(variables, this.variables)) {
	        return this.observers.size && fetchResults ? this.result() : Promise.resolve();
	      }

	      this.variables = this.options.variables = variables;

	      if (!this.observers.size) {
	        return Promise.resolve();
	      }

	      return this.queryManager.fetchQuery(this.queryId, this.options);
	    };

	    ObservableQuery.prototype.updateQuery = function (mapFn) {
	      var queryManager = this.queryManager;

	      var _a = queryManager.getQueryWithPreviousResult(this.queryId),
	          previousResult = _a.previousResult,
	          variables = _a.variables,
	          document = _a.document;

	      var newResult = (0, _apolloUtilities.tryFunctionOrLogError)(function () {
	        return mapFn(previousResult, {
	          variables: variables
	        });
	      });

	      if (newResult) {
	        queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
	        queryManager.broadcastQueries();
	      }
	    };

	    ObservableQuery.prototype.stopPolling = function () {
	      this.queryManager.stopPollingQuery(this.queryId);
	      this.options.pollInterval = undefined;
	    };

	    ObservableQuery.prototype.startPolling = function (pollInterval) {
	      assertNotCacheFirstOrOnly(this);
	      this.options.pollInterval = pollInterval;
	      this.queryManager.startPollingQuery(this.options, this.queryId);
	    };

	    ObservableQuery.prototype.updateLastResult = function (newResult) {
	      var previousResult = this.lastResult;
	      this.lastResult = newResult;
	      this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? newResult : (0, _apolloUtilities.cloneDeep)(newResult);
	      return previousResult;
	    };

	    ObservableQuery.prototype.onSubscribe = function (observer) {
	      var _this = this;

	      try {
	        var subObserver = observer._subscription._observer;

	        if (subObserver && !subObserver.error) {
	          subObserver.error = defaultSubscriptionObserverErrorCallback;
	        }
	      } catch (_a) {}

	      var first = !this.observers.size;
	      this.observers.add(observer);
	      if (observer.next && this.lastResult) observer.next(this.lastResult);
	      if (observer.error && this.lastError) observer.error(this.lastError);

	      if (first) {
	        this.setUpQuery();
	      }

	      return function () {
	        if (_this.observers.delete(observer) && !_this.observers.size) {
	          _this.tearDownQuery();
	        }
	      };
	    };

	    ObservableQuery.prototype.setUpQuery = function () {
	      var _this = this;

	      var _a = this,
	          queryManager = _a.queryManager,
	          queryId = _a.queryId;

	      if (this.shouldSubscribe) {
	        queryManager.addObservableQuery(queryId, this);
	      }

	      if (this.options.pollInterval) {
	        assertNotCacheFirstOrOnly(this);
	        queryManager.startPollingQuery(this.options, queryId);
	      }

	      var onError = function (error) {
	        _this.updateLastResult((0, _tslib.__assign)({}, _this.lastResult, {
	          errors: error.graphQLErrors,
	          networkStatus: NetworkStatus.error,
	          loading: false
	        }));

	        iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
	      };

	      queryManager.observeQuery(queryId, this.options, {
	        next: function (result) {
	          if (_this.lastError || _this.isDifferentFromLastResult(result)) {
	            var previousResult_1 = _this.updateLastResult(result);

	            var _a = _this.options,
	                query_1 = _a.query,
	                variables = _a.variables,
	                fetchPolicy_1 = _a.fetchPolicy;

	            if (queryManager.transform(query_1).hasClientExports) {
	              queryManager.getLocalState().addExportedVariables(query_1, variables).then(function (variables) {
	                var previousVariables = _this.variables;
	                _this.variables = _this.options.variables = variables;

	                if (!result.loading && previousResult_1 && fetchPolicy_1 !== 'cache-only' && queryManager.transform(query_1).serverQuery && !(0, _apolloUtilities.isEqual)(previousVariables, variables)) {
	                  _this.refetch();
	                } else {
	                  iterateObserversSafely(_this.observers, 'next', result);
	                }
	              });
	            } else {
	              iterateObserversSafely(_this.observers, 'next', result);
	            }
	          }
	        },
	        error: onError
	      }).catch(onError);
	    };

	    ObservableQuery.prototype.tearDownQuery = function () {
	      var queryManager = this.queryManager;
	      this.isTornDown = true;
	      queryManager.stopPollingQuery(this.queryId);
	      this.subscriptions.forEach(function (sub) {
	        return sub.unsubscribe();
	      });
	      this.subscriptions.clear();
	      queryManager.removeObservableQuery(this.queryId);
	      queryManager.stopQuery(this.queryId);
	      this.observers.clear();
	    };

	    return ObservableQuery;
	  }(Observable);

	  _exports.ObservableQuery = ObservableQuery;

	  function defaultSubscriptionObserverErrorCallback(error) {
	    process.env.NODE_ENV === "production" || _tsInvariant.invariant.error('Unhandled error', error.message, error.stack);
	  }

	  function iterateObserversSafely(observers, method, argument) {
	    var observersWithMethod = [];
	    observers.forEach(function (obs) {
	      return obs[method] && observersWithMethod.push(obs);
	    });
	    observersWithMethod.forEach(function (obs) {
	      return obs[method](argument);
	    });
	  }

	  function assertNotCacheFirstOrOnly(obsQuery) {
	    var fetchPolicy = obsQuery.options.fetchPolicy;
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 5) : (0, _tsInvariant.invariant)(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
	  }

	  var MutationStore = function () {
	    function MutationStore() {
	      this.store = {};
	    }

	    MutationStore.prototype.getStore = function () {
	      return this.store;
	    };

	    MutationStore.prototype.get = function (mutationId) {
	      return this.store[mutationId];
	    };

	    MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
	      this.store[mutationId] = {
	        mutation: mutation,
	        variables: variables || {},
	        loading: true,
	        error: null
	      };
	    };

	    MutationStore.prototype.markMutationError = function (mutationId, error) {
	      var mutation = this.store[mutationId];

	      if (mutation) {
	        mutation.loading = false;
	        mutation.error = error;
	      }
	    };

	    MutationStore.prototype.markMutationResult = function (mutationId) {
	      var mutation = this.store[mutationId];

	      if (mutation) {
	        mutation.loading = false;
	        mutation.error = null;
	      }
	    };

	    MutationStore.prototype.reset = function () {
	      this.store = {};
	    };

	    return MutationStore;
	  }();

	  var QueryStore = function () {
	    function QueryStore() {
	      this.store = {};
	    }

	    QueryStore.prototype.getStore = function () {
	      return this.store;
	    };

	    QueryStore.prototype.get = function (queryId) {
	      return this.store[queryId];
	    };

	    QueryStore.prototype.initQuery = function (query) {
	      var previousQuery = this.store[query.queryId];
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!previousQuery || previousQuery.document === query.document || (0, _apolloUtilities.isEqual)(previousQuery.document, query.document), 19) : (0, _tsInvariant.invariant)(!previousQuery || previousQuery.document === query.document || (0, _apolloUtilities.isEqual)(previousQuery.document, query.document), 'Internal Error: may not update existing query string in store');
	      var isSetVariables = false;
	      var previousVariables = null;

	      if (query.storePreviousVariables && previousQuery && previousQuery.networkStatus !== NetworkStatus.loading) {
	        if (!(0, _apolloUtilities.isEqual)(previousQuery.variables, query.variables)) {
	          isSetVariables = true;
	          previousVariables = previousQuery.variables;
	        }
	      }

	      var networkStatus;

	      if (isSetVariables) {
	        networkStatus = NetworkStatus.setVariables;
	      } else if (query.isPoll) {
	        networkStatus = NetworkStatus.poll;
	      } else if (query.isRefetch) {
	        networkStatus = NetworkStatus.refetch;
	      } else {
	        networkStatus = NetworkStatus.loading;
	      }

	      var graphQLErrors = [];

	      if (previousQuery && previousQuery.graphQLErrors) {
	        graphQLErrors = previousQuery.graphQLErrors;
	      }

	      this.store[query.queryId] = {
	        document: query.document,
	        variables: query.variables,
	        previousVariables: previousVariables,
	        networkError: null,
	        graphQLErrors: graphQLErrors,
	        networkStatus: networkStatus,
	        metadata: query.metadata
	      };

	      if (typeof query.fetchMoreForQueryId === 'string' && this.store[query.fetchMoreForQueryId]) {
	        this.store[query.fetchMoreForQueryId].networkStatus = NetworkStatus.fetchMore;
	      }
	    };

	    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
	      if (!this.store || !this.store[queryId]) return;
	      this.store[queryId].networkError = null;
	      this.store[queryId].graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
	      this.store[queryId].previousVariables = null;
	      this.store[queryId].networkStatus = NetworkStatus.ready;

	      if (typeof fetchMoreForQueryId === 'string' && this.store[fetchMoreForQueryId]) {
	        this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
	      }
	    };

	    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
	      if (!this.store || !this.store[queryId]) return;
	      this.store[queryId].networkError = error;
	      this.store[queryId].networkStatus = NetworkStatus.error;

	      if (typeof fetchMoreForQueryId === 'string') {
	        this.markQueryResultClient(fetchMoreForQueryId, true);
	      }
	    };

	    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
	      var storeValue = this.store && this.store[queryId];

	      if (storeValue) {
	        storeValue.networkError = null;
	        storeValue.previousVariables = null;

	        if (complete) {
	          storeValue.networkStatus = NetworkStatus.ready;
	        }
	      }
	    };

	    QueryStore.prototype.stopQuery = function (queryId) {
	      delete this.store[queryId];
	    };

	    QueryStore.prototype.reset = function (observableQueryIds) {
	      var _this = this;

	      Object.keys(this.store).forEach(function (queryId) {
	        if (observableQueryIds.indexOf(queryId) < 0) {
	          _this.stopQuery(queryId);
	        } else {
	          _this.store[queryId].networkStatus = NetworkStatus.loading;
	        }
	      });
	    };

	    return QueryStore;
	  }();

	  function capitalizeFirstLetter(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  }

	  var LocalState = function () {
	    function LocalState(_a) {
	      var cache = _a.cache,
	          client = _a.client,
	          resolvers = _a.resolvers,
	          fragmentMatcher = _a.fragmentMatcher;
	      this.cache = cache;

	      if (client) {
	        this.client = client;
	      }

	      if (resolvers) {
	        this.addResolvers(resolvers);
	      }

	      if (fragmentMatcher) {
	        this.setFragmentMatcher(fragmentMatcher);
	      }
	    }

	    LocalState.prototype.addResolvers = function (resolvers) {
	      var _this = this;

	      this.resolvers = this.resolvers || {};

	      if (Array.isArray(resolvers)) {
	        resolvers.forEach(function (resolverGroup) {
	          _this.resolvers = (0, _apolloUtilities.mergeDeep)(_this.resolvers, resolverGroup);
	        });
	      } else {
	        this.resolvers = (0, _apolloUtilities.mergeDeep)(this.resolvers, resolvers);
	      }
	    };

	    LocalState.prototype.setResolvers = function (resolvers) {
	      this.resolvers = {};
	      this.addResolvers(resolvers);
	    };

	    LocalState.prototype.getResolvers = function () {
	      return this.resolvers || {};
	    };

	    LocalState.prototype.runResolvers = function (_a) {
	      var document = _a.document,
	          remoteResult = _a.remoteResult,
	          context = _a.context,
	          variables = _a.variables,
	          _b = _a.onlyRunForcedResolvers,
	          onlyRunForcedResolvers = _b === void 0 ? false : _b;
	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        return (0, _tslib.__generator)(this, function (_c) {
	          if (document) {
	            return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) {
	              return (0, _tslib.__assign)({}, remoteResult, {
	                data: localResult.result
	              });
	            })];
	          }

	          return [2, remoteResult];
	        });
	      });
	    };

	    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
	      this.fragmentMatcher = fragmentMatcher;
	    };

	    LocalState.prototype.getFragmentMatcher = function () {
	      return this.fragmentMatcher;
	    };

	    LocalState.prototype.clientQuery = function (document) {
	      if ((0, _apolloUtilities.hasDirectives)(['client'], document)) {
	        if (this.resolvers) {
	          return document;
	        }

	        process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('Found @client directives in a query but no ApolloClient resolvers ' + 'were specified. This means ApolloClient local resolver handling ' + 'has been disabled, and @client directives will be passed through ' + 'to your link chain.');
	      }

	      return null;
	    };

	    LocalState.prototype.serverQuery = function (document) {
	      return this.resolvers ? (0, _apolloUtilities.removeClientSetsFromDocument)(document) : document;
	    };

	    LocalState.prototype.prepareContext = function (context) {
	      if (context === void 0) {
	        context = {};
	      }

	      var cache = this.cache;
	      var newContext = (0, _tslib.__assign)({}, context, {
	        cache: cache,
	        getCacheKey: function (obj) {
	          if (cache.config) {
	            return cache.config.dataIdFromObject(obj);
	          } else {
	            process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(false, 6) : (0, _tsInvariant.invariant)(false, 'To use context.getCacheKey, you need to use a cache that has ' + 'a configurable dataIdFromObject, like apollo-cache-inmemory.');
	          }
	        }
	      });
	      return newContext;
	    };

	    LocalState.prototype.addExportedVariables = function (document, variables, context) {
	      if (variables === void 0) {
	        variables = {};
	      }

	      if (context === void 0) {
	        context = {};
	      }

	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        return (0, _tslib.__generator)(this, function (_a) {
	          if (document) {
	            return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) {
	              return (0, _tslib.__assign)({}, variables, data.exportedVariables);
	            })];
	          }

	          return [2, (0, _tslib.__assign)({}, variables)];
	        });
	      });
	    };

	    LocalState.prototype.shouldForceResolvers = function (document) {
	      var forceResolvers = false;
	      (0, _visitor.visit)(document, {
	        Directive: {
	          enter: function (node) {
	            if (node.name.value === 'client' && node.arguments) {
	              forceResolvers = node.arguments.some(function (arg) {
	                return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
	              });

	              if (forceResolvers) {
	                return _visitor.BREAK;
	              }
	            }
	          }
	        }
	      });
	      return forceResolvers;
	    };

	    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
	      return this.cache.diff({
	        query: (0, _apolloUtilities.buildQueryFromSelectionSet)(document),
	        variables: variables,
	        returnPartialData: true,
	        optimistic: false
	      }).result;
	    };

	    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
	      if (context === void 0) {
	        context = {};
	      }

	      if (variables === void 0) {
	        variables = {};
	      }

	      if (fragmentMatcher === void 0) {
	        fragmentMatcher = function () {
	          return true;
	        };
	      }

	      if (onlyRunForcedResolvers === void 0) {
	        onlyRunForcedResolvers = false;
	      }

	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;

	        return (0, _tslib.__generator)(this, function (_b) {
	          mainDefinition = (0, _apolloUtilities.getMainDefinition)(document);
	          fragments = (0, _apolloUtilities.getFragmentDefinitions)(document);
	          fragmentMap = (0, _apolloUtilities.createFragmentMap)(fragments);
	          definitionOperation = mainDefinition.operation;
	          defaultOperationType = definitionOperation ? capitalizeFirstLetter(definitionOperation) : 'Query';
	          _a = this, cache = _a.cache, client = _a.client;
	          execContext = {
	            fragmentMap: fragmentMap,
	            context: (0, _tslib.__assign)({}, context, {
	              cache: cache,
	              client: client
	            }),
	            variables: variables,
	            fragmentMatcher: fragmentMatcher,
	            defaultOperationType: defaultOperationType,
	            exportedVariables: {},
	            onlyRunForcedResolvers: onlyRunForcedResolvers
	          };
	          return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) {
	            return {
	              result: result,
	              exportedVariables: execContext.exportedVariables
	            };
	          })];
	        });
	      });
	    };

	    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        var fragmentMap, context, variables, resultsToMerge, execute;

	        var _this = this;

	        return (0, _tslib.__generator)(this, function (_a) {
	          fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
	          resultsToMerge = [rootValue];

	          execute = function (selection) {
	            return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
	              var fragment, typeCondition;
	              return (0, _tslib.__generator)(this, function (_a) {
	                if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
	                  return [2];
	                }

	                if ((0, _apolloUtilities.isField)(selection)) {
	                  return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
	                    var _a;

	                    if (typeof fieldResult !== 'undefined') {
	                      resultsToMerge.push((_a = {}, _a[(0, _apolloUtilities.resultKeyNameFromField)(selection)] = fieldResult, _a));
	                    }
	                  })];
	                }

	                if ((0, _apolloUtilities.isInlineFragment)(selection)) {
	                  fragment = selection;
	                } else {
	                  fragment = fragmentMap[selection.name.value];
	                  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fragment, 7) : (0, _tsInvariant.invariant)(fragment, "No fragment named " + selection.name.value);
	                }

	                if (fragment && fragment.typeCondition) {
	                  typeCondition = fragment.typeCondition.name.value;

	                  if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
	                    return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
	                      resultsToMerge.push(fragmentResult);
	                    })];
	                  }
	                }

	                return [2];
	              });
	            });
	          };

	          return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
	            return (0, _apolloUtilities.mergeDeepArray)(resultsToMerge);
	          })];
	        });
	      });
	    };

	    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;

	        var _this = this;

	        return (0, _tslib.__generator)(this, function (_a) {
	          variables = execContext.variables;
	          fieldName = field.name.value;
	          aliasedFieldName = (0, _apolloUtilities.resultKeyNameFromField)(field);
	          aliasUsed = fieldName !== aliasedFieldName;
	          defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
	          resultPromise = Promise.resolve(defaultResult);

	          if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
	            resolverType = rootValue.__typename || execContext.defaultOperationType;
	            resolverMap = this.resolvers && this.resolvers[resolverType];

	            if (resolverMap) {
	              resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];

	              if (resolve) {
	                resultPromise = Promise.resolve(resolve(rootValue, (0, _apolloUtilities.argumentsObjectFromField)(field, variables), execContext.context, {
	                  field: field
	                }));
	              }
	            }
	          }

	          return [2, resultPromise.then(function (result) {
	            if (result === void 0) {
	              result = defaultResult;
	            }

	            if (field.directives) {
	              field.directives.forEach(function (directive) {
	                if (directive.name.value === 'export' && directive.arguments) {
	                  directive.arguments.forEach(function (arg) {
	                    if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
	                      execContext.exportedVariables[arg.value.value] = result;
	                    }
	                  });
	                }
	              });
	            }

	            if (!field.selectionSet) {
	              return result;
	            }

	            if (result == null) {
	              return result;
	            }

	            if (Array.isArray(result)) {
	              return _this.resolveSubSelectedArray(field, result, execContext);
	            }

	            if (field.selectionSet) {
	              return _this.resolveSelectionSet(field.selectionSet, result, execContext);
	            }
	          })];
	        });
	      });
	    };

	    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
	      var _this = this;

	      return Promise.all(result.map(function (item) {
	        if (item === null) {
	          return null;
	        }

	        if (Array.isArray(item)) {
	          return _this.resolveSubSelectedArray(field, item, execContext);
	        }

	        if (field.selectionSet) {
	          return _this.resolveSelectionSet(field.selectionSet, item, execContext);
	        }
	      }));
	    };

	    return LocalState;
	  }();

	  function multiplex(inner) {
	    var observers = new Set();
	    var sub = null;
	    return new Observable(function (observer) {
	      observers.add(observer);
	      sub = sub || inner.subscribe({
	        next: function (value) {
	          observers.forEach(function (obs) {
	            return obs.next && obs.next(value);
	          });
	        },
	        error: function (error) {
	          observers.forEach(function (obs) {
	            return obs.error && obs.error(error);
	          });
	        },
	        complete: function () {
	          observers.forEach(function (obs) {
	            return obs.complete && obs.complete();
	          });
	        }
	      });
	      return function () {
	        if (observers.delete(observer) && !observers.size && sub) {
	          sub.unsubscribe();
	          sub = null;
	        }
	      };
	    });
	  }

	  function asyncMap(observable, mapFn) {
	    return new Observable(function (observer) {
	      var next = observer.next,
	          error = observer.error,
	          complete = observer.complete;
	      var activeNextCount = 0;
	      var completed = false;
	      var handler = {
	        next: function (value) {
	          ++activeNextCount;
	          new Promise(function (resolve) {
	            resolve(mapFn(value));
	          }).then(function (result) {
	            --activeNextCount;
	            next && next.call(observer, result);
	            completed && handler.complete();
	          }, function (e) {
	            --activeNextCount;
	            error && error.call(observer, e);
	          });
	        },
	        error: function (e) {
	          error && error.call(observer, e);
	        },
	        complete: function () {
	          completed = true;

	          if (!activeNextCount) {
	            complete && complete.call(observer);
	          }
	        }
	      };
	      var sub = observable.subscribe(handler);
	      return function () {
	        return sub.unsubscribe();
	      };
	    });
	  }

	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  var QueryManager = function () {
	    function QueryManager(_a) {
	      var link = _a.link,
	          _b = _a.queryDeduplication,
	          queryDeduplication = _b === void 0 ? false : _b,
	          store = _a.store,
	          _c = _a.onBroadcast,
	          onBroadcast = _c === void 0 ? function () {
	        return undefined;
	      } : _c,
	          _d = _a.ssrMode,
	          ssrMode = _d === void 0 ? false : _d,
	          _e = _a.clientAwareness,
	          clientAwareness = _e === void 0 ? {} : _e,
	          localState = _a.localState,
	          assumeImmutableResults = _a.assumeImmutableResults;
	      this.mutationStore = new MutationStore();
	      this.queryStore = new QueryStore();
	      this.clientAwareness = {};
	      this.idCounter = 1;
	      this.queries = new Map();
	      this.fetchQueryRejectFns = new Map();
	      this.transformCache = new (_apolloUtilities.canUseWeakMap ? WeakMap : Map)();
	      this.inFlightLinkObservables = new Map();
	      this.pollingInfoByQueryId = new Map();
	      this.link = link;
	      this.queryDeduplication = queryDeduplication;
	      this.dataStore = store;
	      this.onBroadcast = onBroadcast;
	      this.clientAwareness = clientAwareness;
	      this.localState = localState || new LocalState({
	        cache: store.getCache()
	      });
	      this.ssrMode = ssrMode;
	      this.assumeImmutableResults = !!assumeImmutableResults;
	    }

	    QueryManager.prototype.stop = function () {
	      var _this = this;

	      this.queries.forEach(function (_info, queryId) {
	        _this.stopQueryNoBroadcast(queryId);
	      });
	      this.fetchQueryRejectFns.forEach(function (reject) {
	        reject(process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(8) : new _tsInvariant.InvariantError('QueryManager stopped while query was in flight'));
	      });
	    };

	    QueryManager.prototype.mutate = function (_a) {
	      var mutation = _a.mutation,
	          variables = _a.variables,
	          optimisticResponse = _a.optimisticResponse,
	          updateQueriesByName = _a.updateQueries,
	          _b = _a.refetchQueries,
	          refetchQueries = _b === void 0 ? [] : _b,
	          _c = _a.awaitRefetchQueries,
	          awaitRefetchQueries = _c === void 0 ? false : _c,
	          updateWithProxyFn = _a.update,
	          _d = _a.errorPolicy,
	          errorPolicy = _d === void 0 ? 'none' : _d,
	          fetchPolicy = _a.fetchPolicy,
	          _e = _a.context,
	          context = _e === void 0 ? {} : _e;
	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        var mutationId, generateUpdateQueriesInfo, self;

	        var _this = this;

	        return (0, _tslib.__generator)(this, function (_f) {
	          switch (_f.label) {
	            case 0:
	              process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(mutation, 9) : (0, _tsInvariant.invariant)(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
	              process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', 10) : (0, _tsInvariant.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', "fetchPolicy for mutations currently only supports the 'no-cache' policy");
	              mutationId = this.generateQueryId();
	              mutation = this.transform(mutation).document;
	              this.setQuery(mutationId, function () {
	                return {
	                  document: mutation
	                };
	              });
	              variables = this.getVariables(mutation, variables);
	              if (!this.transform(mutation).hasClientExports) return [3, 2];
	              return [4, this.localState.addExportedVariables(mutation, variables, context)];

	            case 1:
	              variables = _f.sent();
	              _f.label = 2;

	            case 2:
	              generateUpdateQueriesInfo = function () {
	                var ret = {};

	                if (updateQueriesByName) {
	                  _this.queries.forEach(function (_a, queryId) {
	                    var observableQuery = _a.observableQuery;

	                    if (observableQuery) {
	                      var queryName = observableQuery.queryName;

	                      if (queryName && hasOwnProperty.call(updateQueriesByName, queryName)) {
	                        ret[queryId] = {
	                          updater: updateQueriesByName[queryName],
	                          query: _this.queryStore.get(queryId)
	                        };
	                      }
	                    }
	                  });
	                }

	                return ret;
	              };

	              this.mutationStore.initMutation(mutationId, mutation, variables);
	              this.dataStore.markMutationInit({
	                mutationId: mutationId,
	                document: mutation,
	                variables: variables,
	                updateQueries: generateUpdateQueriesInfo(),
	                update: updateWithProxyFn,
	                optimisticResponse: optimisticResponse
	              });
	              this.broadcastQueries();
	              self = this;
	              return [2, new Promise(function (resolve, reject) {
	                var storeResult;
	                var error;
	                self.getObservableFromLink(mutation, (0, _tslib.__assign)({}, context, {
	                  optimisticResponse: optimisticResponse
	                }), variables, false).subscribe({
	                  next: function (result) {
	                    if ((0, _apolloUtilities.graphQLResultHasError)(result) && errorPolicy === 'none') {
	                      error = new ApolloError({
	                        graphQLErrors: result.errors
	                      });
	                      return;
	                    }

	                    self.mutationStore.markMutationResult(mutationId);

	                    if (fetchPolicy !== 'no-cache') {
	                      self.dataStore.markMutationResult({
	                        mutationId: mutationId,
	                        result: result,
	                        document: mutation,
	                        variables: variables,
	                        updateQueries: generateUpdateQueriesInfo(),
	                        update: updateWithProxyFn
	                      });
	                    }

	                    storeResult = result;
	                  },
	                  error: function (err) {
	                    self.mutationStore.markMutationError(mutationId, err);
	                    self.dataStore.markMutationComplete({
	                      mutationId: mutationId,
	                      optimisticResponse: optimisticResponse
	                    });
	                    self.broadcastQueries();
	                    self.setQuery(mutationId, function () {
	                      return {
	                        document: null
	                      };
	                    });
	                    reject(new ApolloError({
	                      networkError: err
	                    }));
	                  },
	                  complete: function () {
	                    if (error) {
	                      self.mutationStore.markMutationError(mutationId, error);
	                    }

	                    self.dataStore.markMutationComplete({
	                      mutationId: mutationId,
	                      optimisticResponse: optimisticResponse
	                    });
	                    self.broadcastQueries();

	                    if (error) {
	                      reject(error);
	                      return;
	                    }

	                    if (typeof refetchQueries === 'function') {
	                      refetchQueries = refetchQueries(storeResult);
	                    }

	                    var refetchQueryPromises = [];

	                    if (isNonEmptyArray(refetchQueries)) {
	                      refetchQueries.forEach(function (refetchQuery) {
	                        if (typeof refetchQuery === 'string') {
	                          self.queries.forEach(function (_a) {
	                            var observableQuery = _a.observableQuery;

	                            if (observableQuery && observableQuery.queryName === refetchQuery) {
	                              refetchQueryPromises.push(observableQuery.refetch());
	                            }
	                          });
	                        } else {
	                          var queryOptions = {
	                            query: refetchQuery.query,
	                            variables: refetchQuery.variables,
	                            fetchPolicy: 'network-only'
	                          };

	                          if (refetchQuery.context) {
	                            queryOptions.context = refetchQuery.context;
	                          }

	                          refetchQueryPromises.push(self.query(queryOptions));
	                        }
	                      });
	                    }

	                    Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
	                      self.setQuery(mutationId, function () {
	                        return {
	                          document: null
	                        };
	                      });

	                      if (errorPolicy === 'ignore' && storeResult && (0, _apolloUtilities.graphQLResultHasError)(storeResult)) {
	                        delete storeResult.errors;
	                      }

	                      resolve(storeResult);
	                    });
	                  }
	                });
	              })];
	          }
	        });
	      });
	    };

	    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
	      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
	        var _a, metadata, _b, fetchPolicy, _c, context, query, variables, storeResult, isNetworkOnly, needToFetch, _d, complete, result, shouldFetch, requestId, cancel, networkResult;

	        var _this = this;

	        return (0, _tslib.__generator)(this, function (_e) {
	          switch (_e.label) {
	            case 0:
	              _a = options.metadata, metadata = _a === void 0 ? null : _a, _b = options.fetchPolicy, fetchPolicy = _b === void 0 ? 'cache-first' : _b, _c = options.context, context = _c === void 0 ? {} : _c;
	              query = this.transform(options.query).document;
	              variables = this.getVariables(query, options.variables);
	              if (!this.transform(query).hasClientExports) return [3, 2];
	              return [4, this.localState.addExportedVariables(query, variables, context)];

	            case 1:
	              variables = _e.sent();
	              _e.label = 2;

	            case 2:
	              options = (0, _tslib.__assign)({}, options, {
	                variables: variables
	              });
	              isNetworkOnly = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
	              needToFetch = isNetworkOnly;

	              if (!isNetworkOnly) {
	                _d = this.dataStore.getCache().diff({
	                  query: query,
	                  variables: variables,
	                  returnPartialData: true,
	                  optimistic: false
	                }), complete = _d.complete, result = _d.result;
	                needToFetch = !complete || fetchPolicy === 'cache-and-network';
	                storeResult = result;
	              }

	              shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
	              if ((0, _apolloUtilities.hasDirectives)(['live'], query)) shouldFetch = true;
	              requestId = this.idCounter++;
	              cancel = fetchPolicy !== 'no-cache' ? this.updateQueryWatch(queryId, query, options) : undefined;
	              this.setQuery(queryId, function () {
	                return {
	                  document: query,
	                  lastRequestId: requestId,
	                  invalidated: true,
	                  cancel: cancel
	                };
	              });
	              this.invalidate(fetchMoreForQueryId);
	              this.queryStore.initQuery({
	                queryId: queryId,
	                document: query,
	                storePreviousVariables: shouldFetch,
	                variables: variables,
	                isPoll: fetchType === FetchType.poll,
	                isRefetch: fetchType === FetchType.refetch,
	                metadata: metadata,
	                fetchMoreForQueryId: fetchMoreForQueryId
	              });
	              this.broadcastQueries();

	              if (shouldFetch) {
	                networkResult = this.fetchRequest({
	                  requestId: requestId,
	                  queryId: queryId,
	                  document: query,
	                  options: options,
	                  fetchMoreForQueryId: fetchMoreForQueryId
	                }).catch(function (error) {
	                  if (isApolloError(error)) {
	                    throw error;
	                  } else {
	                    if (requestId >= _this.getQuery(queryId).lastRequestId) {
	                      _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);

	                      _this.invalidate(queryId);

	                      _this.invalidate(fetchMoreForQueryId);

	                      _this.broadcastQueries();
	                    }

	                    throw new ApolloError({
	                      networkError: error
	                    });
	                  }
	                });

	                if (fetchPolicy !== 'cache-and-network') {
	                  return [2, networkResult];
	                }

	                networkResult.catch(function () {});
	              }

	              this.queryStore.markQueryResultClient(queryId, !shouldFetch);
	              this.invalidate(queryId);
	              this.invalidate(fetchMoreForQueryId);

	              if (this.transform(query).hasForcedResolvers) {
	                return [2, this.localState.runResolvers({
	                  document: query,
	                  remoteResult: {
	                    data: storeResult
	                  },
	                  context: context,
	                  variables: variables,
	                  onlyRunForcedResolvers: true
	                }).then(function (result) {
	                  _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);

	                  _this.broadcastQueries();

	                  return result;
	                })];
	              }

	              this.broadcastQueries();
	              return [2, {
	                data: storeResult
	              }];
	          }
	        });
	      });
	    };

	    QueryManager.prototype.markQueryResult = function (queryId, result, _a, fetchMoreForQueryId) {
	      var fetchPolicy = _a.fetchPolicy,
	          variables = _a.variables,
	          errorPolicy = _a.errorPolicy;

	      if (fetchPolicy === 'no-cache') {
	        this.setQuery(queryId, function () {
	          return {
	            newData: {
	              result: result.data,
	              complete: true
	            }
	          };
	        });
	      } else {
	        this.dataStore.markQueryResult(result, this.getQuery(queryId).document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
	      }
	    };

	    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
	      var _this = this;

	      function invoke(method, argument) {
	        if (observer[method]) {
	          try {
	            observer[method](argument);
	          } catch (e) {
	            process.env.NODE_ENV === "production" || _tsInvariant.invariant.error(e);
	          }
	        } else if (method === 'error') {
	          process.env.NODE_ENV === "production" || _tsInvariant.invariant.error(argument);
	        }
	      }

	      return function (queryStoreValue, newData) {
	        _this.invalidate(queryId, false);

	        if (!queryStoreValue) return;

	        var _a = _this.getQuery(queryId),
	            observableQuery = _a.observableQuery,
	            document = _a.document;

	        var fetchPolicy = observableQuery ? observableQuery.options.fetchPolicy : options.fetchPolicy;
	        if (fetchPolicy === 'standby') return;
	        var loading = isNetworkRequestInFlight(queryStoreValue.networkStatus);
	        var lastResult = observableQuery && observableQuery.getLastResult();
	        var networkStatusChanged = !!(lastResult && lastResult.networkStatus !== queryStoreValue.networkStatus);
	        var shouldNotifyIfLoading = options.returnPartialData || !newData && queryStoreValue.previousVariables || networkStatusChanged && options.notifyOnNetworkStatusChange || fetchPolicy === 'cache-only' || fetchPolicy === 'cache-and-network';

	        if (loading && !shouldNotifyIfLoading) {
	          return;
	        }

	        var hasGraphQLErrors = isNonEmptyArray(queryStoreValue.graphQLErrors);
	        var errorPolicy = observableQuery && observableQuery.options.errorPolicy || options.errorPolicy || 'none';

	        if (errorPolicy === 'none' && hasGraphQLErrors || queryStoreValue.networkError) {
	          return invoke('error', new ApolloError({
	            graphQLErrors: queryStoreValue.graphQLErrors,
	            networkError: queryStoreValue.networkError
	          }));
	        }

	        try {
	          var data = void 0;
	          var isMissing = void 0;

	          if (newData) {
	            if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') {
	              _this.setQuery(queryId, function () {
	                return {
	                  newData: null
	                };
	              });
	            }

	            data = newData.result;
	            isMissing = !newData.complete;
	          } else {
	            var lastError = observableQuery && observableQuery.getLastError();
	            var errorStatusChanged = errorPolicy !== 'none' && (lastError && lastError.graphQLErrors) !== queryStoreValue.graphQLErrors;

	            if (lastResult && lastResult.data && !errorStatusChanged) {
	              data = lastResult.data;
	              isMissing = false;
	            } else {
	              var diffResult = _this.dataStore.getCache().diff({
	                query: document,
	                variables: queryStoreValue.previousVariables || queryStoreValue.variables,
	                returnPartialData: true,
	                optimistic: true
	              });

	              data = diffResult.result;
	              isMissing = !diffResult.complete;
	            }
	          }

	          var stale = isMissing && !(options.returnPartialData || fetchPolicy === 'cache-only');
	          var resultFromStore = {
	            data: stale ? lastResult && lastResult.data : data,
	            loading: loading,
	            networkStatus: queryStoreValue.networkStatus,
	            stale: stale
	          };

	          if (errorPolicy === 'all' && hasGraphQLErrors) {
	            resultFromStore.errors = queryStoreValue.graphQLErrors;
	          }

	          invoke('next', resultFromStore);
	        } catch (networkError) {
	          invoke('error', new ApolloError({
	            networkError: networkError
	          }));
	        }
	      };
	    };

	    QueryManager.prototype.transform = function (document) {
	      var transformCache = this.transformCache;

	      if (!transformCache.has(document)) {
	        var cache = this.dataStore.getCache();
	        var transformed = cache.transformDocument(document);
	        var forLink = (0, _apolloUtilities.removeConnectionDirectiveFromDocument)(cache.transformForLink(transformed));
	        var clientQuery = this.localState.clientQuery(transformed);
	        var serverQuery = this.localState.serverQuery(forLink);
	        var cacheEntry_1 = {
	          document: transformed,
	          hasClientExports: (0, _apolloUtilities.hasClientExports)(transformed),
	          hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
	          clientQuery: clientQuery,
	          serverQuery: serverQuery,
	          defaultVars: (0, _apolloUtilities.getDefaultValues)((0, _apolloUtilities.getOperationDefinition)(transformed))
	        };

	        var add = function (doc) {
	          if (doc && !transformCache.has(doc)) {
	            transformCache.set(doc, cacheEntry_1);
	          }
	        };

	        add(document);
	        add(transformed);
	        add(clientQuery);
	        add(serverQuery);
	      }

	      return transformCache.get(document);
	    };

	    QueryManager.prototype.getVariables = function (document, variables) {
	      return (0, _tslib.__assign)({}, this.transform(document).defaultVars, variables);
	    };

	    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
	      if (shouldSubscribe === void 0) {
	        shouldSubscribe = true;
	      }

	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(options.fetchPolicy !== 'standby', 11) : (0, _tsInvariant.invariant)(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
	      options.variables = this.getVariables(options.query, options.variables);

	      if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
	        options.notifyOnNetworkStatusChange = false;
	      }

	      var transformedOptions = (0, _tslib.__assign)({}, options);
	      return new ObservableQuery({
	        queryManager: this,
	        options: transformedOptions,
	        shouldSubscribe: shouldSubscribe
	      });
	    };

	    QueryManager.prototype.query = function (options) {
	      var _this = this;

	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(options.query, 12) : (0, _tsInvariant.invariant)(options.query, 'query option is required. You must specify your GraphQL document ' + 'in the query option.');
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(options.query.kind === 'Document', 13) : (0, _tsInvariant.invariant)(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!options.returnPartialData, 14) : (0, _tsInvariant.invariant)(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!options.pollInterval, 15) : (0, _tsInvariant.invariant)(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
	      return new Promise(function (resolve, reject) {
	        var watchedQuery = _this.watchQuery(options, false);

	        _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);

	        watchedQuery.result().then(resolve, reject).then(function () {
	          return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
	        });
	      });
	    };

	    QueryManager.prototype.generateQueryId = function () {
	      return String(this.idCounter++);
	    };

	    QueryManager.prototype.stopQueryInStore = function (queryId) {
	      this.stopQueryInStoreNoBroadcast(queryId);
	      this.broadcastQueries();
	    };

	    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
	      this.stopPollingQuery(queryId);
	      this.queryStore.stopQuery(queryId);
	      this.invalidate(queryId);
	    };

	    QueryManager.prototype.addQueryListener = function (queryId, listener) {
	      this.setQuery(queryId, function (_a) {
	        var listeners = _a.listeners;
	        listeners.add(listener);
	        return {
	          invalidated: false
	        };
	      });
	    };

	    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
	      var _this = this;

	      var cancel = this.getQuery(queryId).cancel;
	      if (cancel) cancel();

	      var previousResult = function () {
	        var previousResult = null;

	        var observableQuery = _this.getQuery(queryId).observableQuery;

	        if (observableQuery) {
	          var lastResult = observableQuery.getLastResult();

	          if (lastResult) {
	            previousResult = lastResult.data;
	          }
	        }

	        return previousResult;
	      };

	      return this.dataStore.getCache().watch({
	        query: document,
	        variables: options.variables,
	        optimistic: true,
	        previousResult: previousResult,
	        callback: function (newData) {
	          _this.setQuery(queryId, function () {
	            return {
	              invalidated: true,
	              newData: newData
	            };
	          });
	        }
	      });
	    };

	    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
	      this.setQuery(queryId, function () {
	        return {
	          observableQuery: observableQuery
	        };
	      });
	    };

	    QueryManager.prototype.removeObservableQuery = function (queryId) {
	      var cancel = this.getQuery(queryId).cancel;
	      this.setQuery(queryId, function () {
	        return {
	          observableQuery: null
	        };
	      });
	      if (cancel) cancel();
	    };

	    QueryManager.prototype.clearStore = function () {
	      this.fetchQueryRejectFns.forEach(function (reject) {
	        reject(process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(16) : new _tsInvariant.InvariantError('Store reset while query was in flight (not completed in link chain)'));
	      });
	      var resetIds = [];
	      this.queries.forEach(function (_a, queryId) {
	        var observableQuery = _a.observableQuery;
	        if (observableQuery) resetIds.push(queryId);
	      });
	      this.queryStore.reset(resetIds);
	      this.mutationStore.reset();
	      return this.dataStore.reset();
	    };

	    QueryManager.prototype.resetStore = function () {
	      var _this = this;

	      return this.clearStore().then(function () {
	        return _this.reFetchObservableQueries();
	      });
	    };

	    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
	      var _this = this;

	      if (includeStandby === void 0) {
	        includeStandby = false;
	      }

	      var observableQueryPromises = [];
	      this.queries.forEach(function (_a, queryId) {
	        var observableQuery = _a.observableQuery;

	        if (observableQuery) {
	          var fetchPolicy = observableQuery.options.fetchPolicy;
	          observableQuery.resetLastResults();

	          if (fetchPolicy !== 'cache-only' && (includeStandby || fetchPolicy !== 'standby')) {
	            observableQueryPromises.push(observableQuery.refetch());
	          }

	          _this.setQuery(queryId, function () {
	            return {
	              newData: null
	            };
	          });

	          _this.invalidate(queryId);
	        }
	      });
	      this.broadcastQueries();
	      return Promise.all(observableQueryPromises);
	    };

	    QueryManager.prototype.observeQuery = function (queryId, options, observer) {
	      this.addQueryListener(queryId, this.queryListenerForObserver(queryId, options, observer));
	      return this.fetchQuery(queryId, options);
	    };

	    QueryManager.prototype.startQuery = function (queryId, options, listener) {
	      process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn("The QueryManager.startQuery method has been deprecated");
	      this.addQueryListener(queryId, listener);
	      this.fetchQuery(queryId, options).catch(function () {
	        return undefined;
	      });
	      return queryId;
	    };

	    QueryManager.prototype.startGraphQLSubscription = function (_a) {
	      var _this = this;

	      var query = _a.query,
	          fetchPolicy = _a.fetchPolicy,
	          variables = _a.variables;
	      query = this.transform(query).document;
	      variables = this.getVariables(query, variables);

	      var makeObservable = function (variables) {
	        return _this.getObservableFromLink(query, {}, variables, false).map(function (result) {
	          if (!fetchPolicy || fetchPolicy !== 'no-cache') {
	            _this.dataStore.markSubscriptionResult(result, query, variables);

	            _this.broadcastQueries();
	          }

	          if ((0, _apolloUtilities.graphQLResultHasError)(result)) {
	            throw new ApolloError({
	              graphQLErrors: result.errors
	            });
	          }

	          return result;
	        });
	      };

	      if (this.transform(query).hasClientExports) {
	        var observablePromise_1 = this.localState.addExportedVariables(query, variables).then(makeObservable);
	        return new Observable(function (observer) {
	          var sub = null;
	          observablePromise_1.then(function (observable) {
	            return sub = observable.subscribe(observer);
	          }, observer.error);
	          return function () {
	            return sub && sub.unsubscribe();
	          };
	        });
	      }

	      return makeObservable(variables);
	    };

	    QueryManager.prototype.stopQuery = function (queryId) {
	      this.stopQueryNoBroadcast(queryId);
	      this.broadcastQueries();
	    };

	    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
	      this.stopQueryInStoreNoBroadcast(queryId);
	      this.removeQuery(queryId);
	    };

	    QueryManager.prototype.removeQuery = function (queryId) {
	      this.fetchQueryRejectFns.delete("query:" + queryId);
	      this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
	      this.getQuery(queryId).subscriptions.forEach(function (x) {
	        return x.unsubscribe();
	      });
	      this.queries.delete(queryId);
	    };

	    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
	      if (optimistic === void 0) {
	        optimistic = true;
	      }

	      var _a = observableQuery.options,
	          variables = _a.variables,
	          query = _a.query,
	          fetchPolicy = _a.fetchPolicy,
	          returnPartialData = _a.returnPartialData;
	      var lastResult = observableQuery.getLastResult();
	      var newData = this.getQuery(observableQuery.queryId).newData;

	      if (newData && newData.complete) {
	        return {
	          data: newData.result,
	          partial: false
	        };
	      }

	      if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') {
	        return {
	          data: undefined,
	          partial: false
	        };
	      }

	      var _b = this.dataStore.getCache().diff({
	        query: query,
	        variables: variables,
	        previousResult: lastResult ? lastResult.data : undefined,
	        returnPartialData: true,
	        optimistic: optimistic
	      }),
	          result = _b.result,
	          complete = _b.complete;

	      return {
	        data: complete || returnPartialData ? result : void 0,
	        partial: !complete
	      };
	    };

	    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
	      var observableQuery;

	      if (typeof queryIdOrObservable === 'string') {
	        var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
	        process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(foundObserveableQuery, 17) : (0, _tsInvariant.invariant)(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
	        observableQuery = foundObserveableQuery;
	      } else {
	        observableQuery = queryIdOrObservable;
	      }

	      var _a = observableQuery.options,
	          variables = _a.variables,
	          query = _a.query;
	      return {
	        previousResult: this.getCurrentQueryResult(observableQuery, false).data,
	        variables: variables,
	        document: query
	      };
	    };

	    QueryManager.prototype.broadcastQueries = function () {
	      var _this = this;

	      this.onBroadcast();
	      this.queries.forEach(function (info, id) {
	        if (info.invalidated) {
	          info.listeners.forEach(function (listener) {
	            if (listener) {
	              listener(_this.queryStore.get(id), info.newData);
	            }
	          });
	        }
	      });
	    };

	    QueryManager.prototype.getLocalState = function () {
	      return this.localState;
	    };

	    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
	      var _this = this;

	      if (deduplication === void 0) {
	        deduplication = this.queryDeduplication;
	      }

	      var observable;
	      var serverQuery = this.transform(query).serverQuery;

	      if (serverQuery) {
	        var _a = this,
	            inFlightLinkObservables_1 = _a.inFlightLinkObservables,
	            link = _a.link;

	        var operation = {
	          query: serverQuery,
	          variables: variables,
	          operationName: (0, _apolloUtilities.getOperationName)(serverQuery) || void 0,
	          context: this.prepareContext((0, _tslib.__assign)({}, context, {
	            forceFetch: !deduplication
	          }))
	        };
	        context = operation.context;

	        if (deduplication) {
	          var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
	          inFlightLinkObservables_1.set(serverQuery, byVariables_1);
	          var varJson_1 = JSON.stringify(variables);
	          observable = byVariables_1.get(varJson_1);

	          if (!observable) {
	            byVariables_1.set(varJson_1, observable = multiplex((0, _apolloLink.execute)(link, operation)));

	            var cleanup = function () {
	              byVariables_1.delete(varJson_1);
	              if (!byVariables_1.size) inFlightLinkObservables_1.delete(serverQuery);
	              cleanupSub_1.unsubscribe();
	            };

	            var cleanupSub_1 = observable.subscribe({
	              next: cleanup,
	              error: cleanup,
	              complete: cleanup
	            });
	          }
	        } else {
	          observable = multiplex((0, _apolloLink.execute)(link, operation));
	        }
	      } else {
	        observable = Observable.of({
	          data: {}
	        });
	        context = this.prepareContext(context);
	      }

	      var clientQuery = this.transform(query).clientQuery;

	      if (clientQuery) {
	        observable = asyncMap(observable, function (result) {
	          return _this.localState.runResolvers({
	            document: clientQuery,
	            remoteResult: result,
	            context: context,
	            variables: variables
	          });
	        });
	      }

	      return observable;
	    };

	    QueryManager.prototype.fetchRequest = function (_a) {
	      var _this = this;

	      var requestId = _a.requestId,
	          queryId = _a.queryId,
	          document = _a.document,
	          options = _a.options,
	          fetchMoreForQueryId = _a.fetchMoreForQueryId;
	      var variables = options.variables,
	          _b = options.errorPolicy,
	          errorPolicy = _b === void 0 ? 'none' : _b,
	          fetchPolicy = options.fetchPolicy;
	      var resultFromStore;
	      var errorsFromStore;
	      return new Promise(function (resolve, reject) {
	        var observable = _this.getObservableFromLink(document, options.context, variables);

	        var fqrfId = "fetchRequest:" + queryId;

	        _this.fetchQueryRejectFns.set(fqrfId, reject);

	        var cleanup = function () {
	          _this.fetchQueryRejectFns.delete(fqrfId);

	          _this.setQuery(queryId, function (_a) {
	            var subscriptions = _a.subscriptions;
	            subscriptions.delete(subscription);
	          });
	        };

	        var subscription = observable.map(function (result) {
	          if (requestId >= _this.getQuery(queryId).lastRequestId) {
	            _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);

	            _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);

	            _this.invalidate(queryId);

	            _this.invalidate(fetchMoreForQueryId);

	            _this.broadcastQueries();
	          }

	          if (errorPolicy === 'none' && isNonEmptyArray(result.errors)) {
	            return reject(new ApolloError({
	              graphQLErrors: result.errors
	            }));
	          }

	          if (errorPolicy === 'all') {
	            errorsFromStore = result.errors;
	          }

	          if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
	            resultFromStore = result.data;
	          } else {
	            var _a = _this.dataStore.getCache().diff({
	              variables: variables,
	              query: document,
	              optimistic: false,
	              returnPartialData: true
	            }),
	                result_1 = _a.result,
	                complete = _a.complete;

	            if (complete || options.returnPartialData) {
	              resultFromStore = result_1;
	            }
	          }
	        }).subscribe({
	          error: function (error) {
	            cleanup();
	            reject(error);
	          },
	          complete: function () {
	            cleanup();
	            resolve({
	              data: resultFromStore,
	              errors: errorsFromStore,
	              loading: false,
	              networkStatus: NetworkStatus.ready,
	              stale: false
	            });
	          }
	        });

	        _this.setQuery(queryId, function (_a) {
	          var subscriptions = _a.subscriptions;
	          subscriptions.add(subscription);
	        });
	      });
	    };

	    QueryManager.prototype.getQuery = function (queryId) {
	      return this.queries.get(queryId) || {
	        listeners: new Set(),
	        invalidated: false,
	        document: null,
	        newData: null,
	        lastRequestId: 1,
	        observableQuery: null,
	        subscriptions: new Set()
	      };
	    };

	    QueryManager.prototype.setQuery = function (queryId, updater) {
	      var prev = this.getQuery(queryId);
	      var newInfo = (0, _tslib.__assign)({}, prev, updater(prev));
	      this.queries.set(queryId, newInfo);
	    };

	    QueryManager.prototype.invalidate = function (queryId, invalidated) {
	      if (invalidated === void 0) {
	        invalidated = true;
	      }

	      if (queryId) {
	        this.setQuery(queryId, function () {
	          return {
	            invalidated: invalidated
	          };
	        });
	      }
	    };

	    QueryManager.prototype.prepareContext = function (context) {
	      if (context === void 0) {
	        context = {};
	      }

	      var newContext = this.localState.prepareContext(context);
	      return (0, _tslib.__assign)({}, newContext, {
	        clientAwareness: this.clientAwareness
	      });
	    };

	    QueryManager.prototype.checkInFlight = function (queryId) {
	      var query = this.queryStore.get(queryId);
	      return query && query.networkStatus !== NetworkStatus.ready && query.networkStatus !== NetworkStatus.error;
	    };

	    QueryManager.prototype.startPollingQuery = function (options, queryId, listener) {
	      var _this = this;

	      var pollInterval = options.pollInterval;
	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(pollInterval, 18) : (0, _tsInvariant.invariant)(pollInterval, 'Attempted to start a polling query without a polling interval.');

	      if (!this.ssrMode) {
	        var info = this.pollingInfoByQueryId.get(queryId);

	        if (!info) {
	          this.pollingInfoByQueryId.set(queryId, info = {});
	        }

	        info.interval = pollInterval;
	        info.options = (0, _tslib.__assign)({}, options, {
	          fetchPolicy: 'network-only'
	        });

	        var maybeFetch_1 = function () {
	          var info = _this.pollingInfoByQueryId.get(queryId);

	          if (info) {
	            if (_this.checkInFlight(queryId)) {
	              poll_1();
	            } else {
	              _this.fetchQuery(queryId, info.options, FetchType.poll).then(poll_1, poll_1);
	            }
	          }
	        };

	        var poll_1 = function () {
	          var info = _this.pollingInfoByQueryId.get(queryId);

	          if (info) {
	            clearTimeout(info.timeout);
	            info.timeout = setTimeout(maybeFetch_1, info.interval);
	          }
	        };

	        if (listener) {
	          this.addQueryListener(queryId, listener);
	        }

	        poll_1();
	      }

	      return queryId;
	    };

	    QueryManager.prototype.stopPollingQuery = function (queryId) {
	      this.pollingInfoByQueryId.delete(queryId);
	    };

	    return QueryManager;
	  }();

	  var DataStore = function () {
	    function DataStore(initialCache) {
	      this.cache = initialCache;
	    }

	    DataStore.prototype.getCache = function () {
	      return this.cache;
	    };

	    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
	      if (ignoreErrors === void 0) {
	        ignoreErrors = false;
	      }

	      var writeWithErrors = !(0, _apolloUtilities.graphQLResultHasError)(result);

	      if (ignoreErrors && (0, _apolloUtilities.graphQLResultHasError)(result) && result.data) {
	        writeWithErrors = true;
	      }

	      if (!fetchMoreForQueryId && writeWithErrors) {
	        this.cache.write({
	          result: result.data,
	          dataId: 'ROOT_QUERY',
	          query: document,
	          variables: variables
	        });
	      }
	    };

	    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
	      if (!(0, _apolloUtilities.graphQLResultHasError)(result)) {
	        this.cache.write({
	          result: result.data,
	          dataId: 'ROOT_SUBSCRIPTION',
	          query: document,
	          variables: variables
	        });
	      }
	    };

	    DataStore.prototype.markMutationInit = function (mutation) {
	      var _this = this;

	      if (mutation.optimisticResponse) {
	        var optimistic_1;

	        if (typeof mutation.optimisticResponse === 'function') {
	          optimistic_1 = mutation.optimisticResponse(mutation.variables);
	        } else {
	          optimistic_1 = mutation.optimisticResponse;
	        }

	        this.cache.recordOptimisticTransaction(function (c) {
	          var orig = _this.cache;
	          _this.cache = c;

	          try {
	            _this.markMutationResult({
	              mutationId: mutation.mutationId,
	              result: {
	                data: optimistic_1
	              },
	              document: mutation.document,
	              variables: mutation.variables,
	              updateQueries: mutation.updateQueries,
	              update: mutation.update
	            });
	          } finally {
	            _this.cache = orig;
	          }
	        }, mutation.mutationId);
	      }
	    };

	    DataStore.prototype.markMutationResult = function (mutation) {
	      var _this = this;

	      if (!(0, _apolloUtilities.graphQLResultHasError)(mutation.result)) {
	        var cacheWrites_1 = [{
	          result: mutation.result.data,
	          dataId: 'ROOT_MUTATION',
	          query: mutation.document,
	          variables: mutation.variables
	        }];
	        var updateQueries_1 = mutation.updateQueries;

	        if (updateQueries_1) {
	          Object.keys(updateQueries_1).forEach(function (id) {
	            var _a = updateQueries_1[id],
	                query = _a.query,
	                updater = _a.updater;

	            var _b = _this.cache.diff({
	              query: query.document,
	              variables: query.variables,
	              returnPartialData: true,
	              optimistic: false
	            }),
	                currentQueryResult = _b.result,
	                complete = _b.complete;

	            if (complete) {
	              var nextQueryResult = (0, _apolloUtilities.tryFunctionOrLogError)(function () {
	                return updater(currentQueryResult, {
	                  mutationResult: mutation.result,
	                  queryName: (0, _apolloUtilities.getOperationName)(query.document) || undefined,
	                  queryVariables: query.variables
	                });
	              });

	              if (nextQueryResult) {
	                cacheWrites_1.push({
	                  result: nextQueryResult,
	                  dataId: 'ROOT_QUERY',
	                  query: query.document,
	                  variables: query.variables
	                });
	              }
	            }
	          });
	        }

	        this.cache.performTransaction(function (c) {
	          cacheWrites_1.forEach(function (write) {
	            return c.write(write);
	          });
	          var update = mutation.update;

	          if (update) {
	            (0, _apolloUtilities.tryFunctionOrLogError)(function () {
	              return update(c, mutation.result);
	            });
	          }
	        });
	      }
	    };

	    DataStore.prototype.markMutationComplete = function (_a) {
	      var mutationId = _a.mutationId,
	          optimisticResponse = _a.optimisticResponse;

	      if (optimisticResponse) {
	        this.cache.removeOptimistic(mutationId);
	      }
	    };

	    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
	      this.cache.write({
	        result: newResult,
	        dataId: 'ROOT_QUERY',
	        variables: variables,
	        query: document
	      });
	    };

	    DataStore.prototype.reset = function () {
	      return this.cache.reset();
	    };

	    return DataStore;
	  }();

	  var version = "2.6.4";
	  var hasSuggestedDevtools = false;

	  var ApolloClient = function () {
	    function ApolloClient(options) {
	      var _this = this;

	      this.defaultOptions = {};
	      this.resetStoreCallbacks = [];
	      this.clearStoreCallbacks = [];
	      var cache = options.cache,
	          _a = options.ssrMode,
	          ssrMode = _a === void 0 ? false : _a,
	          _b = options.ssrForceFetchDelay,
	          ssrForceFetchDelay = _b === void 0 ? 0 : _b,
	          connectToDevTools = options.connectToDevTools,
	          _c = options.queryDeduplication,
	          queryDeduplication = _c === void 0 ? true : _c,
	          defaultOptions = options.defaultOptions,
	          _d = options.assumeImmutableResults,
	          assumeImmutableResults = _d === void 0 ? false : _d,
	          resolvers = options.resolvers,
	          typeDefs = options.typeDefs,
	          fragmentMatcher = options.fragmentMatcher,
	          clientAwarenessName = options.name,
	          clientAwarenessVersion = options.version;
	      var link = options.link;

	      if (!link && resolvers) {
	        link = _apolloLink.ApolloLink.empty();
	      }

	      if (!link || !cache) {
	        throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\n" + "These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\n" + "For more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup");
	      }

	      this.link = link;
	      this.cache = cache;
	      this.store = new DataStore(cache);
	      this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
	      this.queryDeduplication = queryDeduplication;
	      this.defaultOptions = defaultOptions || {};
	      this.typeDefs = typeDefs;

	      if (ssrForceFetchDelay) {
	        setTimeout(function () {
	          return _this.disableNetworkFetches = false;
	        }, ssrForceFetchDelay);
	      }

	      this.watchQuery = this.watchQuery.bind(this);
	      this.query = this.query.bind(this);
	      this.mutate = this.mutate.bind(this);
	      this.resetStore = this.resetStore.bind(this);
	      this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
	      var defaultConnectToDevTools = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && !window.__APOLLO_CLIENT__;

	      if (typeof connectToDevTools === 'undefined' ? defaultConnectToDevTools : connectToDevTools && typeof window !== 'undefined') {
	        window.__APOLLO_CLIENT__ = this;
	      }

	      if (!hasSuggestedDevtools && process.env.NODE_ENV !== 'production') {
	        hasSuggestedDevtools = true;

	        if (typeof window !== 'undefined' && window.document && window.top === window.self) {
	          if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	            if (window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('Chrome') > -1) {
	              console.debug('Download the Apollo DevTools ' + 'for a better development experience: ' + 'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
	            }
	          }
	        }
	      }

	      this.version = version;
	      this.localState = new LocalState({
	        cache: cache,
	        client: this,
	        resolvers: resolvers,
	        fragmentMatcher: fragmentMatcher
	      });
	      this.queryManager = new QueryManager({
	        link: this.link,
	        store: this.store,
	        queryDeduplication: queryDeduplication,
	        ssrMode: ssrMode,
	        clientAwareness: {
	          name: clientAwarenessName,
	          version: clientAwarenessVersion
	        },
	        localState: this.localState,
	        assumeImmutableResults: assumeImmutableResults,
	        onBroadcast: function () {
	          if (_this.devToolsHookCb) {
	            _this.devToolsHookCb({
	              action: {},
	              state: {
	                queries: _this.queryManager.queryStore.getStore(),
	                mutations: _this.queryManager.mutationStore.getStore()
	              },
	              dataWithOptimisticResults: _this.cache.extract(true)
	            });
	          }
	        }
	      });
	    }

	    ApolloClient.prototype.stop = function () {
	      this.queryManager.stop();
	    };

	    ApolloClient.prototype.watchQuery = function (options) {
	      if (this.defaultOptions.watchQuery) {
	        options = (0, _tslib.__assign)({}, this.defaultOptions.watchQuery, options);
	      }

	      if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
	        options = (0, _tslib.__assign)({}, options, {
	          fetchPolicy: 'cache-first'
	        });
	      }

	      return this.queryManager.watchQuery(options);
	    };

	    ApolloClient.prototype.query = function (options) {
	      if (this.defaultOptions.query) {
	        options = (0, _tslib.__assign)({}, this.defaultOptions.query, options);
	      }

	      process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(options.fetchPolicy !== 'cache-and-network', 2) : (0, _tsInvariant.invariant)(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' + 'client.query can only return a single result. Please use client.watchQuery ' + 'to receive multiple results from the cache and the network, or consider ' + 'using a different fetchPolicy, such as cache-first or network-only.');

	      if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
	        options = (0, _tslib.__assign)({}, options, {
	          fetchPolicy: 'cache-first'
	        });
	      }

	      return this.queryManager.query(options);
	    };

	    ApolloClient.prototype.mutate = function (options) {
	      if (this.defaultOptions.mutate) {
	        options = (0, _tslib.__assign)({}, this.defaultOptions.mutate, options);
	      }

	      return this.queryManager.mutate(options);
	    };

	    ApolloClient.prototype.subscribe = function (options) {
	      return this.queryManager.startGraphQLSubscription(options);
	    };

	    ApolloClient.prototype.readQuery = function (options, optimistic) {
	      if (optimistic === void 0) {
	        optimistic = false;
	      }

	      return this.cache.readQuery(options, optimistic);
	    };

	    ApolloClient.prototype.readFragment = function (options, optimistic) {
	      if (optimistic === void 0) {
	        optimistic = false;
	      }

	      return this.cache.readFragment(options, optimistic);
	    };

	    ApolloClient.prototype.writeQuery = function (options) {
	      var result = this.cache.writeQuery(options);
	      this.queryManager.broadcastQueries();
	      return result;
	    };

	    ApolloClient.prototype.writeFragment = function (options) {
	      var result = this.cache.writeFragment(options);
	      this.queryManager.broadcastQueries();
	      return result;
	    };

	    ApolloClient.prototype.writeData = function (options) {
	      var result = this.cache.writeData(options);
	      this.queryManager.broadcastQueries();
	      return result;
	    };

	    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
	      this.devToolsHookCb = cb;
	    };

	    ApolloClient.prototype.__requestRaw = function (payload) {
	      return (0, _apolloLink.execute)(this.link, payload);
	    };

	    ApolloClient.prototype.initQueryManager = function () {
	      process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('Calling the initQueryManager method is no longer necessary, ' + 'and it will be removed from ApolloClient in version 3.0.');
	      return this.queryManager;
	    };

	    ApolloClient.prototype.resetStore = function () {
	      var _this = this;

	      return Promise.resolve().then(function () {
	        return _this.queryManager.clearStore();
	      }).then(function () {
	        return Promise.all(_this.resetStoreCallbacks.map(function (fn) {
	          return fn();
	        }));
	      }).then(function () {
	        return _this.reFetchObservableQueries();
	      });
	    };

	    ApolloClient.prototype.clearStore = function () {
	      var _this = this;

	      return Promise.resolve().then(function () {
	        return _this.queryManager.clearStore();
	      }).then(function () {
	        return Promise.all(_this.clearStoreCallbacks.map(function (fn) {
	          return fn();
	        }));
	      });
	    };

	    ApolloClient.prototype.onResetStore = function (cb) {
	      var _this = this;

	      this.resetStoreCallbacks.push(cb);
	      return function () {
	        _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) {
	          return c !== cb;
	        });
	      };
	    };

	    ApolloClient.prototype.onClearStore = function (cb) {
	      var _this = this;

	      this.clearStoreCallbacks.push(cb);
	      return function () {
	        _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) {
	          return c !== cb;
	        });
	      };
	    };

	    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
	      return this.queryManager.reFetchObservableQueries(includeStandby);
	    };

	    ApolloClient.prototype.extract = function (optimistic) {
	      return this.cache.extract(optimistic);
	    };

	    ApolloClient.prototype.restore = function (serializedState) {
	      return this.cache.restore(serializedState);
	    };

	    ApolloClient.prototype.addResolvers = function (resolvers) {
	      this.localState.addResolvers(resolvers);
	    };

	    ApolloClient.prototype.setResolvers = function (resolvers) {
	      this.localState.setResolvers(resolvers);
	    };

	    ApolloClient.prototype.getResolvers = function () {
	      return this.localState.getResolvers();
	    };

	    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
	      this.localState.setFragmentMatcher(fragmentMatcher);
	    };

	    return ApolloClient;
	  }();

	  _exports.ApolloClient = ApolloClient;
	  var _default = ApolloClient; 

	  _exports.default = _default;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(44);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(43)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var OffixScheduler_1 = __webpack_require__(46);
	exports.OffixScheduler = OffixScheduler_1.OffixScheduler;
	var store_1 = __webpack_require__(53);
	exports.OfflineStore = store_1.OfflineStore;
	exports.createDefaultOfflineStorage = store_1.createDefaultOfflineStorage;
	var queue_1 = __webpack_require__(59);
	exports.OfflineQueue = queue_1.OfflineQueue;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var OffixConfig_1 = __webpack_require__(47);
	var OfflineError_1 = __webpack_require__(58);
	var queue_1 = __webpack_require__(59);
	var store_1 = __webpack_require__(53);
	/**
	 * OffixScheduler is a scheduler that queues function calls when
	 * an application is considered offline and fulfills them
	 * later when the app is back online.
	 *
	 * The action or function being scheduled can be anything
	 * but it is typically reliant on the network and is usually
	 * something that causes a server side change
	 * e.g. a HTTP Request, Sending a Message, a GraphQL Mutation
	 *
	 * Offix queues all operations in order and fulfills them when back online.
	 * It also persists them, allowing the operations to be kept across app restarts.
	 *
	 */
	var OffixScheduler = /** @class */ (function () {
	    function OffixScheduler(options) {
	        if (options === void 0) { options = {}; }
	        // listeners that can be added by the user to handle various events coming from the offline queue
	        this.queueListeners = [];
	        // determines whether we're offline or not
	        this.online = false;
	        this.config = new OffixConfig_1.OffixConfig(options);
	        this.networkStatus = this.config.networkStatus;
	        // its possible that no storage is available
	        if (this.config.offlineStorage) {
	            this.offlineStore = new store_1.OfflineStore(this.config.offlineStorage, this.config.serializer);
	        }
	        if (this.config.offlineQueueListener) {
	            this.queueListeners.push(this.config.offlineQueueListener);
	        }
	        this.executor = this.config.executor;
	        this.queue = new queue_1.OfflineQueue(this.offlineStore, {
	            listeners: this.queueListeners,
	            networkStatus: this.networkStatus,
	            // TODO this needs to be revisited. What context should the execute function have?
	            // Should it be able to access things on the Offix scheduler?
	            execute: this.executor.execute.bind(this.executor)
	        });
	    }
	    /**
	    * Initialize the scheduler
	    */
	    OffixScheduler.prototype.init = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!this.offlineStore) return [3 /*break*/, 2];
	                        return [4 /*yield*/, this.offlineStore.init()];
	                    case 1:
	                        _a.sent();
	                        _a.label = 2;
	                    case 2: return [4 /*yield*/, this.restoreOfflineOperations()];
	                    case 3:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * Add new listener for listening for queue changes
	     *
	     * @param listener
	     */
	    OffixScheduler.prototype.registerOfflineQueueListener = function (listener) {
	        this.queue.registerOfflineQueueListener(listener);
	    };
	    /**
	     * The scheduler execute method. Schedules an operation and its options to be
	     * fulfilled when online
	     *
	     * @param options the options as expected by the Executor
	     */
	    OffixScheduler.prototype.execute = function (options) {
	        return __awaiter(this, void 0, void 0, function () {
	            var queueEntry, mutationPromise;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!this.online) return [3 /*break*/, 1];
	                        return [2 /*return*/, this.executor.execute(options)];
	                    case 1: return [4 /*yield*/, this.queue.enqueueOperation(options)];
	                    case 2:
	                        queueEntry = _a.sent();
	                        mutationPromise = this.queue.buildPromiseForEntry(queueEntry);
	                        // throw an error with a reference to the promise
	                        throw new OfflineError_1.OfflineError(mutationPromise);
	                }
	            });
	        });
	    };
	    /**
	     * Restore offline operations into the queue
	     */
	    OffixScheduler.prototype.restoreOfflineOperations = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: 
	                    // reschedule offline mutations for new client instance
	                    return [4 /*yield*/, this.queue.restoreOfflineOperations()];
	                    case 1:
	                        // reschedule offline mutations for new client instance
	                        _a.sent();
	                        // initialize network status
	                        return [4 /*yield*/, this.initOnlineState()];
	                    case 2:
	                        // initialize network status
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    OffixScheduler.prototype.initOnlineState = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var queue, self, _a;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        queue = this.queue;
	                        self = this;
	                        _a = this;
	                        return [4 /*yield*/, this.networkStatus.isOffline()];
	                    case 1:
	                        _a.online = !(_b.sent());
	                        if (this.online) {
	                            queue.forwardOperations();
	                        }
	                        this.networkStatus.onStatusChangeListener({
	                            onStatusChange: function (networkInfo) {
	                                self.online = networkInfo.online;
	                                if (self.online) {
	                                    queue.forwardOperations();
	                                }
	                            }
	                        });
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return OffixScheduler;
	}());
	exports.OffixScheduler = OffixScheduler;
	//# sourceMappingURL=OffixScheduler.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var platform_1 = __webpack_require__(48);
	var DefaultOffixExecutor_1 = __webpack_require__(49);
	var offix_offline_1 = __webpack_require__(50);
	var store_1 = __webpack_require__(53);
	/**
	 * Class for managing user and default configuration.
	 * Default config is applied on top of user provided configuration
	 */
	var OffixConfig = /** @class */ (function () {
	    function OffixConfig(options) {
	        this.executor = options.executor || new DefaultOffixExecutor_1.DefaultOffixExecutor();
	        if (options.networkStatus) {
	            this.networkStatus = options.networkStatus;
	        }
	        else {
	            this.networkStatus = (platform_1.isMobileCordova()) ?
	                new offix_offline_1.CordovaNetworkStatus() : new offix_offline_1.WebNetworkStatus();
	        }
	        this.offlineStorage = options.storage || store_1.createDefaultOfflineStorage();
	        this.serializer = options.serializer || new store_1.DefaultOfflineSerializer();
	        this.offlineQueueListener = options.offlineQueueListener;
	    }
	    return OffixConfig;
	}());
	exports.OffixConfig = OffixConfig;
	//# sourceMappingURL=OffixConfig.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
	 *
	 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap in the Ripple emulator) nor
	 * Cordova `onDeviceReady`, which would normally wait for a callback.
	 *
	 * @return {boolean} isMobileCordova
	 */
	exports.isMobileCordova = function () {
	    return window && !!window["cordova"];
	};
	//# sourceMappingURL=platform.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var DefaultOffixExecutor = /** @class */ (function () {
	    function DefaultOffixExecutor() {
	    }
	    DefaultOffixExecutor.prototype.execute = function (options) {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                console.info("default executor called with following options", options);
	                return [2 /*return*/];
	            });
	        });
	    };
	    return DefaultOffixExecutor;
	}());
	exports.DefaultOffixExecutor = DefaultOffixExecutor;
	//# sourceMappingURL=DefaultOffixExecutor.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(51));
	__export(__webpack_require__(52));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Web networks status implementation based on: Mozilla
	 * See: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
	 */
	var WebNetworkStatus = /** @class */ (function () {
	    function WebNetworkStatus() {
	    }
	    WebNetworkStatus.prototype.onStatusChangeListener = function (callback) {
	        if (window) {
	            window.addEventListener("online", function () { return callback.onStatusChange({ online: true }); }, false);
	            window.addEventListener("offline", function () { return callback.onStatusChange({ online: false }); }, false);
	        }
	    };
	    WebNetworkStatus.prototype.isOffline = function () {
	        return new Promise(function (resolve) {
	            resolve(!window.navigator.onLine);
	        });
	    };
	    return WebNetworkStatus;
	}());
	exports.WebNetworkStatus = WebNetworkStatus;
	//# sourceMappingURL=WebNetworkStatus.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Cordova networks status implementation based on: cordova-plugin-network-information
	 * See: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-network-information
	 */
	var CordovaNetworkStatus = /** @class */ (function () {
	    function CordovaNetworkStatus() {
	    }
	    CordovaNetworkStatus.prototype.onStatusChangeListener = function (callback) {
	        if (document) {
	            document.addEventListener("online", function () { return callback.onStatusChange({ online: true }); }, false);
	            document.addEventListener("offline", function () { return callback.onStatusChange({ online: false }); }, false);
	        }
	    };
	    CordovaNetworkStatus.prototype.isOffline = function () {
	        return new Promise(function (resolve) {
	            document.addEventListener("deviceready", function () {
	                resolve(!window.navigator.onLine);
	            }, false);
	        });
	    };
	    return CordovaNetworkStatus;
	}());
	exports.CordovaNetworkStatus = CordovaNetworkStatus;
	//# sourceMappingURL=CordovaNetworkStatus.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(54));
	__export(__webpack_require__(56));
	__export(__webpack_require__(57));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var idb_localstorage_1 = __webpack_require__(55);
	exports.createDefaultOfflineStorage = function () {
	    return new idb_localstorage_1.Store("offline-store", "offline-data");
	};
	//# sourceMappingURL=defaultStorage.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	class Store {
	    constructor(dbName = "graphqlstore", storeName = "keyval") {
	        this.storeName = storeName;
	        this._dbp = new Promise((resolve, reject) => {
	            const openreq = indexedDB.open(dbName, 1);
	            openreq.onerror = () => reject(openreq.error);
	            openreq.onsuccess = () => resolve(openreq.result);
	            // First time setup: create an empty object store
	            openreq.onupgradeneeded = () => {
	                openreq.result.createObjectStore(storeName);
	            };
	        });
	    }
	    _withIDBStore(type, callback) {
	        return this._dbp.then(db => new Promise((resolve, reject) => {
	            const transaction = db.transaction(this.storeName, type);
	            transaction.oncomplete = () => resolve();
	            transaction.onabort = transaction.onerror = () => reject(transaction.error);
	            callback(transaction.objectStore(this.storeName));
	        }));
	    }
	    getItem(key) {
	        let req;
	        return this._withIDBStore("readonly", store => {
	            req = store.get(key);
	        }).then(() => req.result);
	    }
	    setItem(key, value) {
	        return this._withIDBStore("readwrite", store => {
	            store.put(value, key);
	        });
	    }
	    removeItem(key) {
	        return this._withIDBStore("readwrite", store => {
	            store.delete(key);
	        });
	    }
	    clear() {
	        return this._withIDBStore("readwrite", store => {
	            store.clear();
	        });
	    }
	    keys() {
	        const keys = [];
	        return this._withIDBStore("readonly", store => {
	            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
	            // And openKeyCursor isn't supported by Safari.
	            (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
	                if (!this.result) {
	                    return;
	                }
	                keys.push(this.result.key);
	                this.result.continue();
	            };
	        }).then(() => keys);
	    }
	}

	exports.Store = Store;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var OfflineStoreSerializer_1 = __webpack_require__(57);
	/**
	 * Abstract Offline storage
	 */
	var OfflineStore = /** @class */ (function () {
	    function OfflineStore(storage, serializer) {
	        this.offlineMetaKey = "offline-meta-data";
	        this.storageVersion = "v1";
	        this.arrayOfKeys = [];
	        this.storage = storage;
	        this.serializer = serializer || new OfflineStoreSerializer_1.DefaultOfflineSerializer();
	    }
	    /**
	     * Init store
	     */
	    OfflineStore.prototype.init = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var keys;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.storage.getItem(this.offlineMetaKey)];
	                    case 1:
	                        keys = _a.sent();
	                        this.arrayOfKeys = keys || [];
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * Save an entry to store
	     *
	     * @param entry - the entry to be saved
	     */
	    OfflineStore.prototype.saveEntry = function (entry) {
	        return __awaiter(this, void 0, void 0, function () {
	            var serialized, offlineKey;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        serialized = this.serializer.serializeForStorage(entry);
	                        offlineKey = this.getOfflineKey(entry.qid);
	                        this.arrayOfKeys.push(offlineKey);
	                        return [4 /*yield*/, this.storage.setItem(this.offlineMetaKey, this.arrayOfKeys)];
	                    case 1:
	                        _a.sent();
	                        return [4 /*yield*/, this.storage.setItem(offlineKey, serialized)];
	                    case 2:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * Remove an entry from the store
	     *
	     * @param queue - the entry to be removed
	     */
	    OfflineStore.prototype.removeEntry = function (entry) {
	        return __awaiter(this, void 0, void 0, function () {
	            var offlineKey;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.arrayOfKeys.splice(this.arrayOfKeys.indexOf(entry.qid), 1);
	                        this.storage.setItem(this.offlineMetaKey, this.arrayOfKeys);
	                        offlineKey = this.getOfflineKey(entry.qid);
	                        return [4 /*yield*/, this.storage.removeItem(offlineKey)];
	                    case 1:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    /**
	     * Fetch data from the offline store
	     */
	    OfflineStore.prototype.getOfflineData = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var offlineItems, _i, _a, key, keyVersion, item, deserializedItem;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        offlineItems = [];
	                        _i = 0, _a = this.arrayOfKeys;
	                        _b.label = 1;
	                    case 1:
	                        if (!(_i < _a.length)) return [3 /*break*/, 4];
	                        key = _a[_i];
	                        keyVersion = key.split(":")[0];
	                        if (!(keyVersion === this.storageVersion)) return [3 /*break*/, 3];
	                        return [4 /*yield*/, this.storage.getItem(key)];
	                    case 2:
	                        item = _b.sent();
	                        deserializedItem = this.serializer.deserializeFromStorage(item);
	                        offlineItems.push({
	                            operation: {
	                                op: deserializedItem,
	                                qid: key.slice(this.storageVersion.length + 1) // remove the 'v1:' from the key when we put it back in the queue
	                            }
	                        });
	                        _b.label = 3;
	                    case 3:
	                        _i++;
	                        return [3 /*break*/, 1];
	                    case 4: return [2 /*return*/, offlineItems];
	                }
	            });
	        });
	    };
	    OfflineStore.prototype.getOfflineKey = function (id) {
	        return this.storageVersion + ":" + id;
	    };
	    return OfflineStore;
	}());
	exports.OfflineStore = OfflineStore;
	//# sourceMappingURL=OfflineStore.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var DefaultOfflineSerializer = /** @class */ (function () {
	    function DefaultOfflineSerializer() {
	    }
	    DefaultOfflineSerializer.prototype.serializeForStorage = function (_a) {
	        var op = _a.op;
	        return JSON.stringify(op);
	    };
	    DefaultOfflineSerializer.prototype.deserializeFromStorage = function (persistedEntry) {
	        if (typeof persistedEntry === "string") {
	            return JSON.parse(persistedEntry);
	        }
	        return persistedEntry;
	    };
	    return DefaultOfflineSerializer;
	}());
	exports.DefaultOfflineSerializer = DefaultOfflineSerializer;
	//# sourceMappingURL=OfflineStoreSerializer.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 *
	 * Represents error object returned to user when offline
	 *
	 * Usage:
	 * ```javascript
	 * client.mutate(...).catch((error)=> {
	 *  if(error.networkError && error.networkError.offline){
	 *    const offlineError: OfflineError =  error.networkError;
	 *    offlineError.watchOfflineChange().then(...)
	 *  }
	 * });
	 * ```
	 */
	var OfflineError = /** @class */ (function () {
	    function OfflineError(offlineMutatePromise) {
	        this.offline = true;
	        this.offlineMutatePromise = offlineMutatePromise;
	    }
	    OfflineError.prototype.watchOfflineChange = function () {
	        return this.offlineMutatePromise;
	    };
	    return OfflineError;
	}());
	exports.OfflineError = OfflineError;
	//# sourceMappingURL=OfflineError.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(60));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var offix_cache_1 = __webpack_require__(61);
	/**
	 * Class implementing persistent operation queue.
	 *
	 * This class is designed to be used by OfflineLink
	 * It provides these functionalities:
	 *
	 * - persisting operation queue in provided storage
	 * - updating client IDs with server IDs (explained below)
	 */
	var OfflineQueue = /** @class */ (function () {
	    function OfflineQueue(store, options) {
	        this.queue = [];
	        // listeners that can be added by the user to handle various events coming from the offline queue
	        this.listeners = [];
	        this.store = store;
	        this.execute = options.execute;
	        if (options.listeners) {
	            this.listeners = options.listeners;
	        }
	    }
	    /**
	     * Enqueue offline change and wait for it to be sent to server when online.
	     * Every offline change is added to queue.
	     */
	    OfflineQueue.prototype.enqueueOperation = function (op) {
	        return __awaiter(this, void 0, void 0, function () {
	            var entry, err_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        entry = {
	                            operation: {
	                                qid: offix_cache_1.generateClientId(),
	                                op: op
	                            }
	                        };
	                        // enqueue and persist
	                        this.queue.push(entry);
	                        // notify listeners
	                        this.onOperationEnqueued(entry.operation);
	                        if (!this.store) return [3 /*break*/, 4];
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4 /*yield*/, this.store.saveEntry(entry.operation)];
	                    case 2:
	                        _a.sent();
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_1 = _a.sent();
	                        console.error(err_1);
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/, entry];
	                }
	            });
	        });
	    };
	    OfflineQueue.prototype.buildPromiseForEntry = function (entry) {
	        return new Promise(function (resolve, reject) {
	            entry.handlers = {
	                resolve: resolve,
	                reject: reject
	            };
	        });
	    };
	    OfflineQueue.prototype.dequeueOperation = function (entry) {
	        return __awaiter(this, void 0, void 0, function () {
	            var err_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        this.queue = this.queue.filter(function (e) { return e !== entry; });
	                        if (!this.store) return [3 /*break*/, 4];
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4 /*yield*/, this.store.removeEntry(entry.operation)];
	                    case 2:
	                        _a.sent();
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_2 = _a.sent();
	                        // TODO integration test for this
	                        // TODO should we log something here?
	                        console.error(err_2);
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    OfflineQueue.prototype.forwardOperations = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _i, _a, entry;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        _i = 0, _a = this.queue;
	                        _b.label = 1;
	                    case 1:
	                        if (!(_i < _a.length)) return [3 /*break*/, 4];
	                        entry = _a[_i];
	                        return [4 /*yield*/, this.forwardOperation(entry)];
	                    case 2:
	                        _b.sent();
	                        _b.label = 3;
	                    case 3:
	                        _i++;
	                        return [3 /*break*/, 1];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    OfflineQueue.prototype.forwardOperation = function (entry) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 2, , 3]);
	                        return [4 /*yield*/, this.execute(entry.operation.op)];
	                    case 1:
	                        result = _a.sent();
	                        this.onForwardNext(entry, result);
	                        if (entry.handlers) {
	                            entry.handlers.resolve(result);
	                        }
	                        return [3 /*break*/, 3];
	                    case 2:
	                        error_1 = _a.sent();
	                        if (entry.handlers) {
	                            entry.handlers.reject(error_1);
	                        }
	                        this.onOperationFailure(entry.operation, error_1);
	                        return [3 /*break*/, 3];
	                    case 3: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    OfflineQueue.prototype.restoreOfflineOperations = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var offlineEntries, _i, offlineEntries_1, entry, error_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!this.store) return [3 /*break*/, 4];
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4 /*yield*/, this.store.getOfflineData()];
	                    case 2:
	                        offlineEntries = _a.sent();
	                        for (_i = 0, offlineEntries_1 = offlineEntries; _i < offlineEntries_1.length; _i++) {
	                            entry = offlineEntries_1[_i];
	                            this.onOperationRequeued(entry.operation);
	                        }
	                        this.queue = offlineEntries;
	                        return [3 /*break*/, 4];
	                    case 3:
	                        error_2 = _a.sent();
	                        // TODO should we be logging something here?
	                        // TODO integration tests covering this
	                        // Possible reasons for failure are
	                        // no storage available
	                        // or the deserializeFromStorage function failed
	                        console.error(error_2);
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    OfflineQueue.prototype.registerOfflineQueueListener = function (listener) {
	        this.listeners.push(listener);
	    };
	    OfflineQueue.prototype.onOperationEnqueued = function (op) {
	        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            if (listener.onOperationEnqueued) {
	                listener.onOperationEnqueued(op);
	            }
	        }
	    };
	    OfflineQueue.prototype.onOperationRequeued = function (op) {
	        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            if (listener.onOperationRequeued) {
	                listener.onOperationRequeued(op);
	            }
	        }
	    };
	    OfflineQueue.prototype.onOperationSuccess = function (op, result) {
	        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            if (listener.onOperationSuccess) {
	                listener.onOperationSuccess(op, result);
	            }
	        }
	    };
	    OfflineQueue.prototype.onOperationFailure = function (op, error) {
	        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            if (listener.onOperationFailure) {
	                listener.onOperationFailure(op, error);
	            }
	        }
	    };
	    OfflineQueue.prototype.queueCleared = function () {
	        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
	            var listener = _a[_i];
	            if (listener.queueCleared) {
	                listener.queueCleared();
	            }
	        }
	    };
	    OfflineQueue.prototype.onForwardNext = function (entry, result) {
	        if (result.errors) {
	            // TODO distiguish between application errors that happen here
	            // And other errors that may happen in forwardOperation
	            this.onOperationFailure(entry.operation, result.errors);
	            // Notify for success otherwise
	        }
	        else if (result.data) {
	            this.onOperationSuccess(entry.operation, result);
	        }
	        this.dequeueOperation(entry);
	        if (this.queue.length === 0) {
	            this.queueCleared();
	        }
	    };
	    return OfflineQueue;
	}());
	exports.OfflineQueue = OfflineQueue;
	//# sourceMappingURL=OfflineQueue.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(62));
	__export(__webpack_require__(65));
	__export(__webpack_require__(67));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(63));
	__export(__webpack_require__(76));
	__export(__webpack_require__(64));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var CacheOperation_1 = __webpack_require__(64);
	var optimisticResponse_1 = __webpack_require__(65);
	var helperFunctions_1 = __webpack_require__(67);
	var util_1 = __webpack_require__(70);
	/**
	 * Creates a MutationOptions object which can be used with Apollo Client's mutate function
	 * Provides useful helpers for cache updates, optimistic responses, and context
	 * @param options see `MutationHelperOptions`
	 */
	exports.createMutationOptions = function (options) {
	    var mutation = options.mutation, variables = options.variables, updateQuery = options.updateQuery, returnType = options.returnType, _a = options.operationType, operationType = _a === void 0 ? CacheOperation_1.CacheOperation.ADD : _a, _b = options.idField, idField = _b === void 0 ? "id" : _b, context = options.context;
	    if (returnType && !options.optimisticResponse) {
	        options.optimisticResponse = optimisticResponse_1.createOptimisticResponse({
	            mutation: mutation,
	            variables: variables,
	            returnType: returnType,
	            operationType: operationType,
	            idField: idField
	        });
	    }
	    var mutationName = helperFunctions_1.getOperationFieldName(mutation);
	    if (updateQuery) {
	        var update = function (cache, _a) {
	            var data = _a.data;
	            if (util_1.isArray(updateQuery)) {
	                for (var _i = 0, updateQuery_1 = updateQuery; _i < updateQuery_1.length; _i++) {
	                    var query = updateQuery_1[_i];
	                    var updateFunction = exports.getUpdateFunction({
	                        mutationName: mutationName,
	                        idField: idField,
	                        operationType: operationType,
	                        updateQuery: query
	                    });
	                    updateFunction(cache, { data: data });
	                }
	            }
	            else {
	                var updateFunction = exports.getUpdateFunction({
	                    mutationName: mutationName,
	                    idField: idField,
	                    operationType: operationType,
	                    updateQuery: updateQuery
	                });
	                updateFunction(cache, { data: data });
	            }
	        };
	        options.update = update;
	    }
	    options.context = __assign(__assign({}, context), { returnType: returnType, idField: idField, operationName: mutationName, isOffline: true });
	    return options;
	};
	/**
	 * Generate the update function to update the cache for a given operation and query.

	 **/
	exports.getUpdateFunction = function (options) {
	    if (!options.updateQuery) {
	        throw new Error("Required updateQuery parameter is not supplied");
	    }
	    if (!options.mutationName) {
	        throw new Error("Required mutationName parameter is not supplied");
	    }
	    var mutationName = options.mutationName, updateQuery = options.updateQuery, _a = options.operationType, operationType = _a === void 0 ? CacheOperation_1.CacheOperation.ADD : _a, _b = options.idField, idField = _b === void 0 ? "id" : _b;
	    var _c = helperFunctions_1.deconstructQuery(updateQuery), query = _c.query, variables = _c.variables;
	    var queryField = helperFunctions_1.getOperationFieldName(query);
	    var updateFunction;
	    if (operationType === CacheOperation_1.CacheOperation.ADD) {
	        updateFunction = function (cache, _a) {
	            var data = _a.data;
	            var queryResult;
	            if (data) {
	                var operationData_1 = data[mutationName];
	                try {
	                    queryResult = cache.readQuery({ query: query, variables: variables });
	                }
	                catch (e) {
	                    queryResult = {};
	                }
	                var result = queryResult[queryField];
	                if (result && operationData_1) {
	                    // FIXME deduplication should happen on subscriptions
	                    // We do that every time no matter if we have subscription
	                    if (!result.find(function (item) {
	                        return item[idField] === operationData_1[idField];
	                    })) {
	                        result.push(operationData_1);
	                    }
	                }
	                else {
	                    queryResult[queryField] = [operationData_1];
	                }
	                try {
	                    cache.writeQuery({
	                        query: query,
	                        variables: variables,
	                        data: queryResult
	                    });
	                    // tslint:disable-next-line: no-empty
	                }
	                finally {
	                }
	            }
	        };
	    }
	    else if (operationType === CacheOperation_1.CacheOperation.DELETE) {
	        updateFunction = function (cache, _a) {
	            var data = _a.data;
	            if (data) {
	                try {
	                    var queryResult = cache.readQuery({ query: query, variables: variables });
	                    var operationData = data[mutationName];
	                    if (operationData) {
	                        var toBeRemoved_1 = {};
	                        if (typeof operationData === "string") {
	                            toBeRemoved_1[idField] = operationData;
	                        }
	                        else {
	                            toBeRemoved_1 = operationData;
	                        }
	                        var newData = queryResult[queryField].filter(function (item) {
	                            return toBeRemoved_1[idField] !== item[idField];
	                        });
	                        queryResult[queryField] = newData;
	                        cache.writeQuery({
	                            query: query,
	                            variables: variables,
	                            data: queryResult
	                        });
	                    }
	                    // tslint:disable-next-line: no-empty
	                }
	                finally {
	                }
	            }
	        };
	    }
	    else {
	        // this default catches the REFRESH case and returns an empty update function which does nothing
	        updateFunction = function () {
	            return;
	        };
	    }
	    return updateFunction;
	};
	//# sourceMappingURL=mutations.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Types of the cache operations that can be generated by helper
	 * Apollo will automatically detect and notify listeners for any edits.
	 * However additional handling is needed in situation when:
	 *
	 * - We are creating new item and we need to point out queries that needs to be updated
	 * - We are removing item and need to remove them from cached queries.
	 *
	 * As alternative users can rely on `refetchQueries` field but this approach is
	 * discouraged by Apollo team as it will make extra request that is not needed.
	 */
	var CacheOperation;
	(function (CacheOperation) {
	    /**
	     * Cache update that involves adding new item to the query.
	     * Used by default
	     */
	    CacheOperation["ADD"] = "add";
	    /**
	     * Cache update that involves notifying cache that  specific query is refreshed.
	     * It can be applied for changes that perform updates on different objects etc.
	     */
	    CacheOperation["REFRESH"] = "refresh";
	    /**
	     * Cache update that involves removing item from the query
	     */
	    CacheOperation["DELETE"] = "delete";
	})(CacheOperation = exports.CacheOperation || (exports.CacheOperation = {}));
	//# sourceMappingURL=CacheOperation.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(66));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var helperFunctions_1 = __webpack_require__(67);
	var CacheOperation_1 = __webpack_require__(64);
	var utils_1 = __webpack_require__(69);
	/**
	 * Create optimistic response.
	 * For example:
	 *
	  optimisticResponse: {
	      __typename: "Mutation",
	      updateComment: {
	        id: commentId,
	        __typename: "Comment",
	        content: commentContent
	      }
	    }
	 *
	 * For more info and examples see:
	 * https://www.apollographql.com/docs/react/features/optimistic-ui.html
	 *
	 * @param mutation operation that is being performed (update)
	 * @param returnType type that is going to be returned
	 * @param variables actual data passed to function
	 * @param idField name of id field (default:id)
	 * @param operationType the type of operation being returned
	 */
	exports.createOptimisticResponse = function (options) {
	    var operation = helperFunctions_1.getOperationFieldName(options.mutation);
	    // TODO things get really bad if returnType is not provided
	    var returnType = options.returnType, variables = options.variables, _a = options.idField, idField = _a === void 0 ? "id" : _a, operationType = options.operationType;
	    var optimisticResponse = {
	        __typename: "Mutation"
	    };
	    optimisticResponse[operation] = __assign(__assign({ __typename: returnType }, variables), { optimisticResponse: true });
	    if (operationType === CacheOperation_1.CacheOperation.ADD) {
	        optimisticResponse[operation][idField] = utils_1.generateClientId();
	    }
	    return optimisticResponse;
	};
	//# sourceMappingURL=optimisticResponse.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_utilities_1 = __webpack_require__(20);
	var constants_1 = __webpack_require__(68);
	// Returns true if ID was generated on client
	exports.isClientGeneratedId = function (id) {
	    return id && id.startsWith(constants_1.CLIENT_ID_PREFIX);
	};
	// Helper method for ID generation ()
	exports.generateClientId = function (length) {
	    if (length === void 0) { length = 8; }
	    var result = constants_1.CLIENT_ID_PREFIX;
	    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    for (var i = length; i > 0; i -= 1) {
	        result += chars[Math.floor(Math.random() * chars.length)];
	    }
	    return result;
	};
	exports.getMutationName = function (mutation) {
	    var definition = mutation.definitions.find(function (def) { return def.kind === "OperationDefinition"; });
	    var operationDefinition = definition && definition;
	    return operationDefinition && operationDefinition.name && operationDefinition.name.value;
	};
	exports.getOperationFieldName = function (operation) { return apollo_utilities_1.resultKeyNameFromField(operation.definitions[0].selectionSet.selections[0]); };
	// this function takes a Query and returns its constituent parts, if available.
	exports.deconstructQuery = function (updateQuery) {
	    var query;
	    var variables;
	    if (isQueryWithVariables(updateQuery)) {
	        query = updateQuery.query;
	        variables = updateQuery.variables;
	    }
	    else {
	        query = updateQuery;
	    }
	    return { query: query, variables: variables };
	};
	var isQueryWithVariables = function (doc) {
	    if (doc.variables) {
	        return true;
	    }
	    else {
	        return false;
	    }
	};
	//# sourceMappingURL=helperFunctions.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CLIENT_ID_PREFIX = "client:";
	//# sourceMappingURL=constants.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(67));
	__export(__webpack_require__(68));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
	  function getOwnPropertyDescriptors(obj) {
	    var keys = Object.keys(obj);
	    var descriptors = {};
	    for (var i = 0; i < keys.length; i++) {
	      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
	    }
	    return descriptors;
	  };

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  if (typeof process !== 'undefined' && process.noDeprecation === true) {
	    return fn;
	  }

	  // Allow for deprecating things in the process of starting up.
	  if (typeof process === 'undefined') {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnvRegex = /^$/;

	if (process.env.NODE_DEBUG) {
	  var debugEnv = process.env.NODE_DEBUG;
	  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
	    .replace(/\*/g, '.*')
	    .replace(/,/g, '$|^')
	    .toUpperCase();
	  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
	}
	exports.debuglog = function(set) {
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (debugEnvRegex.test(set)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	exports.types = __webpack_require__(71);

	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	exports.types.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	exports.types.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	exports.types.isNativeError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(72);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(75);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

	exports.promisify = function promisify(original) {
	  if (typeof original !== 'function')
	    throw new TypeError('The "original" argument must be of type Function');

	  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
	    var fn = original[kCustomPromisifiedSymbol];
	    if (typeof fn !== 'function') {
	      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
	    }
	    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
	      value: fn, enumerable: false, writable: false, configurable: true
	    });
	    return fn;
	  }

	  function fn() {
	    var promiseResolve, promiseReject;
	    var promise = new Promise(function (resolve, reject) {
	      promiseResolve = resolve;
	      promiseReject = reject;
	    });

	    var args = [];
	    for (var i = 0; i < arguments.length; i++) {
	      args.push(arguments[i]);
	    }
	    args.push(function (err, value) {
	      if (err) {
	        promiseReject(err);
	      } else {
	        promiseResolve(value);
	      }
	    });

	    try {
	      original.apply(this, args);
	    } catch (err) {
	      promiseReject(err);
	    }

	    return promise;
	  }

	  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

	  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
	    value: fn, enumerable: false, writable: false, configurable: true
	  });
	  return Object.defineProperties(
	    fn,
	    getOwnPropertyDescriptors(original)
	  );
	}

	exports.promisify.custom = kCustomPromisifiedSymbol

	function callbackifyOnRejected(reason, cb) {
	  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
	  // Because `null` is a special error value in callbacks which means "no error
	  // occurred", we error-wrap so the callback consumer can distinguish between
	  // "the promise rejected with null" or "the promise fulfilled with undefined".
	  if (!reason) {
	    var newReason = new Error('Promise was rejected with a falsy value');
	    newReason.reason = reason;
	    reason = newReason;
	  }
	  return cb(reason);
	}

	function callbackify(original) {
	  if (typeof original !== 'function') {
	    throw new TypeError('The "original" argument must be of type Function');
	  }

	  // We DO NOT return the promise as it gives the user a false sense that
	  // the promise is actually somehow related to the callback's execution
	  // and that the callback throwing will reject the promise.
	  function callbackified() {
	    var args = [];
	    for (var i = 0; i < arguments.length; i++) {
	      args.push(arguments[i]);
	    }

	    var maybeCb = args.pop();
	    if (typeof maybeCb !== 'function') {
	      throw new TypeError('The last argument must be of type Function');
	    }
	    var self = this;
	    var cb = function() {
	      return maybeCb.apply(self, arguments);
	    };
	    // In true node style we process the callback on `nextTick` with all the
	    // implications (stack, `uncaughtException`, `async_hooks`)
	    original.apply(this, args)
	      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)) },
	            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)) });
	  }

	  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
	  Object.defineProperties(callbackified,
	                          getOwnPropertyDescriptors(original));
	  return callbackified;
	}
	exports.callbackify = callbackify;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// Currently in sync with Node.js lib/internal/util/types.js
	// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

	'use strict';

	var isBuffer = __webpack_require__(72);

	var isArgumentsObject = __webpack_require__(73);
	var isGeneratorFunction = __webpack_require__(74);

	function uncurryThis(f) {
	  return f.call.bind(f);
	}

	var BigIntSupported = typeof BigInt !== 'undefined';
	var SymbolSupported = typeof Symbol !== 'undefined';
	var SymbolToStringTagSupported = SymbolSupported && typeof Symbol.toStringTag !== 'undefined';
	var Uint8ArraySupported = typeof Uint8Array !== 'undefined';
	var ArrayBufferSupported = typeof ArrayBuffer !== 'undefined';

	if (Uint8ArraySupported && SymbolToStringTagSupported) {
	  var TypedArrayPrototype = Object.getPrototypeOf(Uint8Array.prototype);

	  var TypedArrayProto_toStringTag =
	      uncurryThis(
	        Object.getOwnPropertyDescriptor(TypedArrayPrototype,
	                                        Symbol.toStringTag).get);

	}

	var ObjectToString = uncurryThis(Object.prototype.toString);

	var numberValue = uncurryThis(Number.prototype.valueOf);
	var stringValue = uncurryThis(String.prototype.valueOf);
	var booleanValue = uncurryThis(Boolean.prototype.valueOf);

	if (BigIntSupported) {
	  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
	}

	if (SymbolSupported) {
	  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
	}

	function checkBoxedPrimitive(value, prototypeValueOf) {
	  if (typeof value !== 'object') {
	    return false;
	  }
	  try {
	    prototypeValueOf(value);
	    return true;
	  } catch(e) {
	    return false;
	  }
	}

	exports.isArgumentsObject = isArgumentsObject;

	exports.isGeneratorFunction = isGeneratorFunction;

	// Taken from here and modified for better browser support
	// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
	function isPromise(input) {
		return (
			(
				typeof Promise !== 'undefined' &&
				input instanceof Promise
			) ||
			(
				input !== null &&
				typeof input === 'object' &&
				typeof input.then === 'function' &&
				typeof input.catch === 'function'
			)
		);
	}
	exports.isPromise = isPromise;

	function isArrayBufferView(value) {
	  if (ArrayBufferSupported && ArrayBuffer.isView) {
	    return ArrayBuffer.isView(value);
	  }

	  return (
	    isTypedArray(value) ||
	    isDataView(value)
	  );
	}
	exports.isArrayBufferView = isArrayBufferView;

	function isTypedArray(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) !== undefined;
	  } else {
	    return (
	      isUint8Array(value) ||
	      isUint8ClampedArray(value) ||
	      isUint16Array(value) ||
	      isUint32Array(value) ||
	      isInt8Array(value) ||
	      isInt16Array(value) ||
	      isInt32Array(value) ||
	      isFloat32Array(value) ||
	      isFloat64Array(value) ||
	      isBigInt64Array(value) ||
	      isBigUint64Array(value)
	    );
	  }
	}
	exports.isTypedArray = isTypedArray;

	function isUint8Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Uint8Array';
	  } else {
	    return (
	      ObjectToString(value) === '[object Uint8Array]' ||
	      // If it's a Buffer instance _and_ has a `.buffer` property,
	      // this is an ArrayBuffer based buffer; thus it's an Uint8Array
	      // (Old Node.js had a custom non-Uint8Array implementation)
	      isBuffer(value) && value.buffer !== undefined
	    );
	  }
	}
	exports.isUint8Array = isUint8Array;

	function isUint8ClampedArray(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Uint8ClampedArray';
	  } else {
	    return ObjectToString(value) === '[object Uint8ClampedArray]';
	  }
	}
	exports.isUint8ClampedArray = isUint8ClampedArray;

	function isUint16Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Uint16Array';
	  } else {
	    return ObjectToString(value) === '[object Uint16Array]';
	  }
	}
	exports.isUint16Array = isUint16Array;

	function isUint32Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Uint32Array';
	  } else {
	    return ObjectToString(value) === '[object Uint32Array]';
	  }
	}
	exports.isUint32Array = isUint32Array;

	function isInt8Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Int8Array';
	  } else {
	    return ObjectToString(value) === '[object Int8Array]';
	  }
	}
	exports.isInt8Array = isInt8Array;

	function isInt16Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Int16Array';
	  } else {
	    return ObjectToString(value) === '[object Int16Array]';
	  }
	}
	exports.isInt16Array = isInt16Array;

	function isInt32Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Int32Array';
	  } else {
	    return ObjectToString(value) === '[object Int32Array]';
	  }
	}
	exports.isInt32Array = isInt32Array;

	function isFloat32Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Float32Array';
	  } else {
	    return ObjectToString(value) === '[object Float32Array]';
	  }
	}
	exports.isFloat32Array = isFloat32Array;

	function isFloat64Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'Float64Array';
	  } else {
	    return ObjectToString(value) === '[object Float64Array]';
	  }
	}
	exports.isFloat64Array = isFloat64Array;

	function isBigInt64Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'BigInt64Array';
	  } else {
	    return ObjectToString(value) === '[object BigInt64Array]';
	  }
	}
	exports.isBigInt64Array = isBigInt64Array;

	function isBigUint64Array(value) {
	  if (Uint8ArraySupported && SymbolToStringTagSupported) {
	    return TypedArrayProto_toStringTag(value) === 'BigUint64Array';
	  } else {
	    return ObjectToString(value) === '[object BigUint64Array]';
	  }
	}
	exports.isBigUint64Array = isBigUint64Array;

	function isMapToString(value) {
	  return ObjectToString(value) === '[object Map]';
	}
	isMapToString.working = (
	  typeof Map !== 'undefined' &&
	  isMapToString(new Map())
	);

	function isMap(value) {
	  if (typeof Map === 'undefined') {
	    return false;
	  }

	  return isMapToString.working
	    ? isMapToString(value)
	    : value instanceof Map;
	}
	exports.isMap = isMap;

	function isSetToString(value) {
	  return ObjectToString(value) === '[object Set]';
	}
	isSetToString.working = (
	  typeof Set !== 'undefined' &&
	  isSetToString(new Set())
	);
	function isSet(value) {
	  if (typeof Set === 'undefined') {
	    return false;
	  }

	  return isSetToString.working
	    ? isSetToString(value)
	    : value instanceof Set;
	}
	exports.isSet = isSet;

	function isWeakMapToString(value) {
	  return ObjectToString(value) === '[object WeakMap]';
	}
	isWeakMapToString.working = (
	  typeof WeakMap !== 'undefined' &&
	  isWeakMapToString(new WeakMap())
	);
	function isWeakMap(value) {
	  if (typeof WeakMap === 'undefined') {
	    return false;
	  }

	  return isWeakMapToString.working
	    ? isWeakMapToString(value)
	    : value instanceof WeakMap;
	}
	exports.isWeakMap = isWeakMap;

	function isWeakSetToString(value) {
	  return ObjectToString(value) === '[object WeakSet]';
	}
	isWeakSetToString.working = (
	  typeof WeakSet !== 'undefined' &&
	  isWeakSetToString(new WeakSet())
	);
	function isWeakSet(value) {
	  return isWeakSetToString(value);
	  if (typeof WeakSet === 'undefined') {
	    return false;
	  }

	  return isWeakSetToString.working
	    ? isWeakSetToString(value)
	    : value instanceof WeakSet;
	}
	exports.isWeakSet = isWeakSet;

	function isArrayBufferToString(value) {
	  return ObjectToString(value) === '[object ArrayBuffer]';
	}
	isArrayBufferToString.working = (
	  typeof ArrayBuffer !== 'undefined' &&
	  isArrayBufferToString(new ArrayBuffer())
	);
	function isArrayBuffer(value) {
	  if (typeof ArrayBuffer === 'undefined') {
	    return false;
	  }

	  return isArrayBufferToString.working
	    ? isArrayBufferToString(value)
	    : value instanceof ArrayBuffer;
	}
	exports.isArrayBuffer = isArrayBuffer;

	function isDataViewToString(value) {
	  return ObjectToString(value) === '[object DataView]';
	}
	isDataViewToString.working = (
	  typeof ArrayBuffer !== 'undefined' &&
	  typeof DataView !== 'undefined' &&
	  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
	);
	function isDataView(value) {
	  if (typeof DataView === 'undefined') {
	    return false;
	  }

	  return isDataViewToString.working
	    ? isDataViewToString(value)
	    : value instanceof DataView;
	}
	exports.isDataView = isDataView;

	function isSharedArrayBufferToString(value) {
	  return ObjectToString(value) === '[object SharedArrayBuffer]';
	}
	isSharedArrayBufferToString.working = (
	  typeof SharedArrayBuffer !== 'undefined' &&
	  isSharedArrayBufferToString(new SharedArrayBuffer())
	);
	function isSharedArrayBuffer(value) {
	  if (typeof SharedArrayBuffer === 'undefined') {
	    return false;
	  }

	  return isSharedArrayBufferToString.working
	    ? isSharedArrayBufferToString(value)
	    : value instanceof SharedArrayBuffer;
	}
	exports.isSharedArrayBuffer = isSharedArrayBuffer;

	function isAsyncFunction(value) {
	  return ObjectToString(value) === '[object AsyncFunction]';
	}
	exports.isAsyncFunction = isAsyncFunction;

	function isMapIterator(value) {
	  return ObjectToString(value) === '[object Map Iterator]';
	}
	exports.isMapIterator = isMapIterator;

	function isSetIterator(value) {
	  return ObjectToString(value) === '[object Set Iterator]';
	}
	exports.isSetIterator = isSetIterator;

	function isGeneratorObject(value) {
	  return ObjectToString(value) === '[object Generator]';
	}
	exports.isGeneratorObject = isGeneratorObject;

	function isWebAssemblyCompiledModule(value) {
	  return ObjectToString(value) === '[object WebAssembly.Module]';
	}
	exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

	function isNumberObject(value) {
	  return checkBoxedPrimitive(value, numberValue);
	}
	exports.isNumberObject = isNumberObject;

	function isStringObject(value) {
	  return checkBoxedPrimitive(value, stringValue);
	}
	exports.isStringObject = isStringObject;

	function isBooleanObject(value) {
	  return checkBoxedPrimitive(value, booleanValue);
	}
	exports.isBooleanObject = isBooleanObject;

	function isBigIntObject(value) {
	  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
	}
	exports.isBigIntObject = isBigIntObject;

	function isSymbolObject(value) {
	  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
	}
	exports.isSymbolObject = isSymbolObject;

	function isBoxedPrimitive(value) {
	  return (
	    isNumberObject(value) ||
	    isStringObject(value) ||
	    isBooleanObject(value) ||
	    isBigIntObject(value) ||
	    isSymbolObject(value)
	  );
	}
	exports.isBoxedPrimitive = isBoxedPrimitive;

	function isAnyArrayBuffer(value) {
	  return Uint8ArraySupported && (
	    isArrayBuffer(value) ||
	    isSharedArrayBuffer(value)
	  );
	}
	exports.isAnyArrayBuffer = isAnyArrayBuffer;

	['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
	  Object.defineProperty(exports, method, {
	    enumerable: false,
	    value: function() {
	      throw new Error(method + ' is not supported in userland');
	    }
	  });
	});


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	'use strict';

	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	var toStr = Object.prototype.toString;

	var isStandardArguments = function isArguments(value) {
		if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
			return false;
		}
		return toStr.call(value) === '[object Arguments]';
	};

	var isLegacyArguments = function isArguments(value) {
		if (isStandardArguments(value)) {
			return true;
		}
		return value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value) !== '[object Array]' &&
			toStr.call(value.callee) === '[object Function]';
	};

	var supportsStandardArguments = (function () {
		return isStandardArguments(arguments);
	}());

	isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

	module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*(?:function)?\*/;
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	var getProto = Object.getPrototypeOf;
	var getGeneratorFunc = function () { // eslint-disable-line consistent-return
		if (!hasToStringTag) {
			return false;
		}
		try {
			return Function('return function*() {}')();
		} catch (e) {
		}
	};
	var generatorFunc = getGeneratorFunc();
	var GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {};

	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') {
			return false;
		}
		if (isFnRegex.test(fnToStr.call(fn))) {
			return true;
		}
		if (!hasToStringTag) {
			var str = toStr.call(fn);
			return str === '[object GeneratorFunction]';
		}
		return getProto(fn) === GeneratorFunction;
	};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      })
	    }
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor
	      var TempCtor = function () {}
	      TempCtor.prototype = superCtor.prototype
	      ctor.prototype = new TempCtor()
	      ctor.prototype.constructor = ctor
	    }
	  }
	}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __spreadArrays = (this && this.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var CacheOperation_1 = __webpack_require__(64);
	var __1 = __webpack_require__(61);
	/**
	 * Helper function which can be used to call subscribeToMore for multiple SubscriptionHelperOptions
	 * @param observableQuery the query which you would like to call subscribeToMore on.
	 * @param arrayOfHelperOptions the array of `SubscriptionHelperOptions`
	 */
	exports.subscribeToMoreHelper = function (observableQuery, arrayOfHelperOptions) {
	    for (var _i = 0, arrayOfHelperOptions_1 = arrayOfHelperOptions; _i < arrayOfHelperOptions_1.length; _i++) {
	        var option = arrayOfHelperOptions_1[_i];
	        observableQuery.subscribeToMore(exports.createSubscriptionOptions(option));
	    }
	};
	/**
	 * Creates a SubscribeToMoreOptions object which can be used with Apollo Client's subscribeToMore function
	 * on an observable query.
	 * @param options see `SubscriptionHelperOptions`
	 */
	exports.createSubscriptionOptions = function (options) {
	    var subscriptionQuery = options.subscriptionQuery, cacheUpdateQuery = options.cacheUpdateQuery, operationType = options.operationType, _a = options.idField, idField = _a === void 0 ? "id" : _a;
	    var document = (subscriptionQuery && subscriptionQuery.query)
	        || subscriptionQuery;
	    var variables = (subscriptionQuery && subscriptionQuery.variables)
	        || {};
	    var query = (cacheUpdateQuery && cacheUpdateQuery.query)
	        || cacheUpdateQuery;
	    var queryField = __1.getOperationFieldName(query);
	    return {
	        document: document,
	        variables: variables,
	        updateQuery: function (prev, _a) {
	            var _b;
	            var subscriptionData = _a.subscriptionData;
	            var data = subscriptionData.data;
	            var key = Object.keys(data)[0];
	            var mutadedItem = data[key];
	            var optype = operationType;
	            var obj = prev[queryField];
	            var updater = exports.getUpdateQueryFunction(optype, idField);
	            var result = updater(obj, mutadedItem);
	            return _b = {},
	                _b[queryField] = result,
	                _b;
	        }
	    };
	};
	/**
	 * Generate the standard update function to update the cache for a given operation type and query.
	 * @param opType The type of operation being performed
	 * @param idField The id field the item keys off
	 */
	exports.getUpdateQueryFunction = function (opType, idField) {
	    if (idField === void 0) { idField = "id"; }
	    var updateFunction;
	    switch (opType) {
	        case CacheOperation_1.CacheOperation.ADD:
	            updateFunction = function (prev, newItem) {
	                if (!newItem) {
	                    return __spreadArrays(prev);
	                }
	                else {
	                    return __spreadArrays(prev.filter(function (item) {
	                        return item[idField] !== newItem[idField];
	                    }), [newItem]);
	                }
	            };
	            break;
	        case CacheOperation_1.CacheOperation.REFRESH:
	            updateFunction = function (prev, newItem) {
	                if (!newItem) {
	                    return __spreadArrays(prev);
	                }
	                else {
	                    return prev.map(function (item) { return item[idField] === newItem[idField] ? newItem : item; });
	                }
	            };
	            break;
	        case CacheOperation_1.CacheOperation.DELETE:
	            updateFunction = function (prev, newItem) {
	                if (!newItem) {
	                    return [];
	                }
	                else {
	                    return prev.filter(function (item) { return item[idField] !== newItem[idField]; });
	                }
	            };
	            break;
	        default:
	            updateFunction = function (prev) { return prev; };
	    }
	    return updateFunction;
	};
	//# sourceMappingURL=subscriptions.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global['apollo-cache-persist'] = {})));
	}(this, (function (exports) { 'use strict';

	var Log = (function () {
	    function Log(options) {
	        var _a = options.debug, debug = _a === void 0 ? false : _a;
	        this.debug = debug;
	        this.lines = [];
	    }
	    Log.prototype.emit = function (level, message) {
	        if (level in console) {
	            var prefix = Log.prefix;
	            console[level].apply(console, [prefix].concat(message));
	        }
	    };
	    Log.prototype.tailLogs = function () {
	        var _this = this;
	        this.lines.forEach(function (_a) {
	            var level = _a[0], message = _a[1];
	            return _this.emit(level, message);
	        });
	    };
	    Log.prototype.getLogs = function () {
	        return this.lines;
	    };
	    Log.prototype.write = function (level, message) {
	        var buffer = Log.buffer;
	        this.lines = this.lines.slice(1 - buffer).concat([[level, message]]);
	        if (this.debug || level !== 'log') {
	            this.emit(level, message);
	        }
	    };
	    Log.prototype.info = function () {
	        var message = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            message[_i] = arguments[_i];
	        }
	        this.write('log', message);
	    };
	    Log.prototype.warn = function () {
	        var message = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            message[_i] = arguments[_i];
	        }
	        this.write('warn', message);
	    };
	    Log.prototype.error = function () {
	        var message = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            message[_i] = arguments[_i];
	        }
	        this.write('error', message);
	    };
	    Log.buffer = 30;
	    Log.prefix = '[apollo-cache-persist]';
	    return Log;
	}());

	var Cache = (function () {
	    function Cache(options) {
	        var cache = options.cache, _a = options.serialize, serialize = _a === void 0 ? true : _a;
	        this.cache = cache;
	        this.serialize = serialize;
	    }
	    Cache.prototype.extract = function () {
	        var data = this.cache.extract();
	        if (this.serialize) {
	            data = JSON.stringify(data);
	        }
	        return data;
	    };
	    Cache.prototype.restore = function (data) {
	        if (this.serialize && typeof data === 'string') {
	            data = JSON.parse(data);
	        }
	        if (data != null) {
	            this.cache.restore(data);
	        }
	    };
	    return Cache;
	}());

	var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var Storage = (function () {
	    function Storage(options) {
	        var storage = options.storage, _a = options.key, key = _a === void 0 ? 'apollo-cache-persist' : _a;
	        this.storage = storage;
	        this.key = key;
	    }
	    Storage.prototype.read = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                return [2, this.storage.getItem(this.key)];
	            });
	        });
	    };
	    Storage.prototype.write = function (data) {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.storage.setItem(this.key, data)];
	                    case 1:
	                        _a.sent();
	                        return [2];
	                }
	            });
	        });
	    };
	    Storage.prototype.purge = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.storage.removeItem(this.key)];
	                    case 1:
	                        _a.sent();
	                        return [2];
	                }
	            });
	        });
	    };
	    Storage.prototype.getSize = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var data;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.storage.getItem(this.key)];
	                    case 1:
	                        data = _a.sent();
	                        if (data == null) {
	                            return [2, 0];
	                        }
	                        else {
	                            return [2, typeof data === 'string' ? data.length : null];
	                        }
	                        return [2];
	                }
	            });
	        });
	    };
	    return Storage;
	}());

	var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var Persistor = (function () {
	    function Persistor(_a, options) {
	        var log = _a.log, cache = _a.cache, storage = _a.storage;
	        var _b = options.maxSize, maxSize = _b === void 0 ? 1024 * 1024 : _b;
	        this.log = log;
	        this.cache = cache;
	        this.storage = storage;
	        this.paused = false;
	        if (maxSize) {
	            this.maxSize = maxSize;
	        }
	    }
	    Persistor.prototype.persist = function () {
	        return __awaiter$1(this, void 0, void 0, function () {
	            var data, error_1;
	            return __generator$1(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 4, , 5]);
	                        data = this.cache.extract();
	                        if (!(this.maxSize != null &&
	                            typeof data === 'string' &&
	                            data.length > this.maxSize &&
	                            !this.paused)) return [3, 2];
	                        return [4, this.purge()];
	                    case 1:
	                        _a.sent();
	                        this.paused = true;
	                        return [2];
	                    case 2:
	                        if (this.paused) {
	                            this.paused = false;
	                        }
	                        return [4, this.storage.write(data)];
	                    case 3:
	                        _a.sent();
	                        this.log.info(typeof data === 'string'
	                            ? "Persisted cache of size " + data.length
	                            : 'Persisted cache');
	                        return [3, 5];
	                    case 4:
	                        error_1 = _a.sent();
	                        this.log.error('Error persisting cache', error_1);
	                        throw error_1;
	                    case 5: return [2];
	                }
	            });
	        });
	    };
	    Persistor.prototype.restore = function () {
	        return __awaiter$1(this, void 0, void 0, function () {
	            var data, error_2;
	            return __generator$1(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 5, , 6]);
	                        return [4, this.storage.read()];
	                    case 1:
	                        data = _a.sent();
	                        if (!(data != null)) return [3, 3];
	                        return [4, this.cache.restore(data)];
	                    case 2:
	                        _a.sent();
	                        this.log.info(typeof data === 'string'
	                            ? "Restored cache of size " + data.length
	                            : 'Restored cache');
	                        return [3, 4];
	                    case 3:
	                        this.log.info('No stored cache to restore');
	                        _a.label = 4;
	                    case 4: return [3, 6];
	                    case 5:
	                        error_2 = _a.sent();
	                        this.log.error('Error restoring cache', error_2);
	                        throw error_2;
	                    case 6: return [2];
	                }
	            });
	        });
	    };
	    Persistor.prototype.purge = function () {
	        return __awaiter$1(this, void 0, void 0, function () {
	            var error_3;
	            return __generator$1(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 2, , 3]);
	                        return [4, this.storage.purge()];
	                    case 1:
	                        _a.sent();
	                        this.log.info('Purged cache storage');
	                        return [3, 3];
	                    case 2:
	                        error_3 = _a.sent();
	                        this.log.error('Error purging cache storage', error_3);
	                        throw error_3;
	                    case 3: return [2];
	                }
	            });
	        });
	    };
	    return Persistor;
	}());

	var onCacheWrite = function (_a) {
	    var cache = _a.cache;
	    return function (persist) {
	        var write = cache.write;
	        cache.write = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            write.apply(cache, args);
	            persist();
	        };
	        return function () {
	            cache.write = write;
	        };
	    };
	};

	var onAppBackground = function (_a) {
	    var log = _a.log, cache = _a.cache;
	    return function (persist) {
	        log.warn('Trigger option `background` not available on web; using `write` trigger');
	        return onCacheWrite({ cache: cache })(persist);
	    };
	};

	var Trigger = (function () {
	    function Trigger(_a, options) {
	        var log = _a.log, persistor = _a.persistor;
	        var _this = this;
	        this.fire = function () {
	            if (!_this.debounce) {
	                _this.persist();
	                return;
	            }
	            if (_this.timeout != null) {
	                clearTimeout(_this.timeout);
	            }
	            _this.timeout = setTimeout(_this.persist, _this.debounce);
	        };
	        this.persist = function () {
	            if (_this.paused) {
	                return;
	            }
	            _this.persistor.persist();
	        };
	        var defaultDebounce = Trigger.defaultDebounce;
	        var cache = options.cache, debounce = options.debounce, _b = options.trigger, trigger = _b === void 0 ? 'write' : _b;
	        if (!trigger) {
	            return;
	        }
	        this.debounce = debounce != null ? debounce : defaultDebounce;
	        this.persistor = persistor;
	        this.paused = false;
	        switch (trigger) {
	            case 'write':
	                this.uninstall = onCacheWrite({ cache: cache })(this.fire);
	                break;
	            case 'background':
	                if (debounce) {
	                    log.warn('Debounce is not recommended with `background` trigger');
	                }
	                this.debounce = debounce;
	                this.uninstall = onAppBackground({ cache: cache, log: log })(this.fire);
	                break;
	            default:
	                if (typeof trigger === 'function') {
	                    this.uninstall = trigger(this.fire);
	                }
	                else {
	                    throw Error("Unrecognized trigger option: " + trigger);
	                }
	        }
	    }
	    Trigger.prototype.pause = function () {
	        this.paused = true;
	    };
	    Trigger.prototype.resume = function () {
	        this.paused = false;
	    };
	    Trigger.prototype.remove = function () {
	        if (this.uninstall) {
	            this.uninstall();
	            this.uninstall = null;
	            this.paused = true;
	        }
	    };
	    Trigger.defaultDebounce = 1000;
	    return Trigger;
	}());

	var CachePersistor = (function () {
	    function CachePersistor(options) {
	        if (!options.cache) {
	            throw new Error('In order to persist your Apollo Cache, you need to pass in a cache. ' +
	                'Please see https://www.apollographql.com/docs/react/basics/caching.html for our default InMemoryCache.');
	        }
	        if (!options.storage) {
	            throw new Error('In order to persist your Apollo Cache, you need to pass in an underlying storage provider. ' +
	                'Please see https://github.com/apollographql/apollo-cache-persist#storage-providers');
	        }
	        var log = new Log(options);
	        var cache = new Cache(options);
	        var storage = new Storage(options);
	        var persistor = new Persistor({ log: log, cache: cache, storage: storage }, options);
	        var trigger = new Trigger({ log: log, persistor: persistor }, options);
	        this.log = log;
	        this.cache = cache;
	        this.storage = storage;
	        this.persistor = persistor;
	        this.trigger = trigger;
	    }
	    CachePersistor.prototype.persist = function () {
	        return this.persistor.persist();
	    };
	    CachePersistor.prototype.restore = function () {
	        return this.persistor.restore();
	    };
	    CachePersistor.prototype.purge = function () {
	        return this.persistor.purge();
	    };
	    CachePersistor.prototype.pause = function () {
	        this.trigger.pause();
	    };
	    CachePersistor.prototype.resume = function () {
	        this.trigger.resume();
	    };
	    CachePersistor.prototype.remove = function () {
	        this.trigger.remove();
	    };
	    CachePersistor.prototype.getLogs = function (print) {
	        if (print === void 0) { print = false; }
	        if (print) {
	            this.log.tailLogs();
	        }
	        else {
	            return this.log.getLogs();
	        }
	    };
	    CachePersistor.prototype.getSize = function () {
	        return this.storage.getSize();
	    };
	    return CachePersistor;
	}());

	var persistCache = function (options) {
	    var persistor = new CachePersistor(options);
	    return persistor.restore();
	};

	exports.CachePersistor = CachePersistor;
	exports.persistCache = persistCache;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));
	//# sourceMappingURL=bundle.umd.js.map


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(79));
	__export(__webpack_require__(80));
	__export(__webpack_require__(88));
	__export(__webpack_require__(89));
	__export(__webpack_require__(86));
	//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	/**
	 * Apollo Specific implementation of the Serializer interface.
	 * Knows sanitize a MutationOptions object for storage in indexedDB
	 */
	exports.ApolloOperationSerializer = {
	    serializeForStorage: function (_a) {
	        var op = _a.op, qid = _a.qid;
	        return {
	            mutation: op.mutation,
	            variables: op.variables,
	            optimisticResponse: op.optimisticResponse,
	            context: op.context
	        };
	    },
	    deserializeFromStorage: function (item) {
	        if (typeof item === "string") {
	            item = JSON.parse(item);
	        }
	        return item;
	    }
	};
	//# sourceMappingURL=ApolloOperationSerializer.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_link_1 = __webpack_require__(10);
	var apollo_link_retry_1 = __webpack_require__(81);
	var helpers_1 = __webpack_require__(85);
	var ConflictLink_1 = __webpack_require__(86);
	/**
	 * Default HTTP Apollo Links
	 * Provides out of the box functionality for:
	 *
	 * - Offline/Online queue
	 * - Conflict resolution
	 * - Error handling
	 */
	function createDefaultLink(config) {
	    var conflictLink = new ConflictLink_1.ConflictLink({
	        conflictProvider: config.conflictProvider,
	        conflictListener: config.conflictListener,
	        conflictStrategy: config.conflictStrategy
	    });
	    var retryLink = apollo_link_1.ApolloLink.split(helpers_1.isMarkedOffline, new apollo_link_retry_1.RetryLink(config.retryOptions));
	    if (!config.link) {
	        throw new Error("config missing link property");
	    }
	    var links = [conflictLink, retryLink, config.link];
	    return apollo_link_1.ApolloLink.from(links);
	}
	exports.createDefaultLink = createDefaultLink;
	//# sourceMappingURL=LinksBuilder.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	tslib_1.__exportStar(__webpack_require__(82), exports);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var apollo_link_1 = __webpack_require__(10);
	var delayFunction_1 = __webpack_require__(83);
	var retryFunction_1 = __webpack_require__(84);
	var RetryableOperation = (function () {
	    function RetryableOperation(operation, nextLink, delayFor, retryIf) {
	        var _this = this;
	        this.operation = operation;
	        this.nextLink = nextLink;
	        this.delayFor = delayFor;
	        this.retryIf = retryIf;
	        this.retryCount = 0;
	        this.values = [];
	        this.complete = false;
	        this.canceled = false;
	        this.observers = [];
	        this.currentSubscription = null;
	        this.onNext = function (value) {
	            _this.values.push(value);
	            for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
	                var observer = _a[_i];
	                if (!observer)
	                    continue;
	                observer.next(value);
	            }
	        };
	        this.onComplete = function () {
	            _this.complete = true;
	            for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
	                var observer = _a[_i];
	                if (!observer)
	                    continue;
	                observer.complete();
	            }
	        };
	        this.onError = function (error) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
	            var shouldRetry, _i, _a, observer;
	            return tslib_1.__generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        this.retryCount += 1;
	                        return [4, this.retryIf(this.retryCount, this.operation, error)];
	                    case 1:
	                        shouldRetry = _b.sent();
	                        if (shouldRetry) {
	                            this.scheduleRetry(this.delayFor(this.retryCount, this.operation, error));
	                            return [2];
	                        }
	                        this.error = error;
	                        for (_i = 0, _a = this.observers; _i < _a.length; _i++) {
	                            observer = _a[_i];
	                            if (!observer)
	                                continue;
	                            observer.error(error);
	                        }
	                        return [2];
	                }
	            });
	        }); };
	    }
	    RetryableOperation.prototype.subscribe = function (observer) {
	        if (this.canceled) {
	            throw new Error("Subscribing to a retryable link that was canceled is not supported");
	        }
	        this.observers.push(observer);
	        for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
	            var value = _a[_i];
	            observer.next(value);
	        }
	        if (this.complete) {
	            observer.complete();
	        }
	        else if (this.error) {
	            observer.error(this.error);
	        }
	    };
	    RetryableOperation.prototype.unsubscribe = function (observer) {
	        var index = this.observers.indexOf(observer);
	        if (index < 0) {
	            throw new Error("RetryLink BUG! Attempting to unsubscribe unknown observer!");
	        }
	        this.observers[index] = null;
	        if (this.observers.every(function (o) { return o === null; })) {
	            this.cancel();
	        }
	    };
	    RetryableOperation.prototype.start = function () {
	        if (this.currentSubscription)
	            return;
	        this.try();
	    };
	    RetryableOperation.prototype.cancel = function () {
	        if (this.currentSubscription) {
	            this.currentSubscription.unsubscribe();
	        }
	        clearTimeout(this.timerId);
	        this.timerId = null;
	        this.currentSubscription = null;
	        this.canceled = true;
	    };
	    RetryableOperation.prototype.try = function () {
	        this.currentSubscription = this.nextLink(this.operation).subscribe({
	            next: this.onNext,
	            error: this.onError,
	            complete: this.onComplete,
	        });
	    };
	    RetryableOperation.prototype.scheduleRetry = function (delay) {
	        var _this = this;
	        if (this.timerId) {
	            throw new Error("RetryLink BUG! Encountered overlapping retries");
	        }
	        this.timerId = setTimeout(function () {
	            _this.timerId = null;
	            _this.try();
	        }, delay);
	    };
	    return RetryableOperation;
	}());
	var RetryLink = (function (_super) {
	    tslib_1.__extends(RetryLink, _super);
	    function RetryLink(options) {
	        var _this = _super.call(this) || this;
	        var _a = options || {}, attempts = _a.attempts, delay = _a.delay;
	        _this.delayFor =
	            typeof delay === 'function' ? delay : delayFunction_1.buildDelayFunction(delay);
	        _this.retryIf =
	            typeof attempts === 'function' ? attempts : retryFunction_1.buildRetryFunction(attempts);
	        return _this;
	    }
	    RetryLink.prototype.request = function (operation, nextLink) {
	        var retryable = new RetryableOperation(operation, nextLink, this.delayFor, this.retryIf);
	        retryable.start();
	        return new apollo_link_1.Observable(function (observer) {
	            retryable.subscribe(observer);
	            return function () {
	                retryable.unsubscribe(observer);
	            };
	        });
	    };
	    return RetryLink;
	}(apollo_link_1.ApolloLink));
	exports.RetryLink = RetryLink;
	//# sourceMappingURL=retryLink.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function buildDelayFunction(delayOptions) {
	    var _a = delayOptions || {}, _b = _a.initial, initial = _b === void 0 ? 300 : _b, _c = _a.jitter, jitter = _c === void 0 ? true : _c, _d = _a.max, max = _d === void 0 ? Infinity : _d;
	    var baseDelay = jitter ? initial : initial / 2;
	    return function delayFunction(count) {
	        var delay = Math.min(max, baseDelay * Math.pow(2, count));
	        if (jitter) {
	            delay = Math.random() * delay;
	        }
	        return delay;
	    };
	}
	exports.buildDelayFunction = buildDelayFunction;
	//# sourceMappingURL=delayFunction.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function buildRetryFunction(retryOptions) {
	    var _a = retryOptions || {}, retryIf = _a.retryIf, _b = _a.max, max = _b === void 0 ? 5 : _b;
	    return function retryFunction(count, operation, error) {
	        if (count >= max)
	            return false;
	        return retryIf ? retryIf(error, operation) : !!error;
	    };
	}
	exports.buildRetryFunction = buildRetryFunction;
	//# sourceMappingURL=retryFunction.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_utilities_1 = __webpack_require__(20);
	exports.isSubscription = function (op) {
	    var _a = apollo_utilities_1.getMainDefinition(op.query), kind = _a.kind, operation = _a.operation;
	    return kind === "OperationDefinition" && operation === "subscription";
	};
	exports.isMutation = function (op) {
	    var _a = apollo_utilities_1.getMainDefinition(op.query), kind = _a.kind, operation = _a.operation;
	    return kind === "OperationDefinition" && operation === "mutation";
	};
	exports.isNetworkError = function (error) {
	    return !error.result;
	};
	exports.isMarkedOffline = function (operation) {
	    return !!operation.getContext().isOffline;
	};
	//# sourceMappingURL=helpers.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_link_error_1 = __webpack_require__(87);
	var apollo_link_1 = __webpack_require__(10);
	var offix_conflicts_client_1 = __webpack_require__(4);
	var helpers_1 = __webpack_require__(85);
	/**
	 * Conflict handling link implementation that provides ability to determine whether or not a conflict should be handled.
	 * Leverages Apollo's onError link to keep track of the observables and the retried operations.
	 */
	var ConflictLink = /** @class */ (function (_super) {
	    __extends(ConflictLink, _super);
	    function ConflictLink(config) {
	        var _this = _super.call(this) || this;
	        _this.config = config;
	        _this.link = apollo_link_error_1.onError(_this.conflictHandler.bind(_this));
	        _this.stater = _this.config.conflictProvider;
	        _this.strategy = _this.config.conflictStrategy;
	        _this.listener = _this.config.conflictListener;
	        return _this;
	    }
	    ConflictLink.prototype.request = function (operation, forward) {
	        if (helpers_1.isMutation(operation)) {
	            if (this.stater.currentState(operation.variables) !== undefined) {
	                return this.link.request(operation, forward);
	            }
	            return forward(operation);
	        }
	        return forward(operation);
	    };
	    // this is a custom onError ErrorHandler. It determines executes the conflictHandler and provides a new operation
	    // to work with if necessary.
	    ConflictLink.prototype.conflictHandler = function (errorResponse) {
	        var response = errorResponse.response, operation = errorResponse.operation, forward = errorResponse.forward, graphQLErrors = errorResponse.graphQLErrors;
	        var data = this.getConflictData(graphQLErrors);
	        var individualStrategy = this.strategy || offix_conflicts_client_1.UseClient;
	        if (data && operation.getContext().returnType) {
	            var base = operation.getContext().conflictBase;
	            var conflictHandler = new offix_conflicts_client_1.ConflictHandler({
	                base: base,
	                client: data.clientState,
	                server: data.serverState,
	                strategy: individualStrategy,
	                listener: this.listener,
	                objectState: this.config.conflictProvider,
	                operationName: operation.operationName
	            });
	            var resolvedConflict = conflictHandler.executeStrategy();
	            if (resolvedConflict) {
	                operation.variables = resolvedConflict;
	            }
	        }
	        return forward(operation);
	    };
	    /**
	    * Fetch conflict data from the errors returned from the server
	    * @param graphQLErrors array of errors to retrieve conflicted data from
	    */
	    ConflictLink.prototype.getConflictData = function (graphQLErrors) {
	        if (graphQLErrors) {
	            for (var _i = 0, graphQLErrors_1 = graphQLErrors; _i < graphQLErrors_1.length; _i++) {
	                var err = graphQLErrors_1[_i];
	                if (err.extensions && err.extensions.exception && err.extensions.exception.conflictInfo) {
	                    return err.extensions.exception.conflictInfo;
	                }
	            }
	        }
	    };
	    return ConflictLink;
	}(apollo_link_1.ApolloLink));
	exports.ConflictLink = ConflictLink;
	//# sourceMappingURL=ConflictLink.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var apollo_link_1 = __webpack_require__(10);
	function onError(errorHandler) {
	    return new apollo_link_1.ApolloLink(function (operation, forward) {
	        return new apollo_link_1.Observable(function (observer) {
	            var sub;
	            var retriedSub;
	            var retriedResult;
	            try {
	                sub = forward(operation).subscribe({
	                    next: function (result) {
	                        if (result.errors) {
	                            retriedResult = errorHandler({
	                                graphQLErrors: result.errors,
	                                response: result,
	                                operation: operation,
	                                forward: forward,
	                            });
	                            if (retriedResult) {
	                                retriedSub = retriedResult.subscribe({
	                                    next: observer.next.bind(observer),
	                                    error: observer.error.bind(observer),
	                                    complete: observer.complete.bind(observer),
	                                });
	                                return;
	                            }
	                        }
	                        observer.next(result);
	                    },
	                    error: function (networkError) {
	                        retriedResult = errorHandler({
	                            operation: operation,
	                            networkError: networkError,
	                            graphQLErrors: networkError &&
	                                networkError.result &&
	                                networkError.result.errors,
	                            forward: forward,
	                        });
	                        if (retriedResult) {
	                            retriedSub = retriedResult.subscribe({
	                                next: observer.next.bind(observer),
	                                error: observer.error.bind(observer),
	                                complete: observer.complete.bind(observer),
	                            });
	                            return;
	                        }
	                        observer.error(networkError);
	                    },
	                    complete: function () {
	                        if (!retriedResult) {
	                            observer.complete.bind(observer)();
	                        }
	                    },
	                });
	            }
	            catch (e) {
	                errorHandler({ networkError: e, operation: operation, forward: forward });
	                observer.error(e);
	            }
	            return function () {
	                if (sub)
	                    sub.unsubscribe();
	                if (retriedSub)
	                    sub.unsubscribe();
	            };
	        });
	    });
	}
	exports.onError = onError;
	var ErrorLink = (function (_super) {
	    tslib_1.__extends(ErrorLink, _super);
	    function ErrorLink(errorHandler) {
	        var _this = _super.call(this) || this;
	        _this.link = onError(errorHandler);
	        return _this;
	    }
	    ErrorLink.prototype.request = function (operation, forward) {
	        return this.link.request(operation, forward);
	    };
	    return ErrorLink;
	}(apollo_link_1.ApolloLink));
	exports.ErrorLink = ErrorLink;
	//# sourceMappingURL=index.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var offix_cache_1 = __webpack_require__(61);
	function addOptimisticResponse(apolloClient, _a) {
	    var op = _a.op, qid = _a.qid;
	    apolloClient.store.markMutationInit({
	        mutationId: qid,
	        document: op.mutation,
	        variables: op.variables,
	        updateQueries: {},
	        update: op.update,
	        optimisticResponse: op.optimisticResponse
	    });
	    apolloClient.queryManager.broadcastQueries();
	}
	exports.addOptimisticResponse = addOptimisticResponse;
	function removeOptimisticResponse(apolloClient, _a) {
	    var op = _a.op, qid = _a.qid;
	    apolloClient.store.markMutationComplete({
	        mutationId: qid,
	        optimisticResponse: op.optimisticResponse
	    });
	    apolloClient.queryManager.broadcastQueries();
	}
	exports.removeOptimisticResponse = removeOptimisticResponse;
	function restoreOptimisticResponse(apolloClient, mutationCacheUpdates, _a) {
	    var op = _a.op, qid = _a.qid;
	    if (op.context.operationName && mutationCacheUpdates[op.context.operationName]) {
	        op.update = mutationCacheUpdates[op.context.operationName];
	        addOptimisticResponse(apolloClient, { op: op, qid: qid });
	    }
	}
	exports.restoreOptimisticResponse = restoreOptimisticResponse;
	/**
	 * Imagine we do a mutation that creates a new object while offline.
	 * This object is given a temporary client generated ID.
	 * If we do subsequent edits to that object, those edits will also reference the client generated ID.
	 * Once the initial mutation to create the object is successful,
	 * we need to update all references in the queue to the client generated ID
	 * with the actual ID returned from the server.
	 */
	function replaceClientGeneratedIDsInQueue(queue, operation, result) {
	    if (!operation.op) {
	        return;
	    }
	    var op = operation.op;
	    var operationName = op.context.operationName;
	    var optimisticResponse = op.optimisticResponse;
	    var idField = op.context.idField || "id";
	    if (!result || !optimisticResponse || !optimisticResponse[operationName]) {
	        return;
	    }
	    var clientId = optimisticResponse[operationName][idField];
	    if (!clientId) {
	        return;
	    }
	    // Ensure we dealing with string
	    clientId = clientId.toString();
	    if (offix_cache_1.isClientGeneratedId(optimisticResponse[operationName][idField])) {
	        queue.forEach(function (entry) {
	            if (entry.operation.op.variables && entry.operation.op.variables[idField] === clientId) {
	                entry.operation.op.variables[idField] = result.data && result.data[operationName][idField];
	            }
	        });
	    }
	}
	exports.replaceClientGeneratedIDsInQueue = replaceClientGeneratedIDsInQueue;
	//# sourceMappingURL=optimisticResponseHelpers.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var offix_conflicts_client_1 = __webpack_require__(4);
	/**
	 * BaseProcessor takes an outgoing GraphQL operation and it checks if it
	 * is a mutation on an object we already know about in our local cache
	 * If it is, then we need to get the 'base' which is the original object we are trying to mutate
	 *
	 * We first check for a 'local conflict' which happens when the base from the cache is different from
	 * the 'version' the operation is trying to mutate.
	 * this can happen when the mutation is in flight but the cache was updated by subscriptions
	 *
	 * If we have no local conflict, we add the original base to the operation's context,
	 * which can then be used for conflict resolution later on.
	 */
	function getBaseStateFromCache(cache, objectState, mutationOptions) {
	    var context = mutationOptions.context;
	    var idField = context.idField || "id";
	    var id = mutationOptions.variables && mutationOptions.variables[idField];
	    if (!context.conflictBase) {
	        // do nothing
	        var conflictBase = getObjectFromCache(cache, context.returnType, id);
	        if (conflictBase && Object.keys(conflictBase).length !== 0) {
	            if (objectState.hasConflict(mutationOptions.variables, conflictBase)) {
	                // 🙊 Input data is conflicted with the latest server projection
	                throw new offix_conflicts_client_1.LocalConflictError(conflictBase, mutationOptions.variables);
	            }
	            return conflictBase;
	        }
	    }
	}
	exports.getBaseStateFromCache = getBaseStateFromCache;
	function getObjectFromCache(cache, typename, id) {
	    if (cache && cache.data) {
	        var idKey = cache.config.dataIdFromObject({ __typename: typename, id: id });
	        if (cache.optimisticData && cache.optimisticData.parent) {
	            var optimisticData = cache.optimisticData.parent.data;
	            if (idKey && optimisticData[idKey]) {
	                // return copy of original object
	                return Object.assign({}, optimisticData[idKey]);
	            }
	        }
	        var cacheData = cache.data.data;
	        if (idKey && cacheData[idKey]) {
	            // return copy of original object
	            return Object.assign({}, cacheData[idKey]);
	        }
	    }
	    else {
	        console.warn("Client is missing cache implementation. Conflict features will not work properly");
	    }
	    return {};
	}
	//# sourceMappingURL=baseHelpers.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var offix_scheduler_1 = __webpack_require__(45);
	var offix_conflicts_client_1 = __webpack_require__(4);
	var cache_1 = __webpack_require__(91);
	var apollo_1 = __webpack_require__(78);
	/**
	 * Class for managing user and default configuration.
	 * Default config is applied on top of user provided configuration
	 */
	var ApolloOfflineClientConfig = /** @class */ (function () {
	    function ApolloOfflineClientConfig(options) {
	        if (options === void 0) { options = {}; }
	        this.retryOptions = {
	            delay: {
	                initial: 1000,
	                max: Infinity,
	                jitter: true
	            },
	            attempts: {
	                max: 5
	            }
	        };
	        Object.assign(this, options);
	        this.cacheStorage = options.cacheStorage || cache_1.createDefaultCacheStorage();
	        this.offlineStorage = options.offlineStorage || offix_scheduler_1.createDefaultOfflineStorage();
	        this.conflictStrategy = options.conflictStrategy || offix_conflicts_client_1.UseClient;
	        this.conflictProvider = options.conflictProvider || new offix_conflicts_client_1.VersionedState();
	        this.link = apollo_1.createDefaultLink(this);
	    }
	    return ApolloOfflineClientConfig;
	}());
	exports.ApolloOfflineClientConfig = ApolloOfflineClientConfig;
	//# sourceMappingURL=ApolloOfflineClientConfig.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var idb_localstorage_1 = __webpack_require__(55);
	exports.createDefaultCacheStorage = function () {
	    return new idb_localstorage_1.Store("apollo-cache", "cache-store");
	};
	//# sourceMappingURL=cache.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var apollo_link_ws_1 = __webpack_require__(93);
	exports.defaultWebSocketLink = function (options) {
	    var websocketClientOptions = options.websocketClientOptions || {};
	    return new apollo_link_ws_1.WebSocketLink({
	        uri: options.wsUrl,
	        options: {
	            // Params that can be used to send authentication token etc.
	            connectionParams: websocketClientOptions.connectionParams || function connectionParams() {
	                return __awaiter(this, void 0, void 0, function () {
	                    var headers;
	                    return __generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0:
	                                if (!options.authContextProvider) return [3 /*break*/, 2];
	                                return [4 /*yield*/, options.authContextProvider()];
	                            case 1:
	                                headers = (_a.sent()).headers;
	                                return [2 /*return*/, headers];
	                            case 2: return [2 /*return*/];
	                        }
	                    });
	                });
	            },
	            connectionCallback: websocketClientOptions.connectionCallback,
	            timeout: websocketClientOptions.timeout || 10000,
	            // How long client should wait to kill connection
	            inactivityTimeout: 10000,
	            // Large value to support offline state connections
	            reconnectionAttempts: websocketClientOptions.reconnectionAttempts || 500,
	            // Fixed value to support going offline
	            reconnect: true,
	            // Fixed value to support clients with no subscriptions
	            lazy: true
	        }
	    });
	};
	//# sourceMappingURL=WebsocketLink.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	tslib_1.__exportStar(__webpack_require__(94), exports);
	//# sourceMappingURL=index.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = __webpack_require__(11);
	var apollo_link_1 = __webpack_require__(10);
	var subscriptions_transport_ws_1 = __webpack_require__(95);
	var WebSocketLink = (function (_super) {
	    tslib_1.__extends(WebSocketLink, _super);
	    function WebSocketLink(paramsOrClient) {
	        var _this = _super.call(this) || this;
	        if (paramsOrClient instanceof subscriptions_transport_ws_1.SubscriptionClient) {
	            _this.subscriptionClient = paramsOrClient;
	        }
	        else {
	            _this.subscriptionClient = new subscriptions_transport_ws_1.SubscriptionClient(paramsOrClient.uri, paramsOrClient.options, paramsOrClient.webSocketImpl);
	        }
	        return _this;
	    }
	    WebSocketLink.prototype.request = function (operation) {
	        return this.subscriptionClient.request(operation);
	    };
	    return WebSocketLink;
	}(apollo_link_1.ApolloLink));
	exports.WebSocketLink = WebSocketLink;
	//# sourceMappingURL=webSocketLink.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var _global = typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : {});
	var NativeWebSocket = _global.WebSocket || _global.MozWebSocket;
	var Backoff = __webpack_require__(96);
	var eventemitter3_1 = __webpack_require__(97);
	var is_string_1 = __webpack_require__(98);
	var is_object_1 = __webpack_require__(99);
	var printer_1 = __webpack_require__(29);
	var getOperationAST_1 = __webpack_require__(100);
	var symbol_observable_1 = __webpack_require__(42);
	var protocol_1 = __webpack_require__(102);
	var defaults_1 = __webpack_require__(103);
	var message_types_1 = __webpack_require__(104);
	var SubscriptionClient = (function () {
	    function SubscriptionClient(url, options, webSocketImpl, webSocketProtocols) {
	        var _a = (options || {}), _b = _a.connectionCallback, connectionCallback = _b === void 0 ? undefined : _b, _c = _a.connectionParams, connectionParams = _c === void 0 ? {} : _c, _d = _a.timeout, timeout = _d === void 0 ? defaults_1.WS_TIMEOUT : _d, _e = _a.reconnect, reconnect = _e === void 0 ? false : _e, _f = _a.reconnectionAttempts, reconnectionAttempts = _f === void 0 ? Infinity : _f, _g = _a.lazy, lazy = _g === void 0 ? false : _g, _h = _a.inactivityTimeout, inactivityTimeout = _h === void 0 ? 0 : _h;
	        this.wsImpl = webSocketImpl || NativeWebSocket;
	        if (!this.wsImpl) {
	            throw new Error('Unable to find native implementation, or alternative implementation for WebSocket!');
	        }
	        this.wsProtocols = webSocketProtocols || protocol_1.GRAPHQL_WS;
	        this.connectionCallback = connectionCallback;
	        this.url = url;
	        this.operations = {};
	        this.nextOperationId = 0;
	        this.wsTimeout = timeout;
	        this.unsentMessagesQueue = [];
	        this.reconnect = reconnect;
	        this.reconnecting = false;
	        this.reconnectionAttempts = reconnectionAttempts;
	        this.lazy = !!lazy;
	        this.inactivityTimeout = inactivityTimeout;
	        this.closedByUser = false;
	        this.backoff = new Backoff({ jitter: 0.5 });
	        this.eventEmitter = new eventemitter3_1.EventEmitter();
	        this.middlewares = [];
	        this.client = null;
	        this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator();
	        this.connectionParams = this.getConnectionParams(connectionParams);
	        if (!this.lazy) {
	            this.connect();
	        }
	    }
	    Object.defineProperty(SubscriptionClient.prototype, "status", {
	        get: function () {
	            if (this.client === null) {
	                return this.wsImpl.CLOSED;
	            }
	            return this.client.readyState;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SubscriptionClient.prototype.close = function (isForced, closedByUser) {
	        if (isForced === void 0) { isForced = true; }
	        if (closedByUser === void 0) { closedByUser = true; }
	        this.clearInactivityTimeout();
	        if (this.client !== null) {
	            this.closedByUser = closedByUser;
	            if (isForced) {
	                this.clearCheckConnectionInterval();
	                this.clearMaxConnectTimeout();
	                this.clearTryReconnectTimeout();
	                this.unsubscribeAll();
	                this.sendMessage(undefined, message_types_1.default.GQL_CONNECTION_TERMINATE, null);
	            }
	            this.client.close();
	            this.client = null;
	            this.eventEmitter.emit('disconnected');
	            if (!isForced) {
	                this.tryReconnect();
	            }
	        }
	    };
	    SubscriptionClient.prototype.request = function (request) {
	        var _a;
	        var getObserver = this.getObserver.bind(this);
	        var executeOperation = this.executeOperation.bind(this);
	        var unsubscribe = this.unsubscribe.bind(this);
	        var opId;
	        this.clearInactivityTimeout();
	        return _a = {},
	            _a[symbol_observable_1.default] = function () {
	                return this;
	            },
	            _a.subscribe = function (observerOrNext, onError, onComplete) {
	                var observer = getObserver(observerOrNext, onError, onComplete);
	                opId = executeOperation(request, function (error, result) {
	                    if (error === null && result === null) {
	                        if (observer.complete) {
	                            observer.complete();
	                        }
	                    }
	                    else if (error) {
	                        if (observer.error) {
	                            observer.error(error[0]);
	                        }
	                    }
	                    else {
	                        if (observer.next) {
	                            observer.next(result);
	                        }
	                    }
	                });
	                return {
	                    unsubscribe: function () {
	                        if (opId) {
	                            unsubscribe(opId);
	                            opId = null;
	                        }
	                    },
	                };
	            },
	            _a;
	    };
	    SubscriptionClient.prototype.on = function (eventName, callback, context) {
	        var handler = this.eventEmitter.on(eventName, callback, context);
	        return function () {
	            handler.off(eventName, callback, context);
	        };
	    };
	    SubscriptionClient.prototype.onConnected = function (callback, context) {
	        return this.on('connected', callback, context);
	    };
	    SubscriptionClient.prototype.onConnecting = function (callback, context) {
	        return this.on('connecting', callback, context);
	    };
	    SubscriptionClient.prototype.onDisconnected = function (callback, context) {
	        return this.on('disconnected', callback, context);
	    };
	    SubscriptionClient.prototype.onReconnected = function (callback, context) {
	        return this.on('reconnected', callback, context);
	    };
	    SubscriptionClient.prototype.onReconnecting = function (callback, context) {
	        return this.on('reconnecting', callback, context);
	    };
	    SubscriptionClient.prototype.onError = function (callback, context) {
	        return this.on('error', callback, context);
	    };
	    SubscriptionClient.prototype.unsubscribeAll = function () {
	        var _this = this;
	        Object.keys(this.operations).forEach(function (subId) {
	            _this.unsubscribe(subId);
	        });
	    };
	    SubscriptionClient.prototype.applyMiddlewares = function (options) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var queue = function (funcs, scope) {
	                var next = function (error) {
	                    if (error) {
	                        reject(error);
	                    }
	                    else {
	                        if (funcs.length > 0) {
	                            var f = funcs.shift();
	                            if (f) {
	                                f.applyMiddleware.apply(scope, [options, next]);
	                            }
	                        }
	                        else {
	                            resolve(options);
	                        }
	                    }
	                };
	                next();
	            };
	            queue(_this.middlewares.slice(), _this);
	        });
	    };
	    SubscriptionClient.prototype.use = function (middlewares) {
	        var _this = this;
	        middlewares.map(function (middleware) {
	            if (typeof middleware.applyMiddleware === 'function') {
	                _this.middlewares.push(middleware);
	            }
	            else {
	                throw new Error('Middleware must implement the applyMiddleware function.');
	            }
	        });
	        return this;
	    };
	    SubscriptionClient.prototype.getConnectionParams = function (connectionParams) {
	        return function () { return new Promise(function (resolve, reject) {
	            if (typeof connectionParams === 'function') {
	                try {
	                    return resolve(connectionParams.call(null));
	                }
	                catch (error) {
	                    return reject(error);
	                }
	            }
	            resolve(connectionParams);
	        }); };
	    };
	    SubscriptionClient.prototype.executeOperation = function (options, handler) {
	        var _this = this;
	        if (this.client === null) {
	            this.connect();
	        }
	        var opId = this.generateOperationId();
	        this.operations[opId] = { options: options, handler: handler };
	        this.applyMiddlewares(options)
	            .then(function (processedOptions) {
	            _this.checkOperationOptions(processedOptions, handler);
	            if (_this.operations[opId]) {
	                _this.operations[opId] = { options: processedOptions, handler: handler };
	                _this.sendMessage(opId, message_types_1.default.GQL_START, processedOptions);
	            }
	        })
	            .catch(function (error) {
	            _this.unsubscribe(opId);
	            handler(_this.formatErrors(error));
	        });
	        return opId;
	    };
	    SubscriptionClient.prototype.getObserver = function (observerOrNext, error, complete) {
	        if (typeof observerOrNext === 'function') {
	            return {
	                next: function (v) { return observerOrNext(v); },
	                error: function (e) { return error && error(e); },
	                complete: function () { return complete && complete(); },
	            };
	        }
	        return observerOrNext;
	    };
	    SubscriptionClient.prototype.createMaxConnectTimeGenerator = function () {
	        var minValue = 1000;
	        var maxValue = this.wsTimeout;
	        return new Backoff({
	            min: minValue,
	            max: maxValue,
	            factor: 1.2,
	        });
	    };
	    SubscriptionClient.prototype.clearCheckConnectionInterval = function () {
	        if (this.checkConnectionIntervalId) {
	            clearInterval(this.checkConnectionIntervalId);
	            this.checkConnectionIntervalId = null;
	        }
	    };
	    SubscriptionClient.prototype.clearMaxConnectTimeout = function () {
	        if (this.maxConnectTimeoutId) {
	            clearTimeout(this.maxConnectTimeoutId);
	            this.maxConnectTimeoutId = null;
	        }
	    };
	    SubscriptionClient.prototype.clearTryReconnectTimeout = function () {
	        if (this.tryReconnectTimeoutId) {
	            clearTimeout(this.tryReconnectTimeoutId);
	            this.tryReconnectTimeoutId = null;
	        }
	    };
	    SubscriptionClient.prototype.clearInactivityTimeout = function () {
	        if (this.inactivityTimeoutId) {
	            clearTimeout(this.inactivityTimeoutId);
	            this.inactivityTimeoutId = null;
	        }
	    };
	    SubscriptionClient.prototype.setInactivityTimeout = function () {
	        var _this = this;
	        if (this.inactivityTimeout > 0 && Object.keys(this.operations).length === 0) {
	            this.inactivityTimeoutId = setTimeout(function () {
	                if (Object.keys(_this.operations).length === 0) {
	                    _this.close();
	                }
	            }, this.inactivityTimeout);
	        }
	    };
	    SubscriptionClient.prototype.checkOperationOptions = function (options, handler) {
	        var query = options.query, variables = options.variables, operationName = options.operationName;
	        if (!query) {
	            throw new Error('Must provide a query.');
	        }
	        if (!handler) {
	            throw new Error('Must provide an handler.');
	        }
	        if ((!is_string_1.default(query) && !getOperationAST_1.getOperationAST(query, operationName)) ||
	            (operationName && !is_string_1.default(operationName)) ||
	            (variables && !is_object_1.default(variables))) {
	            throw new Error('Incorrect option types. query must be a string or a document,' +
	                '`operationName` must be a string, and `variables` must be an object.');
	        }
	    };
	    SubscriptionClient.prototype.buildMessage = function (id, type, payload) {
	        var payloadToReturn = payload && payload.query ? __assign({}, payload, { query: typeof payload.query === 'string' ? payload.query : printer_1.print(payload.query) }) :
	            payload;
	        return {
	            id: id,
	            type: type,
	            payload: payloadToReturn,
	        };
	    };
	    SubscriptionClient.prototype.formatErrors = function (errors) {
	        if (Array.isArray(errors)) {
	            return errors;
	        }
	        if (errors && errors.errors) {
	            return this.formatErrors(errors.errors);
	        }
	        if (errors && errors.message) {
	            return [errors];
	        }
	        return [{
	                name: 'FormatedError',
	                message: 'Unknown error',
	                originalError: errors,
	            }];
	    };
	    SubscriptionClient.prototype.sendMessage = function (id, type, payload) {
	        this.sendMessageRaw(this.buildMessage(id, type, payload));
	    };
	    SubscriptionClient.prototype.sendMessageRaw = function (message) {
	        switch (this.status) {
	            case this.wsImpl.OPEN:
	                var serializedMessage = JSON.stringify(message);
	                try {
	                    JSON.parse(serializedMessage);
	                }
	                catch (e) {
	                    this.eventEmitter.emit('error', new Error("Message must be JSON-serializable. Got: " + message));
	                }
	                this.client.send(serializedMessage);
	                break;
	            case this.wsImpl.CONNECTING:
	                this.unsentMessagesQueue.push(message);
	                break;
	            default:
	                if (!this.reconnecting) {
	                    this.eventEmitter.emit('error', new Error('A message was not sent because socket is not connected, is closing or ' +
	                        'is already closed. Message was: ' + JSON.stringify(message)));
	                }
	        }
	    };
	    SubscriptionClient.prototype.generateOperationId = function () {
	        return String(++this.nextOperationId);
	    };
	    SubscriptionClient.prototype.tryReconnect = function () {
	        var _this = this;
	        if (!this.reconnect || this.backoff.attempts >= this.reconnectionAttempts) {
	            return;
	        }
	        if (!this.reconnecting) {
	            Object.keys(this.operations).forEach(function (key) {
	                _this.unsentMessagesQueue.push(_this.buildMessage(key, message_types_1.default.GQL_START, _this.operations[key].options));
	            });
	            this.reconnecting = true;
	        }
	        this.clearTryReconnectTimeout();
	        var delay = this.backoff.duration();
	        this.tryReconnectTimeoutId = setTimeout(function () {
	            _this.connect();
	        }, delay);
	    };
	    SubscriptionClient.prototype.flushUnsentMessagesQueue = function () {
	        var _this = this;
	        this.unsentMessagesQueue.forEach(function (message) {
	            _this.sendMessageRaw(message);
	        });
	        this.unsentMessagesQueue = [];
	    };
	    SubscriptionClient.prototype.checkConnection = function () {
	        if (this.wasKeepAliveReceived) {
	            this.wasKeepAliveReceived = false;
	            return;
	        }
	        if (!this.reconnecting) {
	            this.close(false, true);
	        }
	    };
	    SubscriptionClient.prototype.checkMaxConnectTimeout = function () {
	        var _this = this;
	        this.clearMaxConnectTimeout();
	        this.maxConnectTimeoutId = setTimeout(function () {
	            if (_this.status !== _this.wsImpl.OPEN) {
	                _this.reconnecting = true;
	                _this.close(false, true);
	            }
	        }, this.maxConnectTimeGenerator.duration());
	    };
	    SubscriptionClient.prototype.connect = function () {
	        var _this = this;
	        this.client = new this.wsImpl(this.url, this.wsProtocols);
	        this.checkMaxConnectTimeout();
	        this.client.onopen = function () { return __awaiter(_this, void 0, void 0, function () {
	            var connectionParams, error_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!(this.status === this.wsImpl.OPEN)) return [3, 4];
	                        this.clearMaxConnectTimeout();
	                        this.closedByUser = false;
	                        this.eventEmitter.emit(this.reconnecting ? 'reconnecting' : 'connecting');
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        return [4, this.connectionParams()];
	                    case 2:
	                        connectionParams = _a.sent();
	                        this.sendMessage(undefined, message_types_1.default.GQL_CONNECTION_INIT, connectionParams);
	                        this.flushUnsentMessagesQueue();
	                        return [3, 4];
	                    case 3:
	                        error_1 = _a.sent();
	                        this.sendMessage(undefined, message_types_1.default.GQL_CONNECTION_ERROR, error_1);
	                        this.flushUnsentMessagesQueue();
	                        return [3, 4];
	                    case 4: return [2];
	                }
	            });
	        }); };
	        this.client.onclose = function () {
	            if (!_this.closedByUser) {
	                _this.close(false, false);
	            }
	        };
	        this.client.onerror = function (err) {
	            _this.eventEmitter.emit('error', err);
	        };
	        this.client.onmessage = function (_a) {
	            var data = _a.data;
	            _this.processReceivedData(data);
	        };
	    };
	    SubscriptionClient.prototype.processReceivedData = function (receivedData) {
	        var parsedMessage;
	        var opId;
	        try {
	            parsedMessage = JSON.parse(receivedData);
	            opId = parsedMessage.id;
	        }
	        catch (e) {
	            throw new Error("Message must be JSON-parseable. Got: " + receivedData);
	        }
	        if ([message_types_1.default.GQL_DATA,
	            message_types_1.default.GQL_COMPLETE,
	            message_types_1.default.GQL_ERROR,
	        ].indexOf(parsedMessage.type) !== -1 && !this.operations[opId]) {
	            this.unsubscribe(opId);
	            return;
	        }
	        switch (parsedMessage.type) {
	            case message_types_1.default.GQL_CONNECTION_ERROR:
	                if (this.connectionCallback) {
	                    this.connectionCallback(parsedMessage.payload);
	                }
	                break;
	            case message_types_1.default.GQL_CONNECTION_ACK:
	                this.eventEmitter.emit(this.reconnecting ? 'reconnected' : 'connected');
	                this.reconnecting = false;
	                this.backoff.reset();
	                this.maxConnectTimeGenerator.reset();
	                if (this.connectionCallback) {
	                    this.connectionCallback();
	                }
	                break;
	            case message_types_1.default.GQL_COMPLETE:
	                this.operations[opId].handler(null, null);
	                delete this.operations[opId];
	                break;
	            case message_types_1.default.GQL_ERROR:
	                this.operations[opId].handler(this.formatErrors(parsedMessage.payload), null);
	                delete this.operations[opId];
	                break;
	            case message_types_1.default.GQL_DATA:
	                var parsedPayload = !parsedMessage.payload.errors ?
	                    parsedMessage.payload : __assign({}, parsedMessage.payload, { errors: this.formatErrors(parsedMessage.payload.errors) });
	                this.operations[opId].handler(null, parsedPayload);
	                break;
	            case message_types_1.default.GQL_CONNECTION_KEEP_ALIVE:
	                var firstKA = typeof this.wasKeepAliveReceived === 'undefined';
	                this.wasKeepAliveReceived = true;
	                if (firstKA) {
	                    this.checkConnection();
	                }
	                if (this.checkConnectionIntervalId) {
	                    clearInterval(this.checkConnectionIntervalId);
	                    this.checkConnection();
	                }
	                this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
	                break;
	            default:
	                throw new Error('Invalid message type!');
	        }
	    };
	    SubscriptionClient.prototype.unsubscribe = function (opId) {
	        if (this.operations[opId]) {
	            delete this.operations[opId];
	            this.setInactivityTimeout();
	            this.sendMessage(opId, message_types_1.default.GQL_STOP, undefined);
	        }
	    };
	    return SubscriptionClient;
	}());
	exports.SubscriptionClient = SubscriptionClient;
	//# sourceMappingURL=client.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function isString(value) {
	    return typeof value === 'string';
	}
	exports.default = isString;
	//# sourceMappingURL=is-string.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function isObject(value) {
	    return ((value !== null) && (typeof value === 'object'));
	}
	exports.default = isObject;
	//# sourceMappingURL=is-object.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOperationAST = getOperationAST;

	var _kinds = __webpack_require__(101);

	/**
	 * Returns an operation AST given a document AST and optionally an operation
	 * name. If a name is not provided, an operation is only returned if only one is
	 * provided in the document.
	 */
	function getOperationAST(documentAST, operationName) {
	  var operation = null;

	  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
	    var definition = _documentAST$definiti2[_i2];

	    if (definition.kind === _kinds.Kind.OPERATION_DEFINITION) {
	      if (!operationName) {
	        // If no operation name was provided, only return an Operation if there
	        // is one defined in the document. Upon encountering the second, return
	        // null.
	        if (operation) {
	          return null;
	        }

	        operation = definition;
	      } else if (definition.name && definition.name.value === operationName) {
	        return definition;
	      }
	    }
	  }

	  return operation;
	}


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Kind = void 0;

	/**
	 * The set of allowed kind values for AST nodes.
	 */
	var Kind = Object.freeze({
	  // Name
	  NAME: 'Name',
	  // Document
	  DOCUMENT: 'Document',
	  OPERATION_DEFINITION: 'OperationDefinition',
	  VARIABLE_DEFINITION: 'VariableDefinition',
	  SELECTION_SET: 'SelectionSet',
	  FIELD: 'Field',
	  ARGUMENT: 'Argument',
	  // Fragments
	  FRAGMENT_SPREAD: 'FragmentSpread',
	  INLINE_FRAGMENT: 'InlineFragment',
	  FRAGMENT_DEFINITION: 'FragmentDefinition',
	  // Values
	  VARIABLE: 'Variable',
	  INT: 'IntValue',
	  FLOAT: 'FloatValue',
	  STRING: 'StringValue',
	  BOOLEAN: 'BooleanValue',
	  NULL: 'NullValue',
	  ENUM: 'EnumValue',
	  LIST: 'ListValue',
	  OBJECT: 'ObjectValue',
	  OBJECT_FIELD: 'ObjectField',
	  // Directives
	  DIRECTIVE: 'Directive',
	  // Types
	  NAMED_TYPE: 'NamedType',
	  LIST_TYPE: 'ListType',
	  NON_NULL_TYPE: 'NonNullType',
	  // Type System Definitions
	  SCHEMA_DEFINITION: 'SchemaDefinition',
	  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
	  // Type Definitions
	  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
	  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
	  FIELD_DEFINITION: 'FieldDefinition',
	  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
	  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
	  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
	  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
	  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
	  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
	  // Directive Definitions
	  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
	  // Type System Extensions
	  SCHEMA_EXTENSION: 'SchemaExtension',
	  // Type Extensions
	  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
	  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
	  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
	  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
	  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
	  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
	});
	/**
	 * The enum type representing the possible kind values of AST nodes.
	 */

	exports.Kind = Kind;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var GRAPHQL_WS = 'graphql-ws';
	exports.GRAPHQL_WS = GRAPHQL_WS;
	var GRAPHQL_SUBSCRIPTIONS = 'graphql-subscriptions';
	exports.GRAPHQL_SUBSCRIPTIONS = GRAPHQL_SUBSCRIPTIONS;
	//# sourceMappingURL=protocol.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var WS_TIMEOUT = 30000;
	exports.WS_TIMEOUT = WS_TIMEOUT;
	//# sourceMappingURL=defaults.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var MessageTypes = (function () {
	    function MessageTypes() {
	        throw new Error('Static Class');
	    }
	    MessageTypes.GQL_CONNECTION_INIT = 'connection_init';
	    MessageTypes.GQL_CONNECTION_ACK = 'connection_ack';
	    MessageTypes.GQL_CONNECTION_ERROR = 'connection_error';
	    MessageTypes.GQL_CONNECTION_KEEP_ALIVE = 'ka';
	    MessageTypes.GQL_CONNECTION_TERMINATE = 'connection_terminate';
	    MessageTypes.GQL_START = 'start';
	    MessageTypes.GQL_DATA = 'data';
	    MessageTypes.GQL_ERROR = 'error';
	    MessageTypes.GQL_COMPLETE = 'complete';
	    MessageTypes.GQL_STOP = 'stop';
	    MessageTypes.SUBSCRIPTION_START = 'subscription_start';
	    MessageTypes.SUBSCRIPTION_DATA = 'subscription_data';
	    MessageTypes.SUBSCRIPTION_SUCCESS = 'subscription_success';
	    MessageTypes.SUBSCRIPTION_FAIL = 'subscription_fail';
	    MessageTypes.SUBSCRIPTION_END = 'subscription_end';
	    MessageTypes.INIT = 'init';
	    MessageTypes.INIT_SUCCESS = 'init_success';
	    MessageTypes.INIT_FAIL = 'init_fail';
	    MessageTypes.KEEP_ALIVE = 'keepalive';
	    return MessageTypes;
	}());
	exports.default = MessageTypes;
	//# sourceMappingURL=message-types.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports.__esModule = true;
	exports.assertIdValue = assertIdValue;
	exports.defaultDataIdFromObject = defaultDataIdFromObject;
	exports.defaultNormalizedCacheFactory = defaultNormalizedCacheFactory$1;
	exports.enhanceErrorWithDocument = enhanceErrorWithDocument;
	exports.WriteError = exports.StoreWriter = exports.StoreReader = exports.ObjectCache = exports.IntrospectionFragmentMatcher = exports.InMemoryCache = exports.HeuristicFragmentMatcher = void 0;

	var _tslib = __webpack_require__(11);

	var _apolloCache = __webpack_require__(106);

	var _apolloUtilities = __webpack_require__(20);

	var _optimism = __webpack_require__(107);

	var _tsInvariant = __webpack_require__(17);

	var haveWarned = false;

	function shouldWarn() {
	  var answer = !haveWarned;

	  if (!(0, _apolloUtilities.isTest)()) {
	    haveWarned = true;
	  }

	  return answer;
	}

	var HeuristicFragmentMatcher = function () {
	  function HeuristicFragmentMatcher() {}

	  HeuristicFragmentMatcher.prototype.ensureReady = function () {
	    return Promise.resolve();
	  };

	  HeuristicFragmentMatcher.prototype.canBypassInit = function () {
	    return true;
	  };

	  HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
	    var obj = context.store.get(idValue.id);
	    var isRootQuery = idValue.id === 'ROOT_QUERY';

	    if (!obj) {
	      return isRootQuery;
	    }

	    var _a = obj.__typename,
	        __typename = _a === void 0 ? isRootQuery && 'Query' : _a;

	    if (!__typename) {
	      if (shouldWarn()) {
	        process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
	        process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('Could not find __typename on Fragment ', typeCondition, obj);
	        process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " + "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
	      }

	      return 'heuristic';
	    }

	    if (__typename === typeCondition) {
	      return true;
	    }

	    if (shouldWarn()) {
	      process.env.NODE_ENV === "production" || _tsInvariant.invariant.error('You are using the simple (heuristic) fragment matcher, but your ' + 'queries contain union or interface types. Apollo Client will not be ' + 'able to accurately map fragments. To make this error go away, use ' + 'the `IntrospectionFragmentMatcher` as described in the docs: ' + 'https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher');
	    }

	    return 'heuristic';
	  };

	  return HeuristicFragmentMatcher;
	}();

	exports.HeuristicFragmentMatcher = HeuristicFragmentMatcher;

	var IntrospectionFragmentMatcher = function () {
	  function IntrospectionFragmentMatcher(options) {
	    if (options && options.introspectionQueryResultData) {
	      this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
	      this.isReady = true;
	    } else {
	      this.isReady = false;
	    }

	    this.match = this.match.bind(this);
	  }

	  IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(this.isReady, 6) : (0, _tsInvariant.invariant)(this.isReady, 'FragmentMatcher.match() was called before FragmentMatcher.init()');
	    var obj = context.store.get(idValue.id);
	    var isRootQuery = idValue.id === 'ROOT_QUERY';

	    if (!obj) {
	      return isRootQuery;
	    }

	    var _a = obj.__typename,
	        __typename = _a === void 0 ? isRootQuery && 'Query' : _a;

	    process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(__typename, 7) : (0, _tsInvariant.invariant)(__typename, "Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));

	    if (__typename === typeCondition) {
	      return true;
	    }

	    var implementingTypes = this.possibleTypesMap[typeCondition];

	    if (__typename && implementingTypes && implementingTypes.indexOf(__typename) > -1) {
	      return true;
	    }

	    return false;
	  };

	  IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
	    var typeMap = {};

	    introspectionResultData.__schema.types.forEach(function (type) {
	      if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
	        typeMap[type.name] = type.possibleTypes.map(function (implementingType) {
	          return implementingType.name;
	        });
	      }
	    });

	    return typeMap;
	  };

	  return IntrospectionFragmentMatcher;
	}();

	exports.IntrospectionFragmentMatcher = IntrospectionFragmentMatcher;
	var hasOwn = Object.prototype.hasOwnProperty;

	var DepTrackingCache = function () {
	  function DepTrackingCache(data) {
	    var _this = this;

	    if (data === void 0) {
	      data = Object.create(null);
	    }

	    this.data = data;
	    this.depend = (0, _optimism.wrap)(function (dataId) {
	      return _this.data[dataId];
	    }, {
	      disposable: true,
	      makeCacheKey: function (dataId) {
	        return dataId;
	      }
	    });
	  }

	  DepTrackingCache.prototype.toObject = function () {
	    return this.data;
	  };

	  DepTrackingCache.prototype.get = function (dataId) {
	    this.depend(dataId);
	    return this.data[dataId];
	  };

	  DepTrackingCache.prototype.set = function (dataId, value) {
	    var oldValue = this.data[dataId];

	    if (value !== oldValue) {
	      this.data[dataId] = value;
	      this.depend.dirty(dataId);
	    }
	  };

	  DepTrackingCache.prototype.delete = function (dataId) {
	    if (hasOwn.call(this.data, dataId)) {
	      delete this.data[dataId];
	      this.depend.dirty(dataId);
	    }
	  };

	  DepTrackingCache.prototype.clear = function () {
	    this.replace(null);
	  };

	  DepTrackingCache.prototype.replace = function (newData) {
	    var _this = this;

	    if (newData) {
	      Object.keys(newData).forEach(function (dataId) {
	        _this.set(dataId, newData[dataId]);
	      });
	      Object.keys(this.data).forEach(function (dataId) {
	        if (!hasOwn.call(newData, dataId)) {
	          _this.delete(dataId);
	        }
	      });
	    } else {
	      Object.keys(this.data).forEach(function (dataId) {
	        _this.delete(dataId);
	      });
	    }
	  };

	  return DepTrackingCache;
	}();

	function defaultNormalizedCacheFactory(seed) {
	  return new DepTrackingCache(seed);
	}

	var StoreReader = function () {
	  function StoreReader(_a) {
	    var _this = this;

	    var _b = _a === void 0 ? {} : _a,
	        _c = _b.cacheKeyRoot,
	        cacheKeyRoot = _c === void 0 ? new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap) : _c,
	        _d = _b.freezeResults,
	        freezeResults = _d === void 0 ? false : _d;

	    var _e = this,
	        executeStoreQuery = _e.executeStoreQuery,
	        executeSelectionSet = _e.executeSelectionSet,
	        executeSubSelectedArray = _e.executeSubSelectedArray;

	    this.freezeResults = freezeResults;
	    this.executeStoreQuery = (0, _optimism.wrap)(function (options) {
	      return executeStoreQuery.call(_this, options);
	    }, {
	      makeCacheKey: function (_a) {
	        var query = _a.query,
	            rootValue = _a.rootValue,
	            contextValue = _a.contextValue,
	            variableValues = _a.variableValues,
	            fragmentMatcher = _a.fragmentMatcher;

	        if (contextValue.store instanceof DepTrackingCache) {
	          return cacheKeyRoot.lookup(contextValue.store, query, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
	        }
	      }
	    });
	    this.executeSelectionSet = (0, _optimism.wrap)(function (options) {
	      return executeSelectionSet.call(_this, options);
	    }, {
	      makeCacheKey: function (_a) {
	        var selectionSet = _a.selectionSet,
	            rootValue = _a.rootValue,
	            execContext = _a.execContext;

	        if (execContext.contextValue.store instanceof DepTrackingCache) {
	          return cacheKeyRoot.lookup(execContext.contextValue.store, selectionSet, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
	        }
	      }
	    });
	    this.executeSubSelectedArray = (0, _optimism.wrap)(function (options) {
	      return executeSubSelectedArray.call(_this, options);
	    }, {
	      makeCacheKey: function (_a) {
	        var field = _a.field,
	            array = _a.array,
	            execContext = _a.execContext;

	        if (execContext.contextValue.store instanceof DepTrackingCache) {
	          return cacheKeyRoot.lookup(execContext.contextValue.store, field, array, JSON.stringify(execContext.variableValues));
	        }
	      }
	    });
	  }

	  StoreReader.prototype.readQueryFromStore = function (options) {
	    return this.diffQueryAgainstStore((0, _tslib.__assign)({}, options, {
	      returnPartialData: false
	    })).result;
	  };

	  StoreReader.prototype.diffQueryAgainstStore = function (_a) {
	    var store = _a.store,
	        query = _a.query,
	        variables = _a.variables,
	        previousResult = _a.previousResult,
	        _b = _a.returnPartialData,
	        returnPartialData = _b === void 0 ? true : _b,
	        _c = _a.rootId,
	        rootId = _c === void 0 ? 'ROOT_QUERY' : _c,
	        fragmentMatcherFunction = _a.fragmentMatcherFunction,
	        config = _a.config;
	    var queryDefinition = (0, _apolloUtilities.getQueryDefinition)(query);
	    variables = (0, _apolloUtilities.assign)({}, (0, _apolloUtilities.getDefaultValues)(queryDefinition), variables);
	    var context = {
	      store: store,
	      dataIdFromObject: config && config.dataIdFromObject,
	      cacheRedirects: config && config.cacheRedirects || {}
	    };
	    var execResult = this.executeStoreQuery({
	      query: query,
	      rootValue: {
	        type: 'id',
	        id: rootId,
	        generated: true,
	        typename: 'Query'
	      },
	      contextValue: context,
	      variableValues: variables,
	      fragmentMatcher: fragmentMatcherFunction
	    });
	    var hasMissingFields = execResult.missing && execResult.missing.length > 0;

	    if (hasMissingFields && !returnPartialData) {
	      execResult.missing.forEach(function (info) {
	        if (info.tolerable) return;
	        throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(8) : new _tsInvariant.InvariantError("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
	      });
	    }

	    if (previousResult) {
	      if ((0, _apolloUtilities.isEqual)(previousResult, execResult.result)) {
	        execResult.result = previousResult;
	      }
	    }

	    return {
	      result: execResult.result,
	      complete: !hasMissingFields
	    };
	  };

	  StoreReader.prototype.executeStoreQuery = function (_a) {
	    var query = _a.query,
	        rootValue = _a.rootValue,
	        contextValue = _a.contextValue,
	        variableValues = _a.variableValues,
	        _b = _a.fragmentMatcher,
	        fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
	    var mainDefinition = (0, _apolloUtilities.getMainDefinition)(query);
	    var fragments = (0, _apolloUtilities.getFragmentDefinitions)(query);
	    var fragmentMap = (0, _apolloUtilities.createFragmentMap)(fragments);
	    var execContext = {
	      query: query,
	      fragmentMap: fragmentMap,
	      contextValue: contextValue,
	      variableValues: variableValues,
	      fragmentMatcher: fragmentMatcher
	    };
	    return this.executeSelectionSet({
	      selectionSet: mainDefinition.selectionSet,
	      rootValue: rootValue,
	      execContext: execContext
	    });
	  };

	  StoreReader.prototype.executeSelectionSet = function (_a) {
	    var _this = this;

	    var selectionSet = _a.selectionSet,
	        rootValue = _a.rootValue,
	        execContext = _a.execContext;
	    var fragmentMap = execContext.fragmentMap,
	        contextValue = execContext.contextValue,
	        variables = execContext.variableValues;
	    var finalResult = {
	      result: null
	    };
	    var objectsToMerge = [];
	    var object = contextValue.store.get(rootValue.id);
	    var typename = object && object.__typename || rootValue.id === 'ROOT_QUERY' && 'Query' || void 0;

	    function handleMissing(result) {
	      var _a;

	      if (result.missing) {
	        finalResult.missing = finalResult.missing || [];

	        (_a = finalResult.missing).push.apply(_a, result.missing);
	      }

	      return result.result;
	    }

	    selectionSet.selections.forEach(function (selection) {
	      var _a;

	      if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
	        return;
	      }

	      if ((0, _apolloUtilities.isField)(selection)) {
	        var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));

	        if (typeof fieldResult !== 'undefined') {
	          objectsToMerge.push((_a = {}, _a[(0, _apolloUtilities.resultKeyNameFromField)(selection)] = fieldResult, _a));
	        }
	      } else {
	        var fragment = void 0;

	        if ((0, _apolloUtilities.isInlineFragment)(selection)) {
	          fragment = selection;
	        } else {
	          fragment = fragmentMap[selection.name.value];

	          if (!fragment) {
	            throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(9) : new _tsInvariant.InvariantError("No fragment named " + selection.name.value);
	          }
	        }

	        var typeCondition = fragment.typeCondition && fragment.typeCondition.name.value;
	        var match = !typeCondition || execContext.fragmentMatcher(rootValue, typeCondition, contextValue);

	        if (match) {
	          var fragmentExecResult = _this.executeSelectionSet({
	            selectionSet: fragment.selectionSet,
	            rootValue: rootValue,
	            execContext: execContext
	          });

	          if (match === 'heuristic' && fragmentExecResult.missing) {
	            fragmentExecResult = (0, _tslib.__assign)({}, fragmentExecResult, {
	              missing: fragmentExecResult.missing.map(function (info) {
	                return (0, _tslib.__assign)({}, info, {
	                  tolerable: true
	                });
	              })
	            });
	          }

	          objectsToMerge.push(handleMissing(fragmentExecResult));
	        }
	      }
	    });
	    finalResult.result = (0, _apolloUtilities.mergeDeepArray)(objectsToMerge);

	    if (this.freezeResults && process.env.NODE_ENV !== 'production') {
	      Object.freeze(finalResult.result);
	    }

	    return finalResult;
	  };

	  StoreReader.prototype.executeField = function (object, typename, field, execContext) {
	    var variables = execContext.variableValues,
	        contextValue = execContext.contextValue;
	    var fieldName = field.name.value;
	    var args = (0, _apolloUtilities.argumentsObjectFromField)(field, variables);
	    var info = {
	      resultKey: (0, _apolloUtilities.resultKeyNameFromField)(field),
	      directives: (0, _apolloUtilities.getDirectiveInfoFromField)(field, variables)
	    };
	    var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);

	    if (Array.isArray(readStoreResult.result)) {
	      return this.combineExecResults(readStoreResult, this.executeSubSelectedArray({
	        field: field,
	        array: readStoreResult.result,
	        execContext: execContext
	      }));
	    }

	    if (!field.selectionSet) {
	      assertSelectionSetForIdValue(field, readStoreResult.result);

	      if (this.freezeResults && process.env.NODE_ENV !== 'production') {
	        (0, _apolloUtilities.maybeDeepFreeze)(readStoreResult);
	      }

	      return readStoreResult;
	    }

	    if (readStoreResult.result == null) {
	      return readStoreResult;
	    }

	    return this.combineExecResults(readStoreResult, this.executeSelectionSet({
	      selectionSet: field.selectionSet,
	      rootValue: readStoreResult.result,
	      execContext: execContext
	    }));
	  };

	  StoreReader.prototype.combineExecResults = function () {
	    var execResults = [];

	    for (var _i = 0; _i < arguments.length; _i++) {
	      execResults[_i] = arguments[_i];
	    }

	    var missing;
	    execResults.forEach(function (execResult) {
	      if (execResult.missing) {
	        missing = missing || [];
	        missing.push.apply(missing, execResult.missing);
	      }
	    });
	    return {
	      result: execResults.pop().result,
	      missing: missing
	    };
	  };

	  StoreReader.prototype.executeSubSelectedArray = function (_a) {
	    var _this = this;

	    var field = _a.field,
	        array = _a.array,
	        execContext = _a.execContext;
	    var missing;

	    function handleMissing(childResult) {
	      if (childResult.missing) {
	        missing = missing || [];
	        missing.push.apply(missing, childResult.missing);
	      }

	      return childResult.result;
	    }

	    array = array.map(function (item) {
	      if (item === null) {
	        return null;
	      }

	      if (Array.isArray(item)) {
	        return handleMissing(_this.executeSubSelectedArray({
	          field: field,
	          array: item,
	          execContext: execContext
	        }));
	      }

	      if (field.selectionSet) {
	        return handleMissing(_this.executeSelectionSet({
	          selectionSet: field.selectionSet,
	          rootValue: item,
	          execContext: execContext
	        }));
	      }

	      assertSelectionSetForIdValue(field, item);
	      return item;
	    });

	    if (this.freezeResults && process.env.NODE_ENV !== 'production') {
	      Object.freeze(array);
	    }

	    return {
	      result: array,
	      missing: missing
	    };
	  };

	  return StoreReader;
	}();

	exports.StoreReader = StoreReader;

	function assertSelectionSetForIdValue(field, value) {
	  if (!field.selectionSet && (0, _apolloUtilities.isIdValue)(value)) {
	    throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(10) : new _tsInvariant.InvariantError("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
	  }
	}

	function defaultFragmentMatcher() {
	  return true;
	}

	function assertIdValue(idValue) {
	  process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)((0, _apolloUtilities.isIdValue)(idValue), 11) : (0, _tsInvariant.invariant)((0, _apolloUtilities.isIdValue)(idValue), "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
	}

	function readStoreResolver(object, typename, fieldName, args, context, _a) {
	  var resultKey = _a.resultKey,
	      directives = _a.directives;
	  var storeKeyName = fieldName;

	  if (args || directives) {
	    storeKeyName = (0, _apolloUtilities.getStoreKeyName)(storeKeyName, args, directives);
	  }

	  var fieldValue = void 0;

	  if (object) {
	    fieldValue = object[storeKeyName];

	    if (typeof fieldValue === 'undefined' && context.cacheRedirects && typeof typename === 'string') {
	      var type = context.cacheRedirects[typename];

	      if (type) {
	        var resolver = type[fieldName];

	        if (resolver) {
	          fieldValue = resolver(object, args, {
	            getCacheKey: function (storeObj) {
	              var id = context.dataIdFromObject(storeObj);
	              return id && (0, _apolloUtilities.toIdValue)({
	                id: id,
	                typename: storeObj.__typename
	              });
	            }
	          });
	        }
	      }
	    }
	  }

	  if (typeof fieldValue === 'undefined') {
	    return {
	      result: fieldValue,
	      missing: [{
	        object: object,
	        fieldName: storeKeyName,
	        tolerable: false
	      }]
	    };
	  }

	  if ((0, _apolloUtilities.isJsonValue)(fieldValue)) {
	    fieldValue = fieldValue.json;
	  }

	  return {
	    result: fieldValue
	  };
	}

	var ObjectCache = function () {
	  function ObjectCache(data) {
	    if (data === void 0) {
	      data = Object.create(null);
	    }

	    this.data = data;
	  }

	  ObjectCache.prototype.toObject = function () {
	    return this.data;
	  };

	  ObjectCache.prototype.get = function (dataId) {
	    return this.data[dataId];
	  };

	  ObjectCache.prototype.set = function (dataId, value) {
	    this.data[dataId] = value;
	  };

	  ObjectCache.prototype.delete = function (dataId) {
	    this.data[dataId] = void 0;
	  };

	  ObjectCache.prototype.clear = function () {
	    this.data = Object.create(null);
	  };

	  ObjectCache.prototype.replace = function (newData) {
	    this.data = newData || Object.create(null);
	  };

	  return ObjectCache;
	}();

	exports.ObjectCache = ObjectCache;

	function defaultNormalizedCacheFactory$1(seed) {
	  return new ObjectCache(seed);
	}

	var WriteError = function (_super) {
	  (0, _tslib.__extends)(WriteError, _super);

	  function WriteError() {
	    var _this = _super !== null && _super.apply(this, arguments) || this;

	    _this.type = 'WriteError';
	    return _this;
	  }

	  return WriteError;
	}(Error);

	exports.WriteError = WriteError;

	function enhanceErrorWithDocument(error, document) {
	  var enhancedError = new WriteError("Error writing result to store for query:\n " + JSON.stringify(document));
	  enhancedError.message += '\n' + error.message;
	  enhancedError.stack = error.stack;
	  return enhancedError;
	}

	var StoreWriter = function () {
	  function StoreWriter() {}

	  StoreWriter.prototype.writeQueryToStore = function (_a) {
	    var query = _a.query,
	        result = _a.result,
	        _b = _a.store,
	        store = _b === void 0 ? defaultNormalizedCacheFactory() : _b,
	        variables = _a.variables,
	        dataIdFromObject = _a.dataIdFromObject,
	        fragmentMatcherFunction = _a.fragmentMatcherFunction;
	    return this.writeResultToStore({
	      dataId: 'ROOT_QUERY',
	      result: result,
	      document: query,
	      store: store,
	      variables: variables,
	      dataIdFromObject: dataIdFromObject,
	      fragmentMatcherFunction: fragmentMatcherFunction
	    });
	  };

	  StoreWriter.prototype.writeResultToStore = function (_a) {
	    var dataId = _a.dataId,
	        result = _a.result,
	        document = _a.document,
	        _b = _a.store,
	        store = _b === void 0 ? defaultNormalizedCacheFactory() : _b,
	        variables = _a.variables,
	        dataIdFromObject = _a.dataIdFromObject,
	        fragmentMatcherFunction = _a.fragmentMatcherFunction;
	    var operationDefinition = (0, _apolloUtilities.getOperationDefinition)(document);

	    try {
	      return this.writeSelectionSetToStore({
	        result: result,
	        dataId: dataId,
	        selectionSet: operationDefinition.selectionSet,
	        context: {
	          store: store,
	          processedData: {},
	          variables: (0, _apolloUtilities.assign)({}, (0, _apolloUtilities.getDefaultValues)(operationDefinition), variables),
	          dataIdFromObject: dataIdFromObject,
	          fragmentMap: (0, _apolloUtilities.createFragmentMap)((0, _apolloUtilities.getFragmentDefinitions)(document)),
	          fragmentMatcherFunction: fragmentMatcherFunction
	        }
	      });
	    } catch (e) {
	      throw enhanceErrorWithDocument(e, document);
	    }
	  };

	  StoreWriter.prototype.writeSelectionSetToStore = function (_a) {
	    var _this = this;

	    var result = _a.result,
	        dataId = _a.dataId,
	        selectionSet = _a.selectionSet,
	        context = _a.context;
	    var variables = context.variables,
	        store = context.store,
	        fragmentMap = context.fragmentMap;
	    selectionSet.selections.forEach(function (selection) {
	      var _a;

	      if (!(0, _apolloUtilities.shouldInclude)(selection, variables)) {
	        return;
	      }

	      if ((0, _apolloUtilities.isField)(selection)) {
	        var resultFieldKey = (0, _apolloUtilities.resultKeyNameFromField)(selection);
	        var value = result[resultFieldKey];

	        if (typeof value !== 'undefined') {
	          _this.writeFieldToStore({
	            dataId: dataId,
	            value: value,
	            field: selection,
	            context: context
	          });
	        } else {
	          var isDefered = false;
	          var isClient = false;

	          if (selection.directives && selection.directives.length) {
	            isDefered = selection.directives.some(function (directive) {
	              return directive.name && directive.name.value === 'defer';
	            });
	            isClient = selection.directives.some(function (directive) {
	              return directive.name && directive.name.value === 'client';
	            });
	          }

	          if (!isDefered && !isClient && context.fragmentMatcherFunction) {
	            process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
	          }
	        }
	      } else {
	        var fragment = void 0;

	        if ((0, _apolloUtilities.isInlineFragment)(selection)) {
	          fragment = selection;
	        } else {
	          fragment = (fragmentMap || {})[selection.name.value];
	          process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(fragment, 2) : (0, _tsInvariant.invariant)(fragment, "No fragment named " + selection.name.value + ".");
	        }

	        var matches = true;

	        if (context.fragmentMatcherFunction && fragment.typeCondition) {
	          var id = dataId || 'self';
	          var idValue = (0, _apolloUtilities.toIdValue)({
	            id: id,
	            typename: undefined
	          });
	          var fakeContext = {
	            store: new ObjectCache((_a = {}, _a[id] = result, _a)),
	            cacheRedirects: {}
	          };
	          var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);

	          if (!(0, _apolloUtilities.isProduction)() && match === 'heuristic') {
	            process.env.NODE_ENV === "production" || _tsInvariant.invariant.error('WARNING: heuristic fragment matching going on!');
	          }

	          matches = !!match;
	        }

	        if (matches) {
	          _this.writeSelectionSetToStore({
	            result: result,
	            selectionSet: fragment.selectionSet,
	            dataId: dataId,
	            context: context
	          });
	        }
	      }
	    });
	    return store;
	  };

	  StoreWriter.prototype.writeFieldToStore = function (_a) {
	    var _b;

	    var field = _a.field,
	        value = _a.value,
	        dataId = _a.dataId,
	        context = _a.context;
	    var variables = context.variables,
	        dataIdFromObject = context.dataIdFromObject,
	        store = context.store;
	    var storeValue;
	    var storeObject;
	    var storeFieldName = (0, _apolloUtilities.storeKeyNameFromField)(field, variables);

	    if (!field.selectionSet || value === null) {
	      storeValue = value != null && typeof value === 'object' ? {
	        type: 'json',
	        json: value
	      } : value;
	    } else if (Array.isArray(value)) {
	      var generatedId = dataId + "." + storeFieldName;
	      storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
	    } else {
	      var valueDataId = dataId + "." + storeFieldName;
	      var generated = true;

	      if (!isGeneratedId(valueDataId)) {
	        valueDataId = '$' + valueDataId;
	      }

	      if (dataIdFromObject) {
	        var semanticId = dataIdFromObject(value);
	        process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!semanticId || !isGeneratedId(semanticId), 3) : (0, _tsInvariant.invariant)(!semanticId || !isGeneratedId(semanticId), 'IDs returned by dataIdFromObject cannot begin with the "$" character.');

	        if (semanticId || typeof semanticId === 'number' && semanticId === 0) {
	          valueDataId = semanticId;
	          generated = false;
	        }
	      }

	      if (!isDataProcessed(valueDataId, field, context.processedData)) {
	        this.writeSelectionSetToStore({
	          dataId: valueDataId,
	          result: value,
	          selectionSet: field.selectionSet,
	          context: context
	        });
	      }

	      var typename = value.__typename;
	      storeValue = (0, _apolloUtilities.toIdValue)({
	        id: valueDataId,
	        typename: typename
	      }, generated);
	      storeObject = store.get(dataId);
	      var escapedId = storeObject && storeObject[storeFieldName];

	      if (escapedId !== storeValue && (0, _apolloUtilities.isIdValue)(escapedId)) {
	        var hadTypename = escapedId.typename !== undefined;
	        var hasTypename = typename !== undefined;
	        var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
	        process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!generated || escapedId.generated || typenameChanged, 4) : (0, _tsInvariant.invariant)(!generated || escapedId.generated || typenameChanged, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + escapedId.id + " for this object. The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
	        process.env.NODE_ENV === "production" ? (0, _tsInvariant.invariant)(!hadTypename || hasTypename, 5) : (0, _tsInvariant.invariant)(!hadTypename || hasTypename, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet that was trying to be written is:\n" + JSON.stringify(field));

	        if (escapedId.generated) {
	          if (typenameChanged) {
	            if (!generated) {
	              store.delete(escapedId.id);
	            }
	          } else {
	            mergeWithGenerated(escapedId.id, storeValue.id, store);
	          }
	        }
	      }
	    }

	    storeObject = store.get(dataId);

	    if (!storeObject || !(0, _apolloUtilities.isEqual)(storeValue, storeObject[storeFieldName])) {
	      store.set(dataId, (0, _tslib.__assign)({}, storeObject, (_b = {}, _b[storeFieldName] = storeValue, _b)));
	    }
	  };

	  StoreWriter.prototype.processArrayValue = function (value, generatedId, selectionSet, context) {
	    var _this = this;

	    return value.map(function (item, index) {
	      if (item === null) {
	        return null;
	      }

	      var itemDataId = generatedId + "." + index;

	      if (Array.isArray(item)) {
	        return _this.processArrayValue(item, itemDataId, selectionSet, context);
	      }

	      var generated = true;

	      if (context.dataIdFromObject) {
	        var semanticId = context.dataIdFromObject(item);

	        if (semanticId) {
	          itemDataId = semanticId;
	          generated = false;
	        }
	      }

	      if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
	        _this.writeSelectionSetToStore({
	          dataId: itemDataId,
	          result: item,
	          selectionSet: selectionSet,
	          context: context
	        });
	      }

	      return (0, _apolloUtilities.toIdValue)({
	        id: itemDataId,
	        typename: item.__typename
	      }, generated);
	    });
	  };

	  return StoreWriter;
	}();

	exports.StoreWriter = StoreWriter;

	function isGeneratedId(id) {
	  return id[0] === '$';
	}

	function mergeWithGenerated(generatedKey, realKey, cache) {
	  if (generatedKey === realKey) {
	    return false;
	  }

	  var generated = cache.get(generatedKey);
	  var real = cache.get(realKey);
	  var madeChanges = false;
	  Object.keys(generated).forEach(function (key) {
	    var value = generated[key];
	    var realValue = real[key];

	    if ((0, _apolloUtilities.isIdValue)(value) && isGeneratedId(value.id) && (0, _apolloUtilities.isIdValue)(realValue) && !(0, _apolloUtilities.isEqual)(value, realValue) && mergeWithGenerated(value.id, realValue.id, cache)) {
	      madeChanges = true;
	    }
	  });
	  cache.delete(generatedKey);
	  var newRealValue = (0, _tslib.__assign)({}, generated, real);

	  if ((0, _apolloUtilities.isEqual)(newRealValue, real)) {
	    return madeChanges;
	  }

	  cache.set(realKey, newRealValue);
	  return true;
	}

	function isDataProcessed(dataId, field, processedData) {
	  if (!processedData) {
	    return false;
	  }

	  if (processedData[dataId]) {
	    if (processedData[dataId].indexOf(field) >= 0) {
	      return true;
	    } else {
	      processedData[dataId].push(field);
	    }
	  } else {
	    processedData[dataId] = [field];
	  }

	  return false;
	}

	var defaultConfig = {
	  fragmentMatcher: new HeuristicFragmentMatcher(),
	  dataIdFromObject: defaultDataIdFromObject,
	  addTypename: true,
	  resultCaching: true,
	  freezeResults: false
	};

	function defaultDataIdFromObject(result) {
	  if (result.__typename) {
	    if (result.id !== undefined) {
	      return result.__typename + ":" + result.id;
	    }

	    if (result._id !== undefined) {
	      return result.__typename + ":" + result._id;
	    }
	  }

	  return null;
	}

	var hasOwn$1 = Object.prototype.hasOwnProperty;

	var OptimisticCacheLayer = function (_super) {
	  (0, _tslib.__extends)(OptimisticCacheLayer, _super);

	  function OptimisticCacheLayer(optimisticId, parent, transaction) {
	    var _this = _super.call(this, Object.create(null)) || this;

	    _this.optimisticId = optimisticId;
	    _this.parent = parent;
	    _this.transaction = transaction;
	    return _this;
	  }

	  OptimisticCacheLayer.prototype.toObject = function () {
	    return (0, _tslib.__assign)({}, this.parent.toObject(), this.data);
	  };

	  OptimisticCacheLayer.prototype.get = function (dataId) {
	    return hasOwn$1.call(this.data, dataId) ? this.data[dataId] : this.parent.get(dataId);
	  };

	  return OptimisticCacheLayer;
	}(ObjectCache);

	var InMemoryCache = function (_super) {
	  (0, _tslib.__extends)(InMemoryCache, _super);

	  function InMemoryCache(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    var _this = _super.call(this) || this;

	    _this.watches = new Set();
	    _this.typenameDocumentCache = new Map();
	    _this.cacheKeyRoot = new _optimism.KeyTrie(_apolloUtilities.canUseWeakMap);
	    _this.silenceBroadcast = false;
	    _this.config = (0, _tslib.__assign)({}, defaultConfig, config);

	    if (_this.config.customResolvers) {
	      process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
	      _this.config.cacheRedirects = _this.config.customResolvers;
	    }

	    if (_this.config.cacheResolvers) {
	      process.env.NODE_ENV === "production" || _tsInvariant.invariant.warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
	      _this.config.cacheRedirects = _this.config.cacheResolvers;
	    }

	    _this.addTypename = !!_this.config.addTypename;
	    _this.data = _this.config.resultCaching ? new DepTrackingCache() : new ObjectCache();
	    _this.optimisticData = _this.data;
	    _this.storeWriter = new StoreWriter();
	    _this.storeReader = new StoreReader({
	      cacheKeyRoot: _this.cacheKeyRoot,
	      freezeResults: config.freezeResults
	    });
	    var cache = _this;
	    var maybeBroadcastWatch = cache.maybeBroadcastWatch;
	    _this.maybeBroadcastWatch = (0, _optimism.wrap)(function (c) {
	      return maybeBroadcastWatch.call(_this, c);
	    }, {
	      makeCacheKey: function (c) {
	        if (c.optimistic) {
	          return;
	        }

	        if (c.previousResult) {
	          return;
	        }

	        if (cache.data instanceof DepTrackingCache) {
	          return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
	        }
	      }
	    });
	    return _this;
	  }

	  InMemoryCache.prototype.restore = function (data) {
	    if (data) this.data.replace(data);
	    return this;
	  };

	  InMemoryCache.prototype.extract = function (optimistic) {
	    if (optimistic === void 0) {
	      optimistic = false;
	    }

	    return (optimistic ? this.optimisticData : this.data).toObject();
	  };

	  InMemoryCache.prototype.read = function (options) {
	    if (typeof options.rootId === 'string' && typeof this.data.get(options.rootId) === 'undefined') {
	      return null;
	    }

	    var fragmentMatcher = this.config.fragmentMatcher;
	    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
	    return this.storeReader.readQueryFromStore({
	      store: options.optimistic ? this.optimisticData : this.data,
	      query: this.transformDocument(options.query),
	      variables: options.variables,
	      rootId: options.rootId,
	      fragmentMatcherFunction: fragmentMatcherFunction,
	      previousResult: options.previousResult,
	      config: this.config
	    }) || null;
	  };

	  InMemoryCache.prototype.write = function (write) {
	    var fragmentMatcher = this.config.fragmentMatcher;
	    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
	    this.storeWriter.writeResultToStore({
	      dataId: write.dataId,
	      result: write.result,
	      variables: write.variables,
	      document: this.transformDocument(write.query),
	      store: this.data,
	      dataIdFromObject: this.config.dataIdFromObject,
	      fragmentMatcherFunction: fragmentMatcherFunction
	    });
	    this.broadcastWatches();
	  };

	  InMemoryCache.prototype.diff = function (query) {
	    var fragmentMatcher = this.config.fragmentMatcher;
	    var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
	    return this.storeReader.diffQueryAgainstStore({
	      store: query.optimistic ? this.optimisticData : this.data,
	      query: this.transformDocument(query.query),
	      variables: query.variables,
	      returnPartialData: query.returnPartialData,
	      previousResult: query.previousResult,
	      fragmentMatcherFunction: fragmentMatcherFunction,
	      config: this.config
	    });
	  };

	  InMemoryCache.prototype.watch = function (watch) {
	    var _this = this;

	    this.watches.add(watch);
	    return function () {
	      _this.watches.delete(watch);
	    };
	  };

	  InMemoryCache.prototype.evict = function (query) {
	    throw process.env.NODE_ENV === "production" ? new _tsInvariant.InvariantError(1) : new _tsInvariant.InvariantError("eviction is not implemented on InMemory Cache");
	  };

	  InMemoryCache.prototype.reset = function () {
	    this.data.clear();
	    this.broadcastWatches();
	    return Promise.resolve();
	  };

	  InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
	    var toReapply = [];
	    var removedCount = 0;
	    var layer = this.optimisticData;

	    while (layer instanceof OptimisticCacheLayer) {
	      if (layer.optimisticId === idToRemove) {
	        ++removedCount;
	      } else {
	        toReapply.push(layer);
	      }

	      layer = layer.parent;
	    }

	    if (removedCount > 0) {
	      this.optimisticData = layer;

	      while (toReapply.length > 0) {
	        var layer_1 = toReapply.pop();
	        this.performTransaction(layer_1.transaction, layer_1.optimisticId);
	      }

	      this.broadcastWatches();
	    }
	  };

	  InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
	    var _a = this,
	        data = _a.data,
	        silenceBroadcast = _a.silenceBroadcast;

	    this.silenceBroadcast = true;

	    if (typeof optimisticId === 'string') {
	      this.data = this.optimisticData = new OptimisticCacheLayer(optimisticId, this.optimisticData, transaction);
	    }

	    try {
	      transaction(this);
	    } finally {
	      this.silenceBroadcast = silenceBroadcast;
	      this.data = data;
	    }

	    this.broadcastWatches();
	  };

	  InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
	    return this.performTransaction(transaction, id);
	  };

	  InMemoryCache.prototype.transformDocument = function (document) {
	    if (this.addTypename) {
	      var result = this.typenameDocumentCache.get(document);

	      if (!result) {
	        result = (0, _apolloUtilities.addTypenameToDocument)(document);
	        this.typenameDocumentCache.set(document, result);
	        this.typenameDocumentCache.set(result, result);
	      }

	      return result;
	    }

	    return document;
	  };

	  InMemoryCache.prototype.broadcastWatches = function () {
	    var _this = this;

	    if (!this.silenceBroadcast) {
	      this.watches.forEach(function (c) {
	        return _this.maybeBroadcastWatch(c);
	      });
	    }
	  };

	  InMemoryCache.prototype.maybeBroadcastWatch = function (c) {
	    c.callback(this.diff({
	      query: c.query,
	      variables: c.variables,
	      previousResult: c.previousResult && c.previousResult(),
	      optimistic: c.optimistic
	    }));
	  };

	  return InMemoryCache;
	}(_apolloCache.ApolloCache); 


	exports.InMemoryCache = InMemoryCache;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Cache = exports.ApolloCache = void 0;

	var _apolloUtilities = __webpack_require__(20);

	function queryFromPojo(obj) {
	  var op = {
	    kind: 'OperationDefinition',
	    operation: 'query',
	    name: {
	      kind: 'Name',
	      value: 'GeneratedClientQuery'
	    },
	    selectionSet: selectionSetFromObj(obj)
	  };
	  var out = {
	    kind: 'Document',
	    definitions: [op]
	  };
	  return out;
	}

	function fragmentFromPojo(obj, typename) {
	  var frag = {
	    kind: 'FragmentDefinition',
	    typeCondition: {
	      kind: 'NamedType',
	      name: {
	        kind: 'Name',
	        value: typename || '__FakeType'
	      }
	    },
	    name: {
	      kind: 'Name',
	      value: 'GeneratedClientQuery'
	    },
	    selectionSet: selectionSetFromObj(obj)
	  };
	  var out = {
	    kind: 'Document',
	    definitions: [frag]
	  };
	  return out;
	}

	function selectionSetFromObj(obj) {
	  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'string' || typeof obj === 'undefined' || obj === null) {
	    return null;
	  }

	  if (Array.isArray(obj)) {
	    return selectionSetFromObj(obj[0]);
	  }

	  var selections = [];
	  Object.keys(obj).forEach(function (key) {
	    var nestedSelSet = selectionSetFromObj(obj[key]);
	    var field = {
	      kind: 'Field',
	      name: {
	        kind: 'Name',
	        value: key
	      },
	      selectionSet: nestedSelSet || undefined
	    };
	    selections.push(field);
	  });
	  var selectionSet = {
	    kind: 'SelectionSet',
	    selections: selections
	  };
	  return selectionSet;
	}

	var justTypenameQuery = {
	  kind: 'Document',
	  definitions: [{
	    kind: 'OperationDefinition',
	    operation: 'query',
	    name: null,
	    variableDefinitions: null,
	    directives: [],
	    selectionSet: {
	      kind: 'SelectionSet',
	      selections: [{
	        kind: 'Field',
	        alias: null,
	        name: {
	          kind: 'Name',
	          value: '__typename'
	        },
	        arguments: [],
	        directives: [],
	        selectionSet: null
	      }]
	    }
	  }]
	};

	var ApolloCache = function () {
	  function ApolloCache() {}

	  ApolloCache.prototype.transformDocument = function (document) {
	    return document;
	  };

	  ApolloCache.prototype.transformForLink = function (document) {
	    return document;
	  };

	  ApolloCache.prototype.readQuery = function (options, optimistic) {
	    if (optimistic === void 0) {
	      optimistic = false;
	    }

	    return this.read({
	      query: options.query,
	      variables: options.variables,
	      optimistic: optimistic
	    });
	  };

	  ApolloCache.prototype.readFragment = function (options, optimistic) {
	    if (optimistic === void 0) {
	      optimistic = false;
	    }

	    return this.read({
	      query: (0, _apolloUtilities.getFragmentQueryDocument)(options.fragment, options.fragmentName),
	      variables: options.variables,
	      rootId: options.id,
	      optimistic: optimistic
	    });
	  };

	  ApolloCache.prototype.writeQuery = function (options) {
	    this.write({
	      dataId: 'ROOT_QUERY',
	      result: options.data,
	      query: options.query,
	      variables: options.variables
	    });
	  };

	  ApolloCache.prototype.writeFragment = function (options) {
	    this.write({
	      dataId: options.id,
	      result: options.data,
	      variables: options.variables,
	      query: (0, _apolloUtilities.getFragmentQueryDocument)(options.fragment, options.fragmentName)
	    });
	  };

	  ApolloCache.prototype.writeData = function (_a) {
	    var id = _a.id,
	        data = _a.data;

	    if (typeof id !== 'undefined') {
	      var typenameResult = null;

	      try {
	        typenameResult = this.read({
	          rootId: id,
	          optimistic: false,
	          query: justTypenameQuery
	        });
	      } catch (e) {}

	      var __typename = typenameResult && typenameResult.__typename || '__ClientData';

	      var dataToWrite = Object.assign({
	        __typename: __typename
	      }, data);
	      this.writeFragment({
	        id: id,
	        fragment: fragmentFromPojo(dataToWrite, __typename),
	        data: dataToWrite
	      });
	    } else {
	      this.writeQuery({
	        query: queryFromPojo(data),
	        data: data
	      });
	    }
	  };

	  return ApolloCache;
	}();

	exports.ApolloCache = ApolloCache;
	var Cache;
	exports.Cache = Cache;

	(function (Cache) {})(Cache || (exports.Cache = Cache = {}));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	var context = __webpack_require__(108);

	function defaultDispose() { }
	var Cache = /** @class */ (function () {
	    function Cache(max, dispose) {
	        if (max === void 0) { max = Infinity; }
	        if (dispose === void 0) { dispose = defaultDispose; }
	        this.max = max;
	        this.dispose = dispose;
	        this.map = new Map();
	        this.newest = null;
	        this.oldest = null;
	    }
	    Cache.prototype.has = function (key) {
	        return this.map.has(key);
	    };
	    Cache.prototype.get = function (key) {
	        var entry = this.getEntry(key);
	        return entry && entry.value;
	    };
	    Cache.prototype.getEntry = function (key) {
	        var entry = this.map.get(key);
	        if (entry && entry !== this.newest) {
	            var older = entry.older, newer = entry.newer;
	            if (newer) {
	                newer.older = older;
	            }
	            if (older) {
	                older.newer = newer;
	            }
	            entry.older = this.newest;
	            entry.older.newer = entry;
	            entry.newer = null;
	            this.newest = entry;
	            if (entry === this.oldest) {
	                this.oldest = newer;
	            }
	        }
	        return entry;
	    };
	    Cache.prototype.set = function (key, value) {
	        var entry = this.getEntry(key);
	        if (entry) {
	            return entry.value = value;
	        }
	        entry = {
	            key: key,
	            value: value,
	            newer: null,
	            older: this.newest
	        };
	        if (this.newest) {
	            this.newest.newer = entry;
	        }
	        this.newest = entry;
	        this.oldest = this.oldest || entry;
	        this.map.set(key, entry);
	        return entry.value;
	    };
	    Cache.prototype.clean = function () {
	        while (this.oldest && this.map.size > this.max) {
	            this.delete(this.oldest.key);
	        }
	    };
	    Cache.prototype.delete = function (key) {
	        var entry = this.map.get(key);
	        if (entry) {
	            if (entry === this.newest) {
	                this.newest = entry.older;
	            }
	            if (entry === this.oldest) {
	                this.oldest = entry.newer;
	            }
	            if (entry.newer) {
	                entry.newer.older = entry.older;
	            }
	            if (entry.older) {
	                entry.older.newer = entry.newer;
	            }
	            this.map.delete(key);
	            this.dispose(entry.value, key);
	            return true;
	        }
	        return false;
	    };
	    return Cache;
	}());

	var parentEntrySlot = new context.Slot();

	var reusableEmptyArray = [];
	var emptySetPool = [];
	var POOL_TARGET_SIZE = 100;
	// Since this package might be used browsers, we should avoid using the
	// Node built-in assert module.
	function assert(condition, optionalMessage) {
	    if (!condition) {
	        throw new Error(optionalMessage || "assertion failure");
	    }
	}
	function valueIs(a, b) {
	    var len = a.length;
	    return (
	    // Unknown values are not equal to each other.
	    len > 0 &&
	        // Both values must be ordinary (or both exceptional) to be equal.
	        len === b.length &&
	        // The underlying value or exception must be the same.
	        a[len - 1] === b[len - 1]);
	}
	function valueGet(value) {
	    switch (value.length) {
	        case 0: throw new Error("unknown value");
	        case 1: return value[0];
	        case 2: throw value[1];
	    }
	}
	function valueCopy(value) {
	    return value.slice(0);
	}
	var Entry = /** @class */ (function () {
	    function Entry(fn, args) {
	        this.fn = fn;
	        this.args = args;
	        this.parents = new Set();
	        this.childValues = new Map();
	        // When this Entry has children that are dirty, this property becomes
	        // a Set containing other Entry objects, borrowed from emptySetPool.
	        // When the set becomes empty, it gets recycled back to emptySetPool.
	        this.dirtyChildren = null;
	        this.dirty = true;
	        this.recomputing = false;
	        this.value = [];
	        ++Entry.count;
	    }
	    // This is the most important method of the Entry API, because it
	    // determines whether the cached this.value can be returned immediately,
	    // or must be recomputed. The overall performance of the caching system
	    // depends on the truth of the following observations: (1) this.dirty is
	    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
	    // (3) valueGet(this.value) is usually returned without recomputation.
	    Entry.prototype.recompute = function () {
	        assert(!this.recomputing, "already recomputing");
	        if (!rememberParent(this) && maybeReportOrphan(this)) {
	            // The recipient of the entry.reportOrphan callback decided to dispose
	            // of this orphan entry by calling entry.dispose(), so we don't need to
	            // (and should not) proceed with the recomputation.
	            return void 0;
	        }
	        return mightBeDirty(this)
	            ? reallyRecompute(this)
	            : valueGet(this.value);
	    };
	    Entry.prototype.setDirty = function () {
	        if (this.dirty)
	            return;
	        this.dirty = true;
	        this.value.length = 0;
	        reportDirty(this);
	        // We can go ahead and unsubscribe here, since any further dirty
	        // notifications we receive will be redundant, and unsubscribing may
	        // free up some resources, e.g. file watchers.
	        maybeUnsubscribe(this);
	    };
	    Entry.prototype.dispose = function () {
	        var _this = this;
	        forgetChildren(this).forEach(maybeReportOrphan);
	        maybeUnsubscribe(this);
	        // Because this entry has been kicked out of the cache (in index.js),
	        // we've lost the ability to find out if/when this entry becomes dirty,
	        // whether that happens through a subscription, because of a direct call
	        // to entry.setDirty(), or because one of its children becomes dirty.
	        // Because of this loss of future information, we have to assume the
	        // worst (that this entry might have become dirty very soon), so we must
	        // immediately mark this entry's parents as dirty. Normally we could
	        // just call entry.setDirty() rather than calling parent.setDirty() for
	        // each parent, but that would leave this entry in parent.childValues
	        // and parent.dirtyChildren, which would prevent the child from being
	        // truly forgotten.
	        this.parents.forEach(function (parent) {
	            parent.setDirty();
	            forgetChild(parent, _this);
	        });
	    };
	    Entry.count = 0;
	    return Entry;
	}());
	function rememberParent(child) {
	    var parent = parentEntrySlot.getValue();
	    if (parent) {
	        child.parents.add(parent);
	        if (!parent.childValues.has(child)) {
	            parent.childValues.set(child, []);
	        }
	        if (mightBeDirty(child)) {
	            reportDirtyChild(parent, child);
	        }
	        else {
	            reportCleanChild(parent, child);
	        }
	        return parent;
	    }
	}
	function reallyRecompute(entry) {
	    // Since this recomputation is likely to re-remember some of this
	    // entry's children, we forget our children here but do not call
	    // maybeReportOrphan until after the recomputation finishes.
	    var originalChildren = forgetChildren(entry);
	    // Set entry as the parent entry while calling recomputeNewValue(entry).
	    parentEntrySlot.withValue(entry, recomputeNewValue, [entry]);
	    if (maybeSubscribe(entry)) {
	        // If we successfully recomputed entry.value and did not fail to
	        // (re)subscribe, then this Entry is no longer explicitly dirty.
	        setClean(entry);
	    }
	    // Now that we've had a chance to re-remember any children that were
	    // involved in the recomputation, we can safely report any orphan
	    // children that remain.
	    originalChildren.forEach(maybeReportOrphan);
	    return valueGet(entry.value);
	}
	function recomputeNewValue(entry) {
	    entry.recomputing = true;
	    // Set entry.value as unknown.
	    entry.value.length = 0;
	    try {
	        // If entry.fn succeeds, entry.value will become a normal Value.
	        entry.value[0] = entry.fn.apply(null, entry.args);
	    }
	    catch (e) {
	        // If entry.fn throws, entry.value will become exceptional.
	        entry.value[1] = e;
	    }
	    // Either way, this line is always reached.
	    entry.recomputing = false;
	}
	function mightBeDirty(entry) {
	    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
	}
	function setClean(entry) {
	    entry.dirty = false;
	    if (mightBeDirty(entry)) {
	        // This Entry may still have dirty children, in which case we can't
	        // let our parents know we're clean just yet.
	        return;
	    }
	    reportClean(entry);
	}
	function reportDirty(child) {
	    child.parents.forEach(function (parent) { return reportDirtyChild(parent, child); });
	}
	function reportClean(child) {
	    child.parents.forEach(function (parent) { return reportCleanChild(parent, child); });
	}
	// Let a parent Entry know that one of its children may be dirty.
	function reportDirtyChild(parent, child) {
	    // Must have called rememberParent(child) before calling
	    // reportDirtyChild(parent, child).
	    assert(parent.childValues.has(child));
	    assert(mightBeDirty(child));
	    if (!parent.dirtyChildren) {
	        parent.dirtyChildren = emptySetPool.pop() || new Set;
	    }
	    else if (parent.dirtyChildren.has(child)) {
	        // If we already know this child is dirty, then we must have already
	        // informed our own parents that we are dirty, so we can terminate
	        // the recursion early.
	        return;
	    }
	    parent.dirtyChildren.add(child);
	    reportDirty(parent);
	}
	// Let a parent Entry know that one of its children is no longer dirty.
	function reportCleanChild(parent, child) {
	    // Must have called rememberChild(child) before calling
	    // reportCleanChild(parent, child).
	    assert(parent.childValues.has(child));
	    assert(!mightBeDirty(child));
	    var childValue = parent.childValues.get(child);
	    if (childValue.length === 0) {
	        parent.childValues.set(child, valueCopy(child.value));
	    }
	    else if (!valueIs(childValue, child.value)) {
	        parent.setDirty();
	    }
	    removeDirtyChild(parent, child);
	    if (mightBeDirty(parent)) {
	        return;
	    }
	    reportClean(parent);
	}
	function removeDirtyChild(parent, child) {
	    var dc = parent.dirtyChildren;
	    if (dc) {
	        dc.delete(child);
	        if (dc.size === 0) {
	            if (emptySetPool.length < POOL_TARGET_SIZE) {
	                emptySetPool.push(dc);
	            }
	            parent.dirtyChildren = null;
	        }
	    }
	}
	// If the given entry has a reportOrphan method, and no remaining parents,
	// call entry.reportOrphan and return true iff it returns true. The
	// reportOrphan function should return true to indicate entry.dispose()
	// has been called, and the entry has been removed from any other caches
	// (see index.js for the only current example).
	function maybeReportOrphan(entry) {
	    return entry.parents.size === 0 &&
	        typeof entry.reportOrphan === "function" &&
	        entry.reportOrphan() === true;
	}
	// Removes all children from this entry and returns an array of the
	// removed children.
	function forgetChildren(parent) {
	    var children = reusableEmptyArray;
	    if (parent.childValues.size > 0) {
	        children = [];
	        parent.childValues.forEach(function (_value, child) {
	            forgetChild(parent, child);
	            children.push(child);
	        });
	    }
	    // After we forget all our children, this.dirtyChildren must be empty
	    // and therefore must have been reset to null.
	    assert(parent.dirtyChildren === null);
	    return children;
	}
	function forgetChild(parent, child) {
	    child.parents.delete(parent);
	    parent.childValues.delete(child);
	    removeDirtyChild(parent, child);
	}
	function maybeSubscribe(entry) {
	    if (typeof entry.subscribe === "function") {
	        try {
	            maybeUnsubscribe(entry); // Prevent double subscriptions.
	            entry.unsubscribe = entry.subscribe.apply(null, entry.args);
	        }
	        catch (e) {
	            // If this Entry has a subscribe function and it threw an exception
	            // (or an unsubscribe function it previously returned now throws),
	            // return false to indicate that we were not able to subscribe (or
	            // unsubscribe), and this Entry should remain dirty.
	            entry.setDirty();
	            return false;
	        }
	    }
	    // Returning true indicates either that there was no entry.subscribe
	    // function or that it succeeded.
	    return true;
	}
	function maybeUnsubscribe(entry) {
	    var unsubscribe = entry.unsubscribe;
	    if (typeof unsubscribe === "function") {
	        entry.unsubscribe = void 0;
	        unsubscribe();
	    }
	}

	// A trie data structure that holds object keys weakly, yet can also hold
	// non-object keys, unlike the native `WeakMap`.
	var KeyTrie = /** @class */ (function () {
	    function KeyTrie(weakness) {
	        this.weakness = weakness;
	    }
	    KeyTrie.prototype.lookup = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i] = arguments[_i];
	        }
	        return this.lookupArray(array);
	    };
	    KeyTrie.prototype.lookupArray = function (array) {
	        var node = this;
	        array.forEach(function (key) { return node = node.getChildTrie(key); });
	        return node.data || (node.data = Object.create(null));
	    };
	    KeyTrie.prototype.getChildTrie = function (key) {
	        var map = this.weakness && isObjRef(key)
	            ? this.weak || (this.weak = new WeakMap())
	            : this.strong || (this.strong = new Map());
	        var child = map.get(key);
	        if (!child)
	            map.set(key, child = new KeyTrie(this.weakness));
	        return child;
	    };
	    return KeyTrie;
	}());
	function isObjRef(value) {
	    switch (typeof value) {
	        case "object":
	            if (value === null)
	                break;
	        // Fall through to return true...
	        case "function":
	            return true;
	    }
	    return false;
	}

	// The defaultMakeCacheKey function is remarkably powerful, because it gives
	// a unique object for any shallow-identical list of arguments. If you need
	// to implement a custom makeCacheKey function, you may find it helpful to
	// delegate the final work to defaultMakeCacheKey, which is why we export it
	// here. However, you may want to avoid defaultMakeCacheKey if your runtime
	// does not support WeakMap, or you have the ability to return a string key.
	// In those cases, just write your own custom makeCacheKey functions.
	var keyTrie = new KeyTrie(typeof WeakMap === "function");
	function defaultMakeCacheKey() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    return keyTrie.lookupArray(args);
	}
	var caches = new Set();
	function wrap(originalFunction, options) {
	    if (options === void 0) { options = Object.create(null); }
	    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
	    var disposable = !!options.disposable;
	    var makeCacheKey = options.makeCacheKey || defaultMakeCacheKey;
	    function optimistic() {
	        if (disposable && !parentEntrySlot.hasValue()) {
	            // If there's no current parent computation, and this wrapped
	            // function is disposable (meaning we don't care about entry.value,
	            // just dependency tracking), then we can short-cut everything else
	            // in this function, because entry.recompute() is going to recycle
	            // the entry object without recomputing anything, anyway.
	            return void 0;
	        }
	        var key = makeCacheKey.apply(null, arguments);
	        if (key === void 0) {
	            return originalFunction.apply(null, arguments);
	        }
	        var args = Array.prototype.slice.call(arguments);
	        var entry = cache.get(key);
	        if (entry) {
	            entry.args = args;
	        }
	        else {
	            entry = new Entry(originalFunction, args);
	            cache.set(key, entry);
	            entry.subscribe = options.subscribe;
	            if (disposable) {
	                entry.reportOrphan = function () { return cache.delete(key); };
	            }
	        }
	        var value = entry.recompute();
	        // Move this entry to the front of the least-recently used queue,
	        // since we just finished computing its value.
	        cache.set(key, entry);
	        caches.add(cache);
	        // Clean up any excess entries in the cache, but only if there is no
	        // active parent entry, meaning we're not in the middle of a larger
	        // computation that might be flummoxed by the cleaning.
	        if (!parentEntrySlot.hasValue()) {
	            caches.forEach(function (cache) { return cache.clean(); });
	            caches.clear();
	        }
	        // If options.disposable is truthy, the caller of wrap is telling us
	        // they don't care about the result of entry.recompute(), so we should
	        // avoid returning the value, so it won't be accidentally used.
	        return disposable ? void 0 : value;
	    }
	    optimistic.dirty = function () {
	        var key = makeCacheKey.apply(null, arguments);
	        var child = key !== void 0 && cache.get(key);
	        if (child) {
	            child.setDirty();
	        }
	    };
	    return optimistic;
	}

	Object.defineProperty(exports, 'asyncFromGen', {
	  enumerable: true,
	  get: function () {
	    return context.asyncFromGen;
	  }
	});
	Object.defineProperty(exports, 'bindContext', {
	  enumerable: true,
	  get: function () {
	    return context.bind;
	  }
	});
	Object.defineProperty(exports, 'noContext', {
	  enumerable: true,
	  get: function () {
	    return context.noContext;
	  }
	});
	Object.defineProperty(exports, 'setTimeout', {
	  enumerable: true,
	  get: function () {
	    return context.setTimeout;
	  }
	});
	exports.KeyTrie = KeyTrie;
	exports.defaultMakeCacheKey = defaultMakeCacheKey;
	exports.wrap = wrap;
	//# sourceMappingURL=bundle.cjs.js.map


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// This currentContext variable will only be used if the makeSlotClass
	// function is called, which happens only if this is the first copy of the
	// @wry/context package to be imported.
	var currentContext = null;
	// This unique internal object is used to denote the absence of a value
	// for a given Slot, and is never exposed to outside code.
	var MISSING_VALUE = {};
	var idCounter = 1;
	// Although we can't do anything about the cost of duplicated code from
	// accidentally bundling multiple copies of the @wry/context package, we can
	// avoid creating the Slot class more than once using makeSlotClass.
	var makeSlotClass = function () { return /** @class */ (function () {
	    function Slot() {
	        // If you have a Slot object, you can find out its slot.id, but you cannot
	        // guess the slot.id of a Slot you don't have access to, thanks to the
	        // randomized suffix.
	        this.id = [
	            "slot",
	            idCounter++,
	            Date.now(),
	            Math.random().toString(36).slice(2),
	        ].join(":");
	    }
	    Slot.prototype.hasValue = function () {
	        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
	            // We use the Slot object iself as a key to its value, which means the
	            // value cannot be obtained without a reference to the Slot object.
	            if (this.id in context_1.slots) {
	                var value = context_1.slots[this.id];
	                if (value === MISSING_VALUE)
	                    break;
	                if (context_1 !== currentContext) {
	                    // Cache the value in currentContext.slots so the next lookup will
	                    // be faster. This caching is safe because the tree of contexts and
	                    // the values of the slots are logically immutable.
	                    currentContext.slots[this.id] = value;
	                }
	                return true;
	            }
	        }
	        if (currentContext) {
	            // If a value was not found for this Slot, it's never going to be found
	            // no matter how many times we look it up, so we might as well cache
	            // the absence of the value, too.
	            currentContext.slots[this.id] = MISSING_VALUE;
	        }
	        return false;
	    };
	    Slot.prototype.getValue = function () {
	        if (this.hasValue()) {
	            return currentContext.slots[this.id];
	        }
	    };
	    Slot.prototype.withValue = function (value, callback, 
	    // Given the prevalence of arrow functions, specifying arguments is likely
	    // to be much more common than specifying `this`, hence this ordering:
	    args, thisArg) {
	        var _a;
	        var slots = (_a = {
	                __proto__: null
	            },
	            _a[this.id] = value,
	            _a);
	        var parent = currentContext;
	        currentContext = { parent: parent, slots: slots };
	        try {
	            // Function.prototype.apply allows the arguments array argument to be
	            // omitted or undefined, so args! is fine here.
	            return callback.apply(thisArg, args);
	        }
	        finally {
	            currentContext = parent;
	        }
	    };
	    // Capture the current context and wrap a callback function so that it
	    // reestablishes the captured context when called.
	    Slot.bind = function (callback) {
	        var context = currentContext;
	        return function () {
	            var saved = currentContext;
	            try {
	                currentContext = context;
	                return callback.apply(this, arguments);
	            }
	            finally {
	                currentContext = saved;
	            }
	        };
	    };
	    // Immediately run a callback function without any captured context.
	    Slot.noContext = function (callback, 
	    // Given the prevalence of arrow functions, specifying arguments is likely
	    // to be much more common than specifying `this`, hence this ordering:
	    args, thisArg) {
	        if (currentContext) {
	            var saved = currentContext;
	            try {
	                currentContext = null;
	                // Function.prototype.apply allows the arguments array argument to be
	                // omitted or undefined, so args! is fine here.
	                return callback.apply(thisArg, args);
	            }
	            finally {
	                currentContext = saved;
	            }
	        }
	        else {
	            return callback.apply(thisArg, args);
	        }
	    };
	    return Slot;
	}()); };
	// We store a single global implementation of the Slot class as a permanent
	// non-enumerable symbol property of the Array constructor. This obfuscation
	// does nothing to prevent access to the Slot class, but at least it ensures
	// the implementation (i.e. currentContext) cannot be tampered with, and all
	// copies of the @wry/context package (hopefully just one) will share the
	// same Slot implementation. Since the first copy of the @wry/context package
	// to be imported wins, this technique imposes a very high cost for any
	// future breaking changes to the Slot class.
	var globalKey = "@wry/context:Slot";
	var host = Array;
	var Slot = host[globalKey] || function () {
	    var Slot = makeSlotClass();
	    try {
	        Object.defineProperty(host, globalKey, {
	            value: host[globalKey] = Slot,
	            enumerable: false,
	            writable: false,
	            configurable: false,
	        });
	    }
	    finally {
	        return Slot;
	    }
	}();

	var bind = Slot.bind, noContext = Slot.noContext;
	function setTimeoutWithContext(callback, delay) {
	    return setTimeout(bind(callback), delay);
	}
	// Turn any generator function into an async function (using yield instead
	// of await), with context automatically preserved across yields.
	function asyncFromGen(genFn) {
	    return function () {
	        var gen = genFn.apply(this, arguments);
	        var boundNext = bind(gen.next);
	        var boundThrow = bind(gen.throw);
	        return new Promise(function (resolve, reject) {
	            function invoke(method, argument) {
	                try {
	                    var result = method.call(gen, argument);
	                }
	                catch (error) {
	                    return reject(error);
	                }
	                var next = result.done ? resolve : invokeNext;
	                if (isPromiseLike(result.value)) {
	                    result.value.then(next, result.done ? reject : invokeThrow);
	                }
	                else {
	                    next(result.value);
	                }
	            }
	            var invokeNext = function (value) { return invoke(boundNext, value); };
	            var invokeThrow = function (error) { return invoke(boundThrow, error); };
	            invokeNext();
	        });
	    };
	}
	function isPromiseLike(value) {
	    return value && typeof value.then === "function";
	}
	// If you use the fibers npm package to implement coroutines in Node.js,
	// you should call this function at least once to ensure context management
	// remains coherent across any yields.
	var wrappedFibers = [];
	function wrapYieldingFiberMethods(Fiber) {
	    // There can be only one implementation of Fiber per process, so this array
	    // should never grow longer than one element.
	    if (wrappedFibers.indexOf(Fiber) < 0) {
	        var wrap = function (obj, method) {
	            var fn = obj[method];
	            obj[method] = function () {
	                return noContext(fn, arguments, this);
	            };
	        };
	        // These methods can yield, according to
	        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
	        wrap(Fiber, "yield");
	        wrap(Fiber.prototype, "run");
	        wrap(Fiber.prototype, "throwInto");
	        wrappedFibers.push(Fiber);
	    }
	    return Fiber;
	}

	exports.Slot = Slot;
	exports.asyncFromGen = asyncFromGen;
	exports.bind = bind;
	exports.noContext = noContext;
	exports.setTimeout = setTimeoutWithContext;
	exports.wrapYieldingFiberMethods = wrapYieldingFiberMethods;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(factory());
	}(this, (function () { 'use strict';

	var parser = __webpack_require__(110);

	var parse = parser.parse;

	// Strip insignificant whitespace
	// Note that this could do a lot more, such as reorder fields etc.
	function normalize(string) {
	  return string.replace(/[\s,]+/g, ' ').trim();
	}

	// A map docString -> graphql document
	var docCache = {};

	// A map fragmentName -> [normalized source]
	var fragmentSourceMap = {};

	function cacheKeyFromLoc(loc) {
	  return normalize(loc.source.body.substring(loc.start, loc.end));
	}

	// For testing.
	function resetCaches() {
	  docCache = {};
	  fragmentSourceMap = {};
	}

	// Take a unstripped parsed document (query/mutation or even fragment), and
	// check all fragment definitions, checking for name->source uniqueness.
	// We also want to make sure only unique fragments exist in the document.
	var printFragmentWarnings = true;
	function processFragments(ast) {
	  var astFragmentMap = {};
	  var definitions = [];

	  for (var i = 0; i < ast.definitions.length; i++) {
	    var fragmentDefinition = ast.definitions[i];

	    if (fragmentDefinition.kind === 'FragmentDefinition') {
	      var fragmentName = fragmentDefinition.name.value;
	      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

	      // We know something about this fragment
	      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

	        // this is a problem because the app developer is trying to register another fragment with
	        // the same name as one previously registered. So, we tell them about it.
	        if (printFragmentWarnings) {
	          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
	            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
	            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
	        }

	        fragmentSourceMap[fragmentName][sourceKey] = true;

	      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
	        fragmentSourceMap[fragmentName] = {};
	        fragmentSourceMap[fragmentName][sourceKey] = true;
	      }

	      if (!astFragmentMap[sourceKey]) {
	        astFragmentMap[sourceKey] = true;
	        definitions.push(fragmentDefinition);
	      }
	    } else {
	      definitions.push(fragmentDefinition);
	    }
	  }

	  ast.definitions = definitions;
	  return ast;
	}

	function disableFragmentWarnings() {
	  printFragmentWarnings = false;
	}

	function stripLoc(doc, removeLocAtThisLevel) {
	  var docType = Object.prototype.toString.call(doc);

	  if (docType === '[object Array]') {
	    return doc.map(function (d) {
	      return stripLoc(d, removeLocAtThisLevel);
	    });
	  }

	  if (docType !== '[object Object]') {
	    throw new Error('Unexpected input.');
	  }

	  // We don't want to remove the root loc field so we can use it
	  // for fragment substitution (see below)
	  if (removeLocAtThisLevel && doc.loc) {
	    delete doc.loc;
	  }

	  // https://github.com/apollographql/graphql-tag/issues/40
	  if (doc.loc) {
	    delete doc.loc.startToken;
	    delete doc.loc.endToken;
	  }

	  var keys = Object.keys(doc);
	  var key;
	  var value;
	  var valueType;

	  for (key in keys) {
	    if (keys.hasOwnProperty(key)) {
	      value = doc[keys[key]];
	      valueType = Object.prototype.toString.call(value);

	      if (valueType === '[object Object]' || valueType === '[object Array]') {
	        doc[keys[key]] = stripLoc(value, true);
	      }
	    }
	  }

	  return doc;
	}

	var experimentalFragmentVariables = false;
	function parseDocument(doc) {
	  var cacheKey = normalize(doc);

	  if (docCache[cacheKey]) {
	    return docCache[cacheKey];
	  }

	  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
	  if (!parsed || parsed.kind !== 'Document') {
	    throw new Error('Not a valid GraphQL document.');
	  }

	  // check that all "new" fragments inside the documents are consistent with
	  // existing fragments of the same name
	  parsed = processFragments(parsed);
	  parsed = stripLoc(parsed, false);
	  docCache[cacheKey] = parsed;

	  return parsed;
	}

	function enableExperimentalFragmentVariables() {
	  experimentalFragmentVariables = true;
	}

	function disableExperimentalFragmentVariables() {
	  experimentalFragmentVariables = false;
	}

	// XXX This should eventually disallow arbitrary string interpolation, like Relay does
	function gql(/* arguments */) {
	  var args = Array.prototype.slice.call(arguments);

	  var literals = args[0];

	  // We always get literals[0] and then matching post literals for each arg given
	  var result = (typeof(literals) === "string") ? literals : literals[0];

	  for (var i = 1; i < args.length; i++) {
	    if (args[i] && args[i].kind && args[i].kind === 'Document') {
	      result += args[i].loc.source.body;
	    } else {
	      result += args[i];
	    }

	    result += literals[i];
	  }

	  return parseDocument(result);
	}

	// Support typescript, which isn't as nice as Babel about default exports
	gql.default = gql;
	gql.resetCaches = resetCaches;
	gql.disableFragmentWarnings = disableFragmentWarnings;
	gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
	gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

	module.exports = gql;

	})));
	//# sourceMappingURL=graphql-tag.umd.js.map


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parse = parse;
	exports.parseValue = parseValue;
	exports.parseType = parseType;

	var _inspect = _interopRequireDefault(__webpack_require__(22));

	var _devAssert = _interopRequireDefault(__webpack_require__(111));

	var _defineToJSON = _interopRequireDefault(__webpack_require__(112));

	var _syntaxError = __webpack_require__(113);

	var _kinds = __webpack_require__(101);

	var _source = __webpack_require__(118);

	var _lexer = __webpack_require__(120);

	var _directiveLocation = __webpack_require__(122);

	var _tokenKind = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Given a GraphQL source, parses it into a Document.
	 * Throws GraphQLError if a syntax error is encountered.
	 */
	function parse(source, options) {
	  var parser = new Parser(source, options);
	  return parser.parseDocument();
	}
	/**
	 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
	 * that value.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Values directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: valueFromAST().
	 */


	function parseValue(source, options) {
	  var parser = new Parser(source, options);
	  parser.expectToken(_tokenKind.TokenKind.SOF);
	  var value = parser.parseValueLiteral(false);
	  parser.expectToken(_tokenKind.TokenKind.EOF);
	  return value;
	}
	/**
	 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
	 * that type.
	 * Throws GraphQLError if a syntax error is encountered.
	 *
	 * This is useful within tools that operate upon GraphQL Types directly and
	 * in isolation of complete GraphQL documents.
	 *
	 * Consider providing the results to the utility function: typeFromAST().
	 */


	function parseType(source, options) {
	  var parser = new Parser(source, options);
	  parser.expectToken(_tokenKind.TokenKind.SOF);
	  var type = parser.parseTypeReference();
	  parser.expectToken(_tokenKind.TokenKind.EOF);
	  return type;
	}

	var Parser =
	/*#__PURE__*/
	function () {
	  function Parser(source, options) {
	    var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
	    sourceObj instanceof _source.Source || (0, _devAssert.default)(0, "Must provide Source. Received: ".concat((0, _inspect.default)(sourceObj)));
	    this._lexer = (0, _lexer.createLexer)(sourceObj);
	    this._options = options || {};
	  }
	  /**
	   * Converts a name lex token into a name parse node.
	   */


	  var _proto = Parser.prototype;

	  _proto.parseName = function parseName() {
	    var token = this.expectToken(_tokenKind.TokenKind.NAME);
	    return {
	      kind: _kinds.Kind.NAME,
	      value: token.value,
	      loc: this.loc(token)
	    };
	  } // Implements the parsing rules in the Document section.

	  /**
	   * Document : Definition+
	   */
	  ;

	  _proto.parseDocument = function parseDocument() {
	    var start = this._lexer.token;
	    return {
	      kind: _kinds.Kind.DOCUMENT,
	      definitions: this.many(_tokenKind.TokenKind.SOF, this.parseDefinition, _tokenKind.TokenKind.EOF),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * Definition :
	   *   - ExecutableDefinition
	   *   - TypeSystemDefinition
	   *   - TypeSystemExtension
	   *
	   * ExecutableDefinition :
	   *   - OperationDefinition
	   *   - FragmentDefinition
	   */
	  ;

	  _proto.parseDefinition = function parseDefinition() {
	    if (this.peek(_tokenKind.TokenKind.NAME)) {
	      switch (this._lexer.token.value) {
	        case 'query':
	        case 'mutation':
	        case 'subscription':
	          return this.parseOperationDefinition();

	        case 'fragment':
	          return this.parseFragmentDefinition();

	        case 'schema':
	        case 'scalar':
	        case 'type':
	        case 'interface':
	        case 'union':
	        case 'enum':
	        case 'input':
	        case 'directive':
	          return this.parseTypeSystemDefinition();

	        case 'extend':
	          return this.parseTypeSystemExtension();
	      }
	    } else if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
	      return this.parseOperationDefinition();
	    } else if (this.peekDescription()) {
	      return this.parseTypeSystemDefinition();
	    }

	    throw this.unexpected();
	  } // Implements the parsing rules in the Operations section.

	  /**
	   * OperationDefinition :
	   *  - SelectionSet
	   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
	   */
	  ;

	  _proto.parseOperationDefinition = function parseOperationDefinition() {
	    var start = this._lexer.token;

	    if (this.peek(_tokenKind.TokenKind.BRACE_L)) {
	      return {
	        kind: _kinds.Kind.OPERATION_DEFINITION,
	        operation: 'query',
	        name: undefined,
	        variableDefinitions: [],
	        directives: [],
	        selectionSet: this.parseSelectionSet(),
	        loc: this.loc(start)
	      };
	    }

	    var operation = this.parseOperationType();
	    var name;

	    if (this.peek(_tokenKind.TokenKind.NAME)) {
	      name = this.parseName();
	    }

	    return {
	      kind: _kinds.Kind.OPERATION_DEFINITION,
	      operation: operation,
	      name: name,
	      variableDefinitions: this.parseVariableDefinitions(),
	      directives: this.parseDirectives(false),
	      selectionSet: this.parseSelectionSet(),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * OperationType : one of query mutation subscription
	   */
	  ;

	  _proto.parseOperationType = function parseOperationType() {
	    var operationToken = this.expectToken(_tokenKind.TokenKind.NAME);

	    switch (operationToken.value) {
	      case 'query':
	        return 'query';

	      case 'mutation':
	        return 'mutation';

	      case 'subscription':
	        return 'subscription';
	    }

	    throw this.unexpected(operationToken);
	  }
	  /**
	   * VariableDefinitions : ( VariableDefinition+ )
	   */
	  ;

	  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
	    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseVariableDefinition, _tokenKind.TokenKind.PAREN_R);
	  }
	  /**
	   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
	   */
	  ;

	  _proto.parseVariableDefinition = function parseVariableDefinition() {
	    var start = this._lexer.token;
	    return {
	      kind: _kinds.Kind.VARIABLE_DEFINITION,
	      variable: this.parseVariable(),
	      type: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseTypeReference()),
	      defaultValue: this.expectOptionalToken(_tokenKind.TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
	      directives: this.parseDirectives(true),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * Variable : $ Name
	   */
	  ;

	  _proto.parseVariable = function parseVariable() {
	    var start = this._lexer.token;
	    this.expectToken(_tokenKind.TokenKind.DOLLAR);
	    return {
	      kind: _kinds.Kind.VARIABLE,
	      name: this.parseName(),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * SelectionSet : { Selection+ }
	   */
	  ;

	  _proto.parseSelectionSet = function parseSelectionSet() {
	    var start = this._lexer.token;
	    return {
	      kind: _kinds.Kind.SELECTION_SET,
	      selections: this.many(_tokenKind.TokenKind.BRACE_L, this.parseSelection, _tokenKind.TokenKind.BRACE_R),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * Selection :
	   *   - Field
	   *   - FragmentSpread
	   *   - InlineFragment
	   */
	  ;

	  _proto.parseSelection = function parseSelection() {
	    return this.peek(_tokenKind.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
	  }
	  /**
	   * Field : Alias? Name Arguments? Directives? SelectionSet?
	   *
	   * Alias : Name :
	   */
	  ;

	  _proto.parseField = function parseField() {
	    var start = this._lexer.token;
	    var nameOrAlias = this.parseName();
	    var alias;
	    var name;

	    if (this.expectOptionalToken(_tokenKind.TokenKind.COLON)) {
	      alias = nameOrAlias;
	      name = this.parseName();
	    } else {
	      name = nameOrAlias;
	    }

	    return {
	      kind: _kinds.Kind.FIELD,
	      alias: alias,
	      name: name,
	      arguments: this.parseArguments(false),
	      directives: this.parseDirectives(false),
	      selectionSet: this.peek(_tokenKind.TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * Arguments[Const] : ( Argument[?Const]+ )
	   */
	  ;

	  _proto.parseArguments = function parseArguments(isConst) {
	    var item = isConst ? this.parseConstArgument : this.parseArgument;
	    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, item, _tokenKind.TokenKind.PAREN_R);
	  }
	  /**
	   * Argument[Const] : Name : Value[?Const]
	   */
	  ;

	  _proto.parseArgument = function parseArgument() {
	    var start = this._lexer.token;
	    var name = this.parseName();
	    this.expectToken(_tokenKind.TokenKind.COLON);
	    return {
	      kind: _kinds.Kind.ARGUMENT,
	      name: name,
	      value: this.parseValueLiteral(false),
	      loc: this.loc(start)
	    };
	  };

	  _proto.parseConstArgument = function parseConstArgument() {
	    var start = this._lexer.token;
	    return {
	      kind: _kinds.Kind.ARGUMENT,
	      name: this.parseName(),
	      value: (this.expectToken(_tokenKind.TokenKind.COLON), this.parseValueLiteral(true)),
	      loc: this.loc(start)
	    };
	  } // Implements the parsing rules in the Fragments section.

	  /**
	   * Corresponds to both FragmentSpread and InlineFragment in the spec.
	   *
	   * FragmentSpread : ... FragmentName Directives?
	   *
	   * InlineFragment : ... TypeCondition? Directives? SelectionSet
	   */
	  ;

	  _proto.parseFragment = function parseFragment() {
	    var start = this._lexer.token;
	    this.expectToken(_tokenKind.TokenKind.SPREAD);
	    var hasTypeCondition = this.expectOptionalKeyword('on');

	    if (!hasTypeCondition && this.peek(_tokenKind.TokenKind.NAME)) {
	      return {
	        kind: _kinds.Kind.FRAGMENT_SPREAD,
	        name: this.parseFragmentName(),
	        directives: this.parseDirectives(false),
	        loc: this.loc(start)
	      };
	    }

	    return {
	      kind: _kinds.Kind.INLINE_FRAGMENT,
	      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
	      directives: this.parseDirectives(false),
	      selectionSet: this.parseSelectionSet(),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * FragmentDefinition :
	   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
	   *
	   * TypeCondition : NamedType
	   */
	  ;

	  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
	    var start = this._lexer.token;
	    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
	    // the grammar of FragmentDefinition:
	    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

	    if (this._options.experimentalFragmentVariables) {
	      return {
	        kind: _kinds.Kind.FRAGMENT_DEFINITION,
	        name: this.parseFragmentName(),
	        variableDefinitions: this.parseVariableDefinitions(),
	        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
	        directives: this.parseDirectives(false),
	        selectionSet: this.parseSelectionSet(),
	        loc: this.loc(start)
	      };
	    }

	    return {
	      kind: _kinds.Kind.FRAGMENT_DEFINITION,
	      name: this.parseFragmentName(),
	      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
	      directives: this.parseDirectives(false),
	      selectionSet: this.parseSelectionSet(),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * FragmentName : Name but not `on`
	   */
	  ;

	  _proto.parseFragmentName = function parseFragmentName() {
	    if (this._lexer.token.value === 'on') {
	      throw this.unexpected();
	    }

	    return this.parseName();
	  } // Implements the parsing rules in the Values section.

	  /**
	   * Value[Const] :
	   *   - [~Const] Variable
	   *   - IntValue
	   *   - FloatValue
	   *   - StringValue
	   *   - BooleanValue
	   *   - NullValue
	   *   - EnumValue
	   *   - ListValue[?Const]
	   *   - ObjectValue[?Const]
	   *
	   * BooleanValue : one of `true` `false`
	   *
	   * NullValue : `null`
	   *
	   * EnumValue : Name but not `true`, `false` or `null`
	   */
	  ;

	  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
	    var token = this._lexer.token;

	    switch (token.kind) {
	      case _tokenKind.TokenKind.BRACKET_L:
	        return this.parseList(isConst);

	      case _tokenKind.TokenKind.BRACE_L:
	        return this.parseObject(isConst);

	      case _tokenKind.TokenKind.INT:
	        this._lexer.advance();

	        return {
	          kind: _kinds.Kind.INT,
	          value: token.value,
	          loc: this.loc(token)
	        };

	      case _tokenKind.TokenKind.FLOAT:
	        this._lexer.advance();

	        return {
	          kind: _kinds.Kind.FLOAT,
	          value: token.value,
	          loc: this.loc(token)
	        };

	      case _tokenKind.TokenKind.STRING:
	      case _tokenKind.TokenKind.BLOCK_STRING:
	        return this.parseStringLiteral();

	      case _tokenKind.TokenKind.NAME:
	        if (token.value === 'true' || token.value === 'false') {
	          this._lexer.advance();

	          return {
	            kind: _kinds.Kind.BOOLEAN,
	            value: token.value === 'true',
	            loc: this.loc(token)
	          };
	        } else if (token.value === 'null') {
	          this._lexer.advance();

	          return {
	            kind: _kinds.Kind.NULL,
	            loc: this.loc(token)
	          };
	        }

	        this._lexer.advance();

	        return {
	          kind: _kinds.Kind.ENUM,
	          value: token.value,
	          loc: this.loc(token)
	        };

	      case _tokenKind.TokenKind.DOLLAR:
	        if (!isConst) {
	          return this.parseVariable();
	        }

	        break;
	    }

	    throw this.unexpected();
	  };

	  _proto.parseStringLiteral = function parseStringLiteral() {
	    var token = this._lexer.token;

	    this._lexer.advance();

	    return {
	      kind: _kinds.Kind.STRING,
	      value: token.value,
	      block: token.kind === _tokenKind.TokenKind.BLOCK_STRING,
	      loc: this.loc(token)
	    };
	  }
	  /**
	   * ListValue[Const] :
	   *   - [ ]
	   *   - [ Value[?Const]+ ]
	   */
	  ;

	  _proto.parseList = function parseList(isConst) {
	    var _this = this;

	    var start = this._lexer.token;

	    var item = function item() {
	      return _this.parseValueLiteral(isConst);
	    };

	    return {
	      kind: _kinds.Kind.LIST,
	      values: this.any(_tokenKind.TokenKind.BRACKET_L, item, _tokenKind.TokenKind.BRACKET_R),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ObjectValue[Const] :
	   *   - { }
	   *   - { ObjectField[?Const]+ }
	   */
	  ;

	  _proto.parseObject = function parseObject(isConst) {
	    var _this2 = this;

	    var start = this._lexer.token;

	    var item = function item() {
	      return _this2.parseObjectField(isConst);
	    };

	    return {
	      kind: _kinds.Kind.OBJECT,
	      fields: this.any(_tokenKind.TokenKind.BRACE_L, item, _tokenKind.TokenKind.BRACE_R),
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ObjectField[Const] : Name : Value[?Const]
	   */
	  ;

	  _proto.parseObjectField = function parseObjectField(isConst) {
	    var start = this._lexer.token;
	    var name = this.parseName();
	    this.expectToken(_tokenKind.TokenKind.COLON);
	    return {
	      kind: _kinds.Kind.OBJECT_FIELD,
	      name: name,
	      value: this.parseValueLiteral(isConst),
	      loc: this.loc(start)
	    };
	  } // Implements the parsing rules in the Directives section.

	  /**
	   * Directives[Const] : Directive[?Const]+
	   */
	  ;

	  _proto.parseDirectives = function parseDirectives(isConst) {
	    var directives = [];

	    while (this.peek(_tokenKind.TokenKind.AT)) {
	      directives.push(this.parseDirective(isConst));
	    }

	    return directives;
	  }
	  /**
	   * Directive[Const] : @ Name Arguments[?Const]?
	   */
	  ;

	  _proto.parseDirective = function parseDirective(isConst) {
	    var start = this._lexer.token;
	    this.expectToken(_tokenKind.TokenKind.AT);
	    return {
	      kind: _kinds.Kind.DIRECTIVE,
	      name: this.parseName(),
	      arguments: this.parseArguments(isConst),
	      loc: this.loc(start)
	    };
	  } // Implements the parsing rules in the Types section.

	  /**
	   * Type :
	   *   - NamedType
	   *   - ListType
	   *   - NonNullType
	   */
	  ;

	  _proto.parseTypeReference = function parseTypeReference() {
	    var start = this._lexer.token;
	    var type;

	    if (this.expectOptionalToken(_tokenKind.TokenKind.BRACKET_L)) {
	      type = this.parseTypeReference();
	      this.expectToken(_tokenKind.TokenKind.BRACKET_R);
	      type = {
	        kind: _kinds.Kind.LIST_TYPE,
	        type: type,
	        loc: this.loc(start)
	      };
	    } else {
	      type = this.parseNamedType();
	    }

	    if (this.expectOptionalToken(_tokenKind.TokenKind.BANG)) {
	      return {
	        kind: _kinds.Kind.NON_NULL_TYPE,
	        type: type,
	        loc: this.loc(start)
	      };
	    }

	    return type;
	  }
	  /**
	   * NamedType : Name
	   */
	  ;

	  _proto.parseNamedType = function parseNamedType() {
	    var start = this._lexer.token;
	    return {
	      kind: _kinds.Kind.NAMED_TYPE,
	      name: this.parseName(),
	      loc: this.loc(start)
	    };
	  } // Implements the parsing rules in the Type Definition section.

	  /**
	   * TypeSystemDefinition :
	   *   - SchemaDefinition
	   *   - TypeDefinition
	   *   - DirectiveDefinition
	   *
	   * TypeDefinition :
	   *   - ScalarTypeDefinition
	   *   - ObjectTypeDefinition
	   *   - InterfaceTypeDefinition
	   *   - UnionTypeDefinition
	   *   - EnumTypeDefinition
	   *   - InputObjectTypeDefinition
	   */
	  ;

	  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
	    // Many definitions begin with a description and require a lookahead.
	    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

	    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
	      switch (keywordToken.value) {
	        case 'schema':
	          return this.parseSchemaDefinition();

	        case 'scalar':
	          return this.parseScalarTypeDefinition();

	        case 'type':
	          return this.parseObjectTypeDefinition();

	        case 'interface':
	          return this.parseInterfaceTypeDefinition();

	        case 'union':
	          return this.parseUnionTypeDefinition();

	        case 'enum':
	          return this.parseEnumTypeDefinition();

	        case 'input':
	          return this.parseInputObjectTypeDefinition();

	        case 'directive':
	          return this.parseDirectiveDefinition();
	      }
	    }

	    throw this.unexpected(keywordToken);
	  };

	  _proto.peekDescription = function peekDescription() {
	    return this.peek(_tokenKind.TokenKind.STRING) || this.peek(_tokenKind.TokenKind.BLOCK_STRING);
	  }
	  /**
	   * Description : StringValue
	   */
	  ;

	  _proto.parseDescription = function parseDescription() {
	    if (this.peekDescription()) {
	      return this.parseStringLiteral();
	    }
	  }
	  /**
	   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
	   */
	  ;

	  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
	    var start = this._lexer.token;
	    this.expectKeyword('schema');
	    var directives = this.parseDirectives(true);
	    var operationTypes = this.many(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);
	    return {
	      kind: _kinds.Kind.SCHEMA_DEFINITION,
	      directives: directives,
	      operationTypes: operationTypes,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * OperationTypeDefinition : OperationType : NamedType
	   */
	  ;

	  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
	    var start = this._lexer.token;
	    var operation = this.parseOperationType();
	    this.expectToken(_tokenKind.TokenKind.COLON);
	    var type = this.parseNamedType();
	    return {
	      kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
	      operation: operation,
	      type: type,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
	   */
	  ;

	  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('scalar');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    return {
	      kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ObjectTypeDefinition :
	   *   Description?
	   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
	   */
	  ;

	  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('type');
	    var name = this.parseName();
	    var interfaces = this.parseImplementsInterfaces();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseFieldsDefinition();
	    return {
	      kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      interfaces: interfaces,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ImplementsInterfaces :
	   *   - implements `&`? NamedType
	   *   - ImplementsInterfaces & NamedType
	   */
	  ;

	  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
	    var types = [];

	    if (this.expectOptionalKeyword('implements')) {
	      // Optional leading ampersand
	      this.expectOptionalToken(_tokenKind.TokenKind.AMP);

	      do {
	        types.push(this.parseNamedType());
	      } while (this.expectOptionalToken(_tokenKind.TokenKind.AMP) || // Legacy support for the SDL?
	      this._options.allowLegacySDLImplementsInterfaces && this.peek(_tokenKind.TokenKind.NAME));
	    }

	    return types;
	  }
	  /**
	   * FieldsDefinition : { FieldDefinition+ }
	   */
	  ;

	  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
	    // Legacy support for the SDL?
	    if (this._options.allowLegacySDLEmptyFields && this.peek(_tokenKind.TokenKind.BRACE_L) && this._lexer.lookahead().kind === _tokenKind.TokenKind.BRACE_R) {
	      this._lexer.advance();

	      this._lexer.advance();

	      return [];
	    }

	    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseFieldDefinition, _tokenKind.TokenKind.BRACE_R);
	  }
	  /**
	   * FieldDefinition :
	   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
	   */
	  ;

	  _proto.parseFieldDefinition = function parseFieldDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    var name = this.parseName();
	    var args = this.parseArgumentDefs();
	    this.expectToken(_tokenKind.TokenKind.COLON);
	    var type = this.parseTypeReference();
	    var directives = this.parseDirectives(true);
	    return {
	      kind: _kinds.Kind.FIELD_DEFINITION,
	      description: description,
	      name: name,
	      arguments: args,
	      type: type,
	      directives: directives,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ArgumentsDefinition : ( InputValueDefinition+ )
	   */
	  ;

	  _proto.parseArgumentDefs = function parseArgumentDefs() {
	    return this.optionalMany(_tokenKind.TokenKind.PAREN_L, this.parseInputValueDef, _tokenKind.TokenKind.PAREN_R);
	  }
	  /**
	   * InputValueDefinition :
	   *   - Description? Name : Type DefaultValue? Directives[Const]?
	   */
	  ;

	  _proto.parseInputValueDef = function parseInputValueDef() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    var name = this.parseName();
	    this.expectToken(_tokenKind.TokenKind.COLON);
	    var type = this.parseTypeReference();
	    var defaultValue;

	    if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
	      defaultValue = this.parseValueLiteral(true);
	    }

	    var directives = this.parseDirectives(true);
	    return {
	      kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
	      description: description,
	      name: name,
	      type: type,
	      defaultValue: defaultValue,
	      directives: directives,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * InterfaceTypeDefinition :
	   *   - Description? interface Name Directives[Const]? FieldsDefinition?
	   */
	  ;

	  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('interface');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseFieldsDefinition();
	    return {
	      kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * UnionTypeDefinition :
	   *   - Description? union Name Directives[Const]? UnionMemberTypes?
	   */
	  ;

	  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('union');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var types = this.parseUnionMemberTypes();
	    return {
	      kind: _kinds.Kind.UNION_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      types: types,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * UnionMemberTypes :
	   *   - = `|`? NamedType
	   *   - UnionMemberTypes | NamedType
	   */
	  ;

	  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
	    var types = [];

	    if (this.expectOptionalToken(_tokenKind.TokenKind.EQUALS)) {
	      // Optional leading pipe
	      this.expectOptionalToken(_tokenKind.TokenKind.PIPE);

	      do {
	        types.push(this.parseNamedType());
	      } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));
	    }

	    return types;
	  }
	  /**
	   * EnumTypeDefinition :
	   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
	   */
	  ;

	  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('enum');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var values = this.parseEnumValuesDefinition();
	    return {
	      kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      values: values,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * EnumValuesDefinition : { EnumValueDefinition+ }
	   */
	  ;

	  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
	    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseEnumValueDefinition, _tokenKind.TokenKind.BRACE_R);
	  }
	  /**
	   * EnumValueDefinition : Description? EnumValue Directives[Const]?
	   *
	   * EnumValue : Name
	   */
	  ;

	  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    return {
	      kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * InputObjectTypeDefinition :
	   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
	   */
	  ;

	  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('input');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseInputFieldsDefinition();
	    return {
	      kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
	      description: description,
	      name: name,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * InputFieldsDefinition : { InputValueDefinition+ }
	   */
	  ;

	  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
	    return this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseInputValueDef, _tokenKind.TokenKind.BRACE_R);
	  }
	  /**
	   * TypeSystemExtension :
	   *   - SchemaExtension
	   *   - TypeExtension
	   *
	   * TypeExtension :
	   *   - ScalarTypeExtension
	   *   - ObjectTypeExtension
	   *   - InterfaceTypeExtension
	   *   - UnionTypeExtension
	   *   - EnumTypeExtension
	   *   - InputObjectTypeDefinition
	   */
	  ;

	  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
	    var keywordToken = this._lexer.lookahead();

	    if (keywordToken.kind === _tokenKind.TokenKind.NAME) {
	      switch (keywordToken.value) {
	        case 'schema':
	          return this.parseSchemaExtension();

	        case 'scalar':
	          return this.parseScalarTypeExtension();

	        case 'type':
	          return this.parseObjectTypeExtension();

	        case 'interface':
	          return this.parseInterfaceTypeExtension();

	        case 'union':
	          return this.parseUnionTypeExtension();

	        case 'enum':
	          return this.parseEnumTypeExtension();

	        case 'input':
	          return this.parseInputObjectTypeExtension();
	      }
	    }

	    throw this.unexpected(keywordToken);
	  }
	  /**
	   * SchemaExtension :
	   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
	   *  - extend schema Directives[Const]
	   */
	  ;

	  _proto.parseSchemaExtension = function parseSchemaExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('schema');
	    var directives = this.parseDirectives(true);
	    var operationTypes = this.optionalMany(_tokenKind.TokenKind.BRACE_L, this.parseOperationTypeDefinition, _tokenKind.TokenKind.BRACE_R);

	    if (directives.length === 0 && operationTypes.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.SCHEMA_EXTENSION,
	      directives: directives,
	      operationTypes: operationTypes,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ScalarTypeExtension :
	   *   - extend scalar Name Directives[Const]
	   */
	  ;

	  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('scalar');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);

	    if (directives.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
	      name: name,
	      directives: directives,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * ObjectTypeExtension :
	   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
	   *  - extend type Name ImplementsInterfaces? Directives[Const]
	   *  - extend type Name ImplementsInterfaces
	   */
	  ;

	  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('type');
	    var name = this.parseName();
	    var interfaces = this.parseImplementsInterfaces();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseFieldsDefinition();

	    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
	      name: name,
	      interfaces: interfaces,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * InterfaceTypeExtension :
	   *   - extend interface Name Directives[Const]? FieldsDefinition
	   *   - extend interface Name Directives[Const]
	   */
	  ;

	  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('interface');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseFieldsDefinition();

	    if (directives.length === 0 && fields.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
	      name: name,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * UnionTypeExtension :
	   *   - extend union Name Directives[Const]? UnionMemberTypes
	   *   - extend union Name Directives[Const]
	   */
	  ;

	  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('union');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var types = this.parseUnionMemberTypes();

	    if (directives.length === 0 && types.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.UNION_TYPE_EXTENSION,
	      name: name,
	      directives: directives,
	      types: types,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * EnumTypeExtension :
	   *   - extend enum Name Directives[Const]? EnumValuesDefinition
	   *   - extend enum Name Directives[Const]
	   */
	  ;

	  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('enum');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var values = this.parseEnumValuesDefinition();

	    if (directives.length === 0 && values.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
	      name: name,
	      directives: directives,
	      values: values,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * InputObjectTypeExtension :
	   *   - extend input Name Directives[Const]? InputFieldsDefinition
	   *   - extend input Name Directives[Const]
	   */
	  ;

	  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
	    var start = this._lexer.token;
	    this.expectKeyword('extend');
	    this.expectKeyword('input');
	    var name = this.parseName();
	    var directives = this.parseDirectives(true);
	    var fields = this.parseInputFieldsDefinition();

	    if (directives.length === 0 && fields.length === 0) {
	      throw this.unexpected();
	    }

	    return {
	      kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
	      name: name,
	      directives: directives,
	      fields: fields,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * DirectiveDefinition :
	   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
	   */
	  ;

	  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
	    var start = this._lexer.token;
	    var description = this.parseDescription();
	    this.expectKeyword('directive');
	    this.expectToken(_tokenKind.TokenKind.AT);
	    var name = this.parseName();
	    var args = this.parseArgumentDefs();
	    var repeatable = this.expectOptionalKeyword('repeatable');
	    this.expectKeyword('on');
	    var locations = this.parseDirectiveLocations();
	    return {
	      kind: _kinds.Kind.DIRECTIVE_DEFINITION,
	      description: description,
	      name: name,
	      arguments: args,
	      repeatable: repeatable,
	      locations: locations,
	      loc: this.loc(start)
	    };
	  }
	  /**
	   * DirectiveLocations :
	   *   - `|`? DirectiveLocation
	   *   - DirectiveLocations | DirectiveLocation
	   */
	  ;

	  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
	    // Optional leading pipe
	    this.expectOptionalToken(_tokenKind.TokenKind.PIPE);
	    var locations = [];

	    do {
	      locations.push(this.parseDirectiveLocation());
	    } while (this.expectOptionalToken(_tokenKind.TokenKind.PIPE));

	    return locations;
	  }
	  /*
	   * DirectiveLocation :
	   *   - ExecutableDirectiveLocation
	   *   - TypeSystemDirectiveLocation
	   *
	   * ExecutableDirectiveLocation : one of
	   *   `QUERY`
	   *   `MUTATION`
	   *   `SUBSCRIPTION`
	   *   `FIELD`
	   *   `FRAGMENT_DEFINITION`
	   *   `FRAGMENT_SPREAD`
	   *   `INLINE_FRAGMENT`
	   *
	   * TypeSystemDirectiveLocation : one of
	   *   `SCHEMA`
	   *   `SCALAR`
	   *   `OBJECT`
	   *   `FIELD_DEFINITION`
	   *   `ARGUMENT_DEFINITION`
	   *   `INTERFACE`
	   *   `UNION`
	   *   `ENUM`
	   *   `ENUM_VALUE`
	   *   `INPUT_OBJECT`
	   *   `INPUT_FIELD_DEFINITION`
	   */
	  ;

	  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
	    var start = this._lexer.token;
	    var name = this.parseName();

	    if (_directiveLocation.DirectiveLocation[name.value] !== undefined) {
	      return name;
	    }

	    throw this.unexpected(start);
	  } // Core parsing utility functions

	  /**
	   * Returns a location object, used to identify the place in
	   * the source that created a given parsed object.
	   */
	  ;

	  _proto.loc = function loc(startToken) {
	    if (!this._options.noLocation) {
	      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
	    }
	  }
	  /**
	   * Determines if the next token is of a given kind
	   */
	  ;

	  _proto.peek = function peek(kind) {
	    return this._lexer.token.kind === kind;
	  }
	  /**
	   * If the next token is of the given kind, return that token after advancing
	   * the lexer. Otherwise, do not change the parser state and throw an error.
	   */
	  ;

	  _proto.expectToken = function expectToken(kind) {
	    var token = this._lexer.token;

	    if (token.kind === kind) {
	      this._lexer.advance();

	      return token;
	    }

	    throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
	  }
	  /**
	   * If the next token is of the given kind, return that token after advancing
	   * the lexer. Otherwise, do not change the parser state and return undefined.
	   */
	  ;

	  _proto.expectOptionalToken = function expectOptionalToken(kind) {
	    var token = this._lexer.token;

	    if (token.kind === kind) {
	      this._lexer.advance();

	      return token;
	    }

	    return undefined;
	  }
	  /**
	   * If the next token is a given keyword, advance the lexer.
	   * Otherwise, do not change the parser state and throw an error.
	   */
	  ;

	  _proto.expectKeyword = function expectKeyword(value) {
	    var token = this._lexer.token;

	    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
	      this._lexer.advance();
	    } else {
	      throw (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
	    }
	  }
	  /**
	   * If the next token is a given keyword, return "true" after advancing
	   * the lexer. Otherwise, do not change the parser state and return "false".
	   */
	  ;

	  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
	    var token = this._lexer.token;

	    if (token.kind === _tokenKind.TokenKind.NAME && token.value === value) {
	      this._lexer.advance();

	      return true;
	    }

	    return false;
	  }
	  /**
	   * Helper function for creating an error when an unexpected lexed token
	   * is encountered.
	   */
	  ;

	  _proto.unexpected = function unexpected(atToken) {
	    var token = atToken || this._lexer.token;
	    return (0, _syntaxError.syntaxError)(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
	  }
	  /**
	   * Returns a possibly empty list of parse nodes, determined by
	   * the parseFn. This list begins with a lex token of openKind
	   * and ends with a lex token of closeKind. Advances the parser
	   * to the next lex token after the closing token.
	   */
	  ;

	  _proto.any = function any(openKind, parseFn, closeKind) {
	    this.expectToken(openKind);
	    var nodes = [];

	    while (!this.expectOptionalToken(closeKind)) {
	      nodes.push(parseFn.call(this));
	    }

	    return nodes;
	  }
	  /**
	   * Returns a list of parse nodes, determined by the parseFn.
	   * It can be empty only if open token is missing otherwise it will always
	   * return non-empty list that begins with a lex token of openKind and ends
	   * with a lex token of closeKind. Advances the parser to the next lex token
	   * after the closing token.
	   */
	  ;

	  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
	    if (this.expectOptionalToken(openKind)) {
	      var nodes = [];

	      do {
	        nodes.push(parseFn.call(this));
	      } while (!this.expectOptionalToken(closeKind));

	      return nodes;
	    }

	    return [];
	  }
	  /**
	   * Returns a non-empty list of parse nodes, determined by
	   * the parseFn. This list begins with a lex token of openKind
	   * and ends with a lex token of closeKind. Advances the parser
	   * to the next lex token after the closing token.
	   */
	  ;

	  _proto.many = function many(openKind, parseFn, closeKind) {
	    this.expectToken(openKind);
	    var nodes = [];

	    do {
	      nodes.push(parseFn.call(this));
	    } while (!this.expectOptionalToken(closeKind));

	    return nodes;
	  };

	  return Parser;
	}();

	function Loc(startToken, endToken, source) {
	  this.start = startToken.start;
	  this.end = endToken.end;
	  this.startToken = startToken;
	  this.endToken = endToken;
	  this.source = source;
	} // Print a simplified form when appearing in JSON/util.inspect.


	(0, _defineToJSON.default)(Loc, function () {
	  return {
	    start: this.start,
	    end: this.end
	  };
	});
	/**
	 * A helper function to describe a token as a string for debugging
	 */

	function getTokenDesc(token) {
	  var value = token.value;
	  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
	}


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = devAssert;

	function devAssert(condition, message) {
	  var booleanCondition = Boolean(condition);

	  if (!booleanCondition) {
	    throw new Error(message);
	  }
	}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defineToJSON;

	var _nodejsCustomInspectSymbol = _interopRequireDefault(__webpack_require__(23));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The `defineToJSON()` function defines toJSON() and inspect() prototype
	 * methods, if no function provided they become aliases for toString().
	 */
	function defineToJSON(classObject) {
	  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
	  classObject.prototype.toJSON = fn;
	  classObject.prototype.inspect = fn;

	  if (_nodejsCustomInspectSymbol.default) {
	    classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
	  }
	}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.syntaxError = syntaxError;

	var _GraphQLError = __webpack_require__(114);

	/**
	 * Produces a GraphQLError representing a syntax error, containing useful
	 * descriptive information about the syntax error's position in the source.
	 */
	function syntaxError(source, position, description) {
	  return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
	}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GraphQLError = GraphQLError;
	exports.printError = printError;

	var _isObjectLike = _interopRequireDefault(__webpack_require__(115));

	var _location = __webpack_require__(116);

	var _printLocation = __webpack_require__(117);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function GraphQLError( // eslint-disable-line no-redeclare
	message, nodes, source, positions, path, originalError, extensions) {
	  // Compute list of blame nodes.
	  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


	  var _source = source;

	  if (!_source && _nodes) {
	    var node = _nodes[0];
	    _source = node && node.loc && node.loc.source;
	  }

	  var _positions = positions;

	  if (!_positions && _nodes) {
	    _positions = _nodes.reduce(function (list, node) {
	      if (node.loc) {
	        list.push(node.loc.start);
	      }

	      return list;
	    }, []);
	  }

	  if (_positions && _positions.length === 0) {
	    _positions = undefined;
	  }

	  var _locations;

	  if (positions && source) {
	    _locations = positions.map(function (pos) {
	      return (0, _location.getLocation)(source, pos);
	    });
	  } else if (_nodes) {
	    _locations = _nodes.reduce(function (list, node) {
	      if (node.loc) {
	        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
	      }

	      return list;
	    }, []);
	  }

	  var _extensions = extensions;

	  if (_extensions == null && originalError != null) {
	    var originalExtensions = originalError.extensions;

	    if ((0, _isObjectLike.default)(originalExtensions)) {
	      _extensions = originalExtensions;
	    }
	  }

	  Object.defineProperties(this, {
	    message: {
	      value: message,
	      // By being enumerable, JSON.stringify will include `message` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: true,
	      writable: true
	    },
	    locations: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: _locations || undefined,
	      // By being enumerable, JSON.stringify will include `locations` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: Boolean(_locations)
	    },
	    path: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: path || undefined,
	      // By being enumerable, JSON.stringify will include `path` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: Boolean(path)
	    },
	    nodes: {
	      value: _nodes || undefined
	    },
	    source: {
	      value: _source || undefined
	    },
	    positions: {
	      value: _positions || undefined
	    },
	    originalError: {
	      value: originalError
	    },
	    extensions: {
	      // Coercing falsey values to undefined ensures they will not be included
	      // in JSON.stringify() when not provided.
	      value: _extensions || undefined,
	      // By being enumerable, JSON.stringify will include `path` in the
	      // resulting output. This ensures that the simplest possible GraphQL
	      // service adheres to the spec.
	      enumerable: Boolean(_extensions)
	    }
	  }); // Include (non-enumerable) stack trace.

	  if (originalError && originalError.stack) {
	    Object.defineProperty(this, 'stack', {
	      value: originalError.stack,
	      writable: true,
	      configurable: true
	    });
	  } else if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, GraphQLError);
	  } else {
	    Object.defineProperty(this, 'stack', {
	      value: Error().stack,
	      writable: true,
	      configurable: true
	    });
	  }
	}

	GraphQLError.prototype = Object.create(Error.prototype, {
	  constructor: {
	    value: GraphQLError
	  },
	  name: {
	    value: 'GraphQLError'
	  },
	  toString: {
	    value: function toString() {
	      return printError(this);
	    }
	  }
	});
	/**
	 * Prints a GraphQLError to a string, representing useful location information
	 * about the error's position in the source.
	 */

	function printError(error) {
	  var output = error.message;

	  if (error.nodes) {
	    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
	      var node = _error$nodes2[_i2];

	      if (node.loc) {
	        output += '\n\n' + (0, _printLocation.printLocation)(node.loc);
	      }
	    }
	  } else if (error.source && error.locations) {
	    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
	      var location = _error$locations2[_i4];
	      output += '\n\n' + (0, _printLocation.printSourceLocation)(error.source, location);
	    }
	  }

	  return output;
	}


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObjectLike;

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	/**
	 * Return true if `value` is object-like. A value is object-like if it's not
	 * `null` and has a `typeof` result of "object".
	 */
	function isObjectLike(value) {
	  return _typeof(value) == 'object' && value !== null;
	}


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLocation = getLocation;

	/**
	 * Represents a location in a Source.
	 */

	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */
	function getLocation(source, position) {
	  var lineRegexp = /\r\n|[\n\r]/g;
	  var line = 1;
	  var column = position + 1;
	  var match;

	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }

	  return {
	    line: line,
	    column: column
	  };
	}


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printLocation = printLocation;
	exports.printSourceLocation = printSourceLocation;

	var _location = __webpack_require__(116);

	/**
	 * Render a helpful description of the location in the GraphQL Source document.
	 */
	function printLocation(location) {
	  return printSourceLocation(location.source, (0, _location.getLocation)(location.source, location.start));
	}
	/**
	 * Render a helpful description of the location in the GraphQL Source document.
	 */


	function printSourceLocation(source, sourceLocation) {
	  var firstLineColumnOffset = source.locationOffset.column - 1;
	  var body = whitespace(firstLineColumnOffset) + source.body;
	  var lineIndex = sourceLocation.line - 1;
	  var lineOffset = source.locationOffset.line - 1;
	  var lineNum = sourceLocation.line + lineOffset;
	  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
	  var columnNum = sourceLocation.column + columnOffset;
	  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
	  var lines = body.split(/\r\n|[\n\r]/g);
	  var locationLine = lines[lineIndex]; // Special case for minified documents

	  if (locationLine.length > 120) {
	    var sublineIndex = Math.floor(columnNum / 80);
	    var sublineColumnNum = columnNum % 80;
	    var sublines = [];

	    for (var i = 0; i < locationLine.length; i += 80) {
	      sublines.push(locationLine.slice(i, i + 80));
	    }

	    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
	      return ['', subline];
	    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
	  }

	  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
	  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
	}

	function printPrefixedLines(lines) {
	  var existingLines = lines.filter(function (_ref) {
	    var _ = _ref[0],
	        line = _ref[1];
	    return line !== undefined;
	  });
	  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
	    var prefix = _ref2[0];
	    return prefix.length;
	  }));
	  return existingLines.map(function (_ref3) {
	    var prefix = _ref3[0],
	        line = _ref3[1];
	    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
	  }).join('\n');
	}

	function whitespace(len) {
	  return Array(len + 1).join(' ');
	}

	function lpad(len, str) {
	  return whitespace(len - str.length) + str;
	}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Source = void 0;

	var _devAssert = _interopRequireDefault(__webpack_require__(111));

	var _defineToStringTag = _interopRequireDefault(__webpack_require__(119));

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A representation of source input to GraphQL.
	 * `name` and `locationOffset` are optional. They are useful for clients who
	 * store GraphQL documents in source files; for example, if the GraphQL input
	 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
	 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
	 * line and column in locationOffset are 1-indexed
	 */
	var Source = function Source(body, name, locationOffset) {
	  this.body = body;
	  this.name = name || 'GraphQL request';
	  this.locationOffset = locationOffset || {
	    line: 1,
	    column: 1
	  };
	  this.locationOffset.line > 0 || (0, _devAssert.default)(0, 'line in locationOffset is 1-indexed and must be positive');
	  this.locationOffset.column > 0 || (0, _devAssert.default)(0, 'column in locationOffset is 1-indexed and must be positive');
	}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


	exports.Source = Source;
	(0, _defineToStringTag.default)(Source);


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defineToStringTag;

	/**
	 * The `defineToStringTag()` function checks first to see if the runtime
	 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
	 * is defined as a `Symbol` instance. If both conditions are met, the
	 * Symbol.toStringTag property is defined as a getter that returns the
	 * supplied class constructor's name.
	 *
	 * @method defineToStringTag
	 *
	 * @param {Class<any>} classObject a class such as Object, String, Number but
	 * typically one of your own creation through the class keyword; `class A {}`,
	 * for example.
	 */
	function defineToStringTag(classObject) {
	  if (typeof Symbol === 'function' && Symbol.toStringTag) {
	    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
	      get: function get() {
	        return this.constructor.name;
	      }
	    });
	  }
	}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createLexer = createLexer;
	exports.isPunctuatorToken = isPunctuatorToken;

	var _defineToJSON = _interopRequireDefault(__webpack_require__(112));

	var _syntaxError = __webpack_require__(113);

	var _blockString = __webpack_require__(30);

	var _tokenKind = __webpack_require__(121);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a stateful stream generator in that every time
	 * it is advanced, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token emitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return the same EOF token
	 * whenever called.
	 */
	function createLexer(source, options) {
	  var startOfFileToken = new Tok(_tokenKind.TokenKind.SOF, 0, 0, 0, 0, null);
	  var lexer = {
	    source: source,
	    options: options,
	    lastToken: startOfFileToken,
	    token: startOfFileToken,
	    line: 1,
	    lineStart: 0,
	    advance: advanceLexer,
	    lookahead: lookahead
	  };
	  return lexer;
	}

	function advanceLexer() {
	  this.lastToken = this.token;
	  var token = this.token = this.lookahead();
	  return token;
	}

	function lookahead() {
	  var token = this.token;

	  if (token.kind !== _tokenKind.TokenKind.EOF) {
	    do {
	      // Note: next is only mutable during parsing, so we cast to allow this.
	      token = token.next || (token.next = readToken(this, token));
	    } while (token.kind === _tokenKind.TokenKind.COMMENT);
	  }

	  return token;
	}
	/**
	 * The return type of createLexer.
	 */


	// @internal
	function isPunctuatorToken(token) {
	  var kind = token.kind;
	  return kind === _tokenKind.TokenKind.BANG || kind === _tokenKind.TokenKind.DOLLAR || kind === _tokenKind.TokenKind.AMP || kind === _tokenKind.TokenKind.PAREN_L || kind === _tokenKind.TokenKind.PAREN_R || kind === _tokenKind.TokenKind.SPREAD || kind === _tokenKind.TokenKind.COLON || kind === _tokenKind.TokenKind.EQUALS || kind === _tokenKind.TokenKind.AT || kind === _tokenKind.TokenKind.BRACKET_L || kind === _tokenKind.TokenKind.BRACKET_R || kind === _tokenKind.TokenKind.BRACE_L || kind === _tokenKind.TokenKind.PIPE || kind === _tokenKind.TokenKind.BRACE_R;
	}
	/**
	 * Helper function for constructing the Token object.
	 */


	function Tok(kind, start, end, line, column, prev, value) {
	  this.kind = kind;
	  this.start = start;
	  this.end = end;
	  this.line = line;
	  this.column = column;
	  this.value = value;
	  this.prev = prev;
	  this.next = null;
	} // Print a simplified form when appearing in JSON/util.inspect.


	(0, _defineToJSON.default)(Tok, function () {
	  return {
	    kind: this.kind,
	    value: this.value,
	    line: this.line,
	    column: this.column
	  };
	});

	function printCharCode(code) {
	  return (// NaN/undefined represents access beyond the end of the file.
	    isNaN(code) ? _tokenKind.TokenKind.EOF : // Trust JSON for ASCII.
	    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
	    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
	  );
	}
	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace until it finds the next lexable token, then lexes
	 * punctuators immediately or calls the appropriate helper function for more
	 * complicated tokens.
	 */


	function readToken(lexer, prev) {
	  var source = lexer.source;
	  var body = source.body;
	  var bodyLength = body.length;
	  var pos = positionAfterWhitespace(body, prev.end, lexer);
	  var line = lexer.line;
	  var col = 1 + pos - lexer.lineStart;

	  if (pos >= bodyLength) {
	    return new Tok(_tokenKind.TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
	  }

	  var code = body.charCodeAt(pos); // SourceCharacter

	  switch (code) {
	    // !
	    case 33:
	      return new Tok(_tokenKind.TokenKind.BANG, pos, pos + 1, line, col, prev);
	    // #

	    case 35:
	      return readComment(source, pos, line, col, prev);
	    // $

	    case 36:
	      return new Tok(_tokenKind.TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
	    // &

	    case 38:
	      return new Tok(_tokenKind.TokenKind.AMP, pos, pos + 1, line, col, prev);
	    // (

	    case 40:
	      return new Tok(_tokenKind.TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
	    // )

	    case 41:
	      return new Tok(_tokenKind.TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
	    // .

	    case 46:
	      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
	        return new Tok(_tokenKind.TokenKind.SPREAD, pos, pos + 3, line, col, prev);
	      }

	      break;
	    // :

	    case 58:
	      return new Tok(_tokenKind.TokenKind.COLON, pos, pos + 1, line, col, prev);
	    // =

	    case 61:
	      return new Tok(_tokenKind.TokenKind.EQUALS, pos, pos + 1, line, col, prev);
	    // @

	    case 64:
	      return new Tok(_tokenKind.TokenKind.AT, pos, pos + 1, line, col, prev);
	    // [

	    case 91:
	      return new Tok(_tokenKind.TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
	    // ]

	    case 93:
	      return new Tok(_tokenKind.TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
	    // {

	    case 123:
	      return new Tok(_tokenKind.TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
	    // |

	    case 124:
	      return new Tok(_tokenKind.TokenKind.PIPE, pos, pos + 1, line, col, prev);
	    // }

	    case 125:
	      return new Tok(_tokenKind.TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
	    // A-Z _ a-z

	    case 65:
	    case 66:
	    case 67:
	    case 68:
	    case 69:
	    case 70:
	    case 71:
	    case 72:
	    case 73:
	    case 74:
	    case 75:
	    case 76:
	    case 77:
	    case 78:
	    case 79:
	    case 80:
	    case 81:
	    case 82:
	    case 83:
	    case 84:
	    case 85:
	    case 86:
	    case 87:
	    case 88:
	    case 89:
	    case 90:
	    case 95:
	    case 97:
	    case 98:
	    case 99:
	    case 100:
	    case 101:
	    case 102:
	    case 103:
	    case 104:
	    case 105:
	    case 106:
	    case 107:
	    case 108:
	    case 109:
	    case 110:
	    case 111:
	    case 112:
	    case 113:
	    case 114:
	    case 115:
	    case 116:
	    case 117:
	    case 118:
	    case 119:
	    case 120:
	    case 121:
	    case 122:
	      return readName(source, pos, line, col, prev);
	    // - 0-9

	    case 45:
	    case 48:
	    case 49:
	    case 50:
	    case 51:
	    case 52:
	    case 53:
	    case 54:
	    case 55:
	    case 56:
	    case 57:
	      return readNumber(source, pos, code, line, col, prev);
	    // "

	    case 34:
	      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
	        return readBlockString(source, pos, line, col, prev, lexer);
	      }

	      return readString(source, pos, line, col, prev);
	  }

	  throw (0, _syntaxError.syntaxError)(source, pos, unexpectedCharacterMessage(code));
	}
	/**
	 * Report a message that an unexpected character was encountered.
	 */


	function unexpectedCharacterMessage(code) {
	  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
	    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
	  }

	  if (code === 39) {
	    // '
	    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
	  }

	  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
	}
	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * character, then returns the position of that character for lexing.
	 */


	function positionAfterWhitespace(body, startPosition, lexer) {
	  var bodyLength = body.length;
	  var position = startPosition;

	  while (position < bodyLength) {
	    var code = body.charCodeAt(position); // tab | space | comma | BOM

	    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
	      ++position;
	    } else if (code === 10) {
	      // new line
	      ++position;
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else if (code === 13) {
	      // carriage return
	      if (body.charCodeAt(position + 1) === 10) {
	        position += 2;
	      } else {
	        ++position;
	      }

	      ++lexer.line;
	      lexer.lineStart = position;
	    } else {
	      break;
	    }
	  }

	  return position;
	}
	/**
	 * Reads a comment token from the source file.
	 *
	 * #[\u0009\u0020-\uFFFF]*
	 */


	function readComment(source, start, line, col, prev) {
	  var body = source.body;
	  var code;
	  var position = start;

	  do {
	    code = body.charCodeAt(++position);
	  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
	  code > 0x001f || code === 0x0009));

	  return new Tok(_tokenKind.TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
	}
	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
	 */


	function readNumber(source, start, firstCode, line, col, prev) {
	  var body = source.body;
	  var code = firstCode;
	  var position = start;
	  var isFloat = false;

	  if (code === 45) {
	    // -
	    code = body.charCodeAt(++position);
	  }

	  if (code === 48) {
	    // 0
	    code = body.charCodeAt(++position);

	    if (code >= 48 && code <= 57) {
	      throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
	    }
	  } else {
	    position = readDigits(source, position, code);
	    code = body.charCodeAt(position);
	  }

	  if (code === 46) {
	    // .
	    isFloat = true;
	    code = body.charCodeAt(++position);
	    position = readDigits(source, position, code);
	    code = body.charCodeAt(position);
	  }

	  if (code === 69 || code === 101) {
	    // E e
	    isFloat = true;
	    code = body.charCodeAt(++position);

	    if (code === 43 || code === 45) {
	      // + -
	      code = body.charCodeAt(++position);
	    }

	    position = readDigits(source, position, code);
	    code = body.charCodeAt(position);
	  } // Numbers cannot be followed by . or e


	  if (code === 46 || code === 69 || code === 101) {
	    throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
	  }

	  return new Tok(isFloat ? _tokenKind.TokenKind.FLOAT : _tokenKind.TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
	}
	/**
	 * Returns the new position in the source after reading digits.
	 */


	function readDigits(source, start, firstCode) {
	  var body = source.body;
	  var position = start;
	  var code = firstCode;

	  if (code >= 48 && code <= 57) {
	    // 0 - 9
	    do {
	      code = body.charCodeAt(++position);
	    } while (code >= 48 && code <= 57); // 0 - 9


	    return position;
	  }

	  throw (0, _syntaxError.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
	}
	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */


	function readString(source, start, line, col, prev) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code = 0;
	  var value = '';

	  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
	  code !== 0x000a && code !== 0x000d) {
	    // Closing Quote (")
	    if (code === 34) {
	      value += body.slice(chunkStart, position);
	      return new Tok(_tokenKind.TokenKind.STRING, start, position + 1, line, col, prev, value);
	    } // SourceCharacter


	    if (code < 0x0020 && code !== 0x0009) {
	      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
	    }

	    ++position;

	    if (code === 92) {
	      // \
	      value += body.slice(chunkStart, position - 1);
	      code = body.charCodeAt(position);

	      switch (code) {
	        case 34:
	          value += '"';
	          break;

	        case 47:
	          value += '/';
	          break;

	        case 92:
	          value += '\\';
	          break;

	        case 98:
	          value += '\b';
	          break;

	        case 102:
	          value += '\f';
	          break;

	        case 110:
	          value += '\n';
	          break;

	        case 114:
	          value += '\r';
	          break;

	        case 116:
	          value += '\t';
	          break;

	        case 117:
	          {
	            // uXXXX
	            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

	            if (charCode < 0) {
	              var invalidSequence = body.slice(position + 1, position + 5);
	              throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
	            }

	            value += String.fromCharCode(charCode);
	            position += 4;
	            break;
	          }

	        default:
	          throw (0, _syntaxError.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
	      }

	      ++position;
	      chunkStart = position;
	    }
	  }

	  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
	}
	/**
	 * Reads a block string token from the source file.
	 *
	 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
	 */


	function readBlockString(source, start, line, col, prev, lexer) {
	  var body = source.body;
	  var position = start + 3;
	  var chunkStart = position;
	  var code = 0;
	  var rawValue = '';

	  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
	    // Closing Triple-Quote (""")
	    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
	      rawValue += body.slice(chunkStart, position);
	      return new Tok(_tokenKind.TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
	    } // SourceCharacter


	    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
	      throw (0, _syntaxError.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
	    }

	    if (code === 10) {
	      // new line
	      ++position;
	      ++lexer.line;
	      lexer.lineStart = position;
	    } else if (code === 13) {
	      // carriage return
	      if (body.charCodeAt(position + 1) === 10) {
	        position += 2;
	      } else {
	        ++position;
	      }

	      ++lexer.line;
	      lexer.lineStart = position;
	    } else if ( // Escape Triple-Quote (\""")
	    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
	      rawValue += body.slice(chunkStart, position) + '"""';
	      position += 4;
	      chunkStart = position;
	    } else {
	      ++position;
	    }
	  }

	  throw (0, _syntaxError.syntaxError)(source, position, 'Unterminated string.');
	}
	/**
	 * Converts four hexadecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */


	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}
	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */


	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 // 0-9
	  : a >= 65 && a <= 70 ? a - 55 // A-F
	  : a >= 97 && a <= 102 ? a - 87 // a-f
	  : -1;
	}
	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */


	function readName(source, start, line, col, prev) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var position = start + 1;
	  var code = 0;

	  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122) // a-z
	  ) {
	    ++position;
	  }

	  return new Tok(_tokenKind.TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
	}


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TokenKind = void 0;

	/**
	 * An exported enum describing the different kinds of tokens that the
	 * lexer emits.
	 */
	var TokenKind = Object.freeze({
	  SOF: '<SOF>',
	  EOF: '<EOF>',
	  BANG: '!',
	  DOLLAR: '$',
	  AMP: '&',
	  PAREN_L: '(',
	  PAREN_R: ')',
	  SPREAD: '...',
	  COLON: ':',
	  EQUALS: '=',
	  AT: '@',
	  BRACKET_L: '[',
	  BRACKET_R: ']',
	  BRACE_L: '{',
	  PIPE: '|',
	  BRACE_R: '}',
	  NAME: 'Name',
	  INT: 'Int',
	  FLOAT: 'Float',
	  STRING: 'String',
	  BLOCK_STRING: 'BlockString',
	  COMMENT: 'Comment'
	});
	/**
	 * The enum type representing the token kinds values.
	 */

	exports.TokenKind = TokenKind;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DirectiveLocation = void 0;

	/**
	 * The set of allowed directive location values.
	 */
	var DirectiveLocation = Object.freeze({
	  // Request Definitions
	  QUERY: 'QUERY',
	  MUTATION: 'MUTATION',
	  SUBSCRIPTION: 'SUBSCRIPTION',
	  FIELD: 'FIELD',
	  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
	  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
	  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
	  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
	  // Type System Definitions
	  SCHEMA: 'SCHEMA',
	  SCALAR: 'SCALAR',
	  OBJECT: 'OBJECT',
	  FIELD_DEFINITION: 'FIELD_DEFINITION',
	  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
	  INTERFACE: 'INTERFACE',
	  UNION: 'UNION',
	  ENUM: 'ENUM',
	  ENUM_VALUE: 'ENUM_VALUE',
	  INPUT_OBJECT: 'INPUT_OBJECT',
	  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
	});
	/**
	 * The enum type representing the directive location values.
	 */

	exports.DirectiveLocation = DirectiveLocation;


/***/ })
/******/ ]);