import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  async function onSubmit(formData: any) {
    const status = await signIn('credentials', { phoneNumber: formData.phoneNumber, code: formData.code, redirect: false, callbackUrl: '/' });

    console.log('opa, bão?', status)

    if (status && status.error) {
      alert(status?.error)
    }
  }

  if (session) {
    return (
      <>

        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <p>
        Not signed in
      </p>
      <br />
      <button onClick={() => onSubmit({ phoneNumber: '34996307984', code: '1234' })}>Sign in (right)</button>
      <br />
      <button onClick={() => onSubmit({ phoneNumber: '12345678900', code: '4321' })}>Sign in (wrong)</button>
    </>
  )
}