import { createRouter, createWebHistory} from 'vue-router';
import Connection from '@/views/Connection.vue';
import Inscription from '@/views/Inscription.vue';
import Product from '@/views/Product.vue';

const routes = [
{
    name: 'Connection',
    path: '/',
    component: Connection,
}, 
{
    name: 'Inscription',
    path: '/Inscription',
    component: Inscription,

},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;