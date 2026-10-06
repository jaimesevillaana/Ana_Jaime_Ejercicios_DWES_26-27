
<script setup>
defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
defineEmits(['cerrar'])
</script>

<template>
    <div v-if="visible" class="fondo" @click.self="$emit('cerrar')">
        <article class="tarjeta">
            <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80"
                alt="Zapatillas deportivas blancas">
            <div class="info">
                <p class="etiqueta">NUEVA COLECCION</p>
                <h3>Urban Flow</h3>
                <p>Zapatillas ligeras, comodas y preparadas para tu ritmo.</p>
                <strong>99,99 EUR</strong>
                <ul>
                    <li>Parte superior transpirable</li>
                    <li>Suela con amortiguacion</li>
                    <li>Tallas 36 a 46</li>
                </ul>
                <button @click="$emit('cerrar')">Cerrar</button>
            </div>
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

.tarjeta {
    background: white;
    border-radius: 18px;
    max-width: 740px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
}

.tarjeta img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info {
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

.info strong {
    color: #2563eb;
    font-size: 24px;
}

ul {
    padding-left: 18px;
}

button {
    background: #2563eb;
    color: white;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
    align-self: flex-start;
}

@media (max-width: 650px) {
    .tarjeta {
        grid-template-columns: 1fr;
    }
}
</style>