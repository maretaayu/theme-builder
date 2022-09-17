let startMonthDate;
let endMonthDate;

function isDeadline(expired){
  let today = new Date();
  return today < expired;
}

function startOfMonth(){
  this.startMonthDate =  moment().startOf('month').format('MMMM DD YYYY, h:mm:ss');
  console.log(this.startMonthDate);
  return this.startMonthDate;
}

function endOfMonth(){
  this.endMonthDate =  moment().endOf('month').format('MMMM DD YYYY, 23:59:59');
  console.log(this.endMonthDate);
  return this.endMonthDate;
}

const $listPromo = [
  {
    "promo":
    [
       {
             "id": 1,
             "product": "free",
             "offer": "tailwind",
             "title": "Dashboard Template",
             "description": "Hello world!",
             "banner": "https://mareta.tech/wp-content/uploads/2022/08/proofile-card-1.png",
            
             "link": "#",
             "isButton": true,
             "isActive": isDeadline(new Date("February 28, 2023 23:59:59")),
          },{
             "id": 2,
             "product": "premium",
             "offer": "bootstrap",
             "title": "Landing Page",
             "description": "This is a new template",
             "banner": "https://mareta.tech/wp-content/uploads/2022/08/proofile-card-1.png",
            
             "link": "#",
             "isButton": true,
             "isActive": isDeadline(new Date("February 28, 2023 23:59:59")),
          },{
            "id": 3,
            "product": "premium",
            "offer": "bootstrap",
            "title": "Landing Page",
            "description": "This is a new template",
            "banner": "https://mareta.tech/wp-content/uploads/2022/08/proofile-card-1.png",
           
            "link": "#",
            "isButton": true,
            "isActive": isDeadline(new Date("February 28, 2023 23:59:59")),
         },
         {
          "id": 4,
          "product": "premium",
          "offer": "bootstrap",
          "title": "Landing Page",
          "description": "This is a new template",
          "banner": "https://mareta.tech/wp-content/uploads/2022/08/proofile-card-1.png",
         
          "link": "#",
          "isButton": true,
          "isActive": isDeadline(new Date("February 28, 2023 23:59:59")),
       },
          
      
    ],
  }
];