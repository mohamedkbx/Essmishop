$('.show-filters').on('click',function(){

if($('.filter-list').is(':visible')){

    $('.filter-list').slideUp();
    $('.show-filters').text('Show Filters');

    
}else{
    $('.filter-list').slideDown();
    $('.show-filters').text('Hide Filters');
}
//دا هيمنع لما اضغط على عرض الفلاتر انو يرجعنى لاول الصفحة
return false;
})

$('.filter-list a').on('click',function(){
    let filter =$(this).attr('data-filter');

    console.log(filter);

    $('.card').hide();
    $(filter).show();

    $('.filter-list a').removeClass('active');
    $(this).addClass('active');


    return false
})




