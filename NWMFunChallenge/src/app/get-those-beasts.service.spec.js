"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var get_those_beasts_service_1 = require("./get-those-beasts.service");
describe('GetThoseBeastsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [get_those_beasts_service_1.GetThoseBeastsService]
        });
    });
    it('should be created', testing_1.inject([get_those_beasts_service_1.GetThoseBeastsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=get-those-beasts.service.spec.js.map