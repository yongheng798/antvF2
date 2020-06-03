<template>
    <div>
        <ul>
            <li v-for="item in saleProducts">
                <span>{{item.name}}</span>
                <em>$ {{item.price}}</em>
            </li>
        </ul>
    </div>
    <button @click="reducePrice(5)"></button>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    data(){
        return{

        }
    },
    props: ['products'],
    computed:{
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ]),
    },
    methods:{
        ...mapActions([
            'reducePrice'
        ])
    }
}
</script>

<style scoped>

</style>