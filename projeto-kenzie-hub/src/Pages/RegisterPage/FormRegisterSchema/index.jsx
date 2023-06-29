import { z } from "zod"

export const FormRegisterSchema = z.object({
    name: z.string()
        .nonempty("O nome é obrigatório")
        .min(4, "O nome precisa conter no mínimo 4 caracteres."),
    email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("O email fornecido é inválido"),
    password: z.string()
        .nonempty("A senha é obrigatória")
        .min(8, "A senha precisa conter no mínimo 8 caracteres.")
        .regex(new RegExp(".*[A-Z].*"), "Deve conter uma letra maiuscula")
        .regex(new RegExp(".*[a-z].*"), "Deve conter uma letra minuscula")
        .regex(new RegExp(".*\\d.*"), "Deve conter um número")
        .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "Deve conter um caractere especial"),
    confirm: z.string()
        .nonempty("A confirmação é obrigatória"),
    bio: z.string()
        .nonempty("A biografia é obrigatória."),
    contact: z.string()
        .nonempty("O contato é obrigatório"),
    course_module: z.string()
        .nonempty("O módulo é obrigatório")
}).refine(({ password, confirm }) => confirm === password, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"]
})