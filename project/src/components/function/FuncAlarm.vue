<template>
        <div class="alarm new" id="">
        <button data-name="alarmList" @click="itemOpen">
            <Bell />
        </button>
        <div class="alarm-list" id="alarmList">
            <strong class="alarm-tit">Alarm</strong>
            <button type="button" class="modal-close" data-name="alarmList"><i data-lucide="x"></i></button>
            <ul>
                <li class="empty">
                    <i data-lucide="bell-off"></i>
                    There are no new alarms
                </li>
                <li class="new">
                    <a href="#" title="Hong Gil-dong requested firewall approval.">
                        <span class="date">2024.11.30 13:13 (999일전)</span>
                        <div class="alarm-txt">
                            <strong>[approval] alarm</strong>
                            <p>Hong Gil-dong requested firewall approval.</p>
                        </div>
                    </a>
                </li>
                <li class="new">
                    <a href="#" title="Hong Gil-dong requested firewall approval.">
                        <span class="date">2024.11.30 13:13 (999일전)</span>
                        <div class="alarm-txt">
                            <strong>[approval] alarm</strong>
                            <p>Hong Gil-dong requested firewall approval.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" title="Hong Gil-dong requested firewall approval.">
                        <span class="date">2024.11.30 13:13 (999일전)</span>
                        <div class="alarm-txt">
                            <strong>[approval] alarm</strong>
                            <p>Hong Gil-dong requested firewall approval.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" title="Hong Gil-dong requested firewall approval.">
                        <span class="date">2024.11.30 13:13 (999일전)</span>
                        <div class="alarm-txt">
                            <strong>[approval] alarm</strong>
                            <p>Hong Gil-dong requested firewall approval.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Bell } from 'lucide-vue-next';
export default {
    name: 'FuncAlarm',
    components: {
        Bell
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        itemOpen (e){
            console.log(e);
        }
    }
}
</script>

<style scope>
.alarm-list {
    position: absolute;
    top: 100%;
    right: 0;
    width: 260px;
    height: 320px;
    margin-top: 10px;
    padding: 18px 10px 18px 16px;
    overflow: hidden;
    text-align: left;
    border: 1px solid var(--lightGray);
    border-radius: 4px;
    box-shadow: 0 0 10px var(--lightShadow);
    background: var(--bgContent);
}
.alarm-list .alarm-tit {
    display: block;
    font-size: 13px;
}
.alarm-list .modal-close {
    position: absolute;
    top: 5px;
    right: 12px;
}
.alarm-list ul {
    height: 100%;
    margin-top: 18px;
    padding: 0 6px 30px 15px;
    overflow: auto;
}
.alarm-list ul::-webkit-scrollbar {
    width: 4px;
}
.alarm-list ul::-webkit-scrollbar-thumb {
    background: var(--lightGray);
    border-radius: 10px;
}
.alarm-list ul::-webkit-scrollbar-track {
    background: var(--bgContent);
}
.alarm-list li {
    position: relative;
}
.alarm-list li:not(.empty)::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -14px;
    width: 8px;
    height: 8px;
    border: 2px solid var(--gray);
    border-radius: 50%;
}
.alarm-list li + li {
    margin-top: 12px;
}
.alarm-list .empty {
    margin-left: -15px;
    padding: 28px 0;
    font-size: 11px;
    border-radius: 8px;
}
.alarm-list .empty svg {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
}
.alarm-list .date {
    display: block;
    margin-bottom: 8px;
    font-size: 10px;
    color: var(--gray);
}
.alarm-list .alarm-txt {
    padding: 10px;
    background: var(--whiteGray);
    border-radius: 8px;
}
.alarm-list li.new .date {
    color: var(--point);
}
.alarm-list li.new::after {
    border-color: var(--point);
}
.alarm-list li.new .alarm-txt {
    background: var(--bgColor);
}
</style>