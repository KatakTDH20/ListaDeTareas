const inst = {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    computed: {
        porcentajeCompletado() {
            if (this.tareas.length === 0) return 0;
            const completadas = this.tareas.filter(tarea => tarea.completada).length;
            return (completadas / this.tareas.length) * 100;
        }
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea && !this.tareas.some(tarea => tarea.nombre === this.nuevaTarea)) {
                this.tareas.push({ nombre: this.nuevaTarea, completada: false });
                this.nuevaTarea = '';
            }
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
        }
    }
};

Vue.createApp(inst).mount('#app');
