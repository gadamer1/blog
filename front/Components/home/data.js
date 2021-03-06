export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  headerTagline: [
    //Line 1 For Header
    "안녕하세요 👋 ",
    //Line 2 For Header
    "공부 블로그 ",
    //Line 3 For Header
    "gadamer1 입니다"
  ],

  // Add Your About Text Here
  abouttext: "어떤 분야든지 흥미롭게 공부중인 학생입니다.",
  aboutImage:
    "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "프론트엔드 개발자", //Project Title - Add Your Project Title Here
      service: "프론트 엔드", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      //Project URL - Add Your Project Url Here
      url: "#"
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "백엔드 개발자",
      service: "Website Development",
      imageSrc:
        "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "#"
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "AI",
      service: "ai",
      imageSrc:
        "https://images.pexels.com/photos/319968/pexels-photo-319968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      url: "https://www.kaggle.com/fastfastfastfast"
    }

    /*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/gadamer1" }
  ]
};
