import { createWebHistory, createRouter } from "vue-router";
import RequestFirewallPolicyView from '@/views/request/RequestFirewallPolicyView.vue'

const routes = [
    {
        path: '/',
        redirect: '/request/RequestFirewallPolicy'
        // 초기진입시(/경로) 해당 경로로 리다이렉트
    },
    {
        path: '/request/RequestFirewallPolicy',
        name: 'RequestFirewallPolicyView',
        component: RequestFirewallPolicyView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;