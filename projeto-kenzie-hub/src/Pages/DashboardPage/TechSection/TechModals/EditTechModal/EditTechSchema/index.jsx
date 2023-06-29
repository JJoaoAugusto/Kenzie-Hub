import { z } from "zod";

export const EditTechSchema = z.object({
    status: z.string().nonempty("O status é obrigatória"),
})