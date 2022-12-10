const slider=document.querySelector(".main-slider");
const toggler_1=document.querySelector(".toggler-1");
const toggler_2=document.querySelector(".toggler-2");
const toggler_3=document.querySelector(".toggler-3");
const circle_on=document.querySelector(".circle-on");
const circle_off=document.querySelector(".circle-off");
const slide_header_1=document.querySelector(".slide-header-1");
const slide_header_2=document.querySelector(".slide-header-2");
const slide_header_3=document.querySelector(".slide-header-3");

toggler_1.addEventListener("click", function(){
    
toggler_1.classList.remove("circle-off");
toggler_1.classList.add("circle-on");
toggler_2.classList.remove("circle-on");
toggler_2.classList.add("circle-off");
toggler_3.classList.remove("circle-on");
toggler_3.classList.add("circle-off");
slider.classList.remove("backpic-slider-2");
slider.classList.remove("backpic-slider-3");
slider.classList.add("backpic-slider-1");

slide_header_1.classList.remove("slide-off");
slide_header_1.classList.add("slide-on");
slide_header_2.classList.remove("slide-on");
slide_header_2.classList.remove("slide-off");
slide_header_2.classList.add("slide-off");
slide_header_3.classList.remove("slide-on");
slide_header_3.classList.remove("slide-off");
slide_header_3.classList.add("slide-off");
});

toggler_2.addEventListener("click", function(){
    toggler_2.classList.remove("circle-off");
    toggler_2.classList.add("circle-on");
    toggler_1.classList.remove("circle-on");
    toggler_1.classList.add("circle-off");
    toggler_3.classList.remove("circle-on");
    toggler_3.classList.add("circle-off");
    slider.classList.remove("backpic-slider-1");
    slider.classList.remove("backpic-slider-3");
    slider.classList.add("backpic-slider-2");

    slide_header_2.classList.remove("slide-off");
    slide_header_2.classList.add("slide-on");
    slide_header_1.classList.remove("slide-on");
    slide_header_1.classList.remove("slide-off");
    slide_header_1.classList.add("slide-off");
    slide_header_3.classList.remove("slide-on");
    slide_header_3.classList.remove("slide-off");
    slide_header_3.classList.add("slide-off");
    });

    toggler_3.addEventListener("click", function(){
        toggler_3.classList.remove("circle-off");
        toggler_3.classList.add("circle-on");
        toggler_1.classList.remove("circle-on");
        toggler_1.classList.add("circle-off");
        toggler_2.classList.remove("circle-on");
        toggler_2.classList.add("circle-off");
        slider.classList.remove("backpic-slider-1");
        slider.classList.remove("backpic-slider-2");
        slider.classList.add("backpic-slider-3");

        slide_header_3.classList.remove("slide-off");
slide_header_3.classList.add("slide-on");
slide_header_2.classList.remove("slide-on");
slide_header_2.classList.remove("slide-off");
slide_header_2.classList.add("slide-off");
slide_header_1.classList.remove("slide-on");
slide_header_1.classList.remove("slide-off");
slide_header_1.classList.add("slide-off");

        });