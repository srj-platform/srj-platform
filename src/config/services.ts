import { AuthService } from "@/core/auth/auth.service";
import { LoginUseCase } from "@/application/auth/login.use-case";
import { bootstrapAuthentication } from "@/bootstrap/authentication.bootstrap";

const userRepository = bootstrapAuthentication();

export const authService = new AuthService(userRepository);

export const loginUseCase = new LoginUseCase(authService);

export { userRepository };