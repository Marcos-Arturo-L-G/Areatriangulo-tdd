import { areaT } from "./areaT";

describe('areaT unit test',()=>{
    it ('should area 2, 2 = 2',()=>{
        let result;
        result = areaT(2, 2);
        expect(result).toBe(2);
    })

    it ('should area 5, 5 = 12.5',()=>{
        let result;
        result = areaT(5, 5);
        expect(result).toBe(12.5);
    })

    it ('should area 3, -2 = -3',()=>{
        let result;
        result = areaT(3, -2);
        expect(result).toBe(-3);
    })

    it ('should area -4, -2 = 4',()=>{
        let result;
        result = areaT(-4, -2);
        expect(result).toBe(4);
    })

    it ('should area 0.5, 0.78 = 0.195',()=>{
        let result;
        result = areaT(0.5, 0.78);
        expect(result).toBe(0.195);
    })
})