export const friutMixin = {
    data: function(){
        return{
            fruits: ['Apple', 'Banana', 'Mango'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created(){
        console.log('Created');
    }
};