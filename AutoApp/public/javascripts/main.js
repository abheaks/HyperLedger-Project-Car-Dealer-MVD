//swal Basic 
function swalBasic(data) {
    swal.fire({
        // toast: true,
        icon: `${data.icon}`,
        title: `${data.title}`,
        animation: true,
        position: 'center',
        showConfirmButton: true,
        footer: `${data.footer}`,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer)
            toast.addEventListener('mouseleave', swal.resumeTimer)
        }
    })
}


// manwrite function
function ManWriteData() {
    const vin = document.getElementById('vinNumber').value;
    const make = document.getElementById('carMake').value;
    const model = document.getElementById('carModel').value;
    const color = document.getElementById('carColour').value;
    const dom = document.getElementById('dom').value;
    const flag = document.getElementById('manName').value;
    if (vin.length==0||make.length==0||model.length==0||color.length==0||dom.length==0||flag.length==0) {
        const data = {
            title: "You might have missed something",
            footer: "Enter all mandatory fields to add a new car",
            icon: "warning"
        }
    swalBasic(data);
    } else {
        fetch('/manuwrite',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({VinNumb: vin, CarMake: make, CarModel: model, CarColor: color, DOM: dom, CarFlag: flag})
        })
        .then(function(response){
            if(response.status == 200) {
                const data = {
                    title: "Success",
                    footer: "Added a new car",
                    icon: "success"
                }
                swalBasic(data);
            } else {
                const data = {
                    title: `Car with Vin Number ${vin} already exists`,
                    footer: "Vin Number must be unique",
                    icon: "error"
                }
                swalBasic(data);
            }

        })
        .catch(function(error){
            const data = {
                title: "Error in processing Request",
                footer: "Something went wrong !",
                icon: "error"
            }
            swalBasic(data);
        })        
    }    
}

//manquery function
function ManQueryData() {
    const Qvin = document.getElementById('QueryVinNumbMan').value;

    if (Qvin.length==0) {
        const data = {
            title: "Enter a Valid Qvin Number",
            footer: "This is a mandatory field",
            icon: "warning"
        }
        swalBasic(data)  
    } else {
        fetch('/manuread',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({QVinNumb: Qvin})
        })
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function (Cardata){
            dataBuf = Cardata["Cardata"]
            swal.fire({
                // toast: true,
                icon: `success`,
                title: `Current status of car with Qvin ${Qvin} :`,
                animation: false,
                position: 'center',
                html: `<h3>${dataBuf}</h3>`,
                showConfirmButton: true,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', swal.stopTimer)
                    toast.addEventListener('mouseleave', swal.resumeTimer)
                }
            }) 
        })
        .catch(function(error){
            const data = {
                title: "Error in processing Request",
                footer: "Something went wrong !",
                icon: "error"
            }
            swalBasic(data);        
        })        
    }    

}