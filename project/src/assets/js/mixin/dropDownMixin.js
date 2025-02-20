export default {
    data() {
        return {
            // 드롭다운이 열렸는지 여부
            isOpen: false, 
        };
    },
    methods: {
        toggleDropdown() {
            // 드롭다운 열고 닫기
            this.isOpen = !this.isOpen; 
        },
        closeDropdown(event) {
            // 드롭다운 외부 클릭 시 닫힘
            if (!this.$el.contains(event.target)) {
                this.isOpen = false; 
            }
        }
    },
    mounted() {
        // 클릭 이벤트 추가
        document.addEventListener("click", this.closeDropdown); 
    },
    beforeUnmount() {
        // 컴포넌트 제거 시 이벤트 제거
        document.removeEventListener("click", this.closeDropdown); 
    }
}