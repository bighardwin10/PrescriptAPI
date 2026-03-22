import { AutoRouter } from "itty-router"
const router = AutoRouter()
// addEventListener("fetch", event => {
//     event.respondWith(router.ha)
// })

router.get("/",checkService).get("/prescript",getPrescript).get("/prescripts",getPrescripts)

async function checkService() {
    return new Response(JSON.stringify({"status": "success","data": "","message": "服务正常运行"}),{headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }})
}

async function getPrescript() {
    const resp = await fetch("https://cdn.jsdelivr.net/gh/bighardwin10/PrescriptAPI@latest/prescripts.json")
    const prescripts = await resp.json()
    return new Response(JSON.stringify({"status": "success","data": prescripts[Math.floor(Math.random() * prescripts.length)],"message": "部分指令由Deepseek编写，剩余来自xiaomu1999f-cpu.github.io与nyos.dev"}),{headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }})
}

async function getPrescripts() {
    const resp = await fetch("https://cdn.jsdelivr.net/gh/bighardwin10/PrescriptAPI@latest/prescripts.json")
    return new Response(JSON.stringify({"status": "success","data": await resp.json()}))
}

export default router