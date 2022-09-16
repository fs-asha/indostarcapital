$(document).ready(function() {
    $('[data-plugin="customselect"]').select2({closeOnSelect:false});
    // Default Datatable
    $('#basic-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "order": [[ 1, "asc" ]],
        "columnDefs": [ {
            "targets": 0,
            "orderable": false
        } ],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
    // var table = $('#table-history').DataTable( {
    //     "scrollY":"250px",
    //     "scrollCollapse":true,
    //     "paging":false
    // });
});
let selectedBrand='';
let selectedModel='';
let selectedVarient='';
let selectedAge='';
let seMList;
let seVList;
let brands = ["Maruti", "Hyundai", "BMW", "Ford", "Toyota", "Volkswagen"];
let modelsMaruti = ["Swift", "Swift Dzire Swift DzireSwift DzireSwift Dzire", "Alto", "Alto 800", "Alto K10", "Baleno"];
let varientMaruti = ["VXI", "VDI", "AMT ZDI", "AMT ZDI Plus", "AMT VDI", "AMT ZXI Plus", "LXI BSIV", "VXI AGS", "1.2 Zeta", "1.2 Alpha", "1.2 CVT Delta"];

let modelsHyundai = ["All", "i10", "i20", "Verna", "Xcent", "Creta"];
let varientHyundai = ["All", "Sportz", "Magna 1.2 iTech SE", "Sportz 1.1L", "1.2 CRDi E", "1.1 CRDi Base", "1.6 VTVT SX Plus", "1.6 VTVT E Plus", "1.6 CRDi SX"];

let modelsBMW = ["All", "X1", "3 series", "X5", "X3", "Z4"];
let varientBMW = ["All", "sDrive 18i", "320d Sedan", "xDrive 30d", "xDrive 20d", "35i"];

let modelsFord = ["All", "EcoSport", "Figo", "Endeavour", "Fiesta", "Mustang"];
let varientFord = ["All", "1.5 Diesel Titanium BSIV", "Diesel Titanium", "3.2 Titanium AT 4X4", "1.6 Zxi ABS", "V8"];

let modelsToyota = ["Innova", "Fortuner", "Etios", "Yaris", "Qualis"];
let varientToyota = [];

let modelsVolkswagen =["Polo", "Vento", "Jetta", "Ameo", "Tiguan"];
let varientVolkswagen = [];

let brand_dd = $("#carBrands");
let model_dd = $("#carModels");
let varient_dd = $("#carVarient");
let age_dd = $("#carAge");

brand_dd.change(function() {
    selectedBrand = $('option:selected', this).text();
    switch(selectedBrand){
        case "Maruti":
            seMList = modelsMaruti;
            seVList = varientMaruti;
            break;
        case "Hyundai":
            seMList = modelsHyundai;
            seVList = varientHyundai;
            break;
        case "BMW":
            seMList = modelsBMW;
            seVList = varientBMW;
            break;
        case "Ford":
            seMList = modelsFord;
            seVList = varientFord;
            break;
        case "Toyota":
            seMList = modelsToyota;
            seVList = varientToyota;
            break;
        case "Volkswagen":
            seMList = modelsVolkswagen;
            seVList = varientVolkswagen;
            break;
        default:
            seMList = [], seVList = [];

    }
    let optStr="";
        optStr="<option>-</option>";
    for (let i = 0; i < seMList.length; i++) {
        optStr += "<option>"+seMList[i]+"</option>";
    }
    model_dd.html(optStr);
    model_dd.addClass('animate-pulse-send');
    setTimeout(()=>{model_dd.removeClass('animate-pulse-send')},3000);

    let optStr2="";
        optStr2="<option>-</option>";
    for (let j = 0; j < seVList.length; j++) {
        optStr2 += "<option>"+seVList[j]+"</option>";
    }
    varient_dd.html(optStr2);
    varient_dd.addClass('animate-pulse-send');
    setTimeout(()=>{varient_dd.removeClass('animate-pulse-send')},3000);

    // Datatable search
    oTable = $('#basic-datatable').DataTable();   //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
    oTable.search($(this).val()).draw() ;
});

varient_dd.change(function() {
    getAgeData();
});

function getAgeData(){
    let optStr="";
        optStr="<option>-</option>";
        optStr+="<option>All</option>";
    for (let i = 0; i < 26; i++) {
        optStr += "<option>"+i+"</option>";
    }    

    age_dd.html(optStr);
    age_dd.addClass('animate-pulse-send');
    setTimeout(()=>{age_dd.removeClass('animate-pulse-send')},3000);
}

let valores = (function () {
    var valor = [];
    $('input.form-check-input[type=checkbox]').each(function () {
        if (this.checked)
            valor.push($(this).val());
    });
    return valor;

})();

$('#addUpdateValue').click(function (e) {	
    console.log(valores);
    $('#addUpdateModal').modal('show');
});

function addUpdateClick(){
    console.log('Edit clicked!!');
    $('#modelDetails').hide();
    $('#addUpdateModal').modal('show');
}

function showAddCF(){
    console.log('Add clicked!!');
    $('#addModal').modal('show');
}

function showHistory(){
    console.log('clicked');
    $('#historyModal').modal('show');
}

let text1 = ' | All | All | 5yrs';
let modelDetails = $('#modelDetails');
let modelDetailsText = $('#modelDetails h4');
let ageInput = $('#ageInput');
$('#goButton').click(function (e) {
    // card-makeList
    var target = $('.card-makeList');
    if (target.length)
    {
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top-70}, 500);
        return false;
    }
    // modelDetails.hide();
    // ageInput.hide();
    // if(selectedBrand!=='' && selectedBrand !=='-'){
    //     modelDetailsText.html(selectedBrand + text1);
    //     modelDetails.show();
    // } else {
    //     ageInput.show();
    // }
    // $('#addUpdateModal').modal('show');
});

$('#showHistoryId').click(function (e) {	
    console.log(e);
    $('#historyModal').modal('show');
});

var rad = document.frmCategory.rd_category;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        // (prev) ? console.log(prev.value): null;
        if (this !== prev) {prev = this;}
        console.log(this.value)
        if(this.value){
            $('#mainFilters').show();
        } else {
            $('#mainFilters').hide();
        }
    });
}