import Header from "../components/misc/layout/header"
import "./login.css";
import { lusitana } from '@/app/ui/fonts';


export default function Login() {
    return(
        <>
        <Header />
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`} id="title">
            Login
        </h1>
        <main>

        </main>
        </>
    )
}