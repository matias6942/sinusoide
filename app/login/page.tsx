import { Metadata } from "next"

import {authenticate}  from '@app/lib/actions'

export const metadata: Metadata = {
    title: 'Regístrate!',
}

export default function Page() {
    return (
    <h1>Hello, this is the Loggin Page!</h1>
    <form action={authenticate}>
    </form>
    )
}