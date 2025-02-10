export default {
    data() {
        return {
            isOpen: false, // 드롭다운이 열렸는지 여부
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen; // 드롭다운 열고 닫기
        },
        closeDropdown(event) {
            if (!this.$el.contains(event.target)) {
                this.isOpen = false; // 드롭다운 외부 클릭 시 닫힘
            }
        }
    },
    mounted() {
        document.addEventListener("click", this.closeDropdown); // 클릭 이벤트 추가
    },
    beforeUnmount() {
        document.removeEventListener("click", this.closeDropdown); // 컴포넌트 제거 시 이벤트 제거
    }
}