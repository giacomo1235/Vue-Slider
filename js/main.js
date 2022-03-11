const app = new Vue(
    {
        el: '#root',
        data:{
            myInterval: setInterval(this.next, 3000),
            activeIndex: 0,
            arrSlides: [
                {
                    title: 'Svezia',
                    img: "img/01.jpg",
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis. '
                },
                {
                    title: 'Svizzera',
                    img: "img/02.jpg",
                    text: 'Lorem ipsum '
                },
                {
                    title: 'Gran Bretagna',
                    img: "img/03.jpg",
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
                },
                {
                    title: 'Germania',
                    img: "img/04.jpg",
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, '
                },
                {
                    title: 'Chieti',
                    img: "img/05.jpg",
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, '
                },
            ],
        },
        methods: {
            
            next() {
                if(this.activeIndex == this.arrSlides.length - 1) {
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++
                }
            },
            previous() {
                if (this.activeIndex == 0) {
                    this.activeIndex = this.arrSlides.length - 1;
                } else {
                    this.activeIndex--;
                }
            },
            stop() {
                clearInterval(this.myInterval)
                console.log('prova')
            }
        },
        created() {
           setInterval(this.next, 3000);
        }
    }
);