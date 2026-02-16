'use server'

import { signIn, signOut } from './auth'

export async function signInAction() {
  await signIn('auth-hub', { redirectTo: '/' })
}

export async function devSignInAction(formData: FormData) {
  const email = formData.get('email') as string
  await signIn('dev-credentials', { email, redirectTo: '/' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/login' })
}
