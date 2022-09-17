jQuery(document).ready(function($){
    
    $(window).add("body").scroll(function(){
      if ($(this).scrollTop() > 2500) {
        $('.scrollToTop').fadeOut();
      }
      else {
        if ($(this).scrollTop() > 300) {
          $('.scrollToTop').fadeIn();
        } 
      }
    });
    });
    
    
    var topbarHeight = $('.header-shadow').height();
    var sidebar = $('#sidebar').offset().top;
    var sidebarHeight = $('#sidebar').height();
    var bottomOffset = $('.start-project').offset().top;
    
    var firstFixed = topbarHeight + sidebar - 200;
    var secondFixed = bottomOffset - (topbarHeight + sidebarHeight) - 29;
    
    // 1. css in js
    $(window).scroll(function() {
    if ($(window).scrollTop() > firstFixed) {
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      function myFunction(x) {
        if (x.matches) { // If media query matches
        } else {
          $(document).ready(function(){
            $(window).scroll(function () {
    
              $('#sidebar').css({
                'position':'fixed',
                'top':'7rem',
                'padding':'2px', 
                'transition': 'background-color 0.5s ease',
              });
            });
          });
        }
      }
    
    } else {
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      function myFunction(x) {
        if (x.matches) { // If media query matches
        } else {
          $(document).ready(function(){
            $(window).scroll(function () {
    
              $('#sidebar').css({
                'position':'relative',
                'top':'0',
                //       'background-color': '#333',
                'transition': 'background-color 0.5s ease',
              });
            });
          });
        }
      }
    
    }
    if ($(window).scrollTop() > secondFixed) {
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      function myFunction(x) {
        if (x.matches) { // If media query matches
        } else {
          $(document).ready(function(){
            $(window).scroll(function () {
    $('#sidebar').css({
        'position':'fixed',
        'top':'7rem',
        'transition': 'background-color 0.5s ease',
      });
            });
          });
        }
      }
     
    }
    });
    
    
    let productList = [
    { id: "1", name: 'products', value: "free", title: "Free" },
    { id: "2", name: 'products', value: "premium", title: "Premium" }
    ]
    
    let offerList = [
    {name: 'offers', value: "bootstrap", title: "Bootstrap" },
    {name: 'offers', value: "tailwind", title: "Tailwind" },
    {name: 'offers', value: "purecss", title: "Pure CSS" },
    ]
    
    let listData = [];
    let listChunk = [];
    let page = 0;
    
    let checked = {};
    
    getChecked('products');
    getChecked('offers');
    
    function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
    }
    
    function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
      console.log(checked[name]);
      return el.value;
    });
    }
    
    function setVisibility() {
    $('.item').toArray().map(function (el) {
      let products = checked.products.length ? _.intersection(Array.from(el.classList), checked.products).length : true;
      let offers = checked.offers.length ? _.intersection(Array.from(el.classList), checked.offers).length : true;
      if (products && offers) {
        el.style.display = 'block';
        showNoData();
      } else {
        el.style.display = 'none';
        showNoData();
        console.log(this.listData);
      }
    });
    }
    
    function formatDate(date){
    let dateFormat = moment(date).format('LL');
    return dateFormat;
    }
    
    function hideCardPromo(isActive, today, expired){
    isActive = today < expired;
    return isActive;
    }
    
    function showData(result) {
    let today = new Date(),
        startDate = formatDate(result.start_date),
        endDate = formatDate(result.end_date);
    let html_template = $(`<div class="item ${result.offer} ${result.product}">
    <img src="${result.banner}">
    <div class="detail">
    <div class="detail__info">
    <h4>${result.title}</h4>
    <p>${result.description}</p>
    </div>
    <button class="secondary"><a href="${result.link}">View Detail</a></button>
    </div>
    </div>`);
    $('#popular-theme').append(html_template);
    }
    
    function showNoData(){
    if($('#popular-theme').children(':hidden').length === $('.item').length){
      $('.no-data').addClass('img-no-data')
        .text('Template tidak ditemukan. Coba gunakan kata kunci lain')
        .css("color", "grey")
        .addClass('txt-no-data');
      $('#show-more').css('display', 'none');
    } else {
      $('.no-data').removeClass('img-no-data')
        .text('');
      $('#show-more').css('display', 'unset');
    }
    }
    
    function showCheckbox(checkboxId, result){
    let container = $(`#checkbox-${checkboxId}`);
    let el = $('<div>');
    let checkbox = $('<input>')
    .attr('type', 'checkbox')
    .attr('name', result.name)
    .attr('value', result.value)
    .change(toggleCheckbox);
    let label = $('<label>')
    .append(checkbox)
    .append(" " + result.title);
    
    el.append(label);
    container.append(el);
    }
    
    function initData() {
    $listPromo.forEach( res => {
      this.listData = res.promo;
      this.listData = _.orderBy(this.listData, ['id'], ['desc']);
      this.listData = _.filter(this.listData, ['isActive', true]);
      this.listData.forEach(result => {
        showData(result);
      });
    })
    }
    
    function showProductCheckbox() {
    productList.forEach(res => {
      showCheckbox('product', res);
    });
    }
    
    function showOfferCheckbox() {
    offerList.forEach(res => {
      showCheckbox('offer', res);
    });
    }
    
    let init = $(function () {
    startOfMonth();
    endOfMonth();
    initData();
    showProductCheckbox();
    showOfferCheckbox()
    });