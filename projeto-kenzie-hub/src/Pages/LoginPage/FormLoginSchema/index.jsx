import { z } from "zod";

export const FormLoginSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatório").email("O email fornecido é inválido"),
    password: z.string().nonempty("A senha é obrigatória").min(6, "A senha precisa conter no mínimo 6 caracteres."),
})