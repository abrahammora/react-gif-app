import { render , screen, fireEvent} from "@testing-library/react";
import { GiftExpertApp } from '../src/GiftExpertApp'


describe('Test in <GifExpertApp></GifExpertApp>', () => { 
    test('should first', () => {         
        render( <GiftExpertApp />)
    });
});