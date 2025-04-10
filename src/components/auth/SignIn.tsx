'use client'

import React, { useActionState } from "react"
import Form from 'next/form'

const initialState = {
    message: '',
}

type SignInProps = {
    action: (prevState: any, formData: FormData) => Promise<{message: string} | undefined>
}

const SignIn = ({ action }: SignInProps) => {
    const [state, formAction, isPending] = useActionState(action, initialState)

  return (
    <Form action={formAction} className="max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">
            Welcome back!
        </h1>
        <p className="text-center text-sm text-rose-600 font-semibold mb-2">🔥 MEMBER EXCLUSIVE 🔥</p>
        <p className="text-center text-sm text-gray-600 mb-6">Sign in to access your exclusive member offers!</p>

        <div className="space-y-6">
            <div className="space-y-2">
                <label 
                    htmlFor="email" 
                    className="block text0sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors" 
                    placeholder="Enter your email"
                />
            </div>

            <div className="space-y-2">
                <label 
                        htmlFor="password" 
                        className="block text0sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        autoComplete="new-password"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors" 
                        placeholder="Create a password"
                    />
            </div>

            <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">⚡️ Members save an extra 15% on all orders</p>
                <p className="text-xs text-gray-500 mb-2">🚚 Plus get free shipping on orders over $25</p>
            </div>

            <button type="submit" disabled={isPending} className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-media flex items-center justify-center ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isPending ? (
                    <React.Fragment>
                        <svg className="animate-spin h-4 w-4 mr-3 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
                            <path d="M4 12a8 8 0 1 1 16 0" fill="currentColor" />
                        </svg>
                        <span>Signing in...</span>
                    </React.Fragment>
                ) : ( 'SIGN IN' )}
            </button>

            {state?.message && state.message.length > 0 && (
                <p className="text-sm text-rose-600 font-semibold text-center mt-2">{state.message}</p>
            )}
        </div>
    </Form>
  )
}

export default SignIn
