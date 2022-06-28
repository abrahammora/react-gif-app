import { render, screen } from "@testing-library/react";
import { Gifitem } from "../../src/components/Gifitem";

describe('Pruebas en <Gifitem />', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitam.jpg'
    test('should match snapshot', () => {
        const {container} =  render(<Gifitem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show image with url and alt', () => {
        render(<Gifitem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });


    test('should be the title in the component', () => { 
        render(<Gifitem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});