import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from "../../src/09-useContext/context/userContext";

describe('Pruebas en <LoginPage/>', () => {
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    });

    test('debe de llamar el setUser cuando se hace click en el botón', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const boton = screen.getByRole('button');
        fireEvent.click(boton);
        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": "123", "name": "JUan"});
    });
});