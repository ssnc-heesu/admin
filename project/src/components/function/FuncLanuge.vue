<template>
    <Select 
    v-model="selectedValue" 
    :selectID="selectID" 
    :data-value="selectValue" 
    :selectOption="selectOption" />
</template>
  
<script>
import Select from '@/components/items/SelectItem.vue'
export default {
    name: 'FuncLanuge',
    components: {
        Select
    },
    data() {
        return {
            selectedValue: '',
            selectID: 'languageSelect',
            selectValue: '',
            selectOption: [
                { 
                    dataText: 'select01',
                    dataValue: 'selectOption01'
                },
                { 
                    dataText: 'select02',
                    dataValue: 'selectOption02'
                },
                { 
                    dataText: 'select03',
                    dataValue: 'selectOption03'
                }
            ]
        }
    },
}
</script>