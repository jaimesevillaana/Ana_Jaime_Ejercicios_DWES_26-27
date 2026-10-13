<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
defineEmits(['cerrar'])

const modelos = [
    {
        nombre: 'Urban Flow',
        descripcion: 'Para cada dia.',
        precio: '79,99 EUR',
        imagen: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80'
    },
    {
        nombre: 'Trail Force',
        descripcion: 'Para salir del asfalto.',
        precio: '109,99 EUR',
        imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
    },
    {
        nombre: 'Sprint One',
        descripcion: 'Para alcanzar tus metas.',
        precio: '94,99 EUR',
        imagen: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
    },
    {
        nombre: 'Cloud Step',
        descripcion: 'Como caminar sobre una nube.',
        precio: '89,99 EUR',
        imagen: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80'
    },
    {
        nombre: 'Street Flex',
        descripcion: 'Estilo urbano para tu dia a dia.',
        precio: '99,99 EUR',
        imagen: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
    }
]
</script>

<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="catalogo">
            <header class="cab-mod">
                <div>
                    <p class="etiqueta">5 MODELOS</p>
                    <h3>Nuestras zapatillas</h3>
                </div>
                <button class="cerrar" @click="$emit('cerrar')">Cerrar</button>
            </header>
            <ul class="lista">
                <li v-for="modelo in modelos" :key="modelo.nombre" class="modelo">
                    <img :src="modelo.imagen" :alt="modelo.nombre">
                    <div class="info">
                        <h4>{{ modelo.nombre }}</h4>
                        <p>{{ modelo.descripcion }}</p>
                        <strong>{{ modelo.precio }}</strong>
                    </div>
                </li>
            </ul>
        </article>
    </div>
</template>

<style scoped>
.fondo {
    position: fixed;
    inset: 0;
    background: rgba(23, 32, 51, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 100;
}

.catalogo {
    background: white;
    border-radius: 18px;
    max-width: 760px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 28px;
}

.cab-mod {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.etiqueta {
    color: #2563eb;
    font-weight: bold;
    margin: 0;
}

h3 {
    margin: 0;
    font-size: 26px;
}

.cerrar {
    background: none;
    color: #172033;
    border: 1px solid #172033;
    padding: 8px 16px;
    cursor: pointer;
}

.lista {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

.modelo {
    background: #eff6ff;
    border-radius: 12px;
    overflow: hidden;
}

.modelo img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

h4 {
    margin: 0;
    font-size: 18px;
}

.info p {
    margin: 0;
    color: #172033;
}

.info strong {
    color: #2563eb;
    font-size: 18px;
}

@media (max-width: 600px) {
    .lista {
        grid-template-columns: 1fr;
    }
}
</style>