/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
  {
    id: 1,
    title: "Call with Dave",
    start: new Date(y, m, 1),
    allDay: true,
    className: "bg-red",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 2,
    title: "Lunch meeting",
    start: new Date(y, m, d - 1, 10, 30),
    allDay: true,
    className: "bg-orange",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 3,
    title: "All day conference",
    start: new Date(y, m, d + 7, 12, 0),
    allDay: true,
    className: "bg-green",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 4,
    title: "Meeting with Mary",
    start: new Date(y, m, d - 2),
    allDay: true,
    className: "bg-blue",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 5,
    title: "Winter Hackaton",
    start: new Date(y, m, d + 1, 19, 0),
    allDay: true,
    className: "bg-red",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 6,
    title: "Digital event",
    start: new Date(y, m, 21),
    allDay: true,
    className: "bg-warning",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 7,
    title: "Marketing event",
    start: new Date(y, m, 21),
    allDay: true,
    className: "bg-purple",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 8,
    title: "Dinner with Family",
    start: new Date(y, m, 19),
    allDay: true,
    className: "bg-red",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 9,
    title: "Black Friday",
    start: new Date(y, m, 23),
    allDay: true,
    className: "bg-blue",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },

  {
    id: 10,
    title: "Cyber Week",
    start: new Date(y, m, 2),
    allDay: true,
    className: "bg-yellow",
    description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

// ##############################
// // // data for populating the calendar in Widgest view
// #############################

const widgetEvents = [
  {
    title: "Lunch meeting",
    start: "2018-11-21",
    end: "2018-11-22",
    className: "bg-orange",
  },
  {
    title: "All day conference",
    start: new Date(y, m - 1, 28),
    allDay: true,
    className: "bg-green",
  },
  {
    title: "Meeting with Mary",
    start: new Date(y, m, 2),
    allDay: true,
    className: "bg-blue",
  },
  {
    title: "Winter Hackaton",
    start: new Date(y, m, 4),
    allDay: true,
    className: "bg-red",
  },
  {
    title: "Digital event",
    start: new Date(y, m, 8),
    end: new Date(y, m, 10),
    allDay: true,
    className: "bg-warning",
  },
  {
    title: "Marketing event",
    start: new Date(y, m, 11),
    allDay: true,
    className: "bg-purple",
  },
  {
    title: "Dinner with Family",
    start: new Date(y, m, 20),
    allDay: true,
    className: "bg-red",
  },
  {
    title: "Black Friday",
    start: new Date(y, m, 24),
    allDay: true,
    className: "bg-blue",
  },
  {
    title: "Cyber Week",
    start: new Date(y, m, 3),
    allDay: true,
    className: "bg-yellow",
  },
];

// ##############################
// // // data for populating the table in ReactTables view
// #############################

const dataTableMembers = [
  {
    id: "chestnut01",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Joined",
    active: true,
  },
  {
    id: "chestnut02",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Approved",
    active: true,
  },
  {
    id: "chestnut03",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Refuse",
    active: false,
  },
  {
    id: "chestnut04",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Approved",
    active: true,
  },
  {
    id: "chestnut05",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Waiting",
    active: false,
  },
  {
    id: "chestnut06",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Dormant",
    active: false,
  },
  {
    id: "chestnut07",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Refuse",
    active: false,
  },
  {
    id: "chestnut08",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Withdrawal",
    active: false,
  },
  {
    id: "chestnut09",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Other",
    active: false,
  },
  {
    id: "chestnut10",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Refuse",
    active: false,
  },
  {
    id: "chestnut11",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Refuse",
    active: false,
  },
  {
    id: "chestnut12",
    company_name: "chestnut",
    user_name: "chestnut",
    email: "chestnut777@chestnut.com",
    phone: "010-2222-3333",
    start_date: "2022/01/01",
    status: "Refuse",
    active: false,
  },
];

const dataTableSettlement = [
  {
    id: "001",
    month: "2022/01",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "002",
    month: "2022/02",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "003",
    month: "2022/03",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "004",
    month: "2022/04",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "005",
    month: "2022/05",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "006",
    month: "2022/06",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "007",
    month: "2022/07",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "008",
    month: "2022/08",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "009",
    month: "2022/09",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "010",
    month: "2022/10",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "011",
    month: "2022/11",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
  {
    id: "012",
    month: "2022/12",
    reservation_completed: "120,000",
    reserved_amount: "12,120,000,000",
    penalty_cancellation: "21,230",
    penalty_amount: "3,232,000,000",
    total_amount: "9,123,123,000",
  },
];

const dataTableSettlementCompleted = [
  {
    id: "001",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    product_amount: "0",
    customer_payment: "351,300",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "002",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    product_amount: "0",
    customer_payment: "351,300",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "003",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    product_amount: "0",
    customer_payment: "351,300",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "004",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    product_amount: "0",
    customer_payment: "351,300",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "005",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    product_amount: "0",
    customer_payment: "351,300",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
];

const dataTableSettlementCancellation = [
  {
    id: "001",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    uninsured_fee: "0",
    jejupass_payment: "0",
    product_amount: "0",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "002",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    uninsured_fee: "0",
    jejupass_payment: "0",
    product_amount: "0",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "003",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    uninsured_fee: "0",
    jejupass_payment: "0",
    product_amount: "0",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "004",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    uninsured_fee: "0",
    jejupass_payment: "0",
    product_amount: "0",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
  {
    id: "005",
    rental_date: "2022/02/01",
    reservation_person: "?????????",
    product_name: "K5 2??????(LPG)",
    rent: "351,300",
    insurance_fee: "0",
    uninsured_fee: "0",
    jejupass_payment: "0",
    product_amount: "0",
    fee: "0",
    company_payment: "0",
    remarks: ""
  },
];

const dataTableApiLog = [
  {
    id: "001",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "002",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "003",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "004",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "005",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "006",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "007",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "008",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "009",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "010",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "011",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
  {
    id: "012",
    company_name: "Chestnut",
    car_list: "3,214",
    car_detail: "3,214",
    car_reservation: "3,214",
    reservation_cancel: "3,214",
    reservation_detail: "3,214",
    reservation_inquiry: "3,214",
    company_list: "3,214",
    company_car_list: "3,214",
    check_rental_age_limit: "3,214",
    region_code_lookup_k: "3,214",
    region_code_lookup_a: "3,214",
  },
];

const dataTableAdmin = [
  {
    id: "chestnut01",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut02",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut03",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut04",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut05",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut06",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut07",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut08",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut09",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut10",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut11",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "chestnut12",
    company_name: "chestnut",
    user_name: "?????????",
    email: "chestnut777@chestnut.com",
    creation_date: "2022/01/01",
    active: true,
  },
];

const dataTableManagement = [
  {
    id: "01",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "02",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "03",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "04",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "05",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "06",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "07",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "08",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "09",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "10",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "11",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
  {
    id: "12",
    api_id: "carList",
    name: "????????????",
    category: "Jejupass_CarInforService",
    method: "GET",
    type: "Service API",
    format: "JSON",
    statistic: true,
  },
];

const dataTableNotice = [
  {
    id: "05",
    title: "[??????] ???????????????.",
    registrants: "?????????",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "04",
    title: "[??????] ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.",
    registrants: "?????????",
    creation_date: "2022/01/01",
    active: false,
  },
  {
    id: "03",
    title: "[??????] ???????????????.",
    registrants: "?????????",
    creation_date: "2022/01/01",
    active: false,
  },
  {
    id: "02",
    title: "[??????] ???????????????.",
    registrants: "?????????",
    creation_date: "2022/01/01",
    active: true,
  },
  {
    id: "01",
    title: "[??????] ???????????????.",
    registrants: "?????????",
    creation_date: "2022/01/01",
    active: true,
  },
];

const dataTableContactUs = [
  {
    id: "11",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: true,
  },
  {
    id: "10",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: true,
  },
  {
    id: "09",
    type: "API ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
  {
    id: "08",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: true,
  },
  {
    id: "07",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
  {
    id: "06",
    type: "API ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
  {
    id: "05",
    type: "API ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: true,
  },
  {
    id: "04",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
  {
    id: "03",
    type: "API ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
  {
    id: "02",
    type: "API ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: true,
  },
  {
    id: "01",
    type: "?????? ??????",
    title: "??????????????? ?????? ?????????.",
    company_name: "Chestnut",
    registrants: "?????????",
    created_date: "2022/01/01",
    answer: false,
  },
];

export { events, widgetEvents, dataTableSettlement, dataTableSettlementCompleted, dataTableSettlementCancellation, dataTableMembers, dataTableApiLog, dataTableAdmin, dataTableManagement, dataTableNotice, dataTableContactUs };
