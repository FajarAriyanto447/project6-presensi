import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import Link from "@/components/Link.vue";
import Login from "@/components/Login.vue";
import Registrasi from "@/components/Register.vue";
import Navbar from "@/components/Navbar.vue";
import Dosen from "@/components/Dosen.vue";
import PresensiMahasiswa from "@/components/PresensiMahasiswa.vue";
import StatikMahasiswa from "@/components/StatikMahasiswa.vue";
import PresensiDosen from "@/components/PresensiDosen.vue";
import StatikDosen from "@/components/StatikDosen.vue";

Vue.use(Router)

function configRouters() {
    return [
        {
            path: "/",
            name: "Helloworld",
            component: HelloWorld
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: " Registrasi",
            component: Registrasi
        },

        {
            path: "/link",
            name: "Link",
            component: Link
        },
        {
            path: "/navbar",
            name: "Navbar",
            component: Navbar
        },
        {
            path: "/dosen",
            name: "Dosen",
            component: Dosen
        },
        {
            path: "/presensiMahasiswa",
            name: "PresensiMahasiswa",
            component: PresensiMahasiswa
        },
        {
            path: "/statikMahasiswa",
            name: "StatikMahasiswa",
            component: StatikMahasiswa
        },
        {
            path: "/presensiDosen",
            name: "PresensiDosen",
            component: PresensiDosen
        },
        {
            path: "/statikDosen",
            name: "StatikDosen",
            component: StatikDosen
        },
    ]
}

const link = new Router({
    mode: "history",
    routes: configRouters(),
})

export default link;
