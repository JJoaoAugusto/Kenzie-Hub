import { z } from "zod";

export const CreateTechSchema = z.object({
    title: z.string()
        .nonempty("O nome é obrigatório"),
    status: z.string()
        .nonempty("O status é obrigatória"),
})