//== Class definition
const SweetAlert2Demo = (() => {

    //== Demos
    let initDemos = () => {
        //== Sweetalert Demo 1
        $('#m_sweetalert_demo_1').click(function (e) {
            Swal.fire("Hello world!");
        });

        //== Sweetalert Demo 2
        $('#m_sweetalert_demo_2').click((e) => {
            //swal("Here's the title!", "...and here's the text!");
            swal.fire({
                title: "Titulo!",
                text: "...and here's the text!",
                imageUrl: "https://dl.dropbox.com/s/qe98k2xvmqivxwz/google_apps.png",
                icon: 'error'
            })
        });

        //== Sweetalert Demo 3
        $('#m_sweetalert_demo_3_1').click((e) => {
            //swal("Good job!", "You clicked the button!", "warning");
            swal.fire({
                title: "Good job!",
                text: "You clicked the button warning!",
                icon: "warning",

            })
        });

        $('#m_sweetalert_demo_3_2').click((e) => {
            swal.fire("Good job!", "You clicked the button!", "error");
        });

        $('#m_sweetalert_demo_3_3').click((e) => {
            swal.fire("Good job!", "You clicked the button!", "success");
        });

        $('#m_sweetalert_demo_3_4').click((e) => {
            swal.fire("Good job!", "You clicked the button!", "info");
        });

        $('#m_sweetalert_demo_3_5').click((e) => {
            swal.fire("Good job!", "You clicked the button!", "question");
        });

        //== Sweetalert Demo 4
        $('#m_sweetalert_demo_4').click(() => {
            /* swal({
                title: "Cerrar!",
                text: "You clicked the button!",
                icon: "success",
                button: {
                    text: "Cerrar!",
                    className: "buttonstyle"
                },
                className: "swal-footer"
                //footer: '<a href="">Footer?</a>'
                //confirmButtonClass: "btn btn-focus m-btn m-btn--pill m-btn--air"
            }); */
            swal.fire({
                title: "Quieres Cerrar!",
                text: "No podras deshacer este paso...",
                //type: 'warning',
                icon: "info",
                html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                cancelButtonColor: "#BB7C44",
                cancelButtonText: "Mmm... mejor no",
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Adelante',
                confirmButtonColor: "#DD6B55",
                allowOutsideClick: false,
                allowEscapeKey: false,
                //closeOnConfirm: false
                footer: '<a href="">Why do I have this issue?</a>'
            }, () => {
                swal.fire("Hecho!",
                    "Acabas de vender tu alma al diablo.",
                    "success");
            })
        });

        //== Sweetalert Demo 5
        $('#m_sweetalert_demo_5').click((e) => {
            swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                buttons: {
                    cancel: true,
                    New: {
                        text: "<i>I am new button</i>",
                        value: "new button data",
                        visibile: true,/* 
                        dangerMode: true */
                        //icon: warning
                    },
                    New2: {
                        text: "New2",
                        value: "new button data",
                        visibile: true,
                        className: "buttonstyle",
                    },
                }
                /*  confirmButtonText: "<span><i class='la la-headphones'></i><span>I am game!</span></span>",
                 confirmButtonClass: "btn btn-danger m-btn m-btn--pill m-btn--air m-btn--icon",
 
                 showCancelButton: true,
                 cancelButtonText: "<span><i class='la la-thumbs-down'></i><span>No, thanks</span></span>",
                 cancelButtonClass: "btn btn-secondary m-btn m-btn--pill m-btn--icon" */
            });
        });

        $('#m_sweetalert_demo_6').click((e) => {
            swal.fire({
                position: 'top-right',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        });

        $('#m_sweetalert_demo_7').click((e) => {
            swal.fire({
                title: 'jQuery HTML example',
                html: $('<div>')
                    .addClass('some-class')
                    .text('jQuery is everywhere.'),
                animation: false,
                customClass: 'animated tada'
            })
        });

        $('#m_sweetalert_demo_8').click((e) => {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_9').click((e) => {
            swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    // result.dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                } else if (result.dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_10').click((e) => {
            swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            });
        });

        $('#m_sweetalert_demo_11').click((e) => {
            swal.fire({
                title: 'Auto close alert!',
                text: 'I will close in 5 seconds.',
                timer: 5000,
                onOpen: () => {
                    swal.showLoading()
                }
            }).then((result) => {
                if (result.dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            })
        });
    };

    return {
        //== Init
        init: initDemos

    };
})();

