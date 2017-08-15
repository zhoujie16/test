Vue.component('App', {
    template: `
    		<div>
    			<div>{{ count }}</div>
    			<div>{{ doneCount }}</div>
    			<button @click="increment" type="button" class="mui-btn mui-btn-blue">增加</button>
    			<button @click="decrement" type="button" class="mui-btn mui-btn-blue">减少</button>
    		</div>		
    `,
    data: function() {
        return {

        };
    },
    computed: {
        count: function() {
            return this.$store.state.count;
        },
        doneCount: function() {
            return this.$store.getters.doneCount;
        }
    },
    methods: {
        increment: function() {
            var self = this;
            setTimeout(function() {
                self.$store.commit('increment');
            }, 1000);
        },
        decrement: function() {
            this.$store.commit('decrement');
        }
    }
})