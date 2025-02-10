<template>
    <LanguageSelect 
    :selectID="selectID" 
    :selectOption="selectOption" />
</template>
  
<script>
import LanguageSelect from '@/components/function/LanguageSelect.vue'
export default {
    name: 'FuncLanguage',
    components: {
        LanguageSelect
    },
    data() {
        return {
            selectID: 'languageSelect',
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