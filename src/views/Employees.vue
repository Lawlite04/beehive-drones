<script setup>
import { Icon } from '@iconify/vue'
import { ref } from '@vue/reactivity'

import Layout from '../layouts/Layout.vue'
import BtnDropdown from '../components/BtnDropdown.vue'
import Pagination from '../components/Pagination.vue'
import Modal from '../components/Modal.vue'
import ModalAlert from '../components/ModalAlert.vue'

</script>
<template>
    <Layout>
        <div class="px-8 py-6">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <!-- Table -->
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption
                        class="px-5 pt-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Employees
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic temporibus est suscipit
                            consequatur, voluptatem explicabo. Non reiciendis labore tenetur!
                        </p>
                        <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                            <div class="flex gap-4 mt-4">
                                <BtnDropdown :countDataPaginate="countDataPaginate" @change-show-value="changeShowValue" />
                                <div class="relative">
                                    <input v-model="search" type="search" class="border rounded-md pl-8 pr-4 py-1.5 text-sm font-normal focus:outline-none focus:border-blue-500" placeholder="Search...">
                                    <Icon class="text-gray-500 w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2" icon="material-symbols:search-rounded" />
                                </div>
                            </div>
                            <button @click.prevent="onToggleModalCreate" class="flex justify-center items-center gap-1 bg-green-500 rounded-lg text-sm text-white font-medium px-4 py-2 hover:bg-green-500/90 focus:outline-none focus:ring-4 focus:ring-green-500/50 transition duration-200 ease-in-out">
                                <Icon class="w-6 h-6" icon="ic:round-plus" />
                                <span>Add</span>
                            </button>
                        </div>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Info User
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <!-- <span class="sr-only">Edit</span> -->
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="isLoading" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" colspan="6" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">
                                <div role="status" class="inline-block">
                                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </th>
                        </tr>
                        <tr v-else v-for="(employee, index) in employees" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" width="5%" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ ++index }}
                            </th>
                            <td class="px-6 py-4">
                                <p><b>NIK: </b>{{ employee.nik }}</p>
                                <p><b>Name: </b>{{ employee.name }}</p>
                                <p><b>Position: </b>{{ getPositionName(employee.position_id) }}</p>
                            </td>
                            <td class="px-6 py-4">
                                {{ employee.address }}
                            </td>
                            <td class="px-6 py-4">
                                <p><b>Email: </b>{{ employee.email }}</p>
                                <p><b>Phone: </b>{{ employee.phone }}</p>
                            </td>
                            <td class="px-6 py-4">
                                <a @click.prevent="onToggleModalEdit(employee._id, employee.nik, employee.name, employee.address, employee.phone, employee.email, (employee.position_id) ? employee.position_id._id : '')" href="#" class="font-medium text-blue-600 mr-1 dark:text-blue-500 hover:underline">Edit</a>
                                |
                                <a @click.prevent="onToggleModalDelete(employee._id)" href="#" class="font-medium text-red-600 ml-1 dark:text-blue-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Table -->

                <!-- Pagination -->
                <Pagination
                :datas="employees"
                :total="total"
                :pagination="pagination"
                :count-data-paginate="countDataPaginate"
                :countPagePaginate="countPagePaginate"
                :isPrevious="isPrevious"
                :isNext="isNext"
                @getList="getList"
                @onPrevious="Previous" 
                @onNext="Next"
                @getNumber="getNumber"
                />
                <!-- Pagination -->
            </div>
        </div>
    </Layout>

    <!-- Modal Add -->
    <Modal 
    title="Create Employee"
    :toggle="toggleModalCreate"
    @onToggle="onToggleModalCreate"
    @submitted="onAdd"
     >
        <template #modal_body>
            <div class="flex flex-wrap">
                <div class="mb-4 w-1/2 pr-2">
                    <label for="nik" class="block text-sm font-medium text-gray-600 mb-1">NIK</label>
                    <input id="nik" type="text" v-model="form.nik" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="name" class="block text-sm font-medium text-gray-600 mb-1">Name</label>
                    <input id="name" type="text" v-model="form.name" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pr-2">
                    <label for="address" class="block text-sm font-medium text-gray-600 mb-1">Address</label>
                    <textarea id="address" v-model="form.address" cols="30" rows="3" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="phone" class="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                    <input id="phone" type="tel" v-model="form.phone" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pr-2">
                    <label for="email" class="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <input id="email" type="tel" v-model="form.email" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="position" class="block text-sm font-medium text-gray-600 mb-1">Position</label>
                    <select id="position" v-model="form.position_id" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" selected>-- Select --</option>
                        <option v-for="(position, index) in positions" :key="index" :value="position._id">{{ position.code }} - {{ position.name }}</option>
                    </select>
                </div>
            </div>
        </template>
    </Modal>

    <!-- Modal Edit -->
    <Modal
    title="Edit Employee"
    :toggle="toggleModalEdit"
    @onToggle="onToggleModalEdit"
    @submitted="onUpdate"
     >
        <template #modal_body>
            <div class="flex flex-wrap">
                <div class="mb-4 w-1/2 pr-2">
                    <label for="nik_edit" class="block text-sm font-medium text-gray-600 mb-1">NIK_edit</label>
                    <input id="nik_edit" type="text" v-model="form.nik" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="name_edit" class="block text-sm font-medium text-gray-600 mb-1">Name_edit</label>
                    <input id="name_edit" type="text" v-model="form.name" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pr-2">
                    <label for="address_edit" class="block text-sm font-medium text-gray-600 mb-1">Address_edit</label>
                    <textarea id="address_edit" v-model="form.address" cols="30" rows="3" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="phone_edit" class="block text-sm font-medium text-gray-600 mb-1">Phone_edit</label>
                    <input id="phone_edit" type="tel" v-model="form.phone" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pr-2">
                    <label for="email_edit" class="block text-sm font-medium text-gray-600 mb-1">Email_edit</label>
                    <input id="email_edit" type="tel" v-model="form.email" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4 w-1/2 pl-2">
                    <label for="position_edit" class="block text-sm font-medium text-gray-600 mb-1">Position_edit</label>
                    <select id="position_edit" v-model="form.position_id" class="bg-gray-200 w-full px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" selected>-- Select --</option>
                        <option v-for="(position, index) in positions" :key="index" :value="position._id">{{ position.code }} - {{ position.name }}</option>
                    </select>
                </div>
            </div>
        </template>
    </Modal>

    <!-- Modal Delete -->
    <ModalAlert
    text="Are you sure you want to delete this employee?"
    :toggle="toggleModalDelete"
    @onToggle="onToggleModalDelete"
    @confirmed="onDelete"
    />

</template>

<script>
import authService from '../services/auth.service'
export default {
    data() {
        return {
            tokenAuth: authService.getTokenUser(),
            employees: [],
            currentEmployees: [],
            positions: [],
            total: 0,
            isLoading: false,
            pagination: 1,
            countDataPaginate: 10,
            toggleModalCreate: false,
            toggleModalEdit: false,
            toggleModalDelete: false,
            id: null,
            form: {
                nik: '',
                name: '',
                address: "",
                phone: "",
                email: "",
                position_id: '',
                isDeleted: false
            },
            search: '',
            timeout: null,
        };
    },
    mounted() {
        this.getList();
    },
    watch: {
        search(newVal) {
            this.searching(newVal)
        }
    },
    computed: {
        countPagePaginate() {
            return Math.ceil(this.total / this.countDataPaginate);
        },
        isPrevious() {
            return this.pagination != 1;
        },
        isNext() {
            return this.pagination != this.countPagePaginate;
        }
    },
    methods: {
        async getList() {
            this.isLoading = true;
            var urlBase = `http://13.214.194.163:5400/api/v1/employees/paging/${this.pagination}/${this.countDataPaginate}`;
            var urlBasePositions = `http://13.214.194.163:5400/api/v1/positions`;

            await this.axios.get(urlBase, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.tokenAuth}`,
                },
            }).then((response) => {
                this.currentEmployees = JSON.parse(JSON.stringify(response.data.data.results));
                this.employees = JSON.parse(JSON.stringify(response.data.data.results));
                this.total = response.data.data.total;
            }).catch((errors) => {
                console.log(errors);
            });

            // Positions
            await this.axios.get(urlBasePositions, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.tokenAuth}`,
                },
            }).then((response) => {
                this.positions = response.data.data;
            }).catch((errors) => {
                console.log(errors);
            });

            this.isLoading = false;
        },
        async onAdd(){
            this.isLoading = true
            var urlBase = `http://13.214.194.163:5400/api/v1/employees/create`;

            await this.axios.post(urlBase, this.form, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.tokenAuth}`,
                },
            }).then((response) => {
                console.log(response.data)
                alert(response.data)
            }).catch((errors) => {
                console.log(errors);
            });

            this.onToggleModalCreate(null)
            this.isLoading = false
        },
        async onUpdate(){
            this.isLoading = true
            var urlBase = `http://13.214.194.163:5400/api/v1/employees/update/${this.id}`;
    
            await this.axios.post(urlBase, this.form, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.tokenAuth}`,
                },
            }).then((response) => {
                console.log(response.data)
                alert(response.data)
            }).catch((errors) => {
                console.log(errors);
            });
    
            this.onToggleModalEdit()
            this.isLoading = false
        },
        async onDelete(id) {
            this.isLoading = true
            var urlBase = `http://13.214.194.163:5400/api/v1/employees/delete/${id}`;

            await this.axios.delete(urlBase, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.tokenAuth}`,
                },
            }).then((response) => {
                console.log(response.data)
                alert(response.data)
            }).catch((errors) => {
                console.log(errors);
            });

            this.onToggleModalDelete(null)
            this.isLoading = false
        },
        searching(param) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                if(param) {
                    param = param.toLowerCase()
                    this.employees = this.currentEmployees.filter((el) => {
                        return Object.values(el).some((val) => 
                            String(val).toLowerCase().includes(param)
                        );
                    })
                } else {
                    this.employees = this.currentEmployees
                }
            }, 1000);
        },
        resetForm() {
            this.form.nik= '';
            this.form.name= '';
            this.form.address= "";
            this.form.phone= "";
            this.form.email= "";
            this.form.position_id= '';
        },
        onToggleModalCreate() {
            this.toggleModalCreate = !this.toggleModalCreate
        },
        onToggleModalEdit(id = null, nik = null, name = null, address = null, phone = null, email = null, position_id = null) {
            this.id = id
            this.toggleModalEdit = !this.toggleModalEdit
            if(this.toggleModalEdit) {
                this.form.nik= nik;
                this.form.name= name;
                this.form.address= address;
                this.form.phone= phone;
                this.form.email= email;
                this.form.position_id= position_id;
            }else {
                this.resetForm()
            }
        },
        onToggleModalDelete(param) {
            this.id = param
            this.toggleModalDelete = !this.toggleModalDelete
        },
        Previous() {
            if (this.isPrevious) {
                this.pagination -= 1;
                this.getList();
            }
        },
        Next() {
            if (this.isNext) {
                this.pagination += 1;
                this.getList();
            }
        },
        getNumber(number) {
            this.pagination = number;
            this.getList();
        },
        changeShowValue(value) {
            this.pagination = 1;
            this.countDataPaginate = value;
            this.getList();
        },
        getPositionName(position) {
            return (position) ? position.name : '-'
        }
    },
}
</script>