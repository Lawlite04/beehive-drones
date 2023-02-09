<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6">
        <router-link :to="{name: 'Positions'}" class="card">
            <div>
                <div class="card-number">                    
                    <div v-if="isLoading" role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else>{{ totalPositions }}</div>
                </div>
                <div class="card-text">Positions</div>
            </div>
            <div>
                <Icon class="card-icon" icon="mdi:account-star" />
            </div>
        </router-link>
        <router-link :to="{name: 'Employees'}" class="card">
            <div>
                <div class="card-number">
                    <div v-if="isLoading" role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else>{{ totalEmployees }}</div>
                </div>
                <div class="card-text">Employees</div>
            </div>
            <div>
                <Icon class="card-icon" icon="clarity:employee-group-solid" />
            </div>
        </router-link>
        <router-link :to="{name: 'Sallarys'}" class="card">
            <div>
                <div class="card-number">
                    <div v-if="isLoading" role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else>{{ totalSallarys }}</div>
                </div>
                <div class="card-text">Sallarys</div>
            </div>
            <div>
                <Icon class="card-icon" icon="ri:money-dollar-circle-fill" />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            totalPositions: 0,
            totalEmployees: 0,
            totalSallarys: 0,
            isLoading: false
        }
    },
    mounted() {
        this.getTotal()
    },
    methods: {
        async getTotal() {
            this.isLoading = true;
            var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg4NmRiODEwY2E1M2Y1YzZlZjc3ZTciLCJuYW1lIjoiSFJEIEJlZWhpdmUiLCJlbWFpbCI6ImhyZEBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3NTg2MTU3NiwiZXhwIjoxNjc2NDY2Mzc2fQ.gxqiyKt25bkuZZr8Z92_jXhE4O-mXN8JkapU0Kf4Gvk";
            var urlBasePositions = `http://13.214.194.163:5400/api/v1/positions/paging/1/10`;
            var urlBaseEmployees = `http://13.214.194.163:5400/api/v1/employees/paging/1/10`;
            var urlBaseSallarys = `http://13.214.194.163:5400/api/v1/sallarys/paging/1/10`;

            // total Positions
            await this.axios.get(urlBasePositions, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                this.totalPositions = response.data.data.total;
            }).catch((errors) => {
                console.log(errors);
            });

            // total Employees
            await this.axios.get(urlBaseEmployees, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                this.totalEmployees = response.data.data.total;
            }).catch((errors) => {
                console.log(errors);
            });

            // total Sallarys
            await this.axios.get(urlBaseSallarys, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                this.totalSallarys = response.data.data.total;
            }).catch((errors) => {
                console.log(errors);
            });


            this.isLoading = false;
        }
    }
}
</script>

