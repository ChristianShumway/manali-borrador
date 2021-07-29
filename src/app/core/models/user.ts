export interface User {
  apellidoMaterno: string;
  apellidoPaterno: string;
  cambiarContrasena?: number;
  contrasena: any;
  email: string;
  fechaCreacion?: string;
  idUsuario?: number;
  nombre: string;
  telefono: string;
  tipoCuenta: number;
  tokenApple?: string;
}
