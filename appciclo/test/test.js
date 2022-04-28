import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';
import CambioContraScreen from '../src/screens/CambioContraScreen';
import CrearGrupoScreen from '../src/screens/CrearGrupoScreen';
import CrearItinerarioScreen from '../src/screens/CrearItinierarioScreen';
import CrearReporteScreen from '../src/screens/CrearReporteScreen';
import CrearUsuaScreen from '../src/screens/CrearUsuaScreen';
import EditarItinerarioScreen from '../src/screens/EditarItinerarioScreen';
import EditarUsuarioScreen from '../src/screens/EditarUsuarioScreen';
import EliminarCuenta from '../src/screens/EliminarCuentaScreen';
import EliminarItinerario from '../src/screens/EliminarItinerario';
import IngresarGPrivado from '../src/screens/IngresarGPrivado';
import IngresarGPublico from '../src/screens/IngresarGPublico';
import MenUsuarioScreen from '../src/screens/MenUsuarioScreen';
import PerfilScreen from '../src/screens/PerfilScreen';
import RecuperarContScreen from '../src/screens/RecuperarContScreen';
import ReporteScreen from '../src/screens/ReporteScreen';
import VerItinerarioScreen from '../src/screens/VerItinerarioScreen';
import VincularItinerario from '../src/screens/VincularItinerario';;

let componentLogin;
let componentCambioContraScreen;
let componentCrearGrupoScreen;
let componentCrearItinerarioScreen;
let componentCrearReporteScreen;
let componentCrearUsuaScreen;
let componentEditarItinerarioScreen;
let componentEditarUsuarioScreen;
let componentEliminarCuenta;
let componentEliminarItinerario;
let componentIngresarGPrivado;
let componentIngresarGPublico;
let componentMenUsuarioScreen;
let componentPerfilScreen;
let componentRecuperarContScreen;
let componentReporteScreen;
let componentVerItinerarioScreen;
let componentVincularItinerario;

describe("Render de las app", () => {
    beforeEach(() => {
        componentLogin = render(<LoginScreen />);
        componentCambioContraScreen = render(<CambioContraScreen />);
        componentCrearGrupoScreen = render(<CrearGrupoScreen />);
        componentCrearItinerarioScreen = render(<CrearItinerarioScreen />);
        componentCrearReporteScreen = render(<CrearReporteScreen />);
        componentCrearUsuaScreen = render(<CrearUsuaScreen />);
        componentEditarItinerarioScreen = render(<EditarItinerarioScreen />);
        componentEditarUsuarioScreen = render(<EditarUsuarioScreen />);
        componentEliminarCuenta = render(<EliminarCuenta />);
        componentEliminarItinerario = render(<EliminarItinerario />);
        componentIngresarGPrivado = render(<IngresarGPrivado />);
        componentIngresarGPublico = render(<IngresarGPublico />);
        componentMenUsuarioScreen = render(<MenUsuarioScreen />);
        componentPerfilScreen = render(<PerfilScreen />);
        componentRecuperarContScreen = render(<RecuperarContScreen />);
        componentReporteScreen = render(<ReporteScreen />);
        componentVerItinerarioScreen = render(<VerItinerarioScreen />);
        componentVincularItinerario = render(<VincularItinerario />);
    });
    it('Renderizado Login', () => {
        expect(componentLogin).toBeDefined();
    });
    it('Renderizado Cambiar Contraseña', () => {
        expect(componentCambioContraScreen).toBeDefined();
    });
    it('Renderizado Crear Grupo', () => {
        expect(componentCrearGrupoScreen).toBeDefined();
    });
    it('Renderizado Crear Itinerario', () => {
        expect(componentCrearItinerarioScreen).toBeDefined();
    });
    it('Renderizado Crear Reporte', () => {
        expect(componentCrearReporteScreen).toBeDefined();
    });
    it('Renderizado Crear Usuario', () => {
        expect(componentCrearUsuaScreen).toBeDefined();
    });
    it('Renderizado Editar Itinerario', () => {
        expect(componentEditarItinerarioScreen).toBeDefined();
    });
    it('Renderizado Editar Usuario', () => {
        expect(componentEditarUsuarioScreen).toBeDefined();
    });
    it('Renderizado Eliminar Cuenta', () => {
        expect(componentEliminarCuenta).toBeDefined();
    });
    it('Renderizado Eliminar Itinerario', () => {
        expect(componentEliminarItinerario).toBeDefined();
    });
    it('Renderizado Ingresar Grupo Privado', () => {
        expect(componentIngresarGPrivado).toBeDefined();
    });
    it('Renderizado Ingresar Grupo Publico', () => {
        expect(componentIngresarGPublico).toBeDefined();
    });
    it('Renderizado Menú Usuario', () => {
        expect(componentMenUsuarioScreen).toBeDefined();
    });
    it('Renderizado Perfil', () => {
        expect(componentPerfilScreen).toBeDefined();
    });
    it('Renderizado Recuperar Contraseña', () => {
        expect(componentRecuperarContScreen).toBeDefined();
    });
    it('Renderizado Vista Reportes', () => {
        expect(componentReporteScreen).toBeDefined();
    });
    it('Renderizado Ver Itinerario', () => {
        expect(componentVerItinerarioScreen).toBeDefined();
    });
    it('Renderizado Vincular Itinerario', () => {
        expect(componentVincularItinerario).toBeDefined();
    });
});