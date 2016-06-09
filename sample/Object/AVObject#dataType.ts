/// <reference path="../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';

describe('Object', function () {
    it('#AVObject#dataType', function (done) {
        try {
            let testNumber: number = 13;
            let testString: string = 'here is a test string';
            let testDate: Date = new Date('2016-06-04');
            let testNumberArray: Array<number> = [1, 2, 3];
            let testStringArray: Array<string> = ['here', 'is', 'a', 'string', 'array'];
            let testObjectType: Object = { name: 'LeanCloud', url: 'https://leancloud.cn' };

            let testAVObject = new AV.Object('TestClass');
            testAVObject.set('testNumber', testNumber);
            testAVObject.set('testString', testString);
            testAVObject.set('testDate', testDate);
            testAVObject.set('testNumberArray', testNumberArray);
            testAVObject.set('testStringArray', testStringArray);
            testAVObject.set('testObject', testObjectType);

            testAVObject.save<AV.Object>().then(
                (data) => {
                    chai.assert.isNotNull(data.id);
                    done();
                }, (error) => {
                    if (error) throw error;
                    done();
                });
        }
        catch (e) {
            chai.assert.isNull(e);
        }
    });
});