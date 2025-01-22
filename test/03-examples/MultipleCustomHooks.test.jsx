import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('pruebas en <MultipleCustomHook/>', () => {
    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
            error: null,
        })
        render(<MultipleCustomHooks/> );
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText('Información de Pokemon') )

        const nextButton = screen.getByRole('button', { name: 'Siguiente' })
        
        // screen.debug();
    });

    test('debe de mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{ id: 1, name: 'ricardo' }],
            isLoading: false,
            hasError: null,
            error: null,
        });
        render(<MultipleCustomHooks/> );

        // screen.debug();
    });

    test('debe de llamar la función incrementar', () => {
        useFetch.mockReturnValue({
            data: [{ id: 1, name: 'ricardo' }],
            isLoading: false,
            hasError: null,
            error: null,
        });

        render(<MultipleCustomHooks/> );

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled()
    });
});