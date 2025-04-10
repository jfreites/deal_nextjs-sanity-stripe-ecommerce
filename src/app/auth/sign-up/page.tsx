import { getCurrentSession, loginUser, registerUser } from "@/actions/auth"
import SignUp from "@/components/auth/SignUp"
import { redirect } from "next/navigation"
import zod from "zod"

const SignUpSchema = zod.object({
    email: zod.string().email({ message: 'Email is required' }),
    password: zod.string().min(6, { message: 'Password is required' }),
})

const SignUpPage = async () => {
    const { user } = await getCurrentSession()
    if (user) {
        return redirect('/')
    }

    const action = async (prevState: any, formData: FormData) => {
        'use server'
        console.log(prevState, formData)
        const parsed = SignUpSchema.safeParse(Object.fromEntries(formData))
        if (!parsed.success) {
            return {
                message: 'Invalid form data'
            }
        }

        const { email, password } = parsed.data
        const { user, error } = await registerUser(email, password)

        if (error) {
            return {
                message: error
            }
        } else if (user) {
            await loginUser(email, password)
            return redirect('/')
        }
    }

  return <SignUp action={action} />
}

export default SignUpPage