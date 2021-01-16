import {handleSubmit} from "../src/client/js/formHandler"
import "babel-polyfill";

  
describe("submit effective testing", () => {
    
    test("handleSubmit() function testing", () => {
        
        expect(handleSubmit).toBeDefined();
    })
});